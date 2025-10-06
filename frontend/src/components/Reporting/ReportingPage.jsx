



import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import useRealtimeEmissions from '../../hooks/useRealtimeEmissions'; // WebSocket hook

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// ------------------ Styles ------------------
const styles = {
    dataCard: {
        background: 'rgba(10, 20, 30, 0.8)',
        border: '1px solid var(--main-color, #00ffc8)',
        boxShadow: '0 0 10px rgba(0, 255, 200, 0.5)',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        color: '#fff',
    },
    h2: {
        color: 'var(--main-color, #00ffc8)',
        borderBottom: '1px dashed rgba(0, 255, 200, 0.3)',
        paddingBottom: '10px',
        marginBottom: '15px',
    },
    header: { color: 'var(--main-color, #00ffc8)', marginTop: '20px', marginBottom: '10px' },
    table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9em', textAlign: 'left' },
    th: {
        backgroundColor: 'rgba(0, 255, 200, 0.2)',
        color: 'var(--main-color, #00ffc8)',
        padding: '12px 15px',
        borderBottom: '1px solid var(--main-color, #00ffc8)',
    },
    td: { padding: '10px 15px', borderBottom: '1px solid rgba(0, 255, 200, 0.1)' },
    button: {
        backgroundColor: 'var(--main-color, #00ffc8)',
        color: '#000',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        transition: 'background-color 0.3s, box-shadow 0.3s',
        marginTop: '10px',
    },
};

// ------------------ Components ------------------
const DailyEmissionsTable = ({ dailyData, onExport }) => (
    <div>
        <h4 style={styles.header}>Daily Emissions by Scope (kg CO₂)</h4>
        <table style={styles.table}>
            <thead>
                <tr>
                    <th style={styles.th}>Date</th>
                    <th style={styles.th}>Scope 1</th>
                    <th style={styles.th}>Scope 2</th>
                    <th style={styles.th}>Scope 3</th>
                    <th style={styles.th}>Total</th>
                </tr>
            </thead>
            <tbody>
                {dailyData.map((row) => (
                    <tr key={row.date}>
                        <td style={styles.td}>{row.date}</td>
                        <td style={styles.td}>{row.scope1.toLocaleString()}</td>
                        <td style={styles.td}>{row.scope2.toLocaleString()}</td>
                        <td style={styles.td}>{row.scope3.toLocaleString()}</td>
                        <td style={{ ...styles.td, fontWeight: 'bold', color: 'var(--main-color, #00ffc8)' }}>
                            {row.total.toLocaleString()}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <button style={styles.button} onClick={onExport}>Export CSV / PDF</button>
        </div>
    </div>
);

const ScopeComparisonGraph = ({ dailyData }) => {
    const chartData = {
        labels: ['Scope 1', 'Scope 2', 'Scope 3'],
        datasets: [
            {
                label: 'Total Emissions (kg CO₂)',
                data: [
                    dailyData.reduce((sum, d) => sum + d.scope1, 0),
                    dailyData.reduce((sum, d) => sum + d.scope2, 0),
                    dailyData.reduce((sum, d) => sum + d.scope3, 0),
                ],
                backgroundColor: [
                    'rgba(0, 255, 200, 0.7)',
                    'rgba(40, 150, 255, 0.7)',
                    'rgba(150, 75, 255, 0.7)',
                ],
                borderColor: [
                    'rgba(0, 255, 200, 1)',
                    'rgba(40, 150, 255, 1)',
                    'rgba(150, 75, 255, 1)',
                ],
                borderWidth: 1,
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            title: { display: true, text: 'Emissions Comparison by Scope (Live)', color: 'var(--main-color, #00ffc8)' },
        },
        scales: {
            y: { beginAtZero: true, title: { display: true, text: 'kg CO₂', color: 'var(--text-faded, #a0a0a0)' }, grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: 'var(--text-faded, #a0a0a0)' } },
            x: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: 'var(--text-faded, #a0a0a0)' } },
        },
    };

    return <div style={{ height: '300px', marginTop: '30px' }}><Bar data={chartData} options={chartOptions} /></div>;
};

const CarbonCreditCalculation = ({ dailyData }) => {
    const totalEmissions = dailyData.reduce((sum, d) => sum + d.total, 0);
    const credits = Math.max(0, Math.floor(totalEmissions / 1000) - 50);
    return (
        <div style={{ padding: '15px', border: '1px solid rgba(40,150,255,0.5)', borderRadius: '4px', marginTop: '20px', background: 'rgba(40,150,255,0.1)' }}>
            <h4 style={{ ...styles.header, color: 'rgba(40,150,255,1)', marginTop: '0' }}>Carbon Credit Insight</h4>
            <p style={{ margin: 0 }}>
                <strong style={{ fontSize: '1.2em', color: 'rgba(40,150,255,1)' }}>{credits} credits</strong> required to reach *net-zero* this month.
            </p>
        </div>
    );
};

const WhatIfSimulation = ({ dailyData, onRunScenario }) => {
    if (dailyData.length === 0) return null;
    const currentTotal = dailyData[0].total;
    const newTotal = currentTotal - dailyData[0].scope3 * 0.1;
    return (
        <div style={{ padding: '15px', border: '1px solid rgba(255,99,132,0.5)', borderRadius: '4px', marginTop: '20px', background: 'rgba(255,99,132,0.1)' }}>
            <h4 style={{ ...styles.header, color: 'rgba(255,99,132,1)', marginTop: '0' }}>What-If Simulation</h4>
            <p style={{ marginBottom: '5px' }}>
                Current Total Emissions: <strong style={{color: 'var(--main-color, #00ffc8)'}}>{currentTotal.toLocaleString()} kg</strong>
            </p>
            <p style={{ margin: '5px 0' }}>
                <strong style={{color: 'rgba(255,99,132,1)'}}>Scenario:</strong> Reduce Scope-3 shipments by 10% <span style={{marginLeft: '10px', color: 'var(--text-faded, #a0a0a0)'}}>→</span> 
                <strong style={{color: 'rgba(255,99,132,1)'}}>New Total: {newTotal.toLocaleString()} kg</strong>
            </p>
            <button style={{...styles.button, backgroundColor: 'rgba(255,99,132,1)', color: '#fff', marginTop: '10px'}} onClick={onRunScenario}>
                Run New Scenario
            </button>
        </div>
    );
};

// ------------------ Main Reporting Page ------------------
const ReportingPage = () => {
    const { latest } = useRealtimeEmissions();
    const [dailyData, setDailyData] = useState([]);

    // Update daily data live
    useEffect(() => {
        if (!latest) return;
        const today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' });
        const newDataPoint = {
            date: today,
            scope1: latest.Scope1 || 0,
            scope2: latest.Scope2 || 0,
            scope3: latest.Scope3 || 0,
            total: latest.Total || (latest.Scope1 + latest.Scope2 + latest.Scope3),
        };
        setDailyData(prev => {
            const updated = [newDataPoint, ...prev];
            if (updated.length > 7) updated.pop();
            return updated;
        });
    }, [latest]);

    // Export CSV
    const handleExport = () => {
        const header = ['Date', 'Scope1', 'Scope2', 'Scope3', 'Total'];
        const rows = dailyData.map(d => [d.date, d.scope1, d.scope2, d.scope3, d.total]);
        let csvContent = 'data:text/csv;charset=utf-8,' + [header, ...rows].map(e => e.join(',')).join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'emissions_data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Run New Scenario
    const handleRunScenario = () => {
        setDailyData(prev => {
            if (prev.length === 0) return prev;
            const newData = [...prev];
            const first = { ...newData[0] };
            first.scope3 = Math.round(first.scope3 * 0.9); // 10% reduction
            first.total = first.scope1 + first.scope2 + first.scope3;
            newData[0] = first;
            return newData;
        });
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{color: 'var(--main-color, #00ffc8)', marginBottom: '30px', textShadow: '0 0 5px rgba(0, 255, 200, 0.8)'}}>
                Enterprise Carbon Insights (Live)
            </h1>

            {/* Compliance & Reports */}
            <div style={{...styles.dataCard, gridColumn: 'span 2'}}>
                <h2 style={styles.h2}>Compliance & Reports</h2>
                <p style={{ color: 'var(--text-faded, #a0a0a0)' }}>Generate mandatory sustainability reports and export historical data.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginTop: '20px' }}>
                
                <div style={styles.dataCard}>
                    <h2 style={styles.h2}>Detailed Emissions Data</h2>
                    <DailyEmissionsTable dailyData={dailyData} onExport={handleExport} />
                    <WhatIfSimulation dailyData={dailyData} onRunScenario={handleRunScenario} />
                </div>

                <div style={styles.dataCard}>
                    <h2 style={styles.h2}>Scope Analysis & Credits</h2>
                    <ScopeComparisonGraph dailyData={dailyData} />
                    <CarbonCreditCalculation dailyData={dailyData} />
                </div>

            </div>
        </div>
    );
};

export default ReportingPage;
