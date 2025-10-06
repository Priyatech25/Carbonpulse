


from fastapi import APIRouter
from datetime import datetime, timedelta
import random
from config.database import db

router = APIRouter()

@router.get("/dashboard")
def get_dashboard():
    try:
        # Use the correct collection name
        collection = db["emissions"]
        
        print("=== DATABASE DEBUG ===")
        print("Database name:", db.name)
        print("Collections:", db.list_collection_names())
        
        # Get ALL documents to see what we have
        all_docs = list(collection.find())
        print(f"Total documents in collection: {len(all_docs)}")
        for doc in all_docs:
            print(f"Doc: date={doc.get('date')}, total={doc.get('total')}, scope1={doc.get('scope1')}")
        
        # Since date is stored as string, we need to sort differently
        # Try sorting by timestamp instead, or convert string dates
        latest_by_timestamp = collection.find_one(sort=[("timestamp", -1)])
        latest_by_id = collection.find_one(sort=[("_id", -1)])
        
        print("Latest by timestamp:", latest_by_timestamp)
        print("Latest by _id:", latest_by_id)
        
        # Use whichever method works
        latest = latest_by_timestamp or latest_by_id
        
        if not latest or latest.get("total", 0) == 0:
            print("No valid data found, checking all documents...")
            # Find the first document with actual data
            for doc in all_docs:
                if doc.get("total", 0) > 0:
                    latest = doc
                    print(f"Found valid document: {latest}")
                    break
        
        if not latest or latest.get("total", 0) == 0:
            print("No valid data found in database, using sample data")
            current_total = 3700
            trend = [
                {"date": "2025-09-25", "scope1": 1240, "scope2": 815, "scope3": 1520, "total": 3575},
                {"date": "2025-09-26", "scope1": 1290, "scope2": 855, "scope3": 1585, "total": 3730},
                {"date": "2025-09-27", "scope1": 1210, "scope2": 795, "scope3": 1490, "total": 3495},
                {"date": "2025-09-28", "scope1": 1260, "scope2": 825, "scope3": 1550, "total": 3635},
                {"date": "2025-09-29", "scope1": 1230, "scope2": 805, "scope3": 1515, "total": 3550},
                {"date": "2025-09-30", "scope1": 1280, "scope2": 845, "scope3": 1575, "total": 3700}
            ]
        else:
            # We have real data!
            print(f"Using real data: total={latest.get('total')}")
            current_total = latest.get("total", 0)
            
            # Get trend data - sort by timestamp since date is string
            trend_data = list(collection.find(
                {"total": {"$gt": 0}}  # Only get documents with actual data
            ).sort("timestamp", -1).limit(7))
            trend_data.reverse()  # Oldest first
            
            trend = []
            for record in trend_data:
                trend.append({
                    "date": record.get("date", ""),
                    "scope1": record.get("scope1", 0),
                    "scope2": record.get("scope2", 0),
                    "scope3": record.get("scope3", 0),
                    "total": record.get("total", 0)
                })
            
            print(f"Processed {len(trend)} trend records")

        # Forecast
        today = datetime.utcnow()
        forecast = []
        for i in range(1, 8):
            forecast_date = (today + timedelta(days=i)).strftime("%Y-%m-%d")
            forecast.append({
                "date": forecast_date,
                "predicted": current_total + (i * random.randint(10, 50))
            })

        # Alerts
        alerts = []
        if current_total > 3500:
            alerts.append("⚠ High emissions level detected")

        suggestions = [
            "Optimize energy usage during peak hours",
            "Consider renewable energy sources for Scope 2",
            "Review transportation logistics for Scope 3 reduction"
        ]

        response_data = {
            "current": current_total,
            "scopes": {
                "scope1": trend[-1]["scope1"] if trend and len(trend) > 0 else latest.get("scope1", 0),
                "scope2": trend[-1]["scope2"] if trend and len(trend) > 0 else latest.get("scope2", 0),
                "scope3": trend[-1]["scope3"] if trend and len(trend) > 0 else latest.get("scope3", 0)
            },
            "trend": trend,
            "forecast": forecast,
            "alerts": alerts,
            "suggestions": suggestions
        }
        
        print("Final response data:", response_data)
        return response_data
        
    except Exception as e:
        print(f"Dashboard error: {e}")
        import traceback
        traceback.print_exc()
        return {"error": str(e)}

from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from datetime import datetime, timedelta
import random
from config.database import db

router = APIRouter()

# Store connected clients
clients = []

@router.websocket("/ws/dashboard")
async def websocket_dashboard(websocket: WebSocket):
    await websocket.accept()
    clients.append(websocket)

    try:
        while True:
            # Get latest emissions data
            latest = db.find_one(sort=[("_id", -1)])
            if not latest:
                await websocket.send_json({"message": "No data"})
                continue

            today = datetime.utcnow()
            trend = [{"date": (today - timedelta(days=i)).strftime("%d-%b-%y"),
                      "total": random.randint(12000, 18000)} for i in range(6, -1, -1)]

            forecast = [{"date": (today + timedelta(days=i)).strftime("%d-%b-%y"),
                         "predicted": latest["total"] + i*200} for i in range(1, 8)]

            alerts = []
            if latest["total"] > 15000:
                alerts.append("⚠ High emissions level detected")

            suggestions = ["Shift workload to off-peak hours", "Reduce shipments by 10%"]

            payload = {
                "current": latest["total"],
                "scopes": {
                    "scope1": latest["scope1"],
                    "scope2": latest["scope2"],
                    "scope3": latest["scope3"]
                },
                "trend": trend,
                "forecast": forecast,
                "alerts": alerts,
                "suggestions": suggestions
            }

            await websocket.send_json(payload)

            # send updates every 5 seconds
            await asyncio.sleep(5)

    except WebSocketDisconnect:
        clients.remove(websocket)

