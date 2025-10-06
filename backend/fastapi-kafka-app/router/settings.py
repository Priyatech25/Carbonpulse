from fastapi import APIRouter

router = APIRouter()

@router.get("/settings")
def get_settings():
    return {
        "update_frequency": "5s",
        "alert_threshold": "15000",
        "integration": {"scope3_suppliers": ["LogisticsCo", "AirCargoX"]},
        "api_keys": ["abc123", "xyz789"]
    }
