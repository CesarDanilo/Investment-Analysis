import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends Component {
    constructor(props) {
        super(props);

        // Definindo as cores a serem utilizadas
        const colors = ['#777777', '#F29A2E'];

        this.state = {
            series: [{
                data: [21, 22] // Dados para o gráfico
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        click: function (chart, w, e) {
                            // código para eventos ao clicar, se necessário
                        }
                    }
                },
                colors: colors, // Usando as cores definidas
                plotOptions: {
                    bar: {
                        columnWidth: '85%',
                        distributed: true, // Distribuir as cores
                    }
                },
                dataLabels: {
                    enabled: false // Desabilitando os rótulos de dados
                },
                legend: {
                    show: false // Desabilitando a legenda
                },
                xaxis: {
                    categories: [
                        ['POUPANÇA'],
                        ['TESOURO DIRETO']
                    ], // Definindo as categorias do eixo X
                    labels: {
                        style: {
                            colors: colors, // Definindo as cores dos rótulos do eixo X
                            fontSize: '12px'
                        }
                    }
                }
            }
        };
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
