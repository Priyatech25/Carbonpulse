




import React, { useEffect, useState } from "react";
import axios from "axios";
import useRealtimeEmissions from "../../hooks/useRealtimeEmissions";

const styles = {
  cardContainer: { background: "rgba(5,15,25,0.95)", border: "1px solid var(--main-color,#00ffc8)", boxShadow: "0 0 20px rgba(0,255,200,0.4)", borderRadius: "12px", padding: "30px", maxWidth: "1000px", margin: "50px auto", fontFamily: "Roboto,sans-serif" },
  header: { display: "flex", alignItems: "center", color: "var(--main-color,#00ffc8)", marginBottom: "20px", fontSize: "1.5em" },
  clockIcon: { marginRight: "10px", fontSize: "1.2em" },
  contentGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "30px", borderBottom: "1px solid rgba(0,255,200,0.2)", paddingBottom: "20px" },
  columnTitle: { color: "var(--main-color,#00ffc8)", fontWeight: "bold", textTransform: "uppercase", marginBottom: "15px", paddingBottom: "5px", borderBottom: "2px solid rgba(0,255,200,0.4)" },
  listItem: { display: "flex", alignItems: "center", padding: "10px 0", color: "#fff", borderBottom: "1px dotted rgba(255,255,255,0.1)", fontSize: "0.95em" },
  footer: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" },
  button: { backgroundColor: "transparent", color: "var(--main-color,#00ffc8)", border: "1px solid var(--main-color,#00ffc8)", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", textTransform: "uppercase", transition: "background-color 0.3s, box-shadow 0.3s", boxShadow: "0 0 5px rgba(0,255,200,0.5)" }
};

const StatusIcon = ({ status }) => {
  let icon = "", color = "";
  switch (status) {
    case "done": icon = "✓"; color = "rgba(0,255,200,1)"; break;
    case "pending": icon = "→"; color = "rgba(255,165,0,1)"; break;
    case "in-progress": icon = "↻"; color = "rgba(40,150,255,1)"; break;
    default: icon = "?"; color = "var(--text-faded,#a0a0a0)";
  }
  return <span style={{ color, fontSize: "1.2em", margin: "0 5px" }}>{icon}</span>;
};

const RemindersPage = () => {
  const { latest } = useRealtimeEmissions();
  const [deadlines, setDeadlines] = useState([]);
  const [actions, setActions] = useState([]);
  const [reviews, setReviews] = useState([]);

  const fetchReminders = async () => {
    try {
      const res = await axios.get("/api/reminders");
      setDeadlines(res.data.deadlines || []);
      setActions(res.data.actions || []);
      setReviews(res.data.reviews || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchReminders(); }, []);

  // Update deadlines dynamically from live emissions
  useEffect(() => {
    if (!latest) return;
    const today = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "2-digit" });
    const urgent = latest.Total > 15000;
    const newDeadline = { task: `Submit emissions report (${today})`, due: urgent ? "Due Tomorrow" : "In 7 days", priority: urgent ? 1 : 2, urgent };
    setDeadlines(prev => [newDeadline, ...prev.slice(0, 6)]);
  }, [latest]);

  const markAllDone = async () => {
    try {
      const res = await axios.post("/api/reminders/mark_done");
      const updatedActions = actions.map(a => ({ ...a, status: "done" }));
      setActions(updatedActions);
      alert(res.data.message);
    } catch (err) { console.error(err); }
  };

  return (
    <div style={styles.cardContainer}>
      <div style={styles.header}><span style={styles.clockIcon}>🕒</span>REMINDERS & UPCOMING TASKS</div>
      <div style={styles.contentGrid}>
        {/* Deadlines */}
        <div>
          <div style={styles.columnTitle}>DATA SUBMISSION DEADLINES</div>
          {deadlines.map((item, i) => (
            <div key={i} style={{ ...styles.listItem, color: item.urgent ? "rgba(255,99,132,1)" : "#fff" }}>
              <div style={{ flex: 1 }}>{item.task}</div>
              <div style={{ marginRight: "10px", fontWeight: item.urgent ? "bold" : "normal" }}>{item.due}</div>
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", border: "1px solid var(--main-color,#00ffc8)", textAlign: "center", fontSize: "0.8em", lineHeight: "18px", color: "var(--main-color,#00ffc8)" }}>{item.priority}</div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div>
          <div style={styles.columnTitle}>ACTIONS REQUIRED</div>
          {actions.map((item, i) => (
            <div key={i} style={styles.listItem}>
              <div style={{ flex: 1 }}>{item.task}</div>
              <StatusIcon status={item.status} />
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div>
          <div style={styles.columnTitle}>SCHEDULED REVIEWS</div>
          {reviews.map((item, i) => (
            <div key={i} style={styles.listItem}>
              <div style={{ color: "var(--text-faded,#a0a0a0)" }}>{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.footer}>
        <div style={{ color: "var(--text-faded,#a0a0a0)", fontWeight: "bold" }}>ENTERPRISE CARBON INSIGHTS</div>
        <button style={styles.button} onClick={markAllDone}>MARK AS DONE</button>
      </div>
    </div>
  );
};

export default RemindersPage;
