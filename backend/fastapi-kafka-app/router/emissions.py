

from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from pymongo import MongoClient
from datetime import datetime
from websocket_manager import manager
import json

router = APIRouter()

client = MongoClient("mongodb+srv://kpriyadharshinircr_db_user:jAFZcQl49RBllfhG@cluster0.zeur7ib.mongodb.net/?retryWrites=true&w=majority")
db = client["carbonpulse"]
collection = db["emissions"]

@router.get("/")
def get_emissions():
    latest = collection.find_one(sort=[("timestamp", -1)])
    if not latest:
        return {"Scope1": 0, "Scope2": 0, "Scope3": 0, "Total": 0}
    return {
        "Scope1": latest.get("scope1", 0),
        "Scope2": latest.get("scope2", 0),
        "Scope3": latest.get("scope3", 0),
        "Total": latest.get("total", 0)
    }

@router.post("/add")
def add_emission(data: dict):
    data["timestamp"] = datetime.utcnow()
    collection.insert_one(data)
    return {"message": "Emission added", "data": data}

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        latest = collection.find_one(sort=[("timestamp", -1)])
        if latest:
            await websocket.send_json({
                "Scope1": latest.get("scope1", 0),
                "Scope2": latest.get("scope2", 0),
                "Scope3": latest.get("scope3", 0),
                "Total": latest.get("total", 0)
            })
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        
    @router.get("/trend")
    def get_emissions_trend():
    # Fetch last 10 records sorted by timestamp (newest → oldest)
     records = list(collection.find({}, {"_id": 0}).sort("timestamp", -1).limit(10))
    # Reverse for correct chart order (oldest → newest)
     records.reverse()
    
    # Convert to chart-friendly format
    data = [
        {
            "date": r.get("date", "N/A"),
            "tCO2e": r.get("total", 0)
        }
        for r in records
    ]
    return {"trend": data}

