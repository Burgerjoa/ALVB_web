from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import router

app = FastAPI(
    title="ALVB Quotes API",
    description="견적 관리 API",
    version="1.0.0"
)

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "https://*.vercel.app",
        "*",  # 프로덕션에서는 특정 도메인으로 변경 권장
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 라우터 등록
app.include_router(router, prefix="/api", tags=["quotes"])


@app.get("/")
async def root():
    return {"message": "ALVB Quotes API is running"}


@app.get("/health")
async def health_check():
    return {"status": "healthy"}
