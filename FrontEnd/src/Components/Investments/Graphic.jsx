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
                    height: 350,
                    type: 'bar',
                    toolbar: { show: false },
                    background: 'transparent'
                },
                colors: cores,
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        columnWidth: '50%',
                        distributed: true
                    }
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        colors: ['#e0e0e0']
                    },
                    formatter: (val) => `R$ ${val}`
                },
                xaxis: {
                    categories: ['POUPANÇA', 'TESOURO DIRETO'],
                    labels: {
                        show: false // Remove rótulos do eixo x
                    },
                    axisBorder: { show: false },
                    axisTicks: { show: false }
                },
                yaxis: {
                    show: false // Remove eixo y completamente
                },
                grid: {
                    show: false // Remove linhas de grade
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
            <div className="flex justify-center items-center w-full">
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height={350}
                    width="100%"
                />
            </div>
        );
    }
}

export default ApexChart;
