import { useEffect, useState } from "react";
import ApexChart from "./graphic";

const ValuesSlideBar = () => {
    const [labelValueMoney, setLabelValueMoney] = useState(0);
    const [labelValueMonth, setLabelValueMonth] = useState(1);
    const referentialTax = 0.005; // Taxa da poupança
    const referentialTaxTesouroDireto = 13.75; // Taxa anual do Tesouro Direto

    const [calculatedValueSavings, setCalculatedValueSavings] = useState(0);
    const [calculatedValueSavingsTesouroDireto, setCalculatedValueSavingsTesouroDireto] = useState(0);

    const calculateSavingsInvestment = () => {
        try {
            // Poupança tem juros simples
            setCalculatedValueSavings(labelValueMoney * (1 + referentialTax * labelValueMonth));
        } catch (error) {
            console.log("Não foi possível fazer o cálculo. [erro]: ", error);
        }
    };

    const calculateSavingsInvestmentTesouroDireto = () => {
        try {
            // Calculando a taxa mensal a partir da taxa anual
            let valorMensalTaxa = referentialTaxTesouroDireto / 12 / 100; // Convertendo para decimal mensal
            valorMensalTaxa = valorMensalTaxa + 1; // Fator de multiplicação para a taxa mensal

            // Calculando o valor com juros compostos para o número de meses
            let valorComJuros = labelValueMoney * Math.pow(valorMensalTaxa, labelValueMonth);

            // Calculando o lucro obtido
            let lucro = valorComJuros - labelValueMoney;

            // Imposto de Renda: aplica 22,5% se for até 6 meses, 20% se for entre 6 e 12 meses, etc.
            let imposto = 0;
            if (labelValueMonth <= 6) {
                imposto = lucro * 22.5 / 100;
            } else {
                imposto = lucro * 20 / 100; // Supondo 20% para investimentos entre 6 e 12 meses
            }

            // Valor final após o imposto de renda
            let valorFinal = valorComJuros - imposto;

            // Atualizando o estado com o valor final
            setCalculatedValueSavingsTesouroDireto(valorFinal);
        } catch (error) {
            console.log("Não foi possível fazer o cálculo. [erro]: ", error);
        }
    };

    // Atualiza o valor do cálculo quando `labelValueMoney` ou `labelValueMonth` muda
    useEffect(() => {
        calculateSavingsInvestment();
        calculateSavingsInvestmentTesouroDireto();
    }, [labelValueMoney, labelValueMonth]);

    return (
        <div className="flex justify-center items-center gap-10">
            {/* Componente para pegar os valores e colocá-los em um estado */}
            <div className="flex flex-col w-[580px] h-[400px] items-center justify-center space-y-4 bg-[#0D0D0D] rounded-xl p-6">
                <h3 className="text-[#B6B6B6] text-xl">Eu tenho R${labelValueMoney}</h3>
                <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={labelValueMoney}
                    onChange={(e) => setLabelValueMoney(Number(e.target.value))}
                    className="w-[90%] h-1 bg-[#B6B6B6] rounded-full appearance-none outline-none accent-[#B6B6B6] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-600"
                />
                <h3 className="text-[#B6B6B6] text-xl">
                    Aplicar durante {labelValueMonth} {labelValueMonth > 1 ? "meses" : "mês"}
                </h3>
                <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={labelValueMonth}
                    onChange={(e) => setLabelValueMonth(Number(e.target.value))}
                    className="w-[90%] h-1 bg-[#B6B6B6] rounded-full appearance-none outline-none accent-[#B6B6B6] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-600"
                />
            </div>

            {/* Gráfico com o valor calculado */}
            <div className="flex w-[580px] h-[400px] items-center justify-center space-y-4 bg-[#0D0D0D] rounded-xl">
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
