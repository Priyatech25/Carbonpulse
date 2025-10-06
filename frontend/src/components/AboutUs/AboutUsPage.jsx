import React from 'react';

// --- Reusable Styles (Inherited from previous components) ---
const styles = {
    pageContainer: {
        background: 'rgba(0, 5, 10, 0.95)', // Very dark background
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: 'Roboto, sans-serif',
        color: 'var(--text-color, #ffffff)',
    },
    h1: {
        color: 'var(--main-color, #00ffc8)',
        fontSize: '2.5em',
        marginBottom: '10px',
        textAlign: 'center',
        textShadow: '0 0 10px rgba(0, 255, 200, 0.8)',
    },
    tagline: {
        color: 'var(--text-faded, #a0a0a0)',
        fontSize: '1.2em',
        textAlign: 'center',
        marginBottom: '40px',
    },
    contentGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
    subHeader: {
        color: 'rgba(40, 150, 255, 1)',
        fontSize: '1.1em',
        marginTop: '15px',
        marginBottom: '10px',
    },
    listItem: {
        color: 'var(--text-faded, #a0a0a0)',
        marginBottom: '8px',
        listStyleType: 'disc',
        marginLeft: '20px',
    },
    processStep: {
        textAlign: 'center',
        padding: '15px 5px',
        border: '1px solid rgba(0, 255, 200, 0.3)',
        borderRadius: '8px',
        backgroundColor: 'rgba(0, 255, 200, 0.05)',
        position: 'relative',
    },
    processArrow: {
        color: 'var(--main-color, #00ffc8)',
        fontSize: '3em',
        lineHeight: '0',
        margin: '10px 0',
    }
};

// --- Sub-Component for the Technical Process Flow ---
const AboutUs = () => (
    <div style={{ marginTop: '20px' }}>
        <h3 style={styles.subHeader}>The Carbon Insights Engine</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', alignItems: 'center' }}>
            
            {/* Step 1: Data Ingestion */}
            <div style={styles.processStep}>
                <div style={styles.icon}>📡</div>
                <strong style={{color: '#fff'}}>Data Ingestion</strong>
                <p style={{fontSize: '0.8em', margin: '5px 0', color: 'var(--text-faded)'}}>APIs, Sensors, Manual Input</p>
            </div>
            
            <div style={styles.processArrow}>→</div>

            {/* Step 2: Calculation & Verification */}
            <div style={styles.processStep}>
                <div style={{...styles.icon, color: 'rgba(40, 150, 255, 1)'}}>⚙</div>
                <strong style={{color: '#fff'}}>Calculation & AI</strong>
                <p style={{fontSize: '0.8em', margin: '5px 0', color: 'var(--text-faded)'}}>Scope 1, 2, 3 Models, Prediction</p>
            </div>

            <div style={styles.processArrow}>→</div>

            {/* Step 3: Actionable Intelligence */}
            <div style={styles.processStep}>
                <div style={{...styles.icon, color: 'rgba(255, 99, 132, 1)'}}>💡</div>
                <strong style={{color: '#fff'}}>Actionable Intelligence</strong>
                <p style={{fontSize: '0.8em', margin: '5px 0', color: 'var(--text-faded)'}}>Alerts, Reports, Optimization</p>
            </div>
        </div>
    </div>
);

// --- Main AboutUsPage Component ---
const AboutUsPage = () => (
    <div style={styles.pageContainer}>
        <h1 style={styles.h1}>🌍 About Enterprise Carbon Insights</h1>
        <p style={styles.tagline}>
            Empowering a net-zero future through predictive analytics and data-driven action.
        </p>

        <div style={styles.contentGrid}>

            {/* Card 1: Mission & Vision */}
            <div style={styles.dataCard}>
                <h3 style={styles.cardHeader}><span style={styles.icon}>🎯</span> Mission & Vision</h3>
                <p style={{ color: '#fff', marginBottom: '15px' }}>
                    Our mission is to transform complex environmental data into <strong>simple, actionable insights</strong>. 
                    We believe that achieving net-zero requires precision, foresight, and enterprise-wide collaboration.
                </p>
                <div style={{ padding: '10px', border: '1px dashed rgba(40, 150, 255, 0.5)', borderRadius: '5px' }}>
                    <h4 style={styles.subHeader}>Our Commitment:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={styles.listItem}>Accuracy (ISO Standard Compliant)</li>
                        <li style={styles.listItem}>Transparency (Open-Source Emission Factors)</li>
                        <li style={styles.listItem}>Action (Focus on Reduction over Reporting)</li>
                    </ul>
                </div>
            </div>

            {/* Card 2: Technology & Methodology */}
            <div style={{ ...styles.dataCard, gridColumn: 'span 2' }}>
                <h3 style={styles.cardHeader}><span style={styles.icon}>💻</span> Technology & Methodology</h3>
                <p style={{ color: 'var(--text-faded)', marginBottom: '15px' }}>
                    We leverage <strong>Quantum-Inspired AI</strong> to process granular operational data, 
                    providing predictions and optimization scenarios that reduce carbon impact before emissions occur.
                </p>
                <AboutUs /> {/* ✅ FIXED */}
            </div>

            {/* Card 3: Team & Values */}
            <div style={styles.dataCard}>
                <h3 style={styles.cardHeader}><span style={styles.icon}>🤝</span> Our Team & Values</h3>
                <p style={{ color: '#fff', marginBottom: '15px' }}>
                    We are a dedicated team of data scientists, environmental engineers, and software architects committed to solving the climate crisis with technology.
                </p>
                <div style={{ backgroundColor: 'rgba(255, 99, 132, 0.1)', padding: '10px', borderRadius: '5px' }}>
                    <h4 style={{ ...styles.subHeader, color: 'rgba(255, 99, 132, 1)' }}>Key Value: Impact</h4>
                    <p style={{ fontSize: '0.85em', color: 'var(--text-faded)' }}>
                        Our success is measured by the total <strong>CO₂ reduction</strong> achieved by our clients globally.
                    </p>
                </div>
            </div>

        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px', color: 'var(--text-faded)' }}>
            <p>
                Ready to transform your climate strategy?{" "}
                <a href="#" style={{ color: 'var(--main-color, #00ffc8)', textDecoration: 'none', fontWeight: 'bold' }}>
                    Request a Live Demo
                </a>
            </p>
        </div>
    </div>
);

export default AboutUsPage;
