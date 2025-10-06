




import React, { useState } from 'react';

// --- Styles (unchanged) ---
const styles = {
    pageContainer: { background: 'rgba(0,5,10,0.95)', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Roboto, sans-serif', color: '#fff' },
    h1: { color: '#00ffc8', fontSize: '2.5em', marginBottom: '30px', textAlign: 'center', textShadow: '0 0 10px rgba(0,255,200,0.8)' },
    settingsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px,1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' },
    dataCard: { background: 'rgba(5,15,25,0.9)', border: '1px solid #00ffc8', boxShadow: '0 0 15px rgba(0,255,200,0.4)', borderRadius: '12px', padding: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    cardHeader: { color: '#00ffc8', fontSize: '1.4em', marginBottom: '20px', display: 'flex', alignItems: 'center', borderBottom: '1px dashed rgba(0,255,200,0.2)', paddingBottom: '10px' },
    icon: { marginRight: '10px', fontSize: '1.3em', color: '#00ffc8' },
    label: { display: 'block', color: '#a0a0a0', marginBottom: '8px', fontSize: '0.95em' },
    input: { width: 'calc(100% - 20px)', padding: '10px', marginBottom: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,255,200,0.3)', borderRadius: '5px', color: '#fff', fontSize: '0.9em' },
    select: { width: '100%', padding: '10px', marginBottom: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,255,200,0.3)', borderRadius: '5px', color: '#fff', fontSize: '0.9em', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300ffc8'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '20px' },
    button: { backgroundColor: '#00ffc8', color: '#000', border: 'none', padding: '12px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', textTransform: 'uppercase', transition: 'background-color 0.3s, box-shadow 0.3s', boxShadow: '0 0 10px rgba(0,255,200,0.7)', marginTop: '10px' },
    dangerButton: { backgroundColor: 'rgba(255,99,132,0.8)', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', textTransform: 'uppercase', transition: 'background-color 0.3s, box-shadow 0.3s', boxShadow: '0 0 10px rgba(255,99,132,0.7)', marginTop: '10px' },
    toggleContainer: { display: 'flex', alignItems: 'center', marginBottom: '15px' },
    toggleSwitch: { position: 'relative', display: 'inline-block', width: '60px', height: '34px', marginRight: '15px' },
    toggleInput: { opacity: 0, width: 0, height: 0 },
    slider: { position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.2)', transition: '.4s', borderRadius: '34px' },
    sliderBefore: { position: 'absolute', content: '""', height: '26px', width: '26px', left: '4px', bottom: '4px', backgroundColor: '#fff', transition: '.4s', borderRadius: '50%' },
};



// --- ToggleSwitch Component ---
const ToggleSwitch = ({ label, checked, onChange }) => (
    <div style={styles.toggleContainer}>
        <label style={styles.toggleSwitch}>
            <input type="checkbox" checked={checked} onChange={onChange} style={styles.toggleInput} />
            <span style={{ ...styles.slider, ...(checked && { backgroundColor: styles.sliderChecked?.backgroundColor || '#00ffc8' }) }} />
        </label>
        <span style={styles.label}>{label}</span>
    </div>
);

// --- AdminPage Component ---
const AdminPage = () => {
    const [apiKey, setApiKey] = useState('*SAMPLE-KEY*');
    const [alertThreshold, setAlertThreshold] = useState(25);
    const [updateFrequency, setUpdateFrequency] = useState('daily');
    const [scope3Integration, setScope3Integration] = useState(true);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [predictiveAnalytics, setPredictiveAnalytics] = useState(true);
    const [showTrends, setShowTrends] = useState(true);
    const [userEmail, setUserEmail] = useState('user@example.com'); // Example logged-in user email

    // --- Handlers ---
    const handleGenerateApiKey = () => {
        const newKey = 'API-' + Math.random().toString(36).substring(2, 12).toUpperCase();
        setApiKey(newKey);
        alert('New API Key Generated: ' + newKey);
    };

    const handleExportApiKey = () => {
        const blob = new Blob([apiKey], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'API_KEY.txt';
        link.click();
        URL.revokeObjectURL(url);
        alert('API Key exported!');
    };

    const handleTestAlert = () => {
        alert(`Alert triggered! Threshold set at ${alertThreshold}%`);
        if (emailNotifications) {
            // Mock sending email notification
            fetch('https://mock-api-send-email.com/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: userEmail,
                    subject: 'Carbon Alert Triggered!',
                    body: `Your emissions exceeded the threshold of ${alertThreshold}%.`
                })
            })
            .then(() => alert(`Email notification sent to ${userEmail}`))
            .catch(() => alert('Failed to send email notification.'));
        }
        if (smsNotifications) {
            alert('SMS notification sent (mock).'); // Replace with real SMS API
        }
    };

    const handleSavePreferences = () => {
        alert(`Preferences saved:\nUpdate Frequency: ${updateFrequency}\nScope3 Integration: ${scope3Integration ? 'Enabled' : 'Disabled'}\nPredictive Analytics: ${predictiveAnalytics ? 'Enabled' : 'Disabled'}\nShow Trends: ${showTrends ? 'Enabled' : 'Disabled'}`);
    };

    return (
        <div style={styles.pageContainer}>
            <h1 style={styles.h1}>⚙ Settings / Admin Page</h1>

            <div style={styles.settingsGrid}>
                {/* API & Integrations Card */}
                <div style={styles.dataCard}>
                    <h3 style={styles.cardHeader}><span style={styles.icon}>🔑</span> API & Integrations</h3>
                    <label style={styles.label}>Current API Key:</label>
                    <input type="text" value={apiKey} readOnly style={styles.input} />
                    <button style={styles.button} onClick={handleGenerateApiKey}>Generate New API Key</button>
                    <button style={{ ...styles.button, marginLeft: '10px', backgroundColor: 'transparent', border: '1px solid rgba(40,150,255,0.8)', boxShadow: '0 0 10px rgba(40,150,255,0.7)', color: 'rgba(40,150,255,1)' }} onClick={handleExportApiKey}>
                        Export API Key
                    </button>
                    <ToggleSwitch label="Enable Scope-3 Supplier Data Integration" checked={scope3Integration} onChange={() => setScope3Integration(!scope3Integration)} />
                </div>

                {/* Alert Notifications Card */}
                <div style={styles.dataCard}>
                    <h3 style={styles.cardHeader}><span style={styles.icon}>🔔</span> Alert Notifications</h3>
                    <label style={styles.label}>Emission Exceedance Threshold (%)</label>
                    <input type="number" value={alertThreshold} onChange={e => setAlertThreshold(e.target.value)} min="5" max="100" style={styles.input} />
                    <ToggleSwitch label="Email Notifications" checked={emailNotifications} onChange={() => setEmailNotifications(!emailNotifications)} />
                    <ToggleSwitch label="SMS Notifications" checked={smsNotifications} onChange={() => setSmsNotifications(!smsNotifications)} />
                    <button style={styles.dangerButton} onClick={handleTestAlert}>Test Alert System</button>
                </div>

                {/* Dashboard & Preferences Card */}
                <div style={styles.dataCard}>
                    <h3 style={styles.cardHeader}><span style={styles.icon}>📊</span> Dashboard Preferences</h3>
                    <label style={styles.label}>Dashboard Update Frequency</label>
                    <select value={updateFrequency} onChange={e => setUpdateFrequency(e.target.value)} style={styles.select}>
                        <option value="realtime">Real-time</option>
                        <option value="hourly">Hourly</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                    </select>
                    <ToggleSwitch label="Enable Predictive Analytics" checked={predictiveAnalytics} onChange={() => setPredictiveAnalytics(!predictiveAnalytics)} />
                    <ToggleSwitch label="Show Historical Trend Lines" checked={showTrends} onChange={() => setShowTrends(!showTrends)} />
                    <button style={{ ...styles.button, backgroundColor: 'transparent', border: '1px solid rgba(0,192,255,0.8)', color: 'rgba(0,192,255,1)' }} onClick={handleSavePreferences}>
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
