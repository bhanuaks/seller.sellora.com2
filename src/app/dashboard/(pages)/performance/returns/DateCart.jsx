'use client';

import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const DateChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;
        
        const options = {
            chart: {
                type: 'line',
                height: 120
            },
            series: [{
                name: 'Earning',
                data: [1, 2, 1, 2, 1, 3, 1]
            }],
            xaxis: {
                categories: ['06 Jan 25', '07 Jan 25', '08 Jan 25', '09 Jan 25', '10 Jan 25', '11 Jan 25', '12 Jan 25']
            },
            stroke: {
                width: 2
            },
            markers: {
                size: 3,
                colors: ['#FF5722'],
                strokeColors: '#FF5722',
                strokeWidth: 2
            },
            colors: ['#2F4858'],
            yaxis: {
                min: 0,
                max: 50,
                tickAmount: 2,
                labels: {
                    formatter: function (value) {
                        return [0, 25, 50].includes(value) ? value : '';
                    }
                }
            }
        };
        
        const chart = new ApexCharts(chartRef.current, options);
        chart.render();
        
        return () => {
            chart.destroy();
        };
    }, []);

    return <div id="dateChartpr" ref={chartRef}></div>;
};

export default DateChart;
