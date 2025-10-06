


# router/messages.py
from fastapi import APIRouter, Query, Body, Request
from typing import Optional
from datetime import datetime
from config.database import db   # ✅ import db, not collection
from pydantic import BaseModel

router = APIRouter()
collection = db["messages"]  # ✅ collection defined here

class Message(BaseModel):
    name: str
    email: str
    message: str

@router.post("/send/")
async def send_message(
    request: Request,
    source: Optional[str] = Query(None),
    value: Optional[float] = Query(None),
    msg: Optional[Message] = Body(None)
):
    data = {}

    if msg:
        data.update(msg.dict())

    if source and value:
        data.update({"source": source, "value": value})

    if not data:
        return {"error": "Provide data via JSON body or query params"}

    data["timestamp"] = datetime.utcnow()
    result = collection.insert_one(data)
    return {"status": "success", "id": str(result.inserted_id)}
