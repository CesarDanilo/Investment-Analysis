import { useEffect, useState } from "react";
import ApexChart from "./graphic";
import { useInvestment } from "../../Context/InvestmentsContext";

const ValuesSlideBar = () => {
    const { labelValueMoney, setLabelValueMoney, labelValueMonth, setLabelValueMonth } = useInvestment();

    const referentialTax = 0.005; // Taxa da poupança
    const referentialTaxTesouroDireto = 13.75; // Taxa anual do Tesouro Direto

    const [calculatedValueSavings, setCalculatedValueSavings] = useState(0);
    const [calculatedValueSavingsTesouroDireto, setCalculatedValueSavingsTesouroDireto] = useState(0);

    const calculateSavingsInvestment = () => {
        try {
            setCalculatedValueSavings(labelValueMoney * (1 + referentialTax * labelValueMonth));
        } catch (error) {
            console.log("Erro ao calcular poupança: ", error);
        }
    };

    const calculateSavingsInvestmentTesouroDireto = () => {
        try {
            let taxaMensal = (referentialTaxTesouroDireto / 12) / 100;
            let valorComJuros = labelValueMoney * Math.pow(1 + taxaMensal, labelValueMonth);
            let lucro = valorComJuros - labelValueMoney;

            let imposto = 0;
            if (labelValueMonth <= 6) {
                imposto = lucro * 0.225;
            } else {
                imposto = lucro * 0.20;
            }

            let valorFinal = valorComJuros - imposto;
            setCalculatedValueSavingsTesouroDireto(valorFinal);
        } catch (error) {
            console.log("Erro ao calcular Tesouro Direto: ", error);
        }
    };

    useEffect(() => {
        calculateSavingsInvestment();
        calculateSavingsInvestmentTesouroDireto();
    }, [labelValueMoney, labelValueMonth]);

    const formatCurrency = (value) =>
        `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const handleInputChange = (e) => {
        let value = Number(e.target.value);
        if (isNaN(value) || value < 0) value = 0;
        if (value > 10000) value = 10000; // mesmo limite do slider
        setLabelValueMoney(value);
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 px-4 sm:px-6 md:px-8">
            {/* Controle */}
            <div className="flex flex-col w-full sm:w-[350px] md:w-[380px] h-auto sm:h-[280px] items-center justify-center bg-[#0D0D0D]/90 backdrop-blur-lg rounded-xl p-4 shadow-md">
                <h3 className="text-[#B6B6B6] text-base mb-1 font-medium">
                    Valor para investir
                </h3>
                <input
                    type="number"
                    min="0"
                    max="10000"
                    step="100"
                    value={labelValueMoney}
                    onChange={handleInputChange}
                    placeholder="Digite o valor"
                    className="
                        w-[90%] mb-3 px-3 py-1 rounded-md 
                        bg-[#1A1A1A] border border-gray-700 
                        text-gray-200 placeholder:text-gray-500
                        focus:outline-none focus:ring-1 focus:ring-amber-600
                        transition
                    "
                />
                <h3 className="text-[#B6B6B6] text-base mb-1 font-medium">
                    Tenho {formatCurrency(labelValueMoney)}
                </h3>
                <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={labelValueMoney}
                    onChange={(e) => setLabelValueMoney(Number(e.target.value))}
                    className="w-[90%] h-1 bg-[#B6B6B6] rounded-full appearance-none outline-none accent-[#B6B6B6] 
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 
                               [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full 
                               [&::-webkit-slider-thumb]:bg-amber-600"
                />
                <h3 className="text-[#B6B6B6] text-base mt-3 mb-1 font-medium">
                    Aplicar por {labelValueMonth} {labelValueMonth > 1 ? "meses" : "mês"}
                </h3>
                <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={labelValueMonth}
                    onChange={(e) => setLabelValueMonth(Number(e.target.value))}
                    className="w-[90%] h-1 bg-[#B6B6B6] rounded-full appearance-none outline-none accent-[#B6B6B6] 
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 
                               [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full 
                               [&::-webkit-slider-thumb]:bg-amber-600"
                />
            </div>

            {/* Gráfico */}
            <div className="flex w-full sm:w-[350px] md:w-[380px] h-auto sm:h-[280px] items-center justify-center bg-[#0D0D0D]/90 backdrop-blur-lg rounded-xl p-4 shadow-md">
                <ApexChart
                    calculatedValueSavings={calculatedValueSavings}
                    labelValueMoney={labelValueMoney}
                    calculatedValueSavingsTesouroDireto={calculatedValueSavingsTesouroDireto}
                />
            </div>
        </div>
    );
};

export default ValuesSlideBar;
