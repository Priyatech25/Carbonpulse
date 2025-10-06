from fastapi import APIRouter
from config.database import collection
from datetime import datetime

router = APIRouter()

# --- GET optimisation opportunities ---
@router.get("/optimisation")
def get_optimisation():
    # Simulate fetching latest emissions for real-time suggestions
    latest = collection.find().sort("_id", -1).limit(1)
    latest_total = 0
    for r in latest:
        latest_total = r.get("total", 0)

    identified_areas = [
        'High-Consumption HVAC Units',
        'Inefficient Fleet Vehicles',
        'Old Server Infrastructure',
        'Untracked Scope 3 Suppliers',
    ]

    optimisation_opportunities = [
        {
            "title": "Upgrade HVAC Schedule in Zone C",
            "description": "Automate climate control based on occupancy & external temp data.",
            "saved": f"{150000 + int(latest_total*0.01):,} kg CO₂",
            "status": "58% Implemented",
            "statusColor": "rgba(0, 255, 200, 1)",
            "action": "View Details"
        },
        {
            "title": "Electrify 20% of Local Fleet",
            "description": "Replace top 5 diesel vehicles with electric alternatives.",
            "saved": f"{25000 + int(latest_total*0.005):,} kg CO₂",
            "status": "Pending Review",
            "statusColor": "rgba(255, 165, 0, 1)",
            "action": "Implement Plan"
        },
        {
            "title": "Engage Top 5 Scope 3 Suppliers",
            "description": "Collaborate on setting joint reduction targets (SBTi).",
            "saved": f"{5000 + int(latest_total*0.002):,} kg CO₂",
            "status": "0% Implemented",
            "statusColor": "rgba(255, 99, 132, 1)",
            "action": "Implement Plan"
        },
    ]

    return {
        "identified_areas": identified_areas,
        "opportunities": optimisation_opportunities
    }

# --- POST action: update status of opportunity ---
@router.post("/optimisation/update_status")
def update_status(title: str, new_status: str):
    # In real app: update db
    return {"message": f"{title} status updated to {new_status}"}
