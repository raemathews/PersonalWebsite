import React, { useState, useEffect } from 'react';
import ApexChart from 'react-apexcharts'
import {StyledChart} from './Chart.styled'


export default class LineGraphComp extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const series = [{
            name: 'UnusedVaccines',
            data: [{x:new Date("2021-01-03"), y:300},{x:new Date("2021-01-19"), y:240},{x:new Date("2021-02-10"),
            y:330},{x:new Date("2021-02-28"),y:403},{x:new Date("2021-03-15"), y:590},{x:new Date("2021-03-29"), y:200},
            {x:new Date("2021-04-05"), y:210},{x:new Date("2021-04-29"), y:302}]
        }]
        const options = {
            chart: {
                fontFamily: 'Arial, sans-serif',
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                    type: 'x',
                    enabled: true,
                    autoScaleYaxis: true

                },
                toolbar: {
                    autoSelected: 'zoom'
                }
            },
            dataLabels: {
                enabled: true
            },
            markers: {
                size: 0,
            },
            title: {
                text: 'Total Vaccines Wasted',
                align: 'left',
                fontFamily: 'Arial, sans-serif'
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0,
                    stops: [0, 90, 100]
                },

            },
            theme: {
                monochrome: {
                    enabled: true,
                    color: '#0C6697',
                    shadeTo: 'light',
                    shadeIntensity: 0.65
                }
            },
            yaxis: {

                title: {
                    text: 'Vaccines',
                    fontFamily: 'Arial, sans-serif'
                },
            },
            xaxis: {
                fontFamily: 'Arial, sans-serif',
                type: 'datetime',

            },
            tooltip: {
                shared: false,

            }

        };
        return (
            <StyledChart>
                <ApexChart className="table" options={options} series={series} type="area" height={400} />
            </StyledChart>
        )
    }

}
