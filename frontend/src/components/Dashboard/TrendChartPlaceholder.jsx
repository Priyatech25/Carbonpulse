


// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

// const TrendChartPlaceholder = ({ title, emissions = [] }) => {
//   // Prepare chart data
//   const labels = emissions.map(d => d.date || "");
//   const scope1 = emissions.map(d => d.Scope1 || 0);
//   const scope2 = emissions.map(d => d.Scope2 || 0);
//   const scope3 = emissions.map(d => d.Scope3 || 0);

//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: "Scope 1",
//         data: scope1,
//         borderColor: "rgba(255, 99, 132, 1)",
//         backgroundColor: "rgba(255, 99, 132, 0.2)",
//         tension: 0.4,
//         fill: true,
//       },
//       {
//         label: "Scope 2",
//         data: scope2,
//         borderColor: "rgba(54, 162, 235, 1)",
//         backgroundColor: "rgba(54, 162, 235, 0.2)",
//         tension: 0.4,
//         fill: true,
//       },
//       {
//         label: "Scope 3",
//         data: scope3,
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         tension: 0.4,
//         fill: true,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { legend: { position: "top" }, title: { display: true, text: title } },
//     scales: { y: { beginAtZero: true, title: { display: true, text: "CO₂ (kg)" } }, x: { title: { display: true, text: "Date" } } },
//   };

//   return (
//     <div className="data-card" style={{ gridColumn: "span 2" }}>
//       <h3>{title}</h3>
//       <div className="chart-placeholder" style={{ height: "300px" }}>
//         <Line data={chartData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default TrendChartPlaceholder;


// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// );

// const TrendChartPlaceholder = ({ title, emissions }) => {
//   const [chartData, setChartData] = useState({ labels: [], datasets: [] });

//   useEffect(() => {
//     if (emissions && emissions.length > 0) {
//       const labels = emissions.map(e => e.date || "Unknown");
//       const scope1 = emissions.map(e => e.Scope1 || 0);
//       const scope2 = emissions.map(e => e.Scope2 || 0);
//       const scope3 = emissions.map(e => e.Scope3 || 0);

//       setChartData({
//         labels,
//         datasets: [
//           {
//             label: "Scope 1",
//             data: scope1,
//             borderColor: "rgba(255, 99, 132, 1)",
//             backgroundColor: "rgba(255, 99, 132, 0.2)",
//             fill: true,
//             tension: 0.4
//           },
//           {
//             label: "Scope 2",
//             data: scope2,
//             borderColor: "rgba(54, 162, 235, 1)",
//             backgroundColor: "rgba(54, 162, 235, 0.2)",
//             fill: true,
//             tension: 0.4
//           },
//           {
//             label: "Scope 3",
//             data: scope3,
//             borderColor: "rgba(75, 192, 192, 1)",
//             backgroundColor: "rgba(75, 192, 192, 0.2)",
//             fill: true,
//             tension: 0.4
//           }
//         ]
//       });
//     }
//   }, [emissions]);

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top" },
//       title: { display: true, text: title }
//     },
//     scales: {
//       y: { beginAtZero: true, title: { display: true, text: "CO₂ (kg)" } },
//       x: { title: { display: true, text: "Date" } }
//     }
//   };

//   return (
//     <div className="data-card" style={{ gridColumn: "span 2" }}>
//       <h3>{title}</h3>
//       <div style={{ height: "300px" }}>
//         <Line data={chartData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default TrendChartPlaceholder;


import React, { useEffect, useState } from "react";
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
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const TrendChartPlaceholder = ({ title, emissions }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  // REPLACE THIS ENTIRE useEffect BLOCK WITH THE UPDATED VERSION:
  useEffect(() => {
    if (emissions && emissions.length > 0) {
      const labels = emissions.map(e => {
        // Format date to be more readable
        const date = new Date(e.date);
        return isNaN(date.getTime()) ? e.date : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      });
      
      const scope1 = emissions.map(e => e.Scope1 || e.scope1 || 0);
      const scope2 = emissions.map(e => e.Scope2 || e.scope2 || 0);
      const scope3 = emissions.map(e => e.Scope3 || e.scope3 || 0);

      setChartData({
        labels,
        datasets: [
          {
            label: "Scope 1",
            data: scope1,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true,
            tension: 0.4
          },
          {
            label: "Scope 2",
            data: scope2,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: true,
            tension: 0.4
          },
          {
            label: "Scope 3",
            data: scope3,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
            tension: 0.4
          }
        ]
      });
    }
  }, [emissions]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: title }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: "CO₂ (kg)" } },
      x: { title: { display: true, text: "Date" } }
    }
  };

  return (
    <div className="data-card" style={{ gridColumn: "span 2" }}>
      <h3>{title}</h3>
      <div style={{ height: "300px" }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TrendChartPlaceholder;


// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

// const TrendChartPlaceholder = ({ title, trend }) => {
//   if (!trend || trend.length === 0) return <p>Loading trend...</p>;

//   const labels = trend.map(d => d.date);
//   const totals = trend.map(d => d.total);

//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: "Total Emissions",
//         data: totals,
//         borderColor: "rgba(54, 162, 235, 1)",
//         backgroundColor: "rgba(54, 162, 235, 0.2)",
//         tension: 0.4,
//         fill: true,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { legend: { position: "top" }, title: { display: true, text: title } },
//     scales: {
//       y: { beginAtZero: true, title: { display: true, text: "CO₂ (kg)" } },
//       x: { title: { display: true, text: "Date" } },
//     },
//   };

//   return (
//     <div className="data-card">
//       <h3>{title}</h3>
//       <div style={{ height: "300px" }}>
//         <Line data={chartData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default TrendChartPlaceholder;
