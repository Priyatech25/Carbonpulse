import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PredictionCard = ({ forecast }) => {
  const chartData = {
    labels: forecast.map((d) => d.date),
    datasets: [
      {
        label: "Predicted CO₂ (kg)",
        data: forecast.map((d) => d.predicted),
        borderColor: "rgba(255, 206, 86, 1)", // Yellow like AI color
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "AI Prediction (Next 7 Days)" },
    },
    scales: {
      y: { beginAtZero: false, title: { display: true, text: "CO₂ (kg)" } },
      x: { title: { display: true, text: "Date" } },
    },
  };

  return (
    <div className="data-card">
      <h3 style={{ color: "var(--main-color, #00ffc8)" }}>Next 7 Days Prediction</h3>
      <div style={{ height: "250px" }}>
        {forecast.length > 0 ? <Line data={chartData} options={options} /> : <p>No prediction data</p>}
      </div>
    </div>
  );
};

export default PredictionCard;
