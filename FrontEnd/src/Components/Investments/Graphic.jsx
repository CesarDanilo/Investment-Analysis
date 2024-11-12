import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends Component {
    constructor(props) {
        super(props);

        const cores = ['#777777', '#F29A2E'];

        this.state = {
            series: [
                { data: [props.calculatedValueSavings, props.calculatedValueSavingsTesouroDireto] }, // Passando o valor calculado para o gráfico
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        click: function (chart, w, e) {
                            // Aqui você pode adicionar eventos de clique, se necessário
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
                    enabled: false, // Desabilitando os rótulos de dados
                },
                legend: {
                    show: false, // Desabilitando a legenda
                },
                xaxis: {
                    categories: ['POUPANÇA', 'TESOURO DIRETO'], // Categorias no eixo X
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

    componentDidUpdate(prevProps) {
        if (prevProps.calculatedValueSavings !== this.props.calculatedValueSavings) {
            // Atualiza a série do gráfico quando o valor calculado mudar
            this.setState({
                series: [{ data: [(this.props.calculatedValueSavings + this.props.labelValueMoney), 22] }],
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
