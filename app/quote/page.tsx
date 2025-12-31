'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface QuoteData {
  id: string
  name: string
  phone: string
  email: string
  businessType: string
  projectType: string
  area: string
  budget: string
  location: string
  preferredDate: string
  preferredTime: string
  message: string
  createdAt: string
  updatedAt: string
}

export default function Quote() {
  const [view, setView] = useState<'list' | 'create' | 'detail'>('list')
  const [quotes, setQuotes] = useState<QuoteData[]>([])
  const [selectedQuote, setSelectedQuote] = useState<QuoteData | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    projectType: '',
    area: '',
    budget: '',
    location: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })

  // 로컬 스토리지에서 견적 목록 불러오기
  useEffect(() => {
    const savedQuotes = localStorage.getItem('quotes')
    if (savedQuotes) {
      setQuotes(JSON.parse(savedQuotes))
    }
  }, [])

  // 로컬 스토리지에 견적 목록 저장
  const saveQuotes = (newQuotes: QuoteData[]) => {
    localStorage.setItem('quotes', JSON.stringify(newQuotes))
    setQuotes(newQuotes)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isEditing && selectedQuote) {
      // 수정
      const updatedQuotes = quotes.map(q =>
        q.id === selectedQuote.id
          ? { ...formData, id: selectedQuote.id, createdAt: selectedQuote.createdAt, updatedAt: new Date().toISOString() }
          : q
      )
      saveQuotes(updatedQuotes)
      alert('견적이 수정되었습니다.')
    } else {
      // 새로 작성
      const newQuote: QuoteData = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      saveQuotes([newQuote, ...quotes])
      alert('견적이 등록되었습니다.')
    }

    // 초기화
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessType: '',
      projectType: '',
      area: '',
      budget: '',
      location: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
    })
    setIsEditing(false)
    setSelectedQuote(null)
    setView('list')
  }

  const handleEdit = (quote: QuoteData) => {
    setFormData({
      name: quote.name,
      phone: quote.phone,
      email: quote.email,
      businessType: quote.businessType,
      projectType: quote.projectType,
      area: quote.area,
      budget: quote.budget,
      location: quote.location,
      preferredDate: quote.preferredDate,
      preferredTime: quote.preferredTime,
      message: quote.message,
    })
    setSelectedQuote(quote)
    setIsEditing(true)
    setView('create')
  }

  const handleDelete = (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      const updatedQuotes = quotes.filter(q => q.id !== id)
      saveQuotes(updatedQuotes)
      setView('list')
      alert('견적이 삭제되었습니다.')
    }
  }

  const handleViewDetail = (quote: QuoteData) => {
    setSelectedQuote(quote)
    setView('detail')
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
              견적을 신청하고 관리할 수 있습니다
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
                  견적 신청 목록 ({quotes.length})
                </h2>
                <button
                  onClick={() => {
                    setIsEditing(false)
                    setSelectedQuote(null)
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      businessType: '',
                      projectType: '',
                      area: '',
                      budget: '',
                      location: '',
                      preferredDate: '',
                      preferredTime: '',
                      message: '',
                    })
                    setView('create')
                  }}
                  className="bg-theme-accent text-white px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300"
                >
                  새 견적 신청
                </button>
              </div>

              {quotes.length === 0 ? (
                <div className="border-2 border-theme-accent-20 bg-theme-accent-5 rounded-xl p-12 text-center">
                  <p className="text-theme-secondary text-lg">등록된 견적이 없습니다.</p>
                  <p className="text-theme-secondary text-sm mt-2">첫 견적을 신청해보세요!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {quotes.map((quote) => (
                    <div
                      key={quote.id}
                      className="group border-2 border-theme-accent-20 hover:border-theme-accent-30 bg-theme-accent-5 backdrop-blur-sm p-6 transition-all duration-300 cursor-pointer"
                      onClick={() => handleViewDetail(quote)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-theme-primary tracking-tight">
                              {quote.name}
                            </h3>
                            <span className="bg-theme-accent text-white px-3 py-1 text-xs font-medium tracking-wide">
                              {quote.businessType}
                            </span>
                          </div>
                          <p className="text-theme-secondary text-sm mb-2">
                            📍 {quote.location} | 📐 {quote.area} | 💰 {quote.budget || '상담필요'}
                          </p>
                          <p className="text-theme-secondary text-sm">
                            📧 {quote.email} | 📞 {quote.phone}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-theme-secondary text-xs">
                            {formatDate(quote.createdAt)}
                          </p>
                          {quote.updatedAt !== quote.createdAt && (
                            <p className="text-theme-secondary text-xs opacity-75">
                              (수정됨)
                            </p>
                          )}
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
                  {isEditing ? '견적 수정' : '새 견적 신청'}
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
                      <label htmlFor="businessType" className="block text-sm font-medium text-theme-secondary mb-2">
                        업종 *
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        value={formData.businessType}
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
                      <label htmlFor="projectType" className="block text-sm font-medium text-theme-secondary mb-2">
                        인테리어 범위 *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
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
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-theme-secondary mb-2">
                        희망 날짜
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent bg-white text-theme-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-theme-secondary mb-2">
                        희망 시간
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
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
                      {selectedQuote.name}
                    </h3>
                    <span className="bg-theme-accent text-white px-4 py-1.5 text-sm font-medium tracking-wide">
                      {selectedQuote.businessType}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-theme-secondary">
                    <div>
                      <p className="text-sm opacity-75 mb-1">작성일</p>
                      <p className="font-medium">{formatDate(selectedQuote.createdAt)}</p>
                    </div>
                    {selectedQuote.updatedAt !== selectedQuote.createdAt && (
                      <div>
                        <p className="text-sm opacity-75 mb-1">수정일</p>
                        <p className="font-medium">{formatDate(selectedQuote.updatedAt)}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-2 border-theme-accent-20 bg-theme-accent-5 backdrop-blur-sm rounded-xl p-8">
                  <h4 className="text-xl font-bold mb-4 text-theme-primary tracking-tight">연락처 정보</h4>
                  <div className="space-y-3 text-theme-secondary">
                    <p><span className="opacity-75">📧 이메일:</span> {selectedQuote.email}</p>
                    <p><span className="opacity-75">📞 연락처:</span> {selectedQuote.phone}</p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="border-2 border-theme-accent-20 bg-theme-accent-5 backdrop-blur-sm rounded-xl p-8">
                  <h4 className="text-xl font-bold mb-4 text-theme-primary tracking-tight">프로젝트 정보</h4>
                  <div className="grid grid-cols-2 gap-4 text-theme-secondary">
                    <div>
                      <p className="text-sm opacity-75 mb-1">인테리어 범위</p>
                      <p className="font-medium">{selectedQuote.projectType}</p>
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
                {(selectedQuote.preferredDate || selectedQuote.preferredTime) && (
                  <div className="border-2 border-theme-accent-20 bg-theme-accent-5 backdrop-blur-sm rounded-xl p-8">
                    <h4 className="text-xl font-bold mb-4 text-theme-primary tracking-tight">미팅 희망 일정</h4>
                    <div className="grid grid-cols-2 gap-4 text-theme-secondary">
                      {selectedQuote.preferredDate && (
                        <div>
                          <p className="text-sm opacity-75 mb-1">희망 날짜</p>
                          <p className="font-medium">{selectedQuote.preferredDate}</p>
                        </div>
                      )}
                      {selectedQuote.preferredTime && (
                        <div>
                          <p className="text-sm opacity-75 mb-1">희망 시간</p>
                          <p className="font-medium">{selectedQuote.preferredTime}</p>
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
    </div>
  )
}
