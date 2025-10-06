// import React from 'react';

// // --- Static Data ---

// const identifiedAreas = [
//     'High-Consumption HVAC Units',
//     'Inefficient Fleet Vehicles',
//     'Old Server Infrastructure',
//     'Untracked Scope 3 Suppliers',
// ];

// const optimizationOpportunities = [
//     {
//         title: 'Upgrade HVAC Schedule in Zone C',
//         description: 'Automate climate control based on occupancy & external temp data.',
//         saved: '150,000 kg CO₂',
//         status: '58% Implemented',
//         statusColor: 'rgba(0, 255, 200, 1)',
//         action: 'View Details',
//     },
//     {
//         title: 'Electrify 20% of Local Fleet',
//         description: 'Replace top 5 diesel vehicles with electric alternatives.',
//         saved: '25,000 kg CO₂',
//         status: 'Pending Review',
//         statusColor: 'rgba(255, 165, 0, 1)',
//         action: 'Implement Plan',
//     },
//     {
//         title: 'Engage Top 5 Scope 3 Suppliers',
//         description: 'Collaborate on setting joint reduction targets (SBTi).',
//         saved: 'Upt to 5,000 kg CO₂',
//         status: '0% Implemented',
//         statusColor: 'rgba(255, 99, 132, 1)',
//         action: 'Implement Plan',
//     },
// ];

// // --- Reusable Styles (Matching the provided image) ---
// const styles = {
//     // Main outer container
//     cardContainer: {
//         background: 'rgba(5, 15, 25, 0.9)', // Dark/Transparent background
//         border: '1px solid var(--main-color, #00ffc8)', // Neon border
//         boxShadow: '0 0 15px rgba(0, 255, 200, 0.5)', // Outer glow
//         borderRadius: '12px',
//         padding: '30px',
//         margin: '20px auto',
//         color: 'var(--text-color, #ffffff)',
//     },
//     h2: {
//         color: 'var(--main-color, #00ffc8)',
//         fontSize: '1.8em',
//         borderBottom: '1px solid rgba(0, 255, 200, 0.3)',
//         paddingBottom: '15px',
//         marginBottom: '20px',
//     },
//     // Grid for the two main columns
//     contentGrid: {
//         display: 'grid',
//         gridTemplateColumns: '250px 1fr', // Identified Areas column width fixed, Opportunities column flexible
//         gap: '30px',
//     },
//     // Identified Areas Column
//     identifiedAreaTitle: {
//         color: 'var(--main-color, #00ffc8)',
//         textTransform: 'uppercase',
//         marginBottom: '15px',
//         fontWeight: 'bold',
//     },
//     areaItem: {
//         display: 'flex',
//         alignItems: 'center',
//         padding: '8px 0',
//         color: 'var(--text-faded, #a0a0a0)',
//         fontSize: '0.95em',
//     },
//     bullet: {
//         width: '8px',
//         height: '8px',
//         borderRadius: '50%',
//         backgroundColor: 'var(--main-color, #00ffc8)',
//         marginRight: '10px',
//         boxShadow: '0 0 5px var(--main-color, #00ffc8)',
//     },
//     // Optimization Opportunities Column
//     opportunitiesTitle: {
//         color: 'var(--main-color, #00ffc8)',
//         textTransform: 'uppercase',
//         marginBottom: '15px',
//         fontWeight: 'bold',
//     },
//     opportunityCard: {
//         background: 'rgba(255, 255, 255, 0.05)', // Slightly lighter internal card
//         border: '1px solid rgba(0, 255, 200, 0.2)',
//         borderRadius: '8px',
//         padding: '15px',
//         marginBottom: '15px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         transition: 'border-color 0.3s',
//     },
//     opportunityTitle: {
//         color: 'var(--main-color, #00ffc8)',
//         fontSize: '1.1em',
//         marginBottom: '5px',
//     },
//     button: {
//         backgroundColor: 'transparent',
//         color: 'var(--main-color, #00ffc8)',
//         border: '1px solid var(--main-color, #00ffc8)',
//         padding: '8px 15px',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         fontWeight: 'bold',
//         transition: 'background-color 0.3s',
//         marginLeft: '15px',
//         whiteSpace: 'nowrap',
//     },
//     footerButton: {
//         backgroundColor: 'rgba(40, 150, 255, 0.8)',
//         color: '#fff',
//         border: 'none',
//         padding: '12px 25px',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         fontWeight: 'bold',
//         textTransform: 'uppercase',
//         marginTop: '20px',
//         boxShadow: '0 0 10px rgba(40, 150, 255, 0.7)',
//     }
// };

// // --- Sub-Component for a single Optimization Opportunity Card ---
// const OpportunityItem = ({ data }) => (
//     <div style={styles.opportunityCard}>
//         {/* Left Side: Details */}
//         <div style={{ flex: 2 }}>
//             <div style={styles.opportunityTitle}>{data.title}</div>
//             <p style={{ color: 'var(--text-faded, #a0a0a0)', fontSize: '0.85em', margin: '5px 0' }}>
//                 {data.description}
//             </p>
//             <div style={{ marginTop: '10px' }}>
//                 <span style={{ color: 'var(--main-color, #00ffc8)', fontWeight: 'bold' }}>
//                     Estimated Annual CO₂ Saved:
//                 </span>
//                 <strong style={{ marginLeft: '5px', color: data.statusColor }}>{data.saved}</strong>
//             </div>
//         </div>

//         {/* Right Side: Status and Action */}
//         <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//             {/* Status Indicator (Simulating the donut chart/percentage) */}
//             <div style={{ textAlign: 'center', marginRight: '20px' }}>
//                 <div style={{ 
//                     // Simulating a progress ring/donut chart appearance
//                     width: '60px', 
//                     height: '60px', 
//                     borderRadius: '50%',
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     justifyContent: 'center',
//                    border: `4px solid ${data.statusColor}`,
//                    boxShadow: `0 0 8px ${data.statusColor}`,

//                     fontSize: '0.8em',
//                     fontWeight: 'bold',
//                     color: data.statusColor
//                 }}>
//                     {data.status.split(' ')[0]}
//                 </div>
//                 <div style={{ fontSize: '0.7em', color: 'var(--text-faded, #a0a0a0)', marginTop: '5px' }}>
//                     {data.status.split(' ').slice(1).join(' ')}
//                 </div>
//             </div>
            
//             <button style={{ ...styles.button, borderColor: data.statusColor, color: data.statusColor }}>
//                 {data.action}
//             </button>
//         </div>
//     </div>
// );

// // --- Main OptimisationCard Component ---

// const OptimisationCard = () => (
//     <div style={styles.cardContainer}>
//         <h2 style={styles.h2}>Optimization for Reduction</h2>
        
//         <div style={styles.contentGrid}>
//             {/* Left Column: Identified Areas */}
//             <div>
//                 <div style={styles.identifiedAreaTitle}>Identified Areas</div>
//                 {identifiedAreas.map((area, index) => (
//                     <div key={index} style={styles.areaItem}>
//                         <div style={styles.bullet}></div>
//                         {area}
//                     </div>
//                 ))}
//             </div>

//             {/* Right Column: Optimization Opportunities */}
//             <div>
//                 <div style={styles.opportunitiesTitle}>Optimization Opportunities</div>
//                 {optimizationOpportunities.map((opportunity, index) => (
//                     <OpportunityItem key={index} data={opportunity} />
//                 ))}
//             </div>
//         </div>
        
//         <div style={{ textAlign: 'right' }}>
//             <button style={styles.footerButton}>
//                 Generate More Suggestions
//             </button>
//         </div>
//     </div>
// );

// export default OptimisationCard;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import useRealtimeEmissions from "../../hooks/useRealtimeEmissions";

// const OptimisationCard = () => {
//   const { latest } = useRealtimeEmissions();
//   const [identifiedAreas, setIdentifiedAreas] = useState([]);
//   const [opportunities, setOpportunities] = useState([]);

//   const styles = {
//     cardContainer: { background: "rgba(5,15,25,0.9)", border: "1px solid var(--main-color,#00ffc8)", boxShadow: "0 0 15px rgba(0,255,200,0.5)", borderRadius: "12px", padding: "30px", margin: "20px auto", color: "#fff" },
//     h2: { color: "var(--main-color,#00ffc8)", fontSize: "1.8em", borderBottom: "1px solid rgba(0,255,200,0.3)", paddingBottom: "15px", marginBottom: "20px" },
//     contentGrid: { display: "grid", gridTemplateColumns: "250px 1fr", gap: "30px" },
//     identifiedAreaTitle: { color: "var(--main-color,#00ffc8)", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//     areaItem: { display: "flex", alignItems: "center", padding: "8px 0", color: "var(--text-faded,#a0a0a0)", fontSize: "0.95em" },
//     bullet: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--main-color,#00ffc8)", marginRight: "10px", boxShadow: "0 0 5px var(--main-color,#00ffc8)" },
//     opportunitiesTitle: { color: "var(--main-color,#00ffc8)", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//     opportunityCard: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,255,200,0.2)", borderRadius: "8px", padding: "15px", marginBottom: "15px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "border-color 0.3s" },
//     opportunityTitle: { color: "var(--main-color,#00ffc8)", fontSize: "1.1em", marginBottom: "5px" },
//     button: { backgroundColor: "transparent", color: "var(--main-color,#00ffc8)", border: "1px solid var(--main-color,#00ffc8)", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", transition: "background-color 0.3s", marginLeft: "15px", whiteSpace: "nowrap" },
//     footerButton: { backgroundColor: "rgba(40,150,255,0.8)", color: "#fff", border: "none", padding: "12px 25px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", textTransform: "uppercase", marginTop: "20px", boxShadow: "0 0 10px rgba(40,150,255,0.7)" }
//   };

//   const fetchOpportunities = async () => {
//     try {
//       const res = await axios.get("/api/optimisation");
//       setIdentifiedAreas(res.data.identified_areas);
//       setOpportunities(res.data.opportunities);
//     } catch (err) { console.error(err); }
//   };

//   useEffect(() => { fetchOpportunities(); }, []);

//   // Update live CO₂ saved based on emissions
//   useEffect(() => {
//     if (!latest) return;
//     setOpportunities(prev =>
//       prev.map(op => ({
//         ...op,
//         saved: `${(parseInt(op.saved.replace(/[^0-9]/g, "")) + Math.floor(latest.Total * 0.01)).toLocaleString()} kg CO₂`
//       }))
//     );
//   }, [latest]);

//   const updateStatus = async (title) => {
//     const new_status = "Implemented";
//     try {
//       await axios.post("/api/optimisation/update_status", { title, new_status });
//       setOpportunities(prev => prev.map(op => op.title === title ? { ...op, status: new_status, statusColor: "rgba(0,255,200,1)" } : op));
//     } catch (err) { console.error(err); }
//   };

//   const OpportunityItem = ({ data }) => (
//     <div style={styles.opportunityCard}>
//       <div style={{ flex: 2 }}>
//         <div style={styles.opportunityTitle}>{data.title}</div>
//         <p style={{ color: "var(--text-faded,#a0a0a0)", fontSize: "0.85em", margin: "5px 0" }}>{data.description}</p>
//         <div style={{ marginTop: "10px" }}>
//           <span style={{ color: "var(--main-color,#00ffc8)", fontWeight: "bold" }}>Estimated Annual CO₂ Saved:</span>
//           <strong style={{ marginLeft: "5px", color: data.statusColor }}>{data.saved}</strong>
//         </div>
//       </div>
//       <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
//         <div style={{ textAlign: "center", marginRight: "20px" }}>
//           <div style={{
//             width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
//             border: `4px solid ${data.statusColor}`, boxShadow: `0 0 8px ${data.statusColor}`, fontSize: "0.8em", fontWeight: "bold", color: data.statusColor
//           }}>{data.status.split(" ")[0]}</div>
//           <div style={{ fontSize: "0.7em", color: "var(--text-faded,#a0a0a0)", marginTop: "5px" }}>{data.status.split(" ").slice(1).join(" ")}</div>
//         </div>
//         <button style={{ ...styles.button, borderColor: data.statusColor, color: data.statusColor }} onClick={() => updateStatus(data.title)}>{data.action}</button>
//       </div>
//     </div>
//   );

//   return (
//     <div style={styles.cardContainer}>
//       <h2 style={styles.h2}>Optimization for Reduction</h2>
//       <div style={styles.contentGrid}>
//         <div>
//           <div style={styles.identifiedAreaTitle}>Identified Areas</div>
//           {identifiedAreas.map((area, index) => (
//             <div key={index} style={styles.areaItem}><div style={styles.bullet}></div>{area}</div>
//           ))}
//         </div>
//         <div>
//           <div style={styles.opportunitiesTitle}>Optimization Opportunities</div>
//           {opportunities.map((op, i) => <OpportunityItem key={i} data={op} />)}
//         </div>
//       </div>
//       <div style={{ textAlign: "right" }}>
//         <button style={styles.footerButton} onClick={fetchOpportunities}>Generate More Suggestions</button>
//       </div>
//     </div>
//   );
// };

// export default OptimisationCard;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // --- Styles (same as before) ---
// const styles = {
//   cardContainer: { background: "rgba(5, 15, 25, 0.9)", border: "1px solid #00ffc8", boxShadow: "0 0 15px rgba(0, 255, 200, 0.5)", borderRadius: "12px", padding: "30px", margin: "20px auto", color: "#fff" },
//   h2: { color: "#00ffc8", fontSize: "1.8em", borderBottom: "1px solid rgba(0, 255, 200, 0.3)", paddingBottom: "15px", marginBottom: "20px" },
//   contentGrid: { display: "grid", gridTemplateColumns: "250px 1fr", gap: "30px" },
//   identifiedAreaTitle: { color: "#00ffc8", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//   areaItem: { padding: "8px 0", color: "#a0a0a0", fontSize: "0.95em" },
//   bullet: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#00ffc8", marginRight: "10px" },
//   opportunitiesTitle: { color: "#00ffc8", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//   opportunityCard: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,255,200,0.2)", borderRadius: "8px", padding: "15px", marginBottom: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" },
//   opportunityTitle: { color: "#00ffc8", fontSize: "1.1em", marginBottom: "5px" },
//   button: { backgroundColor: "transparent", color: "#00ffc8", border: "1px solid #00ffc8", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", marginLeft: "15px" },
//   footerButton: { backgroundColor: "rgba(40,150,255,0.8)", color: "#fff", border: "none", padding: "12px 25px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", textTransform: "uppercase", marginTop: "20px" }
// };

// // --- Opportunity Item ---
// const OpportunityItem = ({ data }) => (
//   <div style={styles.opportunityCard}>
//     <div style={{ flex: 2 }}>
//       <div style={styles.opportunityTitle}>{data.title}</div>
//       <p style={{ color: "#a0a0a0", fontSize: "0.85em", margin: "5px 0" }}>{data.description}</p>
//       <div style={{ marginTop: "10px" }}><strong style={{ color: "#00ffc8" }}>Estimated Annual CO₂ Saved:</strong> <span style={{ color: data.statusColor }}>{data.saved}</span></div>
//     </div>
//     <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
//       <div style={{ textAlign: "center", marginRight: "20px" }}>
//         <div style={{ width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: `4px solid ${data.statusColor}`, color: data.statusColor, fontWeight: "bold" }}>{data.status.split(' ')[0]}</div>
//         <div style={{ fontSize: "0.7em", color: "#a0a0a0", marginTop: "5px" }}>{data.status.split(' ').slice(1).join(' ')}</div>
//       </div>
//       <button style={{ ...styles.button, borderColor: data.statusColor, color: data.statusColor }}>{data.action}</button>
//     </div>
//   </div>
// );

// // --- Main OptimisationCard ---
// const OptimisationCard = () => {
//   const [identifiedAreas, setIdentifiedAreas] = useState([]);
//   const [opportunities, setOpportunities] = useState([]);

//   // --- Fetch Data from Backend ---
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://127.0.0.1:8014/api/v1/optimisation"); // your backend endpoint
//         setIdentifiedAreas(res.data.identifiedAreas || []);
//         setOpportunities(res.data.optimizationOpportunities || []);
//       } catch (err) {
//         console.error("Error fetching optimisation data:", err);
//       }
//     };

//     fetchData();
//     const interval = setInterval(fetchData, 5000); // Refresh every 5s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={styles.cardContainer}>
//       <h2 style={styles.h2}>Optimization for Reduction</h2>
//       <div style={styles.contentGrid}>
//         <div>
//           <div style={styles.identifiedAreaTitle}>Identified Areas</div>
//           {identifiedAreas.map((area, index) => (
//             <div key={index} style={styles.areaItem}><span style={styles.bullet}></span>{area}</div>
//           ))}
//         </div>
//         <div>
//           <div style={styles.opportunitiesTitle}>Optimization Opportunities</div>
//           {opportunities.map((op, i) => <OpportunityItem key={i} data={op} />)}
//         </div>
//       </div>
//       <div style={{ textAlign: "right" }}>
//         <button style={styles.footerButton}>Generate More Suggestions</button>
//       </div>
//     </div>
//   );
// };

// export default OptimisationCard;




// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const styles = {
//   cardContainer: { background: "rgba(5, 15, 25, 0.9)", border: "1px solid #00ffc8", boxShadow: "0 0 15px rgba(0, 255, 200, 0.5)", borderRadius: "12px", padding: "30px", margin: "20px auto", color: "#fff" },
//   h2: { color: "#00ffc8", fontSize: "1.8em", borderBottom: "1px solid rgba(0, 255, 200, 0.3)", paddingBottom: "15px", marginBottom: "20px" },
//   contentGrid: { display: "grid", gridTemplateColumns: "250px 1fr", gap: "30px" },
//   identifiedAreaTitle: { color: "#00ffc8", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//   areaItem: { padding: "8px 0", color: "#a0a0a0", fontSize: "0.95em" },
//   bullet: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#00ffc8", marginRight: "10px" },
//   opportunitiesTitle: { color: "#00ffc8", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//   opportunityCard: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,255,200,0.2)", borderRadius: "8px", padding: "15px", marginBottom: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" },
//   opportunityTitle: { color: "#00ffc8", fontSize: "1.1em", marginBottom: "5px" },
//   button: { backgroundColor: "transparent", color: "#00ffc8", border: "1px solid #00ffc8", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", marginLeft: "15px" },
//   footerButton: { backgroundColor: "rgba(40,150,255,0.8)", color: "#fff", border: "none", padding: "12px 25px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", textTransform: "uppercase", marginTop: "20px" }
// };

// const OpportunityItem = ({ data }) => (
//   <div style={styles.opportunityCard}>
//     <div style={{ flex: 2 }}>
//       <div style={styles.opportunityTitle}>{data.title}</div>
//       <p style={{ color: "#a0a0a0", fontSize: "0.85em", margin: "5px 0" }}>{data.description}</p>
//       <div style={{ marginTop: "10px" }}>
//         <strong style={{ color: "#00ffc8" }}>Estimated Annual CO₂ Saved:</strong>
//         <span style={{ color: data.statusColor }}>{data.saved}</span>
//       </div>
//     </div>
//     <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
//       <div style={{ textAlign: "center", marginRight: "20px" }}>
//         <div style={{ width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: `4px solid ${data.statusColor}`, color: data.statusColor, fontWeight: "bold" }}>
//           {data.status.split(" ")[0]}
//         </div>
//         <div style={{ fontSize: "0.7em", color: "#a0a0a0", marginTop: "5px" }}>{data.status.split(" ").slice(1).join(" ")}</div>
//       </div>
//       <button style={{ ...styles.button, borderColor: data.statusColor, color: data.statusColor }}>{data.action}</button>
//     </div>
//   </div>
// );

// const OptimisationCard = () => {
//   const [identifiedAreas, setIdentifiedAreas] = useState([]);
//   const [opportunities, setOpportunities] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://127.0.0.1:8014/api/v1/optimisation");
//         setIdentifiedAreas(res.data.identifiedAreas || []);
//         setOpportunities(res.data.optimizationOpportunities || []);
//       } catch (err) {
//         console.error("Error fetching optimisation data:", err);
//       }
//     };

//     fetchData();
//     const interval = setInterval(fetchData, 5000); // Poll every 5s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={styles.cardContainer}>
//       <h2 style={styles.h2}>Optimization for Reduction</h2>
//       <div style={styles.contentGrid}>
//         <div>
//           <div style={styles.identifiedAreaTitle}>Identified Areas</div>
//           {identifiedAreas.map((area, i) => <div key={i} style={styles.areaItem}><span style={styles.bullet}></span>{area}</div>)}
//         </div>
//         <div>
//           <div style={styles.opportunitiesTitle}>Optimization Opportunities</div>
//           {opportunities.map((op, i) => <OpportunityItem key={i} data={op} />)}
//         </div>
//       </div>
//       <div style={{ textAlign: "right" }}>
//         <button style={styles.footerButton}>Generate More Suggestions</button>
//       </div>
//     </div>
//   );
// };

// export default OptimisationCard;







// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const styles = {
//   cardContainer: { background: "rgba(5, 15, 25, 0.9)", border: "1px solid #00ffc8", boxShadow: "0 0 15px rgba(0, 255, 200, 0.5)", borderRadius: "12px", padding: "30px", margin: "20px auto", color: "#fff" },
//   h2: { color: "#00ffc8", fontSize: "1.8em", borderBottom: "1px solid rgba(0, 255, 200, 0.3)", paddingBottom: "15px", marginBottom: "20px" },
//   contentGrid: { display: "grid", gridTemplateColumns: "250px 1fr", gap: "30px" },
//   identifiedAreaTitle: { color: "#00ffc8", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//   areaItem: { padding: "8px 0", color: "#a0a0a0", fontSize: "0.95em" },
//   bullet: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#00ffc8", marginRight: "10px" },
//   opportunitiesTitle: { color: "#00ffc8", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//   opportunityCard: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,255,200,0.2)", borderRadius: "8px", padding: "15px", marginBottom: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" },
//   opportunityTitle: { color: "#00ffc8", fontSize: "1.1em", marginBottom: "5px" },
//   button: { backgroundColor: "transparent", color: "#00ffc8", border: "1px solid #00ffc8", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", marginLeft: "15px" },
//   footerButton: { backgroundColor: "rgba(40,150,255,0.8)", color: "#fff", border: "none", padding: "12px 25px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", textTransform: "uppercase", marginTop: "20px" }
// };

// const OpportunityItem = ({ data }) => (
//   <div style={styles.opportunityCard}>
//     <div style={{ flex: 2 }}>
//       <div style={styles.opportunityTitle}>{data.title}</div>
//       <p style={{ color: "#a0a0a0", fontSize: "0.85em", margin: "5px 0" }}>{data.description}</p>
//       <div style={{ marginTop: "10px" }}>
//         <strong style={{ color: "#00ffc8" }}>Estimated Annual CO₂ Saved:</strong>
//         <span style={{ color: data.statusColor, marginLeft: "5px" }}>{data.saved}</span>
//       </div>
//     </div>
//     <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
//       <div style={{ textAlign: "center", marginRight: "20px" }}>
//         <div style={{ width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: `4px solid ${data.statusColor}`, color: data.statusColor, fontWeight: "bold" }}>
//           {data.status.split(" ")[0]}
//         </div>
//         <div style={{ fontSize: "0.7em", color: "#a0a0a0", marginTop: "5px" }}>{data.status.split(" ").slice(1).join(" ")}</div>
//       </div>
//       <button style={{ ...styles.button, borderColor: data.statusColor, color: data.statusColor }}>{data.action}</button>
//     </div>
//   </div>
// );

// const OptimisationCard = () => {
//   const [identifiedAreas, setIdentifiedAreas] = useState([]);
//   const [opportunities, setOpportunities] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://127.0.0.1:8014/api/v1/optimisation");
//         setIdentifiedAreas(res.data.identified_areas || []);
//         setOpportunities(res.data.opportunities || []);
//         setError("");
//       } catch (err) {
//         console.error("Error fetching optimisation data:", err);
//         setError("Failed to fetch data. Check backend & CORS settings.");
//       }
//     };

//     fetchData();
//     const interval = setInterval(fetchData, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={styles.cardContainer}>
//       <h2 style={styles.h2}>Optimization for Reduction</h2>
//       {error && <div style={{ color: "red", marginBottom: "15px" }}>{error}</div>}
//       <div style={styles.contentGrid}>
//         <div>
//           <div style={styles.identifiedAreaTitle}>Identified Areas</div>
//           {identifiedAreas.map((area, i) => (
//             <div key={i} style={styles.areaItem}>
//               <span style={styles.bullet}></span>{area}
//             </div>
//           ))}
//         </div>
//         <div>
//           <div style={styles.opportunitiesTitle}>Optimization Opportunities</div>
//           {opportunities.map((op, i) => (
//             <OpportunityItem key={i} data={op} />
//           ))}
//         </div>
//       </div>
//       <div style={{ textAlign: "right" }}>
//         <button style={styles.footerButton}>Generate More Suggestions</button>
//       </div>
//     </div>
//   );
// };

// export default OptimisationCard;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const styles = {
//   cardContainer: { background: "rgba(5, 15, 25, 0.9)", border: "1px solid #00ffc8", boxShadow: "0 0 15px rgba(0, 255, 200, 0.5)", borderRadius: "12px", padding: "30px", margin: "20px auto", color: "#fff" },
//   h2: { color: "#00ffc8", fontSize: "1.8em", borderBottom: "1px solid rgba(0, 255, 200, 0.3)", paddingBottom: "15px", marginBottom: "20px" },
//   contentGrid: { display: "grid", gridTemplateColumns: "250px 1fr", gap: "30px" },
//   identifiedAreaTitle: { color: "#00ffc8", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//   areaItem: { padding: "8px 0", color: "#a0a0a0", fontSize: "0.95em" },
//   bullet: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#00ffc8", marginRight: "10px" },
//   opportunitiesTitle: { color: "#00ffc8", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//   opportunityCard: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,255,200,0.2)", borderRadius: "8px", padding: "15px", marginBottom: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" },
//   opportunityTitle: { color: "#00ffc8", fontSize: "1.1em", marginBottom: "5px" },
//   button: { backgroundColor: "transparent", color: "#00ffc8", border: "1px solid #00ffc8", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", marginLeft: "15px" },
//   footerButton: { backgroundColor: "rgba(40,150,255,0.8)", color: "#fff", border: "none", padding: "12px 25px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", textTransform: "uppercase", marginTop: "20px" }
// };

// const OpportunityItem = ({ data }) => (
//   <div style={styles.opportunityCard}>
//     <div style={{ flex: 2 }}>
//       <div style={styles.opportunityTitle}>{data.title}</div>
//       <p style={{ color: "#a0a0a0", fontSize: "0.85em", margin: "5px 0" }}>{data.description}</p>
//       <div style={{ marginTop: "10px" }}>
//         <strong style={{ color: "#00ffc8" }}>Estimated Annual CO₂ Saved:</strong>
//         <span style={{ color: data.statusColor, marginLeft: "5px" }}>{data.saved}</span>
//       </div>
//     </div>
//     <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
//       <div style={{ textAlign: "center", marginRight: "20px" }}>
//         <div style={{ width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: `4px solid ${data.statusColor}`, color: data.statusColor, fontWeight: "bold" }}>
//           {data.status.split(" ")[0]}
//         </div>
//         <div style={{ fontSize: "0.7em", color: "#a0a0a0", marginTop: "5px" }}>{data.status.split(" ").slice(1).join(" ")}</div>
//       </div>
//       <button style={{ ...styles.button, borderColor: data.statusColor, color: data.statusColor }}>{data.action}</button>
//     </div>
//   </div>
// );

// const OptimisationCard = () => {
//   const [identifiedAreas, setIdentifiedAreas] = useState([]);
//   const [opportunities, setOpportunities] = useState([]);
//   const [error, setError] = useState("");

//   // Fetch data from backend
//   const fetchOptimisation = async () => {
//     try {
//       const res = await axios.get("http://127.0.0.1:8014/api/v1/optimisation");
//       if (res.data.identified_areas && res.data.opportunities) {
//         setIdentifiedAreas(res.data.identified_areas);
//         setOpportunities(res.data.opportunities);
//       }
//       setError("");
//     } catch (err) {
//       console.error("Error fetching optimisation data:", err);
//       setError("Failed to fetch data. Check backend & CORS settings.");
//     }
//   };

//   useEffect(() => {
//     fetchOptimisation(); // Initial fetch
//     const interval = setInterval(fetchOptimisation, 5000); // Fetch every 5s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={styles.cardContainer}>
//       <h2 style={styles.h2}>Optimization for Reduction</h2>
//       {error && <div style={{ color: "red", marginBottom: "15px" }}>{error}</div>}
//       <div style={styles.contentGrid}>
//         <div>
//           <div style={styles.identifiedAreaTitle}>Identified Areas</div>
//           {identifiedAreas.map((area, i) => (
//             <div key={i} style={styles.areaItem}>
//               <span style={styles.bullet}></span>{area}
//             </div>
//           ))}
//         </div>
//         <div>
//           <div style={styles.opportunitiesTitle}>Optimization Opportunities</div>
//           {opportunities.map((op, i) => (
//             <OpportunityItem key={i} data={op} />
//           ))}
//         </div>
//       </div>
//       <div style={{ textAlign: "right" }}>
//         <button style={styles.footerButton} onClick={fetchOptimisation}>Generate More Suggestions</button>
//       </div>
//     </div>
//   );
// };

// export default OptimisationCard;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const styles = {
//   cardContainer: { background: "rgba(5, 15, 25, 0.9)", border: "1px solid #00ffc8", boxShadow: "0 0 15px rgba(0, 255, 200, 0.5)", borderRadius: "12px", padding: "30px", margin: "20px auto", color: "#fff" },
//   h2: { color: "#00ffc8", fontSize: "1.8em", borderBottom: "1px solid rgba(0, 255, 200, 0.3)", paddingBottom: "15px", marginBottom: "20px" },
//   contentGrid: { display: "grid", gridTemplateColumns: "250px 1fr", gap: "30px" },
//   identifiedAreaTitle: { color: "#00ffc8", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//   areaItem: { padding: "8px 0", color: "#a0a0a0", fontSize: "0.95em" },
//   bullet: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#00ffc8", marginRight: "10px" },
//   opportunitiesTitle: { color: "#00ffc8", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//   opportunityCard: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,255,200,0.2)", borderRadius: "8px", padding: "15px", marginBottom: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" },
//   opportunityTitle: { color: "#00ffc8", fontSize: "1.1em", marginBottom: "5px" },
//   button: { backgroundColor: "transparent", color: "#00ffc8", border: "1px solid #00ffc8", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", marginLeft: "15px" },
//   footerButton: { backgroundColor: "rgba(40,150,255,0.8)", color: "#fff", border: "none", padding: "12px 25px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", textTransform: "uppercase", marginTop: "20px" }
// };

// const OpportunityItem = ({ data }) => (
//   <div style={styles.opportunityCard}>
//     <div style={{ flex: 2 }}>
//       <div style={styles.opportunityTitle}>{data.title}</div>
//       <p style={{ color: "#a0a0a0", fontSize: "0.85em", margin: "5px 0" }}>{data.description}</p>
//       <div style={{ marginTop: "10px" }}>
//         <strong style={{ color: "#00ffc8" }}>Estimated Annual CO₂ Saved:</strong>
//         <span style={{ color: data.statusColor, marginLeft: "5px" }}>{data.saved}</span>
//       </div>
//     </div>
//     <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
//       <div style={{ textAlign: "center", marginRight: "20px" }}>
//         <div style={{ width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: `4px solid ${data.statusColor}`, color: data.statusColor, fontWeight: "bold" }}>
//           {data.status.split(" ")[0]}
//         </div>
//         <div style={{ fontSize: "0.7em", color: "#a0a0a0", marginTop: "5px" }}>{data.status.split(" ").slice(1).join(" ")}</div>
//       </div>
//       <button style={{ ...styles.button, borderColor: data.statusColor, color: data.statusColor }}>{data.action}</button>
//     </div>
//   </div>
// );



// const OptimisationCard = () => {
//   const [identifiedAreas, setIdentifiedAreas] = useState([]);
//   const [opportunities, setOpportunities] = useState([]);
//   const [latestTotal, setLatestTotal] = useState(0);
//   const [error, setError] = useState("");

//   // Base opportunity data from backend
//   const baseOpportunitiesRef = React.useRef([]);

//   const fetchBaseOpportunities = async () => {
//     try {
//       const res = await axios.get("http://127.0.0.1:8014/api/v1/optimisation");
//       setIdentifiedAreas(res.data.identified_areas || []);
//       baseOpportunitiesRef.current = res.data.opportunities.map(op => ({
//         ...op,
//         baseSaved: parseInt(op.saved.replace(/[^0-9]/g, "")), // store numeric base
//       }));
//       setOpportunities(baseOpportunitiesRef.current);
//     } catch (err) {
//       console.error("Error fetching optimisation data:", err);
//       setError("Failed to fetch base data. Check backend & CORS settings.");
//     }
//   };

//   useEffect(() => {
//     fetchBaseOpportunities();

//     const ws = new WebSocket("ws://127.0.0.1:8014/ws/emissions");

//     ws.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       setLatestTotal(data.latest_total);

//     const updated = baseOpportunitiesRef.current.map(op => {
//   const saved = Math.round(op.baseSaved + (data.latest_total || 0) * 0.01);
//   return { ...op, saved: saved.toLocaleString() + " kg CO₂" };
// });
// setOpportunities(updated);
//     };

//     ws.onerror = (err) => {
//       console.error("WebSocket error:", err);
//       setError("WebSocket connection failed.");
//     };

//     return () => ws.close();
//   }, []);

//   return (
//     <div style={styles.cardContainer}>
//       <h2 style={styles.h2}>Optimization for Reduction</h2>
//       {error && <div style={{ color: "red", marginBottom: "15px" }}>{error}</div>}
//       <div style={styles.contentGrid}>
//         <div>
//           <div style={styles.identifiedAreaTitle}>Identified Areas</div>
//           {identifiedAreas.map((area, i) => (
//             <div key={i} style={styles.areaItem}>
//               <span style={styles.bullet}></span>{area}
//             </div>
//           ))}
//         </div>
//         <div>
//           <div style={styles.opportunitiesTitle}>Optimization Opportunities</div>
//           {opportunities.map((op, i) => (
//             <OpportunityItem key={i} data={op} />
//           ))}
//         </div>
//       </div>
//       <div style={{ textAlign: "right" }}>
//         <button style={styles.footerButton} onClick={() => fetchBaseOpportunities()}>Generate More Suggestions</button>
//       </div>
//     </div>
//   );
// };
// export default OptimisationCard;


// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";

// const styles = {
//   cardContainer: { background: "rgba(5, 15, 25, 0.9)", border: "1px solid #00ffc8", boxShadow: "0 0 15px rgba(0, 255, 200, 0.5)", borderRadius: "12px", padding: "30px", margin: "20px auto", color: "#fff" },
//   h2: { color: "#00ffc8", fontSize: "1.8em", borderBottom: "1px solid rgba(0, 255, 200, 0.3)", paddingBottom: "15px", marginBottom: "20px" },
//   contentGrid: { display: "grid", gridTemplateColumns: "250px 1fr", gap: "30px" },
//   identifiedAreaTitle: { color: "#00ffc8", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//   areaItem: { padding: "8px 0", color: "#a0a0a0", fontSize: "0.95em" },
//   bullet: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#00ffc8", marginRight: "10px" },
//   opportunitiesTitle: { color: "#00ffc8", textTransform: "uppercase", marginBottom: "15px", fontWeight: "bold" },
//   opportunityCard: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,255,200,0.2)", borderRadius: "8px", padding: "15px", marginBottom: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" },
//   opportunityTitle: { color: "#00ffc8", fontSize: "1.1em", marginBottom: "5px" },
//   button: { backgroundColor: "transparent", color: "#00ffc8", border: "1px solid #00ffc8", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", marginLeft: "15px" },
//   footerButton: { backgroundColor: "rgba(40,150,255,0.8)", color: "#fff", border: "none", padding: "12px 25px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", textTransform: "uppercase", marginTop: "20px" }
// };

// const OpportunityItem = ({ data }) => (
//   <div style={styles.opportunityCard}>
//     <div style={{ flex: 2 }}>
//       <div style={styles.opportunityTitle}>{data.title}</div>
//       <p style={{ color: "#a0a0a0", fontSize: "0.85em", margin: "5px 0" }}>{data.description}</p>
//       <div style={{ marginTop: "10px" }}>
//         <strong style={{ color: "#00ffc8" }}>Estimated Annual CO₂ Saved:</strong>
//         <span style={{ color: data.statusColor, marginLeft: "5px" }}>{data.saved}</span>
//       </div>
//     </div>
//     <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
//       <div style={{ textAlign: "center", marginRight: "20px" }}>
//         <div style={{ width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: `4px solid ${data.statusColor}`, color: data.statusColor, fontWeight: "bold" }}>
//           {data.status.split(" ")[0]}
//         </div>
//         <div style={{ fontSize: "0.7em", color: "#a0a0a0", marginTop: "5px" }}>{data.status.split(" ").slice(1).join(" ")}</div>
//       </div>
//       <button style={{ ...styles.button, borderColor: data.statusColor, color: data.statusColor }}>{data.action}</button>
//     </div>
//   </div>
// );

// const OptimisationCard = () => {
//   const [identifiedAreas, setIdentifiedAreas] = useState([]);
//   const [opportunities, setOpportunities] = useState([]);
//   const [latestTotal, setLatestTotal] = useState(0);
//   const [error, setError] = useState("");

//   const baseOpportunitiesRef = useRef([]);
//   const wsRef = useRef(null);

//   const fetchBaseOpportunities = async () => {
//     try {
//       const res = await axios.get("http://127.0.0.1:8014/api/v1/optimisation");
//       setIdentifiedAreas(res.data.identified_areas || []);
//       baseOpportunitiesRef.current = res.data.opportunities.map(op => ({
//         ...op,
//         baseSaved: parseInt(op.saved.replace(/[^0-9]/g, "")) || 0,
//       }));
//       setOpportunities(baseOpportunitiesRef.current);
//       setError("");
//     } catch (err) {
//       console.error("Error fetching optimisation data:", err);
//       setError("Failed to fetch base data. Check backend & CORS settings.");
//     }
//   };

//   useEffect(() => {
//     fetchBaseOpportunities();

//     wsRef.current = new WebSocket("ws://127.0.0.1:8014/ws/emissions");

//     wsRef.current.onopen = () => {
//       console.log("WebSocket connected ✅");
//       setError("");
//     };

//     wsRef.current.onmessage = (event) => {
//       try {
//         const data = JSON.parse(event.data);
//         const total = data.latest_total || 0;
//         setLatestTotal(total);

//         const updated = baseOpportunitiesRef.current.map(op => {
//           const saved = Math.round(op.baseSaved + total * 0.01);
//           return { ...op, saved: saved.toLocaleString() + " kg CO₂" };
//         });
//         setOpportunities(updated);
//       } catch (err) {
//         console.error("Error parsing WebSocket data:", err);
//       }
//     };

//     wsRef.current.onerror = (err) => {
//       console.error("WebSocket error:", err);
//       setError("WebSocket connection failed. Retrying...");
//     };

//     wsRef.current.onclose = () => {
//       console.log("WebSocket disconnected 🔴");
//       // Auto-reconnect after 5s
//       setTimeout(() => {
//         fetchBaseOpportunities();
//       }, 5000);
//     };

//     return () => wsRef.current?.close();
//   }, []);

//   return (
//     <div style={styles.cardContainer}>
//       <h2 style={styles.h2}>Optimization for Reduction</h2>
//       {error && <div style={{ color: "red", marginBottom: "15px" }}>{error}</div>}
//       <div style={styles.contentGrid}>
//         <div>
//           <div style={styles.identifiedAreaTitle}>Identified Areas</div>
//           {identifiedAreas.map((area, i) => (
//             <div key={i} style={styles.areaItem}>
//               <span style={styles.bullet}></span>{area}
//             </div>
//           ))}
//         </div>
//         <div>
//           <div style={styles.opportunitiesTitle}>Optimization Opportunities</div>
//           {opportunities.map((op, i) => (
//             <OpportunityItem key={i} data={op} />
//           ))}
//         </div>
//       </div>
//       <div style={{ textAlign: "right" }}>
//         <button style={styles.footerButton} onClick={fetchBaseOpportunities}>Generate More Suggestions</button>
//       </div>
//     </div>
//   );
// };

// export default OptimisationCard;





import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const styles = {
  cardContainer: {
    background: "rgba(5, 15, 25, 0.9)",
    border: "1px solid #00ffc8",
    boxShadow: "0 0 15px rgba(0, 255, 200, 0.5)",
    borderRadius: "12px",
    padding: "30px",
    margin: "20px auto",
    color: "#fff",
  },
  h2: {
    color: "#00ffc8",
    fontSize: "1.8em",
    borderBottom: "1px solid rgba(0, 255, 200, 0.3)",
    paddingBottom: "15px",
    marginBottom: "20px",
  },
  contentGrid: { display: "grid", gridTemplateColumns: "250px 1fr", gap: "30px" },
  identifiedAreaTitle: {
    color: "#00ffc8",
    textTransform: "uppercase",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  areaItem: { padding: "8px 0", color: "#a0a0a0", fontSize: "0.95em" },
  bullet: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#00ffc8",
    marginRight: "10px",
    display: "inline-block",
  },
  opportunitiesTitle: {
    color: "#00ffc8",
    textTransform: "uppercase",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  opportunityCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(0,255,200,0.2)",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  opportunityTitle: { color: "#00ffc8", fontSize: "1.1em", marginBottom: "5px" },
  button: {
    backgroundColor: "transparent",
    color: "#00ffc8",
    border: "1px solid #00ffc8",
    padding: "8px 15px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    marginLeft: "15px",
  },
  footerButton: {
    backgroundColor: "rgba(40,150,255,0.8)",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: "20px",
  },
};

const OpportunityItem = ({ data }) => (
  <div style={styles.opportunityCard}>
    <div style={{ flex: 2 }}>
      <div style={styles.opportunityTitle}>{data.title}</div>
      <p style={{ color: "#a0a0a0", fontSize: "0.85em", margin: "5px 0" }}>
        {data.description}
      </p>
      <div style={{ marginTop: "10px" }}>
        <strong style={{ color: "#00ffc8" }}>Estimated Annual CO₂ Saved:</strong>
        <span style={{ color: data.statusColor, marginLeft: "5px" }}>
          {data.saved}
        </span>
      </div>
    </div>
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <div style={{ textAlign: "center", marginRight: "20px" }}>
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `4px solid ${data.statusColor}`,
            color: data.statusColor,
            fontWeight: "bold",
          }}
        >
          {data.status.split(" ")[0]}
        </div>
        <div
          style={{
            fontSize: "0.7em",
            color: "#a0a0a0",
            marginTop: "5px",
          }}
        >
          {data.status.split(" ").slice(1).join(" ")}
        </div>
      </div>
      <button
        style={{
          ...styles.button,
          borderColor: data.statusColor,
          color: data.statusColor,
        }}
      >
        {data.action}
      </button>
    </div>
  </div>
);

const OptimisationCard = () => {
  const [identifiedAreas, setIdentifiedAreas] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [latestTotal, setLatestTotal] = useState(0);
  const [error, setError] = useState("");

  const baseOpportunitiesRef = useRef([]);

  const fetchBaseOpportunities = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8014/api/v1/optimisation");
      setIdentifiedAreas(res.data.identified_areas || []);
      baseOpportunitiesRef.current = res.data.opportunities.map((op) => ({
        ...op,
        baseSaved: parseInt(op.saved.replace(/[^0-9]/g, "")) || 0,
      }));
      setOpportunities(baseOpportunitiesRef.current);
      setError("");
    } catch (err) {
      console.error("Error fetching optimisation data:", err);
      setError("Failed to fetch base data. Check backend connection.");
    }
  };

  useEffect(() => {
    fetchBaseOpportunities();

    let ws;
    try {
      ws = new WebSocket("ws://127.0.0.1:8014/ws/emissions");

      ws.onopen = () => console.log("✅ WebSocket connected");
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.latest_total !== undefined) {
          setLatestTotal(data.latest_total);
          const updated = baseOpportunitiesRef.current.map((op) => {
            const saved = Math.round(op.baseSaved + data.latest_total * 0.01);
            return {
              ...op,
              saved: (isNaN(saved) ? op.baseSaved : saved).toLocaleString() + " kg CO₂",
            };
          });
          setOpportunities(updated);
        }
      };

      ws.onclose = () => console.warn("⚠️ WebSocket disconnected (retrying...)");
      ws.onerror = () => console.warn("⚠️ WebSocket connection issue");
    } catch (err) {
      console.warn("⚠️ WebSocket not available, falling back.");
    }

    return () => ws && ws.close();
  }, []);

  return (
    <div style={styles.cardContainer}>
      <h2 style={styles.h2}>Optimization for Reduction</h2>
      {error && (
        <div style={{ color: "red", marginBottom: "15px" }}>{error}</div>
      )}
      <div style={styles.contentGrid}>
        <div>
          <div style={styles.identifiedAreaTitle}>Identified Areas</div>
          {identifiedAreas.map((area, i) => (
            <div key={i} style={styles.areaItem}>
              <span style={styles.bullet}></span>
              {area}
            </div>
          ))}
        </div>
        <div>
          <div style={styles.opportunitiesTitle}>Optimization Opportunities</div>
          {opportunities.map((op, i) => (
            <OpportunityItem key={i} data={op} />
          ))}
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <button
          style={styles.footerButton}
          onClick={() => fetchBaseOpportunities()}
        >
          Generate More Suggestions
        </button>
      </div>
    </div>
  );
};

export default OptimisationCard;
