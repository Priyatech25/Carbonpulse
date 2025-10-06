
import { useEffect, useState } from "react";

export default function useRealtimeEmissions() {
  const [latest, setLatest] = useState({
    Scope1: 0,
    Scope2: 0,
    Scope3: 0,
    Total: 0,
    FuelLevel: {
      "Diesel Tank": 75,
      "Gas Tank #2": 65,
      "Kerosene Res.": 50,
    },
    Scope1Sources: { "Fleet Vehicles": 0, Boilers: 0, Generators: 0 },
    timestamp: new Date().toISOString(),
  });

  const [trend, setTrend] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let ws;
    let reconnectTimeout;

    const connect = () => {
      console.log("🔄 Connecting WebSocket...");
      ws = new WebSocket("ws://127.0.0.1:8017/ws/emissions"); // Update port if needed

      ws.onopen = () => {
        console.log("✅ CONNECTED to emissions stream!");
        setIsConnected(true);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          // ✅ Proper nullish coalescing to use backend fuel values
          const fuelLevel = {
            "Diesel Tank": data.FuelLevel?.["Diesel Tank"] ?? 0,
            "Gas Tank #2": data.FuelLevel?.["Gas Tank "] ?? 0,
            "Kerosene Res.": data.FuelLevel?.["Kerosene Res."] ?? 0,
          };

          setLatest({
            ...data,
            FuelLevel: fuelLevel,
          });

          // Trend update
          setTrend((prev) => {
            const point = {
              date: new Date(data.timestamp || Date.now()).toLocaleTimeString(),
              tCO2e: data.Total || 0,
            };
            const updated = [...prev, point];
            if (updated.length > 12) updated.shift();
            return updated;
          });
        } catch (err) {
          console.error("⚠️ Error parsing data:", err);
        }
      };

      ws.onerror = (err) => {
        console.warn("⚠️ WebSocket issue:", err);
        setIsConnected(false);
      };

      ws.onclose = () => {
        console.log("🔴 Disconnected. Reconnecting in 3s...");
        setIsConnected(false);
        reconnectTimeout = setTimeout(connect, 3000);
      };
    };

    connect();
    return () => {
      if (ws) ws.close();
      if (reconnectTimeout) clearTimeout(reconnectTimeout);
    };
  }, []);

  return { latest, trend, isConnected };
}
