// src/KafkaDemo.jsx
import React, { useState } from "react";

export default function KafkaDemo() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Received new message from Kafka!");
  };

  return (
    <div className="p-4 m-4 border rounded shadow w-96">
      <h2 className="text-xl font-bold mb-2">Kafka Demo</h2>
      <button
        onClick={handleClick}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Fetch Message
      </button>
      {message && <p className="mt-2 text-green-700">{message}</p>}
    </div>
  );
}
