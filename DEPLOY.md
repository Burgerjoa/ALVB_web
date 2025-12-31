# FastAPI 서버 무료 배포 가이드

## 🚀 Render에 FastAPI 배포하기 (추천)

**완전 무료, 가장 쉬움, 자동 배포**

### 1단계: Render 가입

1. https://render.com 접속
2. "Get Started for Free" 클릭
3. **GitHub 계정으로 로그인** (추천)

### 2단계: Web Service 생성

1. Render 대시보드에서 **"New +"** 클릭
2. **"Web Service"** 선택
3. **"Build and deploy from a Git repository"** 선택
4. "Next" 클릭

### 3단계: GitHub 저장소 연결

1. **"Connect a repository"** 섹션에서 본인의 GitHub 저장소 찾기
   - `Burgerjoa/ALVB_web` 저장소 선택
   - 저장소가 안 보이면 "Configure account" 클릭하여 권한 부여

2. **"Connect"** 클릭

### 4단계: 배포 설정

다음과 같이 입력:

- **Name**: `alvb-fastapi` (원하는 이름)
- **Region**: `Singapore` (한국과 가장 가까움)
- **Branch**: `claude/remove-toggle-update-design-D7tXP` (또는 main)
- **Root Directory**: `backend`
- **Runtime**: `Python 3`
- **Build Command**:
  ```
  pip install -r requirements.txt
  ```
- **Start Command**:
  ```
  uvicorn app.main:app --host 0.0.0.0 --port $PORT
  ```

### 5단계: 환경변수 설정

**"Environment Variables" 섹션에서 "Add Environment Variable" 클릭:**

1. **SUPABASE_URL**
   - Key: `SUPABASE_URL`
   - Value: Supabase Project URL (예: `https://xxxxx.supabase.co`)

2. **SUPABASE_KEY**
   - Key: `SUPABASE_KEY`
   - Value: Supabase anon public key

3. **PYTHON_VERSION** (선택사항)
   - Key: `PYTHON_VERSION`
   - Value: `3.11.0`

### 6단계: 배포 시작

1. **"Create Web Service"** 클릭
2. 자동으로 배포가 시작됩니다 (3-5분 소요)
3. 로그를 보면서 진행 상황 확인

### 7단계: 배포 완료 및 URL 확인

배포 완료 후:
- **URL이 생성됩니다**: `https://alvb-fastapi.onrender.com`
- 이 URL을 복사하세요!

**API 테스트:**
```bash
# 브라우저에서 접속
https://alvb-fastapi.onrender.com

# 견적 목록 확인
https://alvb-fastapi.onrender.com/api/quotes

# API 문서 확인
https://alvb-fastapi.onrender.com/docs
```

---

## 📱 Next.js 프론트엔드 연결

### 1. 환경변수 업데이트

프로젝트 루트의 `.env.local` 파일 수정:

```env
# 로컬 개발
# NEXT_PUBLIC_API_URL=http://localhost:8000

# 프로덕션 (Render 배포 URL 사용)
NEXT_PUBLIC_API_URL=https://alvb-fastapi.onrender.com
```

### 2. Next.js를 Vercel에 배포

1. **https://vercel.com 접속**
2. GitHub 계정으로 로그인
3. **"Add New Project"** 클릭
4. `ALVB_web` 저장소 선택
5. **환경변수 추가:**
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `https://alvb-fastapi.onrender.com` (Render URL)
6. **"Deploy"** 클릭

### 3. 완료!

- Next.js: `https://your-project.vercel.app`
- FastAPI: `https://alvb-fastapi.onrender.com`

---

## 🎯 기타 무료 배포 옵션

### Railway (추천 2위)
- https://railway.app
- $5 무료 크레딧 제공 (월)
- GitHub 연동 자동 배포
- 더 안정적이지만 무료 크레딧 제한 있음

### Fly.io
- https://fly.io
- 무료 티어 제공
- CLI 설치 필요
- 약간 복잡함

---

## ⚠️ 주의사항

### Render 무료 티어 제한
- **활동이 없으면 15분 후 자동 슬립 모드**
  - 첫 요청 시 콜드 스타트 (30초~1분 소요)
  - 이후 요청은 정상 속도

- **해결 방법:**
  - UptimeRobot 등 모니터링 서비스로 5분마다 핑
  - 또는 유료 플랜 ($7/월)

### CORS 설정
배포 후 프론트엔드 URL을 CORS에 추가하는 것이 좋습니다:

`backend/app/main.py` 수정:
```python
allow_origins=[
    "http://localhost:3000",
    "https://your-frontend.vercel.app",  # Vercel URL 추가
    "https://alvb-fastapi.onrender.com",
],
```

---

## 🔧 트러블슈팅

### 1. 배포 실패: "ModuleNotFoundError"
**원인:** requirements.txt 문제
**해결:** `backend/requirements.txt` 파일 확인

### 2. "Internal Server Error"
**원인:** 환경변수 누락
**해결:** Render 대시보드 → Environment → SUPABASE_URL, SUPABASE_KEY 확인

### 3. CORS 에러
**원인:** CORS 설정 누락
**해결:** `backend/app/main.py`의 `allow_origins`에 프론트엔드 URL 추가

### 4. 슬립 모드 (콜드 스타트)
**원인:** 무료 티어 제한
**해결:**
- UptimeRobot으로 5분마다 핑: https://uptimerobot.com
- 또는 유료 플랜으로 업그레이드

---

## ✅ 완료 체크리스트

- [ ] Supabase 프로젝트 생성 및 데이터 확인
- [ ] Render 회원가입
- [ ] FastAPI 배포 완료
- [ ] API URL 테스트 (https://your-api.onrender.com/docs)
- [ ] Next.js 환경변수 설정
- [ ] Vercel 배포 완료
- [ ] 프론트엔드에서 견적 CRUD 테스트

모든 체크리스트 완료 시 **FastAPI가 인터넷에서 24시간 구동됩니다!** 🎉
