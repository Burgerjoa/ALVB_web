# ALVB Quotes Backend API

FastAPI + Supabase 기반 견적 관리 백엔드 API

## 설치 및 실행

### 1. Python 가상환경 생성 및 활성화
```bash
cd backend
python -m venv venv

# Linux/Mac
source venv/bin/activate

# Windows
venv\Scripts\activate
```

### 2. 패키지 설치
```bash
pip install -r requirements.txt
```

### 3. 환경변수 설정
`.env` 파일을 생성하고 Supabase 정보 입력:
```bash
cp .env.example .env
```

`.env` 파일 편집:
```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your-anon-key
```

### 4. 서버 실행
```bash
uvicorn app.main:app --reload --port 8000
```

서버가 `http://localhost:8000` 에서 실행됩니다.

## API 문서

서버 실행 후 자동 생성된 API 문서 확인:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## API 엔드포인트

- `GET /api/quotes` - 모든 견적 목록
- `GET /api/quotes/{id}` - 특정 견적 조회
- `POST /api/quotes` - 새 견적 생성
- `PUT /api/quotes/{id}` - 견적 수정
- `DELETE /api/quotes/{id}` - 견적 삭제
