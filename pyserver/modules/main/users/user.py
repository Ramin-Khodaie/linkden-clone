
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from passlib.context import CryptContext
from .models import *

import json


def load_settings(path="pyserver/settings.json"):
    with open(path, 'r') as f:
        data = json.load(f)
        return data



pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")




fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
        "disabled": False,
    }
}

class User:
    def __init__(self) -> None:
        data = load_settings()
        self.__SECRET_KEY =  data["SECRET_KEY"]
        self.__ALGORITHM = data["ALGORITHM"]
        self.ACCESS_TOKEN_EXPIRE_MINUTES = data["ACCESS_TOKEN_EXPIRE_MINUTES"]

    # to get a string like this run:
    # openssl rand -hex 32
    


    


    def verify_password(self , plain_password, hashed_password):
        return pwd_context.verify(plain_password, hashed_password)


    def get_password_hash(self , password):
        return pwd_context.hash(password)


    def get_user(self , db, username: str):
        if username in db:
            user_dict = db[username]
            return UserInDB(**user_dict)


    def authenticate_user(self , fake_db, username: str, password: str):
        user = self.get_user(fake_db, username)
        if not user:
            return False
        if not self.verify_password(password, user.hashed_password):
            return False
        return user


    def create_access_token(self , data: dict, expires_delta: timedelta | None = None):
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.utcnow() + timedelta(minutes=15)
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, self.__SECRET_KEY, algorithm=self.__ALGORITHM)
        return encoded_jwt


    async def get_current_user(self , token: str = Depends(oauth2_scheme)):
        credentials_exception = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
        try:
            payload = jwt.decode(token, self.__SECRET_KEY, algorithms=[self.__ALGORITHM])
            username: str = payload.get("sub")
            if username is None:
                raise credentials_exception
            token_data = TokenData(username=username)
        except JWTError:
            raise credentials_exception
        user = self.get_user(fake_users_db, username=token_data.username)
        if user is None:
            raise credentials_exception
        return user


    async def get_current_active_user(self , current_user: UserBase = Depends(get_current_user)):
        if current_user.disabled:
            raise HTTPException(status_code=400, detail="Inactive user")
        return current_user
