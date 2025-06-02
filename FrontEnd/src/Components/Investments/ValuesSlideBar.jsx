import { useEffect, useState } from "react";
import ApexChart from "./graphic";
import { useInvestment } from "../../Context/InvestmentsContext";

const ValuesSlideBar = () => {
    const { labelValueMoney, setLabelValueMoney, labelValueMonth, setLabelValueMonth } = useInvestment();

    const referentialTax = 0.005; // Taxa da poupança
    const referentialTaxTesouroDireto = 13.75; // Taxa anual do Tesouro Direto

    const [calculatedValueSavings, setCalculatedValueSavings] = useState(0);
    const [calculatedValueSavingsTesouroDireto, setCalculatedValueSavingsTesouroDireto] = useState(0);

    // Função de cálculo da poupança
    const calculateSavingsInvestment = () => {
        try {
            setCalculatedValueSavings(labelValueMoney * (1 + referentialTax * labelValueMonth));
        } catch (error) {
            console.log("Erro ao calcular poupança: ", error);
        }
    };

    // Função de cálculo do Tesouro Direto
    const calculateSavingsInvestmentTesouroDireto = () => {
        try {
            let taxaMensal = (referentialTaxTesouroDireto / 12) / 100;
            let valorComJuros = labelValueMoney * Math.pow(1 + taxaMensal, labelValueMonth);
            let lucro = valorComJuros - labelValueMoney;

            let imposto = 0;
            if (labelValueMonth <= 6) {
                imposto = lucro * 0.225;
            } else {
                imposto = lucro * 0.20; // Ajustar conforme outras faixas se quiser
            }

            let valorFinal = valorComJuros - imposto;
            setCalculatedValueSavingsTesouroDireto(valorFinal);
        } catch (error) {
            console.log("Erro ao calcular Tesouro Direto: ", error);
        }
    };

    // Atualiza cálculos sempre que valores mudam
    useEffect(() => {
        calculateSavingsInvestment();
        calculateSavingsInvestmentTesouroDireto();
    }, [labelValueMoney, labelValueMonth]);

    const formatCurrency = (value) => {
        return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-4 sm:px-6 md:px-8">
            {/* Caixa de controle */}
            <div className="flex flex-col w-full sm:w-[450px] md:w-[500px] lg:w-[500px] h-auto sm:h-[350px] items-center justify-center bg-[#0D0D0D]/90 backdrop-blur-lg rounded-2xl p-6 shadow-md">
                <h3 className="text-[#B6B6B6] text-lg mb-2">Eu tenho {formatCurrency(labelValueMoney)}</h3>
                <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={labelValueMoney}
                    onChange={(e) => setLabelValueMoney(Number(e.target.value))}
                    className="w-[90%] h-1 bg-[#B6B6B6] rounded-full appearance-none outline-none accent-[#B6B6B6] 
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                               [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
                               [&::-webkit-slider-thumb]:bg-amber-600"
                />
                <h3 className="text-[#B6B6B6] text-lg mt-4 mb-2">
                    Aplicar durante {labelValueMonth} {labelValueMonth > 1 ? "meses" : "mês"}
                </h3>
                <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={labelValueMonth}
                    onChange={(e) => setLabelValueMonth(Number(e.target.value))}
                    className="w-[90%] h-1 bg-[#B6B6B6] rounded-full appearance-none outline-none accent-[#B6B6B6] 
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                               [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
                               [&::-webkit-slider-thumb]:bg-amber-600"
                />
            </div>

            {/* Gráfico */}
            <div className="flex w-full sm:w-[450px] md:w-[500px] lg:w-[500px] h-auto sm:h-[350px] items-center justify-center bg-[#0D0D0D]/90 backdrop-blur-lg rounded-2xl p-6 shadow-md">
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
