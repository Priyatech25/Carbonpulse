


import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartPlaceholder = ({ title, data, currentTotal }) => {
  // Transform the props data into chart format
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'CO₂ Emissions (kg)',
        data: data.map(item => item.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)', // Red for Scope 1
          'rgba(54, 162, 235, 0.8)', // Blue for Scope 2
          'rgba(75, 192, 192, 0.8)', // Green for Scope 3
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += `${context.parsed} kg`;
              // Calculate percentage if we have total
              if (currentTotal > 0) {
                const percentage = ((context.parsed / currentTotal) * 100).toFixed(1);
                label += ` (${percentage}%)`;
              }
            }
            return label;
          }
        }
      }
    }
  };

  return (
    <div className="data-card">
      <h3>{title}</h3>
      {currentTotal > 0 ? (
        <div className="chart-placeholder" style={{ height: '250px' }}>
          <Doughnut data={chartData} options={options} />
        </div>
      ) : (
        <div className="no-data">No emissions data available</div>
      )}
    </div>
  );
};

export default PieChartPlaceholder;
