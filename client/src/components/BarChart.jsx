import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ priceRanges }) => {
  const labels = priceRanges.map((range) => range.range);
  const data = priceRanges.map((range) => range.count); 

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Number of Transactions',
        data: data,
        backgroundColor: '#1E3A8A',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Transactions by Price Range',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
