from pydantic import BaseModel
from typing import Optional

class Message(BaseModel):
    name: str
    email: str
    message: str

class EmissionRecord(BaseModel):
    scope1: int
    scope2: int
    scope3: int