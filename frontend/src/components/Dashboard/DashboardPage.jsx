
// import React, { useEffect, useState } from "react";
// import TrendChartPlaceholder from "./TrendChartPlaceholder";
// import PieChartPlaceholder from "./PieChartPlaceholder";
// import AlertsCard from "./AlertsCard";
// import OptimizationCard from "./OptimizationCard";
// import { API_BASE } from "../../api";

// const DashboardPage = () => {
//   const [emissions, setEmissions] = useState({
//     Scope1: 0,
//     Scope2: 0,
//     Scope3: 0,
//     Total: 0,
//   });

//   const [trendData, setTrendData] = useState([]);
//   const [fuelLevels, setFuelLevels] = useState({
//     "Diesel Tank": 0,
//     "Gas Tank #2": 0,
//     "Kerosene Res.": 0,
//   });
//   const [isConnected, setIsConnected] = useState(false);

//   useEffect(() => {
//     const ws = new WebSocket("ws://localhost:8017/ws/emissions");

//     ws.onopen = () => {
//       console.log("✅ Connected to WebSocket");
//       setIsConnected(true);
//     };

//     ws.onmessage = (event) => {
//       const data = JSON.parse(event.data);

//       // Update emissions
//       setEmissions({
//         Scope1: data.Scope1 || 0,
//         Scope2: data.Scope2 || 0,
//         Scope3: data.Scope3 || 0,
//         Total: data.Total || 0,
//       });

//       // Update fuel levels
//       if (data.FuelLevel) setFuelLevels(data.FuelLevel);

//       // Update trend data (last 7 entries)
//       setTrendData((prev) => {
//         const newEntry = {
//           date: new Date(data.timestamp).toLocaleDateString("en-US", {
//             month: "short",
//             day: "numeric",
//           }),
//           Scope1: data.Scope1 || 0,
//           Scope2: data.Scope2 || 0,
//           Scope3: data.Scope3 || 0,
//         };
//         const updatedTrend = [...prev, newEntry];
//         return updatedTrend.slice(-7); // Keep last 7 entries
//       });
//     };

//     ws.onclose = () => {
//       console.log("⚠️ WebSocket disconnected");
//       setIsConnected(false);
//     };

//     ws.onerror = (err) => {
//       console.error("WebSocket error:", err);
//       ws.close();
//       setIsConnected(false);
//     };

//     return () => ws.close();
//   }, []);

//   if (!isConnected) return <p>Connecting to live emissions data...</p>;

//   // Pie chart data
//   const pieData = [
//     { name: "Scope 1", value: emissions.Scope1 },
//     { name: "Scope 2", value: emissions.Scope2 },
//     { name: "Scope 3", value: emissions.Scope3 },
//   ];

//   return (
//     <div className="dashboard-grid">
//       {/* Key Metric */}
//       <div className="data-card" style={{ gridColumn: "span 2" }}>
//         <h3 style={{ color: "var(--text-faded)" }}>
//           Current Emissions: {isConnected ? "🟢" : "🔴"}
//         </h3>
//         <span
//           className="metric-value"
//           style={{ color: "var(--danger-color)" }}
//         >
//           {emissions.Total > 0 ? `${emissions.Total} kg CO₂ ⚠` : "No data"}
//         </span>
//         <p style={{ marginTop: "10px", color: "var(--text-faded)" }}>
//           AI Forecast:{" "}
//           <span style={{ color: "var(--caution-color)" }}>+5% next week</span>
//         </p>
//       </div>

//       {/* Trend Chart + Optimization */}
//       <div style={{ gridColumn: "span 1" }}>
//         <TrendChartPlaceholder title="Emissions Trend (last 7 days)" emissions={trendData} />
//         <OptimizationCard />
//       </div>

//       {/* Alerts + Pie Chart */}
//       <div style={{ gridColumn: "span 1" }}>
//         <AlertsCard alerts={[]} totalEmissions={emissions} />
//         <PieChartPlaceholder
//           title="Emissions Breakdown by Scope"
//           data={pieData}
//           currentTotal={emissions.Total}
//         />
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;



import React, { useEffect, useState } from "react";
import TrendChartPlaceholder from "./TrendChartPlaceholder";
import PieChartPlaceholder from "./PieChartPlaceholder";
import AlertsCard from "./AlertsCard";
import OptimizationCard from "./OptimizationCard";
import PredictionCard from "./PredictionCard"; // <- Import the new PredictionCard
import { API_BASE } from "../../api";

const DashboardPage = () => {
  const [emissions, setEmissions] = useState({
    Scope1: 0,
    Scope2: 0,
    Scope3: 0,
    Total: 0,
  });

  const [trendData, setTrendData] = useState([]);
  const [fuelLevels, setFuelLevels] = useState({
    "Diesel Tank": 0,
    "Gas Tank #2": 0,
    "Kerosene Res.": 0,
  });
  const [isConnected, setIsConnected] = useState(false);

  // ✅ New state for AI prediction
  const [forecastData, setForecastData] = useState([]);
  const [showReward, setShowReward] = useState(false);

useEffect(() => {
  // Show reward if total emissions are below a threshold
  if (emissions.Total > 0 && emissions.Total < 500) { // Adjust 500 as your milestone
    setShowReward(true);
  } else {
    setShowReward(false);
  }
}, [emissions]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8017/ws/emissions");

    ws.onopen = () => {
      console.log("✅ Connected to WebSocket");
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      // Update emissions
      setEmissions({
        Scope1: data.Scope1 || 0,
        Scope2: data.Scope2 || 0,
        Scope3: data.Scope3 || 0,
        Total: data.Total || 0,
      });

      // Update fuel levels
      if (data.FuelLevel) setFuelLevels(data.FuelLevel);

      // Update trend data (last 7 entries)
      setTrendData((prev) => {
        const newEntry = {
          date: new Date(data.timestamp).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          Scope1: data.Scope1 || 0,
          Scope2: data.Scope2 || 0,
          Scope3: data.Scope3 || 0,
        };
        const updatedTrend = [...prev, newEntry];
        return updatedTrend.slice(-7); // Keep last 7 entries
      });

      // ✅ Generate AI prediction for next 7 days
      const baseTotal = data.Total || 0;
      const prediction = Array.from({ length: 7 }, (_, i) => ({
        date: new Date(
          new Date().getTime() + (i + 1) * 24 * 60 * 60 * 1000
        ).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        predicted: Math.round(baseTotal + (Math.random() * 200 - 50)), // Random fluctuation
      }));
      setForecastData(prediction);
    };

    ws.onclose = () => {
      console.log("⚠️ WebSocket disconnected");
      setIsConnected(false);
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
      ws.close();
      setIsConnected(false);
    };

    return () => ws.close();
  }, []);

  if (!isConnected) return <p>Connecting to live emissions data...</p>;

  // Pie chart data
  const pieData = [
    { name: "Scope 1", value: emissions.Scope1 },
    { name: "Scope 2", value: emissions.Scope2 },
    { name: "Scope 3", value: emissions.Scope3 },
  ];

  return (
    <div className="dashboard-grid">
      {/* Key Metric */}
      <div className="data-card" style={{ gridColumn: "span 2" }}>
        <h3 style={{ color: "var(--text-faded)" }}>
          Current Emissions: {isConnected ? "🟢" : "🔴"}
        </h3>
        <span
          className="metric-value"
          style={{ color: "var(--danger-color)" }}
        >
          {emissions.Total > 0 ? `${emissions.Total} kg CO₂ ⚠` : "No data"}
        </span>
        <p style={{ marginTop: "10px", color: "var(--text-faded)" }}>
          AI Forecast:{" "}
          <span style={{ color: "var(--caution-color)" }}>+5% next week</span>
        </p>
      </div>

      {/* Trend Chart + Optimization */}
      <div style={{ gridColumn: "span 1" }}>
        <TrendChartPlaceholder
          title="Emissions Trend (last 7 days)"
          emissions={trendData}
        />
        <OptimizationCard />
      </div>

      {/* Alerts + Pie Chart */}
      <div style={{ gridColumn: "span 1" }}>
        <AlertsCard alerts={[]} totalEmissions={emissions} />
        <PieChartPlaceholder
          title="Emissions Breakdown by Scope"
          data={pieData}
          currentTotal={emissions.Total}
        />
      </div>

      {/* ✅ Prediction Card */}
      <div style={{ gridColumn: "span 2" }}>
        <PredictionCard forecast={forecastData} />
      </div>
        {showReward && <Reward show={true} />}
    </div>
  );
};

export default DashboardPage;
