import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends Component {
    constructor(props) {
        super(props);

        const cores = ['#777777', '#F29A2E'];

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
                    events: {
                        click: function (chart, w, e) {
                            // Adicionar eventos de clique aqui, se necessário
                        },
                    },
                },
                colors: cores,
                plotOptions: {
                    bar: {
                        columnWidth: '85%',
                        distributed: true,
                    },
                },
                dataLabels: {
                    enabled: true, // Habilitando os rótulos de dados
                    formatter: function (val) {
                        return `R$ ${val}`;
                    }
                },
                legend: {
                    show: false, // Desabilitando a legenda
                },
                xaxis: {
                    categories: ['POUPANÇA', 'TESOURO DIRETO'],
                    labels: {
                        style: {
                            colors: cores,
                            fontSize: '12px',
                        },
                    },
                },
            },
        };
    }

    // Função para formatar valores em R$ com 2 casas decimais
    formatCurrency(value) {
        return parseFloat(value).toFixed(2); // Formatando com 2 casas decimais
    }

    // Atualiza os dados do gráfico quando os props de valores calculados mudarem
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
                    },
                ],
            });
        }
    }

    render() {
        return (
            <div>
                <div id="chart">
                    <ReactApexChart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height={350}
                        width={500}
                    />
                </div>
            </div>
        );
    }
}

export default ApexChart;
