


import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const AlertsCard = ({ alerts = [], totalEmissions = {} }) => {
  // Use props data instead of static data
  const currentEmission = totalEmissions.Total || 0;
  const hasHighEmissions = currentEmission > 3500;

  const lineChartOptions = (title) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        title: {
            display: true,
            text: title,
            color: 'var(--main-color, #00ffc8)',
            position: 'bottom',
        },
        tooltip: { enabled: false }
    },
    scales: {
        y: { display: false, grid: { display: false } },
        x: { display: false, grid: { color: 'rgba(255, 255, 255, 0.05)' } },
    },
    elements: { line: { tension: 0.4 } }
  });

  const scopeData = (color, baseValue = 200) => ({
    labels: Array(30).fill('').map((_, i) => i + 1),
    datasets: [{
        data: Array(30).fill(0).map((_, i) => (Math.sin(i * 0.5) + Math.random() * 0.5 + 2) * baseValue),
        borderColor: color,
        backgroundColor: `${color}40`,
        pointRadius: 0,
        fill: true,
    }],
  });

  const doughnutData = {
    datasets: [{
        data: [currentEmission > 3500 ? 150 : 80, 100],
        backgroundColor: [
          currentEmission > 3500 ? 'rgba(255, 99, 132, 1)' : 'rgba(0, 255, 200, 1)',
          'rgba(0, 255, 200, 0.3)'
        ],
        borderColor: ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.1)'],
        borderWidth: 1,
    }],
  };

  const styles = {
    cardContainer: {
        background: 'rgba(0, 5, 10, 0.95)',
        border: `1px solid ${hasHighEmissions ? 'rgba(255, 0, 0, 0.8)' : 'var(--main-color, #00ffc8)'}`,
        boxShadow: `0 0 25px ${hasHighEmissions ? 'rgba(255, 0, 0, 0.6)' : 'rgba(0, 255, 200, 0.6)'}`,
        borderRadius: '16px',
        padding: '30px',
        margin: '20px auto',
        color: 'var(--text-color, #ffffff)',
    },
    urgentHeader: {
        background: hasHighEmissions ? 'rgba(255, 0, 0, 0.4)' : 'rgba(0, 255, 200, 0.2)',
        border: `1px solid ${hasHighEmissions ? 'rgba(255, 0, 0, 0.8)' : 'rgba(0, 255, 200, 0.5)'}`,
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        marginBottom: '25px',
        boxShadow: `0 0 15px ${hasHighEmissions ? 'rgba(255, 0, 0, 0.7)' : 'rgba(0, 255, 200, 0.5)'}`,
    },
    alertText: {
        color: '#fff',
        fontSize: '1.8em',
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    statBox: {
        textAlign: 'center',
        padding: '10px',
        border: '1px solid rgba(0, 255, 200, 0.2)',
        borderRadius: '4px',
    },
    statValue: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        color: 'var(--main-color, #00ffc8)',
    },
    statLabel: {
        fontSize: '0.8em',
        color: 'var(--text-faded, #a0a0a0)',
        textTransform: 'uppercase',
        marginTop: '5px',
    },
  };

  const UrgentAlertBox = ({ currentEmission }) => (
    <div style={styles.urgentHeader}>
        <h1 style={{ color: hasHighEmissions ? '#ff0000' : 'var(--main-color, #00ffc8)', fontSize: '4em', margin: 0 }}>
            {currentEmission.toLocaleString()}
        </h1>
        <div style={styles.alertText}>
            {hasHighEmissions ? 'URGENT ALERT: EMISSION THRESHOLD CROSSED' : 'CURRENT EMISSIONS'}
        </div>
        <p style={{ color: '#fff', marginTop: '10px' }}>
            {hasHighEmissions ? 'Exceeded safety threshold. Immediate action required. ⚠' : 'Emissions within acceptable limits ✅'}
        </p>
      {/* Display actual alerts from API */}
      {alerts.length > 0 && (
        <div style={{ marginTop: '15px', textAlign: 'left' }}>
          {alerts.map((alert, index) => (
            <div key={index} style={{ color: '#ff6b6b', margin: '5px 0' }}>
              • {alert}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const ScopePrediction = ({ scope, color, value }) => (
    <div style={{ height: '150px', position: 'relative' }}>
        <h4 style={{ color: 'var(--text-faded, #a0a0a0)', position: 'absolute', top: '10px', left: '10px', margin: 0, fontSize: '0.9em' }}>
            {scope}
        </h4>
        <div style={{ position: 'absolute', top: '30px', right: '10px', color: color, fontWeight: 'bold' }}>
            {value} kg
        </div>
        <Line data={scopeData(color, value)} options={lineChartOptions("30-Day Forecast")} />
    </div>
  );

  return (
    <div style={styles.cardContainer}>
        <h1 style={{ color: 'var(--main-color, #00ffc8)', marginBottom: '10px' }}>
            CARBON EMISSIONS DASHBOARD
        </h1>
        
        <UrgentAlertBox currentEmission={currentEmission} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 1fr', gap: '20px', alignItems: 'center', borderBottom: '1px dashed rgba(0, 255, 200, 0.2)', paddingBottom: '20px' }}>
            
            <div>
                <h4 style={{ color: 'var(--main-color, #00ffc8)', marginBottom: '10px' }}>Scope Breakdown:</h4>
                <div style={{ color: 'var(--text-faded, #a0a0a0)', fontSize: '0.9em' }}>
                    Scope 1: {totalEmissions.Scope1 || 0} kg
                </div>
                <div style={{ color: 'var(--text-faded, #a0a0a0)', fontSize: '0.9em' }}>
                    Scope 2: {totalEmissions.Scope2 || 0} kg
                </div>
                <div style={{ color: 'var(--text-faded, #a0a0a0)', fontSize: '0.9em' }}>
                    Scope 3: {totalEmissions.Scope3 || 0} kg
                </div>
            </div>

            <div style={{ position: 'relative', height: '180px', width: '180px', margin: '0 auto' }}>
                <Doughnut data={doughnutData} options={{ maintainAspectRatio: false, cutout: '75%', plugins: { tooltip: { enabled: false }, legend: { display: false }}}} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8em', fontWeight: 'bold', color: hasHighEmissions ? 'rgba(255, 99, 132, 1)' : 'rgba(0, 255, 200, 1)' }}>
                        {Math.round((currentEmission / 3500) * 100)}%
                    </div>
                    <div style={{ fontSize: '0.8em', color: 'var(--text-faded, #a0a0a0)' }}>of limit</div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '10px' }}>
                <div style={styles.statBox}>
                    <div style={styles.statValue}>{totalEmissions.Scope1 || 0}</div>
                    <div style={styles.statLabel}>SCOPE 1</div>
                </div>
                <div style={styles.statBox}>
                    <div style={styles.statValue}>{totalEmissions.Scope2 || 0}</div>
                    <div style={styles.statLabel}>SCOPE 2</div>
                </div>
                <div style={styles.statBox}>
                    <div style={styles.statValue}>{totalEmissions.Scope3 || 0}</div>
                    <div style={styles.statLabel}>SCOPE 3</div>
                </div>
            </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '20px' }}>
            <ScopePrediction scope="SCOPE 1" color="rgba(255, 99, 132, 1)" value={totalEmissions.Scope1 || 0} />
            <ScopePrediction scope="SCOPE 2" color="rgba(40, 150, 255, 1)" value={totalEmissions.Scope2 || 0} />
            <ScopePrediction scope="SCOPE 3" color="rgba(0, 255, 200, 1)" value={totalEmissions.Scope3 || 0} />
        </div>
    </div>
  );
};

export default AlertsCard;


// import React from "react";

// const AlertsCard = ({ alerts }) => (
//   <div className="data-card">
//     <h3>⚠ Alerts</h3>
//     {alerts && alerts.length > 0 ? (
//       <ul>
//         {alerts.map((a, i) => (
//           <li key={i}>{a}</li>
//         ))}
//       </ul>
//     ) : (
//       <p>No alerts</p>
//     )}
//   </div>
// );

// export default AlertsCard;
