"use client"

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
        display: false, // Hide the x-axis labels
      },
      y: {
        display: false, // Hide the y-axis labels
      },
    },
    interaction: {
      intersect: false, // Disable label interactions
    },
    elements: {
      point: {
        radius: 0, // Hide data points on the line
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

export default function Chart({ data, borderColor,bgColor  }) {
    const chartData = {
      labels: data.map((item) => new Date(item[0]).toLocaleDateString()),
      datasets: [
        {
          fill: true,
          label: 'Price',
          data: data.map((item) => item[1]),
          borderColor: borderColor,
          backgroundColor: bgColor,
        },
      ],
    };
  
    return <Line options={options} data={chartData} />;
  }
  