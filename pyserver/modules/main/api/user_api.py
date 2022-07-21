from datetime import datetime, timedelta
from fastapi import Depends,  HTTPException, status , APIRouter
from fastapi.security import  OAuth2PasswordRequestForm

from pyserver.dependencies import get_token_header
from pyserver.modules.main.users.user import User
from ..users.models import *

usr = User()

router = APIRouter(
    prefix="/users",
    tags=["users"],
  
    responses={404: {"description": "Not found"}},
)




fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
        "disabled": False,
    }
}

@router.post("/token", response_model=Token)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    

    user = usr.authenticate_user(fake_users_db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=usr.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = usr.create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/users/me/", response_model=UserBase)
async def read_users_me(current_user: User = Depends(usr.get_current_active_user)):
    return current_user


@router.get("/users/me/items/")
async def read_own_items(current_user: UserBase = Depends(usr.get_current_active_user)):
    return [{"item_id": "Foo", "owner": current_user.username}]
