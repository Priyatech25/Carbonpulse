




from fastapi import APIRouter
from config.database import collection
from datetime import datetime

router = APIRouter()

# GET reminders
@router.get("/reminders")
def get_reminders():
    # Simulate fetching latest emissions records
    records = list(collection.find().sort("_id", -1).limit(10))

    deadlines = []
    for r in records:
        date_str = r.get("date", datetime.utcnow().strftime("%d-%b-%y"))
        urgent = r.get("total", 0) > 15000
        deadlines.append({
            "task": f"Submit emissions report ({date_str})",
            "due": "Due Tomorrow" if urgent else "In 7 days",
            "priority": 1 if urgent else 2,
            "urgent": urgent
        })

    # Actions required
    actions = [
        {"task": "Approve Scope 2 Report", "status": "pending"},
        {"task": "Review New Vendor Footprint Data", "status": "pending"},
        {"task": "Update Refrigerant Leak Report", "status": "in-progress"},
        {"task": "Update Refrigerant Leak Logs", "status": "pending"},
    ]

    # Scheduled reviews
    reviews = [
        "Q3 Progress Meeting - Oct 26",
        "Annual Audit Prep - Nov 15",
        "Board Review of Decarbonization Strategy - Dec 5",
    ]

    return {
        "deadlines": deadlines,
        "actions": actions,
        "reviews": reviews
    }

# POST mark all actions as done
@router.post("/reminders/mark_done")
def mark_all_done():
    # In real app: update database records here
    return {"message": "All actions marked as done!", "updated_status": "done"}
