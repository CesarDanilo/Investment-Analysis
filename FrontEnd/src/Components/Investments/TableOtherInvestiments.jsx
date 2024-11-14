import { useInvestment } from "../../Context/InvestmentsContext";
import { useState, useEffect } from 'react';

const TableOtherInvestiments = () => {
    const { labelValueMoney, setLabelValueMoney, labelValueMonth, setLabelValueMonth } = useInvestment();
    const [calculatedValueCDB, setCalculatedValueCDB] = useState(0);
    const [calculatedValueSavings, setCalculatedValueSavings] = useState(0);
    const referentialTaxCDB = 10;

    const calculateSavingsInvestment = () => {
        try {
            setCalculatedValueSavings(labelValueMoney * (1 + referentialTax * labelValueMonth));
        } catch (error) {
            console.log("Não foi possível fazer o cálculo. [erro]: ", error);
        }
    };

    const calculateValueCDBInvestments = () => {
        try {
            // Convertendo a taxa de juros anual para taxa mensal
            const taxPerMonth = (referentialTaxCDB / 100) / 12; // 10% ao ano / 12 meses = taxa mensal

            // Calculando o valor do CDB com juros compostos
            let valorComJuros = labelValueMoney * Math.pow(1 + taxPerMonth, labelValueMonth);

            // Calculando o lucro
            let lucro = valorComJuros - labelValueMoney;

            // Imposto de Renda (tabela regressiva)
            let imposto = 0;
            if (labelValueMonth <= 6) {
                imposto = lucro * 0.225; // 22,5% de IR para investimentos até 6 meses
            } else if (labelValueMonth <= 12) {
                imposto = lucro * 0.20; // 20% de IR para investimentos de 6 a 12 meses
            } else if (labelValueMonth <= 24) {
                imposto = lucro * 0.175; // 17,5% de IR para investimentos de 12 a 24 meses
            } else {
                imposto = lucro * 0.15; // 15% de IR para investimentos acima de 24 meses
            }

            // Valor final após o imposto de renda
            const valorFinal = valorComJuros - imposto;

            // Atualizando o estado
            setCalculatedValueCDB(valorFinal);
        } catch (error) {
            console.error("Erro ao calcular o valor do CDB: ", error);
        }
    }

    const calculateValueLCIInvestments = () => {

    }

    useEffect(() => {
        calculateSavingsInvestment();
        calculateValueCDBInvestments();
    }, [labelValueMoney, labelValueMonth]);

    return (
        <table className="table-auto bg-[#000000]/30 backdrop-blur-md  shadow-lg text-gray-200 w-full text-left rounded-lg">
            <thead className="rounded-lg">
                <tr className="bg-[#000000]/20 rounded-lg">
                    <th className="px-4 py-2 font-semibold text-amber-600">Tipos de Investimentos</th>
                    <th className="px-4 py-2 font-semibold text-amber-600">Poupança</th>
                    <th className="px-4 py-2 font-semibold text-amber-600">Investimento</th>
                </tr>
            </thead>
            <tbody className="rounded-lg">
                <tr className="hover:bg-[#000000]/20 transition-colors rounded-lg">
                    <td className="px-4 py-2">CDB (Certificado de Depósito Bancário)</td>
                    <td className="px-4 py-2">R${calculatedValueSavings}</td>
                    <td className="px-4 py-2">R${calculatedValueCDB.toFixed(2)}</td>
                </tr>
                <tr className="hover:bg-[#000000]/20 transition-colors rounded-lg" >
                    <td className="px-4 py-2 ">LCI (Letra de Crédito Imobiliário)</td>
                    <td className="px-4 py-2 ">R$00.000</td>
                    <td className="px-4 py-2 ">R$00.000</td>
                </tr>
                <tr className="hover:bg-[#000000]/20 transition-colors rounded-lg">
                    <td className="px-4 py-2 ">CRI (Certificado de Recebíveis Imobiliários)</td>
                    <td className="px-4 py-2 ">R$00.000</td>
                    <td className="px-4 py-2 ">R$00.000</td>
                </tr>
            </tbody>
        </table>

    )
}

export default TableOtherInvestiments;