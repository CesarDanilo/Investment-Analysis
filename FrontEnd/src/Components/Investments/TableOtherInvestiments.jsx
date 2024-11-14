import { useInvestment } from "../../Context/InvestmentsContext";
import { useState, useEffect } from 'react';

const TableOtherInvestiments = () => {
    const { labelValueMoney, setLabelValueMoney, labelValueMonth, setLabelValueMonth } = useInvestment();
    const [calculatedValueCDB, setCalculatedValueCDB] = useState(0);
    const [calculatedValueSavings, setCalculatedValueSavings] = useState(0);
    const [calculatedValueLCI, setCalculatedValueLCI] = useState(0); // Novo estado para LCI
    const referentialTaxCDB = 10;
    const referentialTaxLCI = 0.09; // Suponha uma taxa de 9% ao ano para o LCI

    const calculateSavingsInvestment = () => {
        try {
            setCalculatedValueSavings(labelValueMoney * (1 + referentialTaxCDB * labelValueMonth));
        } catch (error) {
            console.log("Não foi possível fazer o cálculo. [erro]: ", error);
        }
    };

    const calculateValueCDBInvestments = () => {
        try {
            const taxPerMonth = (referentialTaxCDB / 100) / 12;
            let valorComJuros = labelValueMoney * Math.pow(1 + taxPerMonth, labelValueMonth);
            let lucro = valorComJuros - labelValueMoney;
            let imposto = 0;

            if (labelValueMonth <= 6) {
                imposto = lucro * 0.225;
            } else if (labelValueMonth <= 12) {
                imposto = lucro * 0.20;
            } else if (labelValueMonth <= 24) {
                imposto = lucro * 0.175;
            } else {
                imposto = lucro * 0.15;
            }

            const valorFinal = valorComJuros - imposto;
            setCalculatedValueCDB(valorFinal);
        } catch (error) {
            console.error("Erro ao calcular o valor do CDB: ", error);
        }
    };

    const calculateValueLCIInvestments = () => {
        try {
            const taxPerMonthLCI = (referentialTaxLCI / 12);
            const valorFinalLCI = labelValueMoney * Math.pow(1 + taxPerMonthLCI, labelValueMonth);
            setCalculatedValueLCI(valorFinalLCI);
        } catch (error) {
            console.log("Erro ao calcular o valor do LCI. [Erro]: ", error);
        }
    };

    useEffect(() => {
        calculateSavingsInvestment();
        calculateValueCDBInvestments();
        calculateValueLCIInvestments(); // Chamando o cálculo do LCI
    }, [labelValueMoney, labelValueMonth]);

    return (
        <table className="table-auto bg-[#000000]/30 backdrop-blur-md shadow-lg text-gray-200 w-full text-left rounded-lg">
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
                <tr className="hover:bg-[#000000]/20 transition-colors rounded-lg">
                    <td className="px-4 py-2 ">LCI (Letra de Crédito Imobiliário)</td>
                    <td className="px-4 py-2 ">R${calculatedValueSavings}</td>
                    <td className="px-4 py-2 ">R${calculatedValueLCI.toFixed(2)}</td>
                </tr>
                <tr className="hover:bg-[#000000]/20 transition-colors rounded-lg">
                    <td className="px-4 py-2 ">CRI (Certificado de Recebíveis Imobiliários)</td>
                    <td className="px-4 py-2 ">R$00.000</td>
                    <td className="px-4 py-2 ">R$00.000</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableOtherInvestiments;
