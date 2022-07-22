
from pyserver.dependencies import load_settings
from pymongo import MongoClient 
class MongoDataBase:
    def __init__(self) -> None:
        data = load_settings()
        self.host = data["DATABASE"]["host"]
        self.port = data["DATABASE"]["port"]
        self.username = data["DATABASE"]["username"]
        self.password = data["DATABASE"]["password"]

    def mongo_client(self) :
        return MongoClient(self.host, self.port )

    


mongo_client = MongoDataBase().mongo_client()
