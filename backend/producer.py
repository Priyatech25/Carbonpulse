# producer.py
import asyncio
import json
import random
import time
from aiokafka import AIOKafkaProducer

KAFKA_BOOTSTRAP = "localhost:9092"
TOPIC = "emissions_topic"

async def produce():
    producer = AIOKafkaProducer(bootstrap_servers=KAFKA_BOOTSTRAP)
    await producer.start()
    try:
        while True:
            payload = {
                "source": random.choice(["fleet", "boiler", "hvac", "generator"]),
                "value": round(random.uniform(10, 200), 2),
                "unit": "kgCO2e",
                "timestamp": time.time()
            }
            await producer.send_and_wait(TOPIC, json.dumps(payload).encode("utf-8"))
            print("sent:", payload)
            await asyncio.sleep(1.5)  # every 1.5s
    finally:
        await producer.stop()

if __name__ == "__main__":
    asyncio.run(produce())
