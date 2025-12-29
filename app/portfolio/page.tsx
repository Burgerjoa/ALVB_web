'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// 레퍼런스 - 상세 프로젝트 정보 포함
const references = [
  {
    id: 1,
    title: '모던 카페',
    category: '카페',
    location: '서울 강남구',
    area: '80㎡',
    year: '2024',
    description: '미니멀한 디자인으로 여유로운 분위기를 연출한 카페 공간',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800',
    ],
    review: '좁은 공간에서 최적의 동선과 편안함을 동시에 구현한 프로젝트. 시공 중 예상치 못한 문제를 창의적으로 해결하며 완성도를 높였습니다.',
    client: 'ALVB 디자인팀',
    detailedReview: `[프로젝트 시작]
강남 골목에 위치한 80㎡의 작은 카페였습니다. 첫 현장 답사에서 가장 큰 고민은 "이 좁은 공간에서 어떻게 답답함 없이 20석 이상을 확보할까"였어요.

클라이언트는 창업 초보였고, 좌석을 최대한 많이 넣고 싶어 하셨습니다. 하지만 우리는 단호하게 말씀드렸습니다. "좌석 많이 넣으면 3개월 장사하고 망합니다. 편안한 공간을 만들어야 합니다."

현장에서 3시간 동안 햇빛 각도, 통행량, 주변 상권을 분석했습니다. 특히 오후 2-4시 햇빛이 들어오는 창가 쪽이 핵심이라고 판단했어요.

[설계의 핵심 - 동선 최적화]
1차 설계안에서 가장 고민한 부분은 바리스타 동선이었습니다. 주방과 홀 사이 거리가 6m밖에 안 되는 공간에서, 바리스타가 하루 200번 이상 왕복해야 하는 동선을 어떻게 줄일까?

해답은 '아일랜드형 바' 구조였습니다. 주방을 홀 중앙으로 배치해서 동선을 40% 단축시켰어요. 디자이너 박 과장이 제안한 아이디어였는데, 팀 회의에서 3시간 동안 토론 끝에 확정했습니다.

맞춤 가구도 직접 설계했습니다. 기성 의자는 너무 크거나 컨셉이 안 맞았어요. 목공소와 7번의 샘플 제작 끝에 완벽한 높이와 폭을 찾아냈습니다.

[시공 중 위기 - 누수 발견]
시공 3주차, 천장 석고보드를 뜯는 순간 팀 전체가 멘붕했습니다. 누수 얼룩이 선명했어요. 위층 배관에서 새는 물이었죠.

현장소장 김 대리가 즉시 위층 건물주에게 연락했습니다. 하지만 건물주는 "모르는 일"이라며 발뺌. 클라이언트는 패닉 상태. 우리는 선택의 기로에 섰습니다.

팀 긴급 회의 결과: "일단 우리가 방수 처리하고, 건물주 협상은 병행하자." 추가 비용 150만원이 발생했지만, 프로젝트를 멈출 순 없었어요.

다행히 김 대리의 끈질긴 협상 끝에 건물주가 70만원을 부담하기로 합의했습니다. 그 과정에서 일정은 4일 지연됐지만, 다른 공정을 앞당겨서 결국 원래 일정을 맞췄습니다.

[디테일의 완성 - 조명 작업]
조명 작업이 가장 까다로웠습니다. 박 과장이 "음료 사진이 예쁘게 나와야 SNS 마케팅이 된다"며 조명 각도를 밀리미터 단위로 조정했어요.

창가 테이블 조명은 8번을 재설치했습니다. 자연광과 인공 조명의 밸런스를 맞추는 게 정말 어려웠거든요. 오후 2시, 4시, 6시 각 시간대별로 테스트했습니다.

완공 3일 전, 전 팀원이 현장에 모여서 최종 디테일을 점검했습니다. 의자 간격 5cm 조정, 액자 위치 2cm 이동, 메뉴판 각도 조정... 이런 작은 것들이 모여서 완성도를 만든다는 걸 우리는 압니다.

[결과와 배운 점]
오픈 3개월 후 클라이언트에게 연락이 왔습니다. "평일도 80% 차요. 대표님 말씀이 맞았어요."

이 프로젝트에서 배운 것:
1. 좁은 공간일수록 '덜어내는' 용기가 필요하다
2. 예상치 못한 문제는 반드시 생긴다. 중요한 건 대처 속도
3. 조명은 타협하지 마라. 그게 공간의 70%다

현장소장 김 대리의 말: "누수 발견했을 때 진짜 포기하고 싶었는데, 끝까지 해서 다행이다."
디자이너 박 과장의 말: "조명 8번 재설치한 보람이 있다. 사진 보면 정말 예쁘게 나온다."

프로젝트 기간: 6주 (당초 계획 대비 4일 지연)
최종 만족도: 클라이언트 95점 / 팀 자체 평가 88점`,
    projectDetails: {
      duration: '6주',
      budget: '5,000만원',
      challenges: '좁은 공간에서 최대한의 좌석 확보와 동선 최적화',
      solutions: '맞춤형 가구 제작으로 공간 효율성 극대화, 밝은 톤의 컬러로 개방감 연출',
    },
  },
  {
    id: 2,
    title: '프리미엄 레스토랑',
    category: '레스토랑',
    location: '서울 용산구',
    area: '150㎡',
    year: '2024',
    description: '고급스러운 분위기의 파인 다이닝 레스토랑',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800',
    ],
    review: '20년 된 레스토랑의 정체성을 유지하면서도 현대적으로 재해석한 프로젝트. 영업 중 리뉴얼이라는 고난도 작업을 성공적으로 완수했습니다.',
    client: 'ALVB 프로젝트팀',
    detailedReview: `[첫 현장 방문]
용산 20년 터줏대감 레스토랑. 첫 방문했을 때 솔직히 "이거 완전히 뜯어야 하는 거 아닌가?" 싶었습니다. 인테리어가 20년 전 그대로였거든요.

하지만 저녁 7시, 손님들로 가득 찬 매장을 보면서 생각이 바뀌었습니다. "이 공간엔 20년의 역사가 있다. 함부로 바꾸면 안 되겠다."

대표와 디자이너 이 팀장이 현장에서 3시간 동안 관찰만 했습니다. 손님 동선, 직원 움직임, 병목 구간, 피크 타임 테이블 회전율... 데이터를 모았어요.

[설계 컨셉 - 정체성 보존 vs 혁신]
팀 회의는 논쟁의 연속이었습니다.

이 팀장: "조명만 바꿔도 50%는 달라 보일 겁니다."
최 소장: "아니요, 구조적으로 손봐야 합니다. 주방 동선이 너무 비효율적이에요."
대표: "클라이언트가 가장 무서워하는 게 단골 이탈입니다. 신중해야 합니다."

결론: "보이는 건 최소한만 바꾸고, 보이지 않는 기능은 전부 혁신하자."

조명 설계에만 2주가 걸렸습니다. 음식 사진이 예쁘게 나오는 색온도, 테이블별 조도 차이, 시간대별 자동 조절... 조명 업체와 17번 미팅했어요.

[최대 난제 - 영업 중 시공]
이게 진짜 문제였습니다. 10주 동안 레스토랑 문 닫으면 매출 손실 1억. 불가능했죠.

최 소장이 제안한 '구역별 순차 공사' 방식:
- 1주차: A구역 공사 / B구역 영업
- 2주차: B구역 공사 / A구역 영업
- 반복

이론상으론 완벽했지만, 현장은 달랐습니다.

[시공 중 위기들]

**위기 1: 소음 문제 (2주차)**
오후 4시까지 공사 끝내기로 했지만, 철거 작업이 예상보다 시끄러웠어요. 영업 중인 구역 손님들 불만 폭발.

해결: 방음 패널 추가 설치 (200만원 추가 비용). 공사 시간을 오후 3시로 당김. 작업자들 새벽 6시 출근으로 변경.

**위기 2: 타일 컬러 오류 (5주차)**
이탈리아산 타일이 도착했는데, 색상이 샘플과 완전히 달랐어요. 밝은 베이지를 주문했는데 온 건 어두운 그레이.

팀 긴급 회의:
- 클라이언트: "그냥 쓰죠. 3일 지연은 부담스러워요."
- 이 팀장: "안 됩니다. 이 색상은 전체 톤을 망칩니다."
- 최 소장: "재주문하면 일주일 걸립니다. 다른 공정 조정 가능합니다."

결정: 재주문. 그 일주일 동안 조명 설치를 앞당겨서 진행했습니다.

**위기 3: 조명 테스트 실패 (8주차)**
설치한 조명으로 음식 사진을 찍어봤는데... 처참했습니다. 음식이 누렇게 나왔어요.

이 팀장이 밤 11시까지 현장에 남아서 조명 각도를 하나하나 조정했습니다. 테이블 12개 × 조명 3개 = 36개 조명을 전부 재조정. 3일 밤샘.

[완공과 검증]
완공 전날 밤, 전 팀원이 모여서 실제로 코스 요리를 먹어봤습니다. 손님 입장에서 경험을 검증하는 거죠.

발견한 문제:
- 4번 테이블 의자가 5cm 너무 높음 → 즉시 조정
- 화장실 가는 동선에 모서리가 걸림 → 라운딩 처리
- 주방 소리가 3번 테이블까지 들림 → 방음재 추가

[결과]
오픈 2주 후 클라이언트 연락: "단골들이 다들 좋아해요. 젊은 손님도 늘었어요."

오픈 2개월 후 매출: 이전 대비 40% 증가
인스타그램 해시태그: 300개 → 1,200개
재방문율: 68% → 81%

[프로젝트 회고]

이 팀장: "조명 3일 밤샘한 거 후회 없다. 그게 이 프로젝트의 80%였다."
최 소장: "영업 중 시공, 다시는 안 하고 싶다. 하지만 해냈다는 게 자랑스럽다."
김 대리: "타일 재주문 결정할 때 떨렸는데, 결과 보니 잘했다."

배운 점:
1. 역사가 있는 공간은 존중해야 한다. 무조건 새것이 답이 아니다.
2. 영업 중 시공은 일정의 1.5배 시간이 필요하다.
3. 조명이 전부다. 특히 레스토랑은.

프로젝트 기간: 10주 (당초 계획 대비 일정 준수)
팀 자체 평가: 92점
아쉬운 점: 예산 15% 초과 (추가 방음, 조명 재작업)`,
    projectDetails: {
      duration: '10주',
      budget: '1억 2,000만원',
      challenges: '영업을 지속하면서 리뉴얼 진행',
      solutions: '구역별 단계적 시공, 고급스러운 조명 시스템으로 음식 품질 강조',
    },
  },
  {
    id: 3,
    title: '부티크 샵',
    category: '리테일',
    location: '서울 성동구',
    area: '100㎡',
    year: '2023',
    description: '감각적인 VMD로 브랜드 아이덴티티를 극대화한 매장',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      'https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?w=800',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800',
    ],
    review: '온라인 브랜드 감성을 오프라인 공간으로 완벽히 구현. 인스타그램 2년치 분석부터 시작한, 데이터 기반 브랜드 공간 디자인.',
    client: 'ALVB 브랜딩팀',
    detailedReview: `[프로젝트 브리핑]
성동구 100㎡, 온라인 패션 브랜드의 첫 오프라인 매장. 클라이언트가 가져온 자료는 인스타그램 피드 캡쳐 50장과 "이런 느낌이요"라는 한마디.

팀장 정 실장: "이거 어떻게 해야 하지?"
디자이너 김 주임: "일단 인스타그램부터 파헤쳐 봅시다."

미팅 전 2주간 우리가 한 일:
- 인스타그램 2년치 포스팅 300개 분석
- 컬러 팔레트 추출 (베이지 32%, 화이트 28%, 블랙 18%...)
- 해시태그 분석 (미니멀 47%, 지속가능 23%...)
- 패키징 실물 구매해서 색상 코드 추출

첫 미팅에서 클라이언트 반응: "어... 어떻게 이걸 다 알았어요?"

[설계 - 온라인을 오프라인으로]
가장 큰 고민: "인스타그램 피드처럼 보이게 하되, 옷가게처럼 기능해야 한다."

1차 설계안:
- 전체 화이트 + 베이지 톤
- 벽 한 면 전체를 브랜드 컬러(#F5F1E8)로
- 맞춤 행거 제작 (기성품은 전부 브랜드 톤과 안 맞음)

클라이언트 반응: "너무 미니멀한 거 아닌가요? 옷이 안 보일 것 같은데..."

팀 회의:
김 주임: "1차안은 우리가 너무 브랜드 감성에만 집중했어요."
정 실장: "맞아. 여긴 갤러리가 아니라 매장이다. 제품이 주인공이어야 해."

2차 설계안:
- 미니멀 유지하되, 조명으로 '포커스 존' 만들기
- 계절 컬렉션용 '하이라이트 월' 추가
- 피팅룸을 '인스타그래머블 존'으로 설계

클라이언트: "이거다!"

[시공 중 위기 - 원목 패널 참사]

4주차 목요일 오전, 현장소장 박 대리 전화:
"팀장님, 큰일 났습니다. 원목 패널 색이 완전히 다릅니다."

현장 가보니... 샘플은 밝은 내추럴 오크, 실제 온 건 다크 월넛. 완전히 다른 나무.

박 대리: "업체에서 샘플을 잘못 보냈대요. 재주문하면 일주일 걸립니다."
클라이언트: "비슷한 거 같은데... 그냥 쓰면 안 될까요?"
김 주임: (현장 달려와서) "절대 안 됩니다. 이 컬러 쓰면 전체가 무거워져요."

정 실장 결정: "재주문합니다. 그 일주일 동안 조명 먼저 설치하고, VMD 구역을 먼저 완성합시다."

결과: 일주일 후 도착한 올바른 원목 패널을 보고 클라이언트도 인정. "진짜 다르네요..."

[VMD 큐레이션 - 우리가 직접]

완공 3일 전, 팀 전체가 현장에서 '실험'을 했습니다.

실험 1: 행거 간격
- 10cm 간격: 너무 빽빽, 답답함
- 20cm 간격: 적당, 각 아이템이 돋보임
- 30cm 간격: 너무 휑함

결론: 시그니처 아이템은 30cm, 일반 아이템은 20cm

실험 2: 조명 각도
옷에 조명이 직접 닿으면 색이 이상해 보임. 45도 각도로 벽 조명 → 반사광으로 옷 조명. 12번 테스트.

실험 3: 피팅룸 거울 위치
거울 위치 1cm 차이로 사진 느낌이 완전히 달라짐. 인스타그램 필터 없이도 예쁘게 나오는 각도 찾기. 27번 테스트.

김 주임: "27번째에 포기하고 싶었는데, 28번째에 찾았어요."

[오픈 - 데이터로 검증]

오픈 첫 주 우리가 몰래 관찰한 것들:
- 평균 체류 시간: 42분 (목표 30분 초과 달성)
- 피팅룸 사용률: 73% (예상 50%)
- 인스타그램 태그: 126개 (1주일 만에)

특히 신기했던 건, 손님들이 매장을 배경으로 사진 찍는 걸 자연스럽게 받아들였다는 점. "포토존입니다" 표시 안 했는데도 알아서 사진 찍음.

정 실장: "공간 자체가 인스타그램이 된 거야."

[예상 못한 문제 - 너무 잘됨]

오픈 3주 후 클라이언트 전화:
"매장이 너무 붐벼서 오히려 문제예요. 옷 구경하러 온 건지 사진 찍으러 온 건지..."

팀 긴급 회의:
- 입장 인원 제한? → 아니다, 마케팅 효과가 더 크다
- 피팅룸 시간 제한? → 테스트해보자

해결책: 피팅룸 내부에 "10분 이용 부탁드립니다" 감성 사인 설치. 효과 80%.

[프로젝트 결과]

오픈 2개월 데이터:
- 오프라인 매출: 월 2,000만원 (목표 1,500만원)
- 온라인 매출: 3,000만원 → 3,800만원 (매장 효과)
- 인스타그램 태그: 890개
- 평균 구매 전환율: 23% (온라인 8%의 3배)

[팀 회고]

정 실장: "인스타그램 2년치 분석한 게 이 프로젝트의 80%였다. 데이터가 답이다."
김 주임: "피팅룸 거울 각도 27번 조정... 다시는 못 한다. 하지만 그게 차별화였다."
박 대리: "원목 패널 재주문 결정할 때 떨렸는데, 결과가 증명했다."

배운 점:
1. 브랜드 공간 설계는 '감'이 아니라 '데이터'다
2. 온라인과 오프라인은 경쟁이 아니라 시너지다
3. 디테일이 전부다. 거울 각도 1cm, 조명 각도 5도가 완성도를 결정한다

프로젝트 기간: 8주 (일주일 지연)
팀 자체 평가: 94점
클라이언트 재계약: 2호점 준비 중`,
    projectDetails: {
      duration: '8주',
      budget: '8,000만원',
      challenges: '온라인 브랜드 아이덴티티를 오프라인 공간으로 전환',
      solutions: '브랜드 컬러와 톤을 공간 전반에 적용, 인스타그래머블한 포토존 설치',
    },
  },
]

// Artwork - 다양한 이미지 갤러리
const artworks = [
  { id: 1, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800', category: '카페' },
  { id: 2, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', category: '레스토랑' },
  { id: 3, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', category: '리테일' },
  { id: 4, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', category: '오피스' },
  { id: 5, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800', category: '카페' },
  { id: 6, image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800', category: '뷰티' },
  { id: 7, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', category: '카페' },
  { id: 8, image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800', category: '레스토랑' },
  { id: 9, image: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=800', category: '리테일' },
  { id: 10, image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800', category: '오피스' },
  { id: 11, image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800', category: '카페' },
  { id: 12, image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800', category: '뷰티' },
]

const categories = ['전체', '카페', '레스토랑', '리테일', '오피스', '뷰티']

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'references' | 'artwork'>('references')
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredReferences =
    selectedCategory === '전체'
      ? references
      : references.filter((ref) => ref.category === selectedCategory)

  const filteredArtworks =
    selectedCategory === '전체'
      ? artworks
      : artworks.filter((art) => art.category === selectedCategory)

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-medium tracking-[0.3em] text-gray-500 uppercase">Our Works</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-4 tracking-tight">
              Portfolio
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              ALVB가 완성한 다양한 상업공간 프로젝트를 확인해보세요
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('references')}
              className={`px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
                activeTab === 'references'
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              REFERENCES
            </button>
            <button
              onClick={() => setActiveTab('artwork')}
              className={`px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
                activeTab === 'artwork'
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              ARTWORK
            </button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-zinc-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      {activeTab === 'references' && (
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredReferences.map((project) => (
                <div
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project)
                    setCurrentImageIndex(0)
                  }}
                  className="group bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-medium tracking-wide text-black">
                      {project.category}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        자세히 보기 →
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed font-light">{project.description}</p>

                    <div className="space-y-2 text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                      <p className="flex items-center gap-2">
                        <span className="text-white/40">📍</span> {project.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-white/40">📐</span> {project.area}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-white/40">📅</span> {project.year}
                      </p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/5 p-6">
                      <p className="text-gray-400 italic leading-relaxed mb-3">"{project.review}"</p>
                      <p className="text-gray-500 text-sm">- {project.client}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Artwork Section */}
      {activeTab === 'artwork' && (
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredArtworks.map((artwork) => (
                <div
                  key={artwork.id}
                  className="group relative overflow-hidden aspect-square bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <img
                    src={artwork.image}
                    alt={`Artwork ${artwork.id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium tracking-wide">{artwork.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-32 bg-zinc-900 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-gray-500 uppercase block mb-6">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            당신의 공간도 특별하게 만들어보세요
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            지금 바로 무료 견적을 신청하세요
          </p>
          <a
            href="/quote"
            className="inline-block bg-white text-black px-10 py-4 text-sm font-medium tracking-wide hover:bg-gray-200 transition-all duration-300"
          >
            START PROJECT
          </a>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-zinc-900 border border-white/20 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 backdrop-blur-sm w-10 h-10 flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Gallery */}
            <div className="relative h-96 bg-black">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white border border-white/20">
                    {selectedProject.category}
                  </span>
                  <span className="text-gray-500 text-sm">{selectedProject.year}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  {selectedProject.title}
                </h2>
                <p className="text-xl text-gray-400 font-light">{selectedProject.description}</p>
              </div>

              {/* Project Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-white/10">
                <div>
                  <div className="text-gray-500 text-sm mb-2">위치</div>
                  <div className="text-white font-medium">{selectedProject.location}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-2">면적</div>
                  <div className="text-white font-medium">{selectedProject.area}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-2">기간</div>
                  <div className="text-white font-medium">{selectedProject.projectDetails.duration}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-2">예산</div>
                  <div className="text-white font-medium">{selectedProject.projectDetails.budget}</div>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="mb-12 pb-12 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">프로젝트 개요</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-2">과제</div>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.projectDetails.challenges}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-2">솔루션</div>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.projectDetails.solutions}</p>
                  </div>
                </div>
              </div>

              {/* Detailed Review */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">작업 후기</h3>
                <div className="bg-white/[0.03] border border-white/10 p-8">
                  <div className="text-gray-300 leading-relaxed whitespace-pre-line mb-6 italic">
                    {selectedProject.detailedReview}
                  </div>
                  <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">📝</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{selectedProject.client}</div>
                      <div className="text-gray-500 text-sm">{selectedProject.title}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-8 border-t border-white/10">
                <p className="text-gray-400 mb-6">비슷한 프로젝트를 진행하고 싶으신가요?</p>
                <a
                  href="/quote"
                  className="inline-block bg-white text-black px-10 py-4 text-sm font-medium tracking-wide hover:bg-gray-200 transition-all duration-300"
                >
                  무료 견적 받기
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
