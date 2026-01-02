'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface QuoteData {
  id: string
  name: string
  phone?: string
  email?: string
  business_type: string
  project_type: string
  area: string
  budget: string
  location: string
  preferred_date?: string
  preferred_time?: string
  message: string
  created_at: string
  updated_at: string
}

// Next.js API Routes를 사용하므로 같은 도메인 사용
const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export default function Quote() {
  const [view, setView] = useState<'list' | 'create' | 'detail'>('list')
  const [quotes, setQuotes] = useState<QuoteData[]>([])
  const [selectedQuote, setSelectedQuote] = useState<QuoteData | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [password, setPassword] = useState('')
  const [pendingQuote, setPendingQuote] = useState<QuoteData | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business_type: '',
    project_type: '',
    area: '',
    budget: '',
    location: '',
    preferred_date: '',
    preferred_time: '',
    message: '',
  })

  // API에서 견적 목록 불러오기
  useEffect(() => {
    fetchQuotes()
  }, [])

  const fetchQuotes = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/api/quotes`)
      if (response.ok) {
        const data = await response.json()
        setQuotes(data)
      }
    } catch (error) {
      console.error('Failed to fetch quotes:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (isEditing && selectedQuote) {
        // 수정
        const response = await fetch(`${API_URL}/api/quotes/${selectedQuote.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          alert('견적이 수정되었습니다.')
          await fetchQuotes()
        }
      } else {
        // 새로 작성
        const response = await fetch(`${API_URL}/api/quotes`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          alert('견적이 등록되었습니다.')
          await fetchQuotes()
        }
      }

      // 초기화
      setFormData({
        name: '',
        phone: '',
        email: '',
        business_type: '',
        project_type: '',
        area: '',
        budget: '',
        location: '',
        preferred_date: '',
        preferred_time: '',
        message: '',
      })
      setIsEditing(false)
      setSelectedQuote(null)
      setView('list')
    } catch (error) {
      console.error('Failed to submit quote:', error)
      alert('견적 등록에 실패했습니다.')
    }
  }

  const handleEdit = (quote: QuoteData) => {
    setFormData({
      name: quote.name,
      phone: quote.phone || '',
      email: quote.email || '',
      business_type: quote.business_type,
      project_type: quote.project_type,
      area: quote.area,
      budget: quote.budget,
      location: quote.location,
      preferred_date: quote.preferred_date || '',
      preferred_time: quote.preferred_time || '',
      message: quote.message,
    })
    setSelectedQuote(quote)
    setIsEditing(true)
    setView('create')
  }

  const handleDelete = async (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      try {
        const response = await fetch(`${API_URL}/api/quotes/${id}`, {
          method: 'DELETE',
        })

        if (response.ok) {
          alert('견적이 삭제되었습니다.')
          await fetchQuotes()
          setView('list')
        }
      } catch (error) {
        console.error('Failed to delete quote:', error)
        alert('삭제에 실패했습니다.')
      }
    }
  }

  const handleViewDetail = (quote: QuoteData) => {
    setPendingQuote(quote)
    setShowPasswordModal(true)
  }

  const handlePasswordSubmit = () => {
    // 간단한 비밀번호 체크 (실제로는 백엔드에서 처리해야 함)
    if (password === '1234') {
      setSelectedQuote(pendingQuote)
      setView('detail')
      setShowPasswordModal(false)
      setPassword('')
      setPendingQuote(null)
    } else {
      alert('비밀번호가 올바르지 않습니다.')
    }
  }

  const maskName = (name: string) => {
    if (!name) return '***'
    if (name.length <= 1) return '*'
    if (name.length === 2) return name[0] + '*'
    return name[0] + '*'.repeat(name.length - 2) + name[name.length - 1]
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatDateShort = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-block">
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-theme-secondary">Get Started</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-theme-primary">
              견적 신청 게시판
            </h1>
            <p className="text-lg md:text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed font-light">
              다른 분들의 견적 신청 사례를 참고하고, 나만의 견적을 신청하세요
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 border-t border-theme-accent-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* View: List */}
          {view === 'list' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-theme-primary tracking-tight">
                  전체 견적 신청 ({quotes.length})
                </h2>
                <button
                  onClick={() => {
                    setIsEditing(false)
                    setSelectedQuote(null)
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      business_type: '',
                      project_type: '',
                      area: '',
                      budget: '',
                      location: '',
                      preferred_date: '',
                      preferred_time: '',
                      message: '',
                    })
                    setView('create')
                  }}
                  className="bg-theme-accent text-white px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300"
                >
                  견적 신청하기
                </button>
              </div>

              {loading ? (
                <div className="border-2 border-theme-accent-20 bg-theme-accent-5 rounded-xl p-12 text-center">
                  <p className="text-theme-secondary text-lg">로딩 중...</p>
                </div>
              ) : quotes.length === 0 ? (
                <div className="border-2 border-theme-accent-20 bg-theme-accent-5 rounded-xl p-12 text-center">
                  <p className="text-theme-secondary text-lg">등록된 견적이 없습니다.</p>
                  <p className="text-theme-secondary text-sm mt-2">첫 견적을 신청해보세요!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {/* 테이블 헤더 */}
                  <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-2 border-theme-accent-20 bg-theme-accent-5 font-medium text-sm text-theme-secondary">
                    <div className="col-span-1 text-center">번호</div>
                    <div className="col-span-2">업종</div>
                    <div className="col-span-4">제목</div>
                    <div className="col-span-2">위치</div>
                    <div className="col-span-2">평수</div>
                    <div className="col-span-1 text-center">날짜</div>
                  </div>

                  {/* 게시글 목록 */}
                  {quotes.map((quote, index) => (
                    <div
                      key={quote.id}
                      className="group border-2 border-theme-accent-20 hover:border-theme-accent-30 bg-theme-accent-5 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                      onClick={() => handleViewDetail(quote)}
                    >
                      {/* 데스크톱 뷰 */}
                      <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 items-center">
                        <div className="col-span-1 text-center text-theme-secondary text-sm">
                          {quotes.length - index}
                        </div>
                        <div className="col-span-2">
                          <span className="bg-theme-accent text-white px-3 py-1 text-xs font-medium tracking-wide">
                            {quote.business_type}
                          </span>
                        </div>
                        <div className="col-span-4">
                          <h3 className="text-base font-bold text-theme-primary tracking-tight group-hover:text-theme-accent transition-colors">
                            {quote.project_type} - {maskName(quote.name)}님의 {quote.business_type} 인테리어
                          </h3>
                        </div>
                        <div className="col-span-2 text-theme-secondary text-sm">
                          {quote.location}
                        </div>
                        <div className="col-span-2 text-theme-secondary text-sm">
                          {quote.area}
                        </div>
                        <div className="col-span-1 text-center text-theme-secondary text-xs">
                          {formatDateShort(quote.created_at)}
                        </div>
                      </div>

                      {/* 모바일 뷰 */}
                      <div className="md:hidden p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-theme-secondary text-sm">#{quotes.length - index}</span>
                            <span className="bg-theme-accent text-white px-2 py-0.5 text-xs font-medium tracking-wide">
                              {quote.business_type}
                            </span>
                          </div>
                          <span className="text-theme-secondary text-xs">
                            {formatDateShort(quote.created_at)}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-theme-primary tracking-tight mb-2">
                          {quote.project_type} - {maskName(quote.name)}님의 {quote.business_type} 인테리어
                        </h3>
                        <div className="flex gap-4 text-theme-secondary text-sm">
                          <span>📍 {quote.location}</span>
                          <span>📐 {quote.area}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* View: Create/Edit */}
          {view === 'create' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-theme-primary tracking-tight">
                  {isEditing ? '견적 수정' : '견적 신청하기'}
                </h2>
                <button
                  onClick={() => setView('list')}
                  className="border-2 border-theme-accent-20 text-theme-secondary px-6 py-3 text-sm font-medium tracking-wide hover:border-theme-accent-30 bg-theme-accent-5 transition-all duration-300"
                >
                  목록으로
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Info */}
                <div className="border-2 border-theme-accent-20 bg-theme-accent-5 backdrop-blur-sm rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-theme-primary tracking-tight">연락처 정보</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-theme-secondary mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent bg-white text-theme-primary"
                        placeholder="홍길동"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-theme-secondary mb-2">
                        연락처 *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent bg-white text-theme-primary"
                        placeholder="010-1234-5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-theme-secondary mb-2">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent bg-white text-theme-primary"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="border-2 border-theme-accent-20 bg-theme-accent-5 backdrop-blur-sm rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-theme-primary tracking-tight">프로젝트 정보</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="business_type" className="block text-sm font-medium text-theme-secondary mb-2">
                        업종 *
                      </label>
                      <select
                        id="business_type"
                        name="business_type"
                        required
                        value={formData.business_type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent bg-white text-theme-primary"
                      >
                        <option value="">선택해주세요</option>
                        <option value="카페">카페</option>
                        <option value="레스토랑">레스토랑</option>
                        <option value="리테일">리테일/샵</option>
                        <option value="오피스">오피스</option>
                        <option value="뷰티">뷰티/살롱</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="project_type" className="block text-sm font-medium text-theme-secondary mb-2">
                        인테리어 범위 *
                      </label>
                      <select
                        id="project_type"
                        name="project_type"
                        required
                        value={formData.project_type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent bg-white text-theme-primary"
                      >
                        <option value="">선택해주세요</option>
                        <option value="풀인테리어">풀인테리어 (전체)</option>
                        <option value="부분인테리어">부분인테리어</option>
                        <option value="리모델링">리모델링</option>
                        <option value="상담필요">상담 후 결정</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="area" className="block text-sm font-medium text-theme-secondary mb-2">
                        평수 *
                      </label>
                      <input
                        type="text"
                        id="area"
                        name="area"
                        required
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent bg-white text-theme-primary"
                        placeholder="예: 30평"
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-theme-secondary mb-2">
                        예산
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent bg-white text-theme-primary"
                      >
                        <option value="">선택해주세요</option>
                        <option value="3000만원 이하">3,000만원 이하</option>
                        <option value="3000-5000만원">3,000만원 - 5,000만원</option>
                        <option value="5000-1억원">5,000만원 - 1억원</option>
                        <option value="1억원 이상">1억원 이상</option>
                        <option value="상담필요">상담 후 결정</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-theme-secondary mb-2">
                        위치 *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent bg-white text-theme-primary"
                        placeholder="서울시 강남구"
                      />
                    </div>
                  </div>
                </div>

                {/* Meeting Schedule */}
                <div className="border-2 border-theme-accent-20 bg-theme-accent-5 backdrop-blur-sm rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-theme-primary tracking-tight">미팅 희망 일정</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="preferred_date" className="block text-sm font-medium text-theme-secondary mb-2">
                        희망 날짜
                      </label>
                      <input
                        type="date"
                        id="preferred_date"
                        name="preferred_date"
                        value={formData.preferred_date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent bg-white text-theme-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferred_time" className="block text-sm font-medium text-theme-secondary mb-2">
                        희망 시간
                      </label>
                      <select
                        id="preferred_time"
                        name="preferred_time"
                        value={formData.preferred_time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent bg-white text-theme-primary"
                      >
                        <option value="">선택해주세요</option>
                        <option value="오전 10-12시">오전 10-12시</option>
                        <option value="오후 12-2시">오후 12-2시</option>
                        <option value="오후 2-4시">오후 2-4시</option>
                        <option value="오후 4-6시">오후 4-6시</option>
                        <option value="협의">협의 후 결정</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div className="border-2 border-theme-accent-20 bg-theme-accent-5 backdrop-blur-sm rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-theme-primary tracking-tight">추가 요청사항</h3>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-theme-secondary mb-2">
                      상세 내용
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent bg-white text-theme-primary"
                      placeholder="프로젝트에 대한 자세한 내용이나 원하시는 스타일 등을 자유롭게 작성해주세요."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 justify-center pt-4">
                  <button
                    type="button"
                    onClick={() => setView('list')}
                    className="border-2 border-theme-accent-20 text-theme-secondary px-8 py-4 text-sm font-medium tracking-wide hover:border-theme-accent-30 bg-theme-accent-5 transition-all duration-300"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="bg-theme-accent text-white px-12 py-4 text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300"
                  >
                    {isEditing ? '수정하기' : '견적 신청하기'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* View: Detail */}
          {view === 'detail' && selectedQuote && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-theme-primary tracking-tight">
                  견적 상세보기
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(selectedQuote)}
                    className="bg-theme-accent text-white px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDelete(selectedQuote.id)}
                    className="border-2 border-red-500 text-red-500 px-6 py-3 text-sm font-medium tracking-wide hover:bg-red-50 transition-all duration-300"
                  >
                    삭제
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className="border-2 border-theme-accent-20 text-theme-secondary px-6 py-3 text-sm font-medium tracking-wide hover:border-theme-accent-30 bg-theme-accent-5 transition-all duration-300"
                  >
                    목록으로
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Header Info */}
                <div className="border-2 border-theme-accent-20 bg-theme-accent-5 backdrop-blur-sm rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl font-bold text-theme-primary tracking-tight">
                      {selectedQuote.name}님의 견적 신청
                    </h3>
                    <span className="bg-theme-accent text-white px-4 py-1.5 text-sm font-medium tracking-wide">
                      {selectedQuote.business_type}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-theme-secondary">
                    <div>
                      <p className="text-sm opacity-75 mb-1">작성일</p>
                      <p className="font-medium">{formatDate(selectedQuote.created_at)}</p>
                    </div>
                    {selectedQuote.updated_at !== selectedQuote.created_at && (
                      <div>
                        <p className="text-sm opacity-75 mb-1">수정일</p>
                        <p className="font-medium">{formatDate(selectedQuote.updated_at)}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-2 border-theme-accent-20 bg-theme-accent-5 backdrop-blur-sm rounded-xl p-8">
                  <h4 className="text-xl font-bold mb-4 text-theme-primary tracking-tight">연락처 정보</h4>
                  <div className="space-y-3 text-theme-secondary">
                    {selectedQuote.email && <p><span className="opacity-75">📧 이메일:</span> {selectedQuote.email}</p>}
                    {selectedQuote.phone && <p><span className="opacity-75">📞 연락처:</span> {selectedQuote.phone}</p>}
                  </div>
                </div>

                {/* Project Info */}
                <div className="border-2 border-theme-accent-20 bg-theme-accent-5 backdrop-blur-sm rounded-xl p-8">
                  <h4 className="text-xl font-bold mb-4 text-theme-primary tracking-tight">프로젝트 정보</h4>
                  <div className="grid grid-cols-2 gap-4 text-theme-secondary">
                    <div>
                      <p className="text-sm opacity-75 mb-1">인테리어 범위</p>
                      <p className="font-medium">{selectedQuote.project_type}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75 mb-1">평수</p>
                      <p className="font-medium">{selectedQuote.area}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75 mb-1">예산</p>
                      <p className="font-medium">{selectedQuote.budget || '상담 후 결정'}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75 mb-1">위치</p>
                      <p className="font-medium">{selectedQuote.location}</p>
                    </div>
                  </div>
                </div>

                {/* Meeting Schedule */}
                {(selectedQuote.preferred_date || selectedQuote.preferred_time) && (
                  <div className="border-2 border-theme-accent-20 bg-theme-accent-5 backdrop-blur-sm rounded-xl p-8">
                    <h4 className="text-xl font-bold mb-4 text-theme-primary tracking-tight">미팅 희망 일정</h4>
                    <div className="grid grid-cols-2 gap-4 text-theme-secondary">
                      {selectedQuote.preferred_date && (
                        <div>
                          <p className="text-sm opacity-75 mb-1">희망 날짜</p>
                          <p className="font-medium">{selectedQuote.preferred_date}</p>
                        </div>
                      )}
                      {selectedQuote.preferred_time && (
                        <div>
                          <p className="text-sm opacity-75 mb-1">희망 시간</p>
                          <p className="font-medium">{selectedQuote.preferred_time}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Additional Message */}
                {selectedQuote.message && (
                  <div className="border-2 border-theme-accent-20 bg-theme-accent-5 backdrop-blur-sm rounded-xl p-8">
                    <h4 className="text-xl font-bold mb-4 text-theme-primary tracking-tight">추가 요청사항</h4>
                    <p className="text-theme-secondary leading-relaxed whitespace-pre-wrap">
                      {selectedQuote.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Info Section */}
      <section className="relative py-32 border-t border-theme-accent-20" style={{backgroundColor: 'rgba(var(--accent), 0.03)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-8 border-2 border-theme-accent-20 hover:border-theme-accent-30 transition-all duration-500 bg-theme-accent-5 backdrop-blur-sm text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-theme-primary tracking-tight">빠른 답변</h3>
              <p className="text-theme-secondary leading-relaxed font-light">
                24시간 내 상세한 견적서를 보내드립니다
              </p>
            </div>

            <div className="group relative p-8 border-2 border-theme-accent-20 hover:border-theme-accent-30 transition-all duration-500 bg-theme-accent-5 backdrop-blur-sm text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-theme-primary tracking-tight">무료 견적</h3>
              <p className="text-theme-secondary leading-relaxed font-light">
                견적 및 초기 상담은 완전 무료입니다
              </p>
            </div>

            <div className="group relative p-8 border-2 border-theme-accent-20 hover:border-theme-accent-30 transition-all duration-500 bg-theme-accent-5 backdrop-blur-sm text-center">
              <div className="text-5xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold mb-3 text-theme-primary tracking-tight">전문 상담</h3>
              <p className="text-theme-secondary leading-relaxed font-light">
                경험 많은 전문가가 직접 상담해드립니다
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full border-2 border-theme-accent-20">
            <h3 className="text-2xl font-bold mb-4 text-theme-primary tracking-tight">
              비밀번호 입력
            </h3>
            <p className="text-theme-secondary mb-6">
              견적 상세 내용을 확인하려면 비밀번호를 입력하세요.
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              placeholder="비밀번호 입력"
              className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent mb-6 text-theme-primary"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowPasswordModal(false)
                  setPassword('')
                  setPendingQuote(null)
                }}
                className="flex-1 border-2 border-theme-accent-20 text-theme-secondary px-6 py-3 text-sm font-medium tracking-wide hover:border-theme-accent-30 bg-theme-accent-5 transition-all duration-300"
              >
                취소
              </button>
              <button
                onClick={handlePasswordSubmit}
                className="flex-1 bg-theme-accent text-white px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300"
              >
                확인
              </button>
            </div>
            <p className="text-xs text-theme-secondary mt-4 text-center">
              테스트 비밀번호: 1234
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
