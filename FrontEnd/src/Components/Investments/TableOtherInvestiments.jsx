import { useInvestment } from "../../Context/InvestmentsContext";
import { useState, useEffect } from 'react';

const TableOtherInvestiments = () => {
  const { labelValueMoney, labelValueMonth } = useInvestment();

  const [calculatedValueCDB, setCalculatedValueCDB] = useState(0);
  const [calculatedValueSavings, setCalculatedValueSavings] = useState(0);
  const [calculatedValueLCI, setCalculatedValueLCI] = useState(0);
  const [calculatedValueCRI, setCalculatedValueCRI] = useState(0);

  const referentialTaxCDB = 0.10; // 10% ao ano
  const referentialTaxLCI = 0.09; // 9% ao ano
  const referentialTaxCRI = 0.12; // 12% ao ano
  const referentialTax = 0.005;   // Poupança mensal simples

  const formatCurrency = (value) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const calculateSavingsInvestment = () => {
    try {
      setCalculatedValueSavings(labelValueMoney * (1 + referentialTax * labelValueMonth));
    } catch (error) {
      console.log("Erro ao calcular a poupança:", error);
    }
  };

  const calculateValueCDBInvestments = () => {
    try {
      const taxPerMonth = referentialTaxCDB / 12;
      let valorComJuros = labelValueMoney * Math.pow(1 + taxPerMonth, labelValueMonth);
      let lucro = valorComJuros - labelValueMoney;
      let imposto = 0;

      if (labelValueMonth <= 6) imposto = lucro * 0.225;
      else if (labelValueMonth <= 12) imposto = lucro * 0.20;
      else if (labelValueMonth <= 24) imposto = lucro * 0.175;
      else imposto = lucro * 0.15;

      setCalculatedValueCDB(valorComJuros - imposto);
    } catch (error) {
      console.error("Erro ao calcular o CDB:", error);
    }
  };

  const calculateValueLCIInvestments = () => {
    try {
      const taxPerMonthLCI = referentialTaxLCI / 12;
      const valorFinalLCI = labelValueMoney * Math.pow(1 + taxPerMonthLCI, labelValueMonth);
      setCalculatedValueLCI(valorFinalLCI);
    } catch (error) {
      console.log("Erro ao calcular o LCI:", error);
    }
  };

  const calculateValueCRIInvestments = () => {
    try {
      const taxPerMonthCRI = referentialTaxCRI / 12;
      const valorFinalCRI = labelValueMoney * Math.pow(1 + taxPerMonthCRI, labelValueMonth);
      setCalculatedValueCRI(valorFinalCRI);
    } catch (error) {
      console.log("Erro ao calcular o CRI:", error);
    }
  };

  useEffect(() => {
    calculateSavingsInvestment();
    calculateValueCDBInvestments();
    calculateValueLCIInvestments();
    calculateValueCRIInvestments();
  }, [labelValueMoney, labelValueMonth]);

  return (
    <div className="w-full bg-[#111111] rounded-lg p-4 shadow-md">
      <table className="w-full text-gray-300 text-sm">
        <thead>
          <tr className="text-amber-500 uppercase tracking-wide border-b border-amber-600">
            <th className="py-2 text-left">Investimento</th>
            <th className="py-2 text-right">Poupança</th>
            <th className="py-2 text-right">Valor Final</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-[#222222] transition">
            <td className="py-2 max-w-[250px] pr-2">CDB (Certificado de Depósito Bancário)</td>
            <td className="py-2 text-right">{formatCurrency(calculatedValueSavings)}</td>
            <td className="py-2 text-right">{formatCurrency(calculatedValueCDB)}</td>
          </tr>
          <tr className="hover:bg-[#222222] transition">
            <td className="py-2 max-w-[250px] pr-2">LCI (Letra de Crédito Imobiliário)</td>
            <td className="py-2 text-right">{formatCurrency(calculatedValueSavings)}</td>
            <td className="py-2 text-right">{formatCurrency(calculatedValueLCI)}</td>
          </tr>
          <tr className="hover:bg-[#222222] transition">
            <td className="py-2 max-w-[250px] pr-2">CRI (Certificado de Recebíveis Imobiliários)</td>
            <td className="py-2 text-right">{formatCurrency(calculatedValueSavings)}</td>
            <td className="py-2 text-right">{formatCurrency(calculatedValueCRI)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableOtherInvestiments;
