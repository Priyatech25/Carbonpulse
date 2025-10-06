from fastapi import APIRouter
from datetime import datetime
from config.database import collection

router = APIRouter()

@router.get("/reports")
def get_reports():
    records = list(collection.find().sort("_id", -1).limit(10))
    history = []

    for r in records:
        history.append({
            "date": r.get("date", datetime.utcnow().strftime("%d-%b-%y")),
            "scope1": r["scope1"],
            "scope2": r["scope2"],
            "scope3": r["scope3"],
            "total": r["total"]
        })

    credits = max(0, (sum(r["total"] for r in records) // 1000) - 50)

    return {
        "history": history,
        "carbon_credits": f"{credits} credits required to reach net-zero this month",
        "what_if": {
            "scenario": "Reduce Scope-3 shipments by 10%",
            "new_total": history[0]["total"] - (history[0]["scope3"] * 0.1)
        }
    }
