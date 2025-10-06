import React, { useState } from 'react';

// --- Reusable Styles (Inherited from previous Admin/Settings components) ---
const styles = {
    pageContainer: {
        background: 'rgba(0, 5, 10, 0.95)',
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: 'Roboto, sans-serif',
        color: 'var(--text-color, #ffffff)',
    },
    h1: {
        color: 'var(--main-color, #00ffc8)',
        fontSize: '2.5em',
        marginBottom: '30px',
        textAlign: 'center',
        textShadow: '0 0 10px rgba(0, 255, 200, 0.8)',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr', // Key management column (1/3) and Docs column (2/3)
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    dataCard: {
        background: 'rgba(5, 15, 25, 0.9)',
        border: '1px solid var(--main-color, #00ffc8)',
        boxShadow: '0 0 15px rgba(0, 255, 200, 0.4)',
        borderRadius: '12px',
        padding: '25px',
        marginBottom: '30px',
    },
    cardHeader: {
        color: 'var(--main-color, #00ffc8)',
        fontSize: '1.4em',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px dashed rgba(0, 255, 200, 0.2)',
        paddingBottom: '10px',
    },
    icon: {
        marginRight: '10px',
        fontSize: '1.3em',
        color: 'var(--main-color, #00ffc8)',
    },
    label: {
        display: 'block',
        color: 'var(--text-faded, #a0a0a0)',
        marginBottom: '8px',
        fontSize: '0.95em',
    },
    input: {
        width: 'calc(100% - 20px)',
        padding: '10px',
        marginBottom: '15px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(0, 255, 200, 0.3)',
        borderRadius: '5px',
        color: '#fff',
        fontSize: '0.9em',
    },
    button: {
        backgroundColor: 'var(--main-color, #00ffc8)',
        color: '#000',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        transition: 'background-color 0.3s, box-shadow 0.3s',
        boxShadow: '0 0 10px rgba(0, 255, 200, 0.7)',
        marginTop: '10px',
        width: '100%',
    },
    fadedButton: {
        backgroundColor: 'transparent',
        border: '1px solid rgba(40, 150, 255, 0.8)',
        boxShadow: '0 0 10px rgba(40, 150, 255, 0.7)',
        color: 'rgba(40, 150, 255, 1)',
        marginTop: '10px',
    },
    codeBlock: {
        background: 'rgba(255, 255, 255, 0.05)',
        borderLeft: '4px solid var(--main-color, #00ffc8)',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto',
        fontSize: '0.9em',
        lineHeight: '1.4',
        marginBottom: '20px',
    },
    methodTag: {
        backgroundColor: 'rgba(0, 255, 200, 0.2)',
        color: 'var(--main-color, #00ffc8)',
        padding: '3px 8px',
        borderRadius: '3px',
        fontWeight: 'bold',
        marginRight: '10px',
        fontSize: '0.85em',
    },
    endpointTitle: {
        color: '#fff',
        fontSize: '1.2em',
        marginBottom: '10px',
        marginTop: '20px',
    },
};

// --- Main APIAccessPage Component ---

const APIAccessPage = () => {
    const [apiKey, setApiKey] = useState('*SAMPLE-KEY-CARBON-360*');
    
    const handleGenerateApiKey = () => {
        alert('New API Key Generated! Please copy and store it securely.');
        setApiKey('NEW-API-KEY-GENERATED-SECURE'); // Simulate new key
    };

    return (
        <div style={styles.pageContainer}>
            <h1 style={styles.h1}>🛰 API / Developer Access</h1>

            <div style={styles.gridContainer}>

                {/* Left Column: API Key Management & Status */}
                <div>
                    <div style={styles.dataCard}>
                        <h3 style={styles.cardHeader}><span style={styles.icon}>🔑</span> API Key Management</h3>
                        
                        <label htmlFor="apiKey" style={styles.label}>Active Access Key:</label>
                        <input
                            type="text"
                            id="apiKey"
                            value={apiKey}
                            readOnly
                            style={{ ...styles.input, color: 'rgba(0, 255, 200, 1)' }}
                        />
                        <p style={{ color: 'rgba(255, 99, 132, 1)', fontSize: '0.85em', marginTop: '-5px', marginBottom: '15px' }}>
                            ⚠ Treat this key as a password. Do not expose it publicly.
                        </p>

                        <button onClick={handleGenerateApiKey} style={styles.button}>
                            Revoke & Generate New Key
                        </button>
                        
                        <button style={{ ...styles.button, ...styles.fadedButton, marginTop: '20px' }}>
                            View Usage History
                        </button>
                    </div>

                    <div style={styles.dataCard}>
                        <h3 style={styles.cardHeader}><span style={styles.icon}>⚡</span> API Status & Rate Limits</h3>
                        <p style={{ color: 'var(--text-faded, #a0a0a0)', marginBottom: '10px' }}>
                            <strong style={{ color: 'var(--main-color, #00ffc8)' }}>Status:</strong> Operational (Latency: 50ms)
                        </p>
                        <p style={{ color: 'var(--text-faded, #a0a0a0)', marginBottom: '10px' }}>
                            <strong style={{ color: 'var(--main-color, #00ffc8)' }}>Rate Limit:</strong> 1,000 requests per minute
                        </p>
                        <p style={{ color: 'var(--text-faded, #a0a0a0)' }}>
                            <strong style={{ color: 'var(--main-color, #00ffc8)' }}>Expiration:</strong> Never (Permanent Key)
                        </p>
                    </div>
                </div>

                {/* Right Column: API Documentation */}
                <div style={styles.dataCard}>
                    <h3 style={styles.cardHeader}><span style={styles.icon}>📖</span> API Documentation (v1)</h3>
                    <p style={styles.label}>Base URL: <strong style={{color: 'var(--main-color, #00ffc8)'}}>https://api.carboninsights.com/</strong></p>
                    <p style={{ color: 'var(--text-faded, #a0a0a0)', marginBottom: '30px' }}>
                        All endpoints require the API Key to be passed in the *X-API-KEY* header.
                    </p>

                    {/* Endpoint: Fetch Emissions */}
                    <div style={styles.endpointTitle}>1. Fetch Emission Data (Real-time)</div>
                    <p style={{ color: 'var(--text-faded, #a0a0a0)', marginBottom: '10px' }}>
                        Retrieves aggregated carbon emissions for a specific date or period.
                    </p>
                    <div style={styles.codeBlock}>
                        <span style={styles.methodTag}>GET</span>
                        /api/v1/emissions?scope=all&date=2025-09-24
                    </div>

                    <p style={styles.label}>Example Response (200 OK):</p>
                    <div style={styles.codeBlock}>
                        <pre style={{ margin: 0, color: 'rgba(0, 255, 200, 1)' }}>{`{
  "unit": "kg CO2e",
  "date": "2025-09-24",
  "Scope1": 8400,
  "Scope2": 5950,
  "Scope3": 1750,
  "Total": 16100
}`}</pre>
                    </div>

                    {/* Endpoint: Fetch Optimization */}
                    <div style={styles.endpointTitle}>2. Fetch Active Optimizations</div>
                    <p style={{ color: 'var(--text-faded, #a0a0a0)', marginBottom: '10px' }}>
                        Retrieves a list of currently active optimization recommendations.
                    </p>
                    <div style={styles.codeBlock}>
                        <span style={styles.methodTag}>GET</span>
                        /api/v1/optimizations
                    </div>

                    <p style={styles.label}>Example Response (200 OK):</p>
                    <div style={styles.codeBlock}>
                        <pre style={{ margin: 0, color: 'rgba(40, 150, 255, 1)' }}>{`[{
  "id": "OPT-102",
  "area": "HVAC",
  "savings_kg_co2": 150000,
  "status": "In Progress"
},
{
  "id": "OPT-103",
  "area": "Fleet",
  "savings_kg_co2": 25000,
  "status": "Pending Review"
}]`}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default APIAccessPage;



// import React, { useState } from 'react';
// import axios from 'axios';

// // --- Keep all your styles exactly as before ---
// const styles = { /* your existing styles unchanged */ };

// // --- Main Component ---
// const APIAccessPage = () => {
//     const [apiKey, setApiKey] = useState('*SAMPLE-KEY-CARBON-360*');
//     const [usageHistory, setUsageHistory] = useState([]);
//     const [emissionData, setEmissionData] = useState(null);

//     const API_BASE = "http://127.0.0.1:8014/api/v1/admin";
//     const EMISSIONS_API = "http://127.0.0.1:8014/api/v1/emissions";

//     // --- Generate new API key ---
//     const handleGenerateApiKey = async () => {
//         try {
//             const res = await axios.post(`${API_BASE}/generate_api_key`);
//             setApiKey(res.data.apiKey);
//             alert('New API Key Generated: ' + res.data.apiKey);
//         } catch (err) {
//             console.error(err);
//             alert('Failed to generate API key.');
//         }
//     };

//     // --- View Usage History ---
//     const handleViewUsageHistory = async () => {
//         try {
//             const res = await axios.get(`${API_BASE}/usage_history`);
//             setUsageHistory(res.data.history || []);
//             alert('Usage history fetched successfully!');
//         } catch (err) {
//             console.error(err);
//             alert('Failed to fetch usage history.');
//         }
//     };

//     // --- Fetch Emission Data for a specific date ---
//     const handleFetchEmissions = async () => {
//         try {
//             const res = await axios.get(`${EMISSIONS_API}?scope=all&date=2025-09-24`, {
//                 headers: { "X-API-KEY": apiKey }
//             });
//             setEmissionData(res.data);
//             alert('Emission data fetched successfully!');
//         } catch (err) {
//             console.error(err);
//             alert('Failed to fetch emissions.');
//         }
//     };

//     return (
//         <div style={styles.pageContainer}>
//             <h1 style={styles.h1}>🛰 API / Developer Access</h1>

//             <div style={styles.gridContainer}>

//                 {/* Left Column: API Key Management & Status */}
//                 <div>
//                     <div style={styles.dataCard}>
//                         <h3 style={styles.cardHeader}><span style={styles.icon}>🔑</span> API Key Management</h3>
                        
//                         <label htmlFor="apiKey" style={styles.label}>Active Access Key:</label>
//                         <input
//                             type="text"
//                             id="apiKey"
//                             value={apiKey}
//                             readOnly
//                             style={{ ...styles.input, color: 'rgba(0, 255, 200, 1)' }}
//                         />
//                         <p style={{ color: 'rgba(255, 99, 132, 1)', fontSize: '0.85em', marginTop: '-5px', marginBottom: '15px' }}>
//                             ⚠ Treat this key as a password. Do not expose it publicly.
//                         </p>

//                         <button onClick={handleGenerateApiKey} style={styles.button}>
//                             Revoke & Generate New Key
//                         </button>
                        
//                         <button onClick={handleViewUsageHistory} style={{ ...styles.button, ...styles.fadedButton, marginTop: '20px' }}>
//                             View Usage History
//                         </button>

//                         {usageHistory.length > 0 && (
//                             <div style={{ marginTop: '15px', color: '#fff' }}>
//                                 <strong>Last 5 API calls:</strong>
//                                 <ul>
//                                     {usageHistory.slice(0, 5).map((item, i) => (
//                                         <li key={i}>{item}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>

//                     <div style={styles.dataCard}>
//                         <h3 style={styles.cardHeader}><span style={styles.icon}>⚡</span> API Status & Rate Limits</h3>
//                         <p style={{ color: 'var(--text-faded, #a0a0a0)', marginBottom: '10px' }}>
//                             <strong style={{ color: 'var(--main-color, #00ffc8)' }}>Status:</strong> Operational (Latency: 50ms)
//                         </p>
//                         <p style={{ color: 'var(--text-faded, #a0a0a0)', marginBottom: '10px' }}>
//                             <strong style={{ color: 'var(--main-color, #00ffc8)' }}>Rate Limit:</strong> 1,000 requests per minute
//                         </p>
//                         <p style={{ color: 'var(--text-faded, #a0a0a0)' }}>
//                             <strong style={{ color: 'var(--main-color, #00ffc8)' }}>Expiration:</strong> Never (Permanent Key)
//                         </p>

//                         <button onClick={handleFetchEmissions} style={{ ...styles.button, marginTop: '15px' }}>
//                             Fetch Emissions for 2025-09-24
//                         </button>

//                         {emissionData && (
//                             <div style={{ marginTop: '15px', color: 'var(--main-color, #00ffc8)' }}>
//                                 <strong>Emission Data:</strong>
//                                 <pre style={{ color: '#00ffc8' }}>{JSON.stringify(emissionData, null, 2)}</pre>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Right Column: API Documentation */}
//                 <div style={styles.dataCard}>
//                     <h3 style={styles.cardHeader}><span style={styles.icon}>📖</span> API Documentation (v1)</h3>
//                     <p style={styles.label}>Base URL: <strong style={{color: 'var(--main-color, #00ffc8)'}}>https://api.carboninsights.com/</strong></p>
//                     <p style={{ color: 'var(--text-faded, #a0a0a0)', marginBottom: '30px' }}>
//                         All endpoints require the API Key to be passed in the *X-API-KEY* header.
//                     </p>

//                     {/* Example Endpoints */}
//                     <div style={styles.endpointTitle}>1. Fetch Emission Data (Real-time)</div>
//                     <div style={styles.codeBlock}>
//                         <span style={styles.methodTag}>GET</span>/api/v1/emissions?scope=all&date=2025-09-24
//                     </div>

//                     <div style={styles.endpointTitle}>2. Fetch Active Optimizations</div>
//                     <div style={styles.codeBlock}>
//                         <span style={styles.methodTag}>GET</span>/api/v1/optimizations
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default APIAccessPage;
