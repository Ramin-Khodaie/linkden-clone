from fastapi import Header, HTTPException
import json


def load_settings(path="pyserver/settings.json"):
    with open(path, 'r') as f:
        data = json.load(f)
        return data

async def get_token_header(x_token: str = Header()):
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")


async def get_query_token(token: str):
    if token != "jessica":
        raise HTTPException(status_code=400, detail="No Jessica token provided")
