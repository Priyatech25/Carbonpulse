from pymongo import MongoClient
import certifi
import os

# You can store your MongoDB URI in .env for security
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")

client = MongoClient(MONGO_URI, tlsCAFile=certifi.where())
db = client["carbonpulse_db"]
collection = db["emissions"]
