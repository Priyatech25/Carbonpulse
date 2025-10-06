// Reward.jsx
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./Reward.css"; // Make sure CSS file is in same folder

function AnimatedBadge() {
  const [glow, setGlow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setGlow(g => !g), 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`badge-glow ${glow ? "glow" : ""}`}>
      <svg width="130" height="130" viewBox="0 0 130 130" fill="none">
        <circle cx="65" cy="65" r="60" fill="#181F25" stroke="#25ed96" strokeWidth="6" />
        <circle cx="65" cy="65" r="48" fill="#0e1e23" stroke="#20b5a2" strokeWidth="3" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".35em"
          fontSize="2.5rem"
          fill="#25ed96"
          style={{ fontWeight: 700 }}
        >
          🏆
        </text>
      </svg>
      <div className="badge-text">Carbon Champion</div>
    </div>
  );
}

function Reward() {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="reward-page-bg">
      <Confetti width={dimensions.width} height={dimensions.height} numberOfPieces={200} recycle={true} />
      <div className="reward-glass">
        <div className="reward-title">Congratulations!</div>
        <div className="reward-subtitle">
          You've reached your emission reduction milestone.
        </div>
        <AnimatedBadge />
        <div className="reward-desc">
          Your real-time actions are making a difference.<br />
          <span style={{ color: "#25ed96" }}>Keep leading a greener future!</span>
        </div>
      </div>
    </div>
  );
}

export default Reward;
