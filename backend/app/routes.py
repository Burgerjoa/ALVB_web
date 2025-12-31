from fastapi import APIRouter, HTTPException
from typing import List
from .models import Quote, QuoteCreate, QuoteUpdate
from .database import supabase

router = APIRouter()


@router.get("/quotes", response_model=List[Quote])
async def get_quotes():
    """모든 견적 목록 가져오기"""
    try:
        response = supabase.table("quotes").select("*").order("created_at", desc=True).execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch quotes: {str(e)}")


@router.get("/quotes/{quote_id}", response_model=Quote)
async def get_quote(quote_id: str):
    """특정 견적 가져오기"""
    try:
        response = supabase.table("quotes").select("*").eq("id", quote_id).execute()
        if not response.data:
            raise HTTPException(status_code=404, detail="Quote not found")
        return response.data[0]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch quote: {str(e)}")


@router.post("/quotes", response_model=Quote)
async def create_quote(quote: QuoteCreate):
    """새 견적 생성"""
    try:
        quote_dict = quote.model_dump()
        response = supabase.table("quotes").insert(quote_dict).execute()
        if not response.data:
            raise HTTPException(status_code=400, detail="Failed to create quote")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create quote: {str(e)}")


@router.put("/quotes/{quote_id}", response_model=Quote)
async def update_quote(quote_id: str, quote: QuoteUpdate):
    """견적 수정"""
    try:
        # 견적이 존재하는지 확인
        existing = supabase.table("quotes").select("*").eq("id", quote_id).execute()
        if not existing.data:
            raise HTTPException(status_code=404, detail="Quote not found")

        # None이 아닌 값만 업데이트
        update_dict = {k: v for k, v in quote.model_dump().items() if v is not None}
        if not update_dict:
            raise HTTPException(status_code=400, detail="No fields to update")

        response = supabase.table("quotes").update(update_dict).eq("id", quote_id).execute()
        if not response.data:
            raise HTTPException(status_code=400, detail="Failed to update quote")
        return response.data[0]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update quote: {str(e)}")


@router.delete("/quotes/{quote_id}")
async def delete_quote(quote_id: str):
    """견적 삭제"""
    try:
        # 견적이 존재하는지 확인
        existing = supabase.table("quotes").select("*").eq("id", quote_id).execute()
        if not existing.data:
            raise HTTPException(status_code=404, detail="Quote not found")

        supabase.table("quotes").delete().eq("id", quote_id).execute()
        return {"message": "Quote deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete quote: {str(e)}")
