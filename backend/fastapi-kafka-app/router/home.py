from fastapi import APIRouter
from config.database import collection

router = APIRouter()

@router.get("/home")
def get_home_summary():
    latest = collection.find_one(sort=[("_id", -1)])
    if not latest:
        return {"total": 0, "scope1": 0, "scope2": 0, "scope3": 0}

    total = latest["total"]
    return {
        "title": "CarbonPulse – Real-Time Carbon Footprint Intelligence",
        "total": total,
        "scopes": {
            "scope1": latest["scope1"],
            "scope2": latest["scope2"],
            "scope3": latest["scope3"]
        },
        "percentages": {
            "scope1": round(latest["scope1"] / total * 100, 1),
            "scope2": round(latest["scope2"] / total * 100, 1),
            "scope3": round(latest["scope3"] / total * 100, 1)
        }
    }
