'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Quote() {
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

  const [attachments, setAttachments] = useState<File[]>([])

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newFiles = Array.from(files)
      setAttachments((prev) => [...prev, ...newFiles])
    }
  }

  const handleRemoveFile = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    console.log('Attachments:', attachments)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
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
      setAttachments([])
    }, 3000)
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
              온라인 견적
            </h1>
            <p className="text-lg md:text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed font-light">
              간단한 정보만 입력하시면 24시간 내로 상세한 견적을 보내드립니다
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-16 border-t border-theme-accent-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <div className="border-2 border-theme-accent bg-theme-accent-5 rounded-xl p-12 text-center">
              <div className="text-6xl mb-4">✓</div>
              <h2 className="text-3xl font-bold mb-4 text-theme-primary tracking-tight">
                견적 신청이 완료되었습니다
              </h2>
              <p className="text-lg text-theme-secondary font-light">
                24시간 내로 담당자가 연락드리겠습니다
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Info */}
              <div className="border-2 border-theme-accent-20 bg-theme-accent-5 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-theme-primary tracking-tight">연락처 정보</h2>
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">프로젝트 정보</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                      업종 *
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      required
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      인테리어 범위 *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">선택해주세요</option>
                      <option value="풀인테리어">풀인테리어 (전체)</option>
                      <option value="부분인테리어">부분인테리어</option>
                      <option value="리모델링">리모델링</option>
                      <option value="상담필요">상담 후 결정</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                      평수 *
                    </label>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      required
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="예: 30평"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      예산
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      위치 *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="서울시 강남구"
                    />
                  </div>
                </div>
              </div>

              {/* Meeting Schedule */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">미팅 희망 일정</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      희망 날짜
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      희망 시간
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">추가 요청사항</h2>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    상세 내용
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="프로젝트에 대한 자세한 내용이나 원하시는 스타일 등을 자유롭게 작성해주세요."
                  />
                </div>
              </div>

              {/* File Attachments */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">첨부파일</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      파일 첨부 (이미지, 도면, 참고자료 등)
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="file-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-10 h-10 mb-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">클릭하여 파일 선택</span> 또는 드래그 앤 드롭
                          </p>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, PDF, DOC (최대 10MB)
                          </p>
                        </div>
                        <input
                          id="file-upload"
                          type="file"
                          multiple
                          onChange={handleFileChange}
                          className="hidden"
                          accept="image/*,.pdf,.doc,.docx"
                        />
                      </label>
                    </div>
                  </div>

                  {/* File List */}
                  {attachments.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">
                        첨부된 파일 ({attachments.length})
                      </p>
                      <div className="space-y-2">
                        {attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg"
                          >
                            <div className="flex items-center space-x-3 flex-1 min-w-0">
                              <svg
                                className="w-5 h-5 text-gray-400 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {file.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {formatFileSize(file.size)}
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(index)}
                              className="ml-3 text-red-500 hover:text-red-700 transition-colors flex-shrink-0"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
                >
                  견적 신청하기
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  * 표시된 항목은 필수 입력사항입니다
                </p>
              </div>
            </form>
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
