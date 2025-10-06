from fastapi import APIRouter
from database import collection

router = APIRouter()

@router.get("/alerts")
def get_alerts():
    latest = collection.find_one(sort=[("_id", -1)])
    alerts = []
    if latest and latest["total"] > 15000:
        alerts.append({
            "alert": "⚠ Daily CO₂ exceeded baseline by 25%!",
            "suggested_action": "Shift load to off-peak hours"
        })
    return {"alerts": alerts}
