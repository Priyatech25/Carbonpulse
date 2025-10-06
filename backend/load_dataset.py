import json
from pymongo import MongoClient
import certifi
from datetime import datetime

# MongoDB connection
client = MongoClient(
    "mongodb+srv://kpriyadharshinircr_db_user:jAFZcQl49RBllfhG@cluster0.zeur7ib.mongodb.net/?retryWrites=true&w=majority",
    tlsCAFile=certifi.where()
)
db = client["carbonpulse_db"]
collection = db["emissions"]

# Load dataset.json
with open("dataset.json") as f:
    data = json.load(f)

# Insert records
for record in data:
    record["timestamp"] = datetime.utcnow()
    collection.insert_one(record)

print("✅ Dataset inserted successfully into MongoDB!")
