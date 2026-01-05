'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'swagger-ui-react/swagger-ui.css'

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false })

export default function ApiDocs() {
  const [spec, setSpec] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      fetch('/api/docs')
        .then((res) => res.json())
        .then((data) => setSpec(data))
    }
  }, [isAuthenticated])

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const correctPassword = process.env.NEXT_PUBLIC_API_DOCS_PASSWORD || '1234'
    if (password === correctPassword) {
      setIsAuthenticated(true)
    } else {
      alert('비밀번호가 올바르지 않습니다.')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border-2 border-theme-accent-20">
          <h2 className="text-2xl font-bold mb-4 text-theme-primary tracking-tight">
            🔒 API 문서 접근
          </h2>
          <p className="text-theme-secondary mb-6">
            API 문서를 보려면 비밀번호를 입력하세요.
          </p>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호 입력"
              className="w-full px-4 py-3 border-2 border-theme-accent-20 rounded-lg focus:ring-2 focus:border-theme-accent mb-4 text-theme-primary"
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-theme-accent text-white px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300"
            >
              확인
            </button>
          </form>
          <p className="text-xs text-theme-secondary mt-4 text-center">
            기본 비밀번호: 1234
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="bg-theme-accent text-white p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">ALVB Quotes API</h1>
          <p className="text-lg opacity-90">견적 관리 API 문서</p>
          <p className="text-sm opacity-75 mt-2">
            🔒 읽기(GET): 공개 | 쓰기(POST/PUT/DELETE): API 키 필요
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {spec ? (
          <SwaggerUI spec={spec} />
        ) : (
          <div className="p-8 text-center text-theme-secondary">
            Loading API documentation...
          </div>
        )}
      </div>
    </div>
  )
}
