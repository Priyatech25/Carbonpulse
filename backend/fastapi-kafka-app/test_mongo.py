from pymongo import MongoClient
import certifi

client = MongoClient(
    "mongodb+srv://kpriyadharshinircr_db_user:jAFZcQl49RBllfhG@cluster0.zeur7ib.mongodb.net/?retryWrites=true&w=majority",
    tlsCAFile=certifi.where()
)

try:
    print("Connected successfully!")
    print("Databases:", client.list_database_names())
except Exception as e:
    print("Error:", e)
