from imp import reload
from fastapi import FastAPI
# from pyserver.modules.main.user_api import test
from pyserver.modules.main.api import user_api
import uvicorn
app = FastAPI()



app.include_router(user_api.router)
@app.get("/")
async def root():
    return {"message": "Hello World"}


if __name__ == "__main__":
    uvicorn.run("pyserver.main:app", host="0.0.0.0", port=8000,reload=True )