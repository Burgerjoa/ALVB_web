from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class QuoteBase(BaseModel):
    name: str
    phone: Optional[str] = None
    email: Optional[str] = None
    business_type: str
    project_type: str
    area: str
    budget: str
    location: str
    preferred_date: Optional[str] = None
    preferred_time: Optional[str] = None
    message: str


class QuoteCreate(QuoteBase):
    pass


class QuoteUpdate(BaseModel):
    name: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    business_type: Optional[str] = None
    project_type: Optional[str] = None
    area: Optional[str] = None
    budget: Optional[str] = None
    location: Optional[str] = None
    preferred_date: Optional[str] = None
    preferred_time: Optional[str] = None
    message: Optional[str] = None


class Quote(QuoteBase):
    id: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
