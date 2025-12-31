# ALVB 프로젝트 설정 가이드

FastAPI + Supabase + Next.js 환경 구성 가이드

## 목차
1. [Supabase 데이터베이스 설정](#1-supabase-데이터베이스-설정)
2. [FastAPI 백엔드 설정](#2-fastapi-백엔드-설정)
3. [Next.js 프론트엔드 설정](#3-nextjs-프론트엔드-설정)
4. [실행 및 테스트](#4-실행-및-테스트)

---

## 1. Supabase 데이터베이스 설정

### 1.1 Supabase 프로젝트 생성
1. https://supabase.com 접속
2. "New Project" 클릭
3. 프로젝트 이름, 데이터베이스 비밀번호 입력
4. 리전 선택 (Seoul 추천)
5. 프로젝트 생성 완료 대기 (1-2분 소요)

### 1.2 데이터베이스 테이블 생성
1. Supabase 대시보드 → 좌측 메뉴 "SQL Editor" 클릭
2. "New query" 클릭
3. `/backend/supabase_setup.sql` 파일의 전체 내용을 복사하여 붙여넣기
4. "RUN" 버튼 클릭하여 실행
5. 성공 메시지 확인

### 1.3 Supabase URL 및 Key 복사
1. Supabase 대시보드 → 좌측 메뉴 "Settings" → "API"
2. **Project URL** 복사 (예: `https://xxxxx.supabase.co`)
3. **anon public** 키 복사
4. 이 정보는 다음 단계에서 사용됩니다

---

## 2. FastAPI 백엔드 설정

### 2.1 Python 가상환경 생성
```bash
cd backend
python -m venv venv

# Linux/Mac
source venv/bin/activate

# Windows
venv\Scripts\activate
```

### 2.2 패키지 설치
```bash
pip install -r requirements.txt
```

### 2.3 환경변수 설정
```bash
# .env 파일 생성
cp .env.example .env
```

`.env` 파일을 편집하여 Supabase 정보 입력:
```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your-anon-key-here
```

### 2.4 FastAPI 서버 실행
```bash
uvicorn app.main:app --reload --port 8000
```

서버가 `http://localhost:8000` 에서 실행됩니다.

**API 문서 확인:**
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

---

## 3. Next.js 프론트엔드 설정

### 3.1 환경변수 확인
프로젝트 루트에 `.env.local` 파일이 있는지 확인:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 3.2 패키지 설치 (이미 설치되지 않은 경우)
```bash
# 프로젝트 루트에서
npm install
```

### 3.3 Next.js 개발 서버 실행
```bash
npm run dev
```

프론트엔드가 `http://localhost:3000` 에서 실행됩니다.

---

## 4. 실행 및 테스트

### 4.1 전체 시스템 실행 순서

**터미널 1 - FastAPI 백엔드:**
```bash
cd backend
source venv/bin/activate  # Windows: venv\Scripts\activate
uvicorn app.main:app --reload --port 8000
```

**터미널 2 - Next.js 프론트엔드:**
```bash
npm run dev
```

### 4.2 기능 테스트

1. **브라우저에서 http://localhost:3000 접속**
2. **견적 게시판 페이지 이동** (CONTACT 메뉴)
3. **더미 데이터 확인** - 12개의 견적이 표시되어야 함
4. **견적 신청하기** 버튼 클릭하여 새 견적 작성
5. **작성 완료 후 목록에 표시되는지 확인**
6. **견적 클릭하여 상세보기, 수정, 삭제 기능 테스트**

### 4.3 API 직접 테스트 (선택사항)

```bash
# 모든 견적 조회
curl http://localhost:8000/api/quotes

# 새 견적 생성
curl -X POST http://localhost:8000/api/quotes \
  -H "Content-Type: application/json" \
  -d '{
    "name": "테스트",
    "phone": "010-1234-5678",
    "email": "test@example.com",
    "business_type": "카페",
    "project_type": "풀인테리어",
    "area": "30평",
    "budget": "5000-1억원",
    "location": "서울 강남구",
    "message": "테스트 견적입니다"
  }'
```

---

## 5. 배포 (프로덕션)

### 5.1 FastAPI 배포
- **Railway**, **Render**, **Fly.io** 등에서 FastAPI 배포
- 환경변수 `SUPABASE_URL`, `SUPABASE_KEY` 설정 필수
- 배포된 URL 기록 (예: `https://your-api.railway.app`)

### 5.2 Next.js 배포
- **Vercel** 배포 추천
- 환경변수 설정:
  - `NEXT_PUBLIC_API_URL`: FastAPI 배포 URL 입력
- Vercel에서 자동으로 배포 완료

### 5.3 CORS 업데이트
배포 후 `/backend/app/main.py`의 CORS 설정에 프로덕션 URL 추가:
```python
allow_origins=[
    "http://localhost:3000",
    "https://your-frontend.vercel.app",  # 추가
],
```

---

## 트러블슈팅

### 1. Supabase 연결 오류
```
ValueError: SUPABASE_URL and SUPABASE_KEY must be set in .env file
```
**해결:** `/backend/.env` 파일에 Supabase URL과 Key가 올바르게 설정되었는지 확인

### 2. CORS 오류
```
Access to fetch at 'http://localhost:8000/api/quotes' from origin 'http://localhost:3000' has been blocked by CORS policy
```
**해결:** FastAPI 서버가 실행 중인지 확인. `/backend/app/main.py`의 CORS 설정 확인

### 3. 견적 목록이 비어있음
**해결:**
- Supabase SQL Editor에서 `SELECT * FROM quotes;` 실행하여 데이터 확인
- 데이터가 없다면 `supabase_setup.sql` 다시 실행

### 4. API 호출 실패
**해결:**
- FastAPI 서버가 8000 포트에서 실행 중인지 확인
- `.env.local` 파일의 `NEXT_PUBLIC_API_URL` 확인
- 브라우저 개발자 도구(F12) → Network 탭에서 에러 확인

---

## 기술 스택

- **Backend:** FastAPI 0.109.0 + Supabase (PostgreSQL)
- **Frontend:** Next.js 15.5.9 + React + TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase PostgreSQL

---

## 문의
프로젝트 관련 문의사항이 있으시면 이슈를 남겨주세요.
