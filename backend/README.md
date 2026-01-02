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

## 배포 (Render.com)

### 1. Render.com 계정 생성
- https://render.com 접속
- GitHub 계정으로 로그인

### 2. 새 Web Service 생성
1. Dashboard에서 **"New +"** → **"Web Service"** 클릭
2. GitHub 저장소 연결 (본 저장소 선택)
3. 다음 설정 입력:
   - **Name**: `alvb-fastapi` (또는 원하는 이름)
   - **Root Directory**: `backend`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

### 3. 환경 변수 설정
Render 대시보드의 Environment 탭에서 다음 변수 추가:
```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your-anon-key
```

### 4. 배포
- **"Create Web Service"** 클릭
- 자동으로 빌드 및 배포 시작
- 배포 완료 후 제공되는 URL로 API 접근 가능
- 이후 GitHub에 푸시하면 자동 재배포

### render.yaml을 사용한 자동 배포 (추천)
본 프로젝트는 루트 디렉토리에 `render.yaml` 파일이 포함되어 있어 Render에서 "Blueprint" 방식으로 간편하게 배포 가능:
1. Render Dashboard에서 **"New +"** → **"Blueprint"** 선택
2. GitHub 저장소 연결
3. `render.yaml` 자동 감지 및 설정 적용
4. 환경 변수(`SUPABASE_URL`, `SUPABASE_KEY`)만 입력 후 배포
