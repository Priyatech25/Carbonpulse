import React from "react";

export default function FuelLevelCard({ fuelLevel }) {
  const height = Math.max(0, Math.min(100, fuelLevel)); // constrain 0–100
  const color = height > 50 ? "#00c853" : height > 20 ? "#ffeb3b" : "#d50000";

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md text-center w-60">
      <h2 className="text-lg font-semibold mb-2">Real-Time Fuel Level</h2>
      <div className="relative h-40 w-20 mx-auto border-4 border-gray-400 rounded-md overflow-hidden">
        {/* Tank fill animation */}
        <div
          className="absolute bottom-0 w-full transition-all duration-700 ease-out"
          style={{
            height: `${height}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
      <p className="mt-3 font-medium">{fuelLevel.toFixed(1)} Liters</p>
    </div>
  );
}
