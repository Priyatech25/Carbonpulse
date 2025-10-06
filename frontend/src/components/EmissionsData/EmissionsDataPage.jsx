






import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import useRealtimeEmissions from "../../hooks/useRealtimeEmissions"; // WebSocket hook

// ------------------ Styles ------------------
const styles = {
  dashboardContainer: { display: "flex", padding: "20px", gap: "20px", backgroundColor: "var(--background-dark)", color: "var(--text-light)", fontFamily: "Arial, sans-serif" },
  section: { flex: 1, minWidth: "400px" },
  dataCard: { padding: "20px", marginBottom: "20px", borderRadius: "8px", backgroundColor: "var(--card-background)", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", border: "1px solid rgba(255, 255, 255, 0.1)" },
  h2: { color: "var(--text-highlight)", borderBottom: "2px solid var(--main-color)", paddingBottom: "10px", marginBottom: "15px", fontWeight: 300 },
  h3: { color: "var(--text-light)", marginBottom: "10px", fontSize: "1.1em", fontWeight: 600 },
  smallText: { fontSize: "0.8em", color: "var(--text-faded)" },
  boldText: { fontWeight: "bold" },
  fuelLevelsContent: { display: "flex", gap: "20px", justifyContent: "flex-start", marginTop: "10px" },
};

// ------------------ Sample Data for Scope 2 & 3 ------------------
const scope2Data = [
  { name: "Purchased Electricity", value: 75, color: "#4CAF50" },
  { name: "Steam/Heat", value: 25, color: "#FFC107" },
];
const scope3Data = [
  { name: "Purchased Goods", total: 400, color: "#2196F3" },
  { name: "Business Travel", total: 150, color: "#9C27B0" },
  { name: "Waste Disposal", total: 200, color: "#FF5722" },
  
];


// ------------------ Fuel Level Tank ------------------
export function FuelLevelTank({ name, level }) {
  const height = Math.max(0, Math.min(100, level));
  const color = height > 50 ? "#00c853" : height > 20 ? "#ffeb3b" : "#d50000";

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ height: "150px", width: "40px", border: "2px solid #333", margin: "0 auto", borderRadius: "5px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: 0, width: "100%", height: `${height}%`, backgroundColor: color, transition: "height 0.7s ease-out" }}></div>
      </div>
      <p style={{ marginTop: "5px", fontWeight: "bold" }}>{name}</p>
      <p style={{ ...styles.smallText }}>{level}%</p>
    </div>
  );
}

// ------------------ Emissions Components ------------------
const DirectEmissionsChart = ({ latest }) => {
  const total = latest.Total || (latest.Scope1 + latest.Scope2 + latest.Scope3) || 0;
  const categories = [
    { name: "Fleet Vehicles", percentage: total ? Math.round((latest.Scope1 / total) * 100) : 0 },
    { name: "On-site Combustion", percentage: total ? Math.round((latest.Scope2 / total) * 100) : 0 },
    { name: "Industrial Processes", percentage: total ? Math.round((latest.Scope3 / total) * 100) : 0 },
  ];

  return (
    <div style={styles.dataCard}>
      <h3 style={styles.h3}>SCOPE 1: DIRECT EMISSIONS BY SOURCE</h3>
      <div style={{ display: "flex", gap: "20px", justifyContent: "space-around", marginTop: "20px" }}>
        {categories.map((cat, i) => (
          <div key={i} style={{ textAlign: "center", minWidth: "100px" }}>
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="var(--main-color)"
                strokeWidth="10"
                fill="none"
                strokeDasharray={2 * Math.PI * 45}
                strokeDashoffset={2 * Math.PI * 45 * (1 - cat.percentage / 100)}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 1s ease-out", transform: "rotate(-90deg)", transformOrigin: "center" }}
              />
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="var(--text-light)" fontSize="16px" fontWeight="bold">
                {cat.percentage}%
              </text>
            </svg>
            <p style={{ marginTop: "5px", fontWeight: "bold" }}>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Scope2EnergyChart = () => {
  const total = scope2Data.reduce((sum, entry) => sum + entry.value, 0);
  return (
    <div style={styles.dataCard}>
      <h3 style={styles.h3}>SCOPE 2: ENERGY MIX (MWh/Year)</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={scope2Data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
            {scope2Data.map((entry, idx) => <Cell key={idx} fill={entry.color} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <p style={{ fontWeight: "bold", marginTop: "10px" }}>Total: {total} MWh</p>
    </div>
  );
};

const Scope3CategoryBarChart = () => (
  <div style={styles.dataCard}>
    <h3 style={styles.h3}>SCOPE 3: TOP 3 VALUE CHAIN SOURCES (tCO₂e)</h3>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={scope3Data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="name" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip />
        <Bar dataKey="total" fill="#2196F3" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const EmissionsTrendChart = ({ trend }) => (
  <div style={styles.dataCard}>
    <h3 style={styles.h3}>FUEL CONSUMPTION & EMISSIONS TREND (tCO₂e)</h3>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={trend}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="date" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip />
        <Line type="monotone" dataKey="tCO2e" stroke="var(--main-color)" strokeWidth={2} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

// ------------------ Main Dashboard ------------------
const EmissionsDashboard = () => {
  const { latest, trend, fuelLevel = 75, isConnected } = useRealtimeEmissions();

  return (
    <div style={styles.dashboardContainer}>
      {/* Left Section */}
      <div style={styles.section}>
        <h2 style={styles.h2}>EMISSIONS DATA OVERVIEW {isConnected ? "🟢" : "🔴"}</h2>
        <DirectEmissionsChart latest={latest} />
        <Scope2EnergyChart />
      </div>

      {/* Right Section */}
      <div style={styles.section}>
        <EmissionsTrendChart trend={trend} />
        <div style={styles.dataCard}>
          <h3 style={styles.h3}>REAL-TIME FUEL LEVELS (Liters)</h3>
          <div style={styles.fuelLevelsContent}>
            <FuelLevelTank name="Diesel Tank" level={latest.FuelLevel?.["Diesel Tank"] ?? 0} />
<FuelLevelTank name="Gas Tank #2" level={latest.FuelLevel?.["Gas Tank #2"] ?? 0} />
<FuelLevelTank name="Kerosene Res." level={latest.FuelLevel?.["Kerosene Res."] ?? 0} />

          </div>
        </div>
        <Scope3CategoryBarChart />
      </div>
    </div>
  );
};

export default EmissionsDashboard;
