

from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import asyncio
import random
from datetime import datetime
from websocket_manager import manager

app = FastAPI(title="CarbonPulse API", version="1.0")

# CORS Setup
app.add_middleware(     
    CORSMiddleware,
    allow_origins=["http://localhost:5176", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB
client = MongoClient("mongodb+srv://kpriyadharshinircr_db_user:jAFZcQl49RBllfhG@cluster0.zeur7ib.mongodb.net/?retryWrites=true&w=majority")
db = client["carbonpulse"]
collection = db["emissions"]

# --- Emissions Simulation ---
async def simulate_emissions():
    while True:
        try:
            # Scope 1 sources
            scope1_sources = {
                "Fleet Vehicles": random.randint(100, 300),
                "Boilers": random.randint(200, 400),
                "Generators": random.randint(50, 150)
            }
            scope1_total = sum(scope1_sources.values())

            # Scope 3 sources
            scope3_sources = {
                "Purchased Goods": random.randint(300, 500),
                "Business Travel": random.randint(100, 300),
                "Waste Disposal": random.randint(150, 250)
            }

            # Fuel levels
            fuel_levels = {
                "Diesel Tank": random.randint(70, 80),
                "Gas Tank #2": random.randint(60, 70),
                "Kerosene Res.": random.randint(45, 55)
            }

            new_data = {
                "scope1": scope1_total,
                "scope1_sources": scope1_sources,
                "scope2": random.randint(700, 900),
                "scope3": sum(scope3_sources.values()),
                "scope3_sources": scope3_sources,
                "fuel": fuel_levels,
                "timestamp": datetime.utcnow(),
            }
            new_data["total"] = new_data["scope1"] + new_data["scope2"] + new_data["scope3"]
            collection.insert_one(new_data)
            print("📡 Inserted:", new_data)

            # Broadcast full live update
            await manager.broadcast({
                "Scope1": new_data["scope1"],
                "Scope1Sources": new_data["scope1_sources"],
                "Scope2": new_data["scope2"],
                "Scope3": new_data["scope3"],
                "Scope3Sources": new_data["scope3_sources"],
                "FuelLevel": new_data["fuel"],
                "Total": new_data["total"],
                "timestamp": new_data["timestamp"].isoformat()
            })

        except Exception as e:
            print("⚠️ Error inserting data:", e)

        await asyncio.sleep(2)  # 2-second live updates

# Start simulation on app startup
@app.on_event("startup")
async def on_startup():
    asyncio.create_task(simulate_emissions())

# WebSocket endpoint
@app.websocket("/ws/emissions")
async def websocket_emissions(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            latest = collection.find().sort("_id", -1).limit(1)
            for r in latest:
                data_to_send = {
                    "Scope1": r.get("scope1", 0),
                    "Scope1Sources": r.get("scope1_sources", {"Fleet Vehicles": 0, "Boilers": 0, "Generators": 0}),
                    "Scope2": r.get("scope2", 0),
                    "Scope3": r.get("scope3", 0),
                    "Scope3Sources": r.get("scope3_sources", {"Purchased Goods": 0, "Business Travel": 0, "Waste Disposal": 0}),
                    "FuelLevel": r.get("fuel", {"Diesel Tank": 0, "Gas Tank #2": 0, "Kerosene Res.": 0}),
                    "Total": r.get("total", 0),
                    "timestamp": r.get("timestamp").isoformat() if r.get("timestamp") else datetime.utcnow().isoformat()
                }
                await websocket.send_json(data_to_send)
            await asyncio.sleep(2)

    except Exception as e:
        print("⚠️ WebSocket error:", e)
    finally:
        manager.disconnect(websocket)


