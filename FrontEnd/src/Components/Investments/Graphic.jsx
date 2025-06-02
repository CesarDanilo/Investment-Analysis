import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends Component {
    constructor(props) {
        super(props);

        const cores = ['#888', '#f2b632']; // Cores neutras (cinza médio e amarelo queimado)

        this.state = {
            series: [
                {
                    data: [
                        this.formatCurrency(props.calculatedValueSavings),
                        this.formatCurrency(props.calculatedValueSavingsTesouroDireto)
                    ]
                }
            ],
            options: {
                chart: {
                    height: 200, // menor altura
                    type: 'bar',
                    toolbar: { show: false },
                    background: 'transparent'
                },
                colors: cores,
                plotOptions: {
                    bar: {
                        borderRadius: 6,   // um pouco mais arredondado
                        columnWidth: '30%', // barras mais finas
                        distributed: true
                    }
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        colors: ['#e0e0e0'],
                        fontSize: '12px', // fonte menor para os valores
                        fontWeight: '600',
                    },
                    formatter: (val) => `R$ ${val}`
                },
                xaxis: {
                    categories: ['POUPANÇA', 'TESOURO DIRETO'],
                    labels: {
                        show: false // mantém oculto para simplicidade
                    },
                    axisBorder: { show: false },
                    axisTicks: { show: false }
                },
                yaxis: {
                    show: false // remove eixo y para limpeza
                },
                grid: {
                    show: false // remove linhas de grade
                },
                tooltip: {
                    theme: 'dark'
                },
                legend: {
                    show: false
                }
            }
        };
    }

    formatCurrency(value) {
        return parseFloat(value).toFixed(2);
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.calculatedValueSavings !== this.props.calculatedValueSavings ||
            prevProps.calculatedValueSavingsTesouroDireto !== this.props.calculatedValueSavingsTesouroDireto
        ) {
            this.setState({
                series: [
                    {
                        data: [
                            this.formatCurrency(this.props.calculatedValueSavings),
                            this.formatCurrency(this.props.calculatedValueSavingsTesouroDireto)
                        ]
                    }
                ]
            });
        }
    }

    render() {
        return (
            <div className="flex justify-center items-center w-full max-w-md mx-auto">
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height={200}
                    width="100%"
                />
            </div>
        );
    }
}

export default ApexChart;
