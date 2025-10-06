import random
import time
from datetime import datetime
from pymongo import MongoClient

# Replace with your MongoDB connection string
client = MongoClient("mongodb+srv://kpriyadharshinircr_db_user:jAFZcQl49RBllfhG@cluster0.zeur7ib.mongodb.net/?retryWrites=true&w=majority")
db = client["carbonpulse"]
collection = db["emissions"]

print("Starting real-time data insertion...")

while True:
    new_data = {
        "scope1": random.randint(1200, 1300),
        "scope2": random.randint(800, 850),
        "scope3": random.randint(1500, 1600),
        "total": 0,
        "date": datetime.utcnow().strftime("%Y-%m-%d"),
        "timestamp": datetime.utcnow()
    }
    new_data["total"] = new_data["scope1"] + new_data["scope2"] + new_data["scope3"]
    collection.insert_one(new_data)
    print("Inserted:", new_data)
    time.sleep(10)  # insert every 10 seconds
