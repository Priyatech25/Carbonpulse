import React from 'react';

const OptimizationCard = () => (
    <div className="data-card">
        <h3>Optimization</h3>
        <div className="optimization-item">
            <span style={{ color: 'var(--main-color)' }}>›</span> Shift workload to off-peak hours (Potential saving: 800 kg CO₂)
        </div>
        <div className="optimization-item">
            <span style={{ color: 'var(--main-color)' }}>›</span> Reduce international shipments by 10% (Action pending)
        </div>
        <div className="optimization-item">
            <span style={{ color: 'var(--main-color)' }}>›</span> Update HVAC filters for Boiler #3
        </div>
    </div>
);

export default OptimizationCard;

