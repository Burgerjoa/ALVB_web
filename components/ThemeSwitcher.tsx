'use client'

import { useTheme } from './ThemeContext'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const themes = [
    {
      id: 'analog-atelier' as const,
      name: '아날로그 아틀리에',
      description: '손으로 그린 스케치 느낌',
      preview: 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50'
    },
    {
      id: 'modern-luxury' as const,
      name: '모던 럭셔리',
      description: '대리석과 완벽한 마감',
      preview: 'bg-gradient-to-br from-gray-900 via-zinc-800 to-stone-900'
    },
    {
      id: 'technical-fusion' as const,
      name: '테크니컬 퓨전',
      description: '설계도와 건축의 만남',
      preview: 'bg-gradient-to-br from-blue-900 via-slate-800 to-cyan-900'
    },
    {
      id: 'organic-warmth' as const,
      name: '오가닉 웜스',
      description: '자연과 따뜻함',
      preview: 'bg-gradient-to-br from-stone-100 via-amber-50 to-yellow-100'
    },
    {
      id: 'digital-future' as const,
      name: '디지털 퓨처',
      description: '미래지향적 디지털',
      preview: 'bg-gradient-to-br from-violet-900 via-fuchsia-800 to-purple-900'
    },
    {
      id: 'brutalist-bold' as const,
      name: '브루탈리즘',
      description: '거칠고 강렬한 표현',
      preview: 'bg-gradient-to-br from-orange-600 via-red-700 to-black'
    },
    {
      id: 'neo-retro' as const,
      name: '네오 레트로',
      description: '80s 복고 미래주의',
      preview: 'bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-400'
    },
    {
      id: 'zen-minimal' as const,
      name: '선(禪) 미니멀',
      description: '동양적 여백의 미',
      preview: 'bg-gradient-to-br from-gray-100 via-stone-50 to-slate-100'
    },
    {
      id: 'editorial-mono' as const,
      name: '에디토리얼 모노',
      description: '모노톤 매거진 스타일',
      preview: 'bg-gradient-to-br from-black via-gray-800 to-white'
    },
    {
      id: 'kinetic-energy' as const,
      name: '키네틱 에너지',
      description: '역동적 스포츠 감성',
      preview: 'bg-gradient-to-br from-lime-400 via-green-500 to-black'
    },
    {
      id: 'nordic-calm' as const,
      name: '노르딕 캄',
      description: '북유럽 감성 인테리어',
      preview: 'bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100'
    },
    {
      id: 'maximalist-festival' as const,
      name: '맥시멀리스트',
      description: '풍부한 색감과 패턴',
      preview: 'bg-gradient-to-br from-rose-400 via-orange-400 to-yellow-400'
    },
    {
      id: 'mediterranean-chic' as const,
      name: '메디테라니안 시크',
      description: '이탈리안/스페인 럭셔리',
      preview: 'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500'
    },
    {
      id: 'split-screen' as const,
      name: '스플릿 스크린',
      description: '좌우 분할 레이아웃',
      preview: 'bg-gradient-to-r from-purple-900 via-black to-white'
    },
    {
      id: 'circular-flow' as const,
      name: '서큘러 플로우',
      description: '원형 중심 디자인',
      preview: 'bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600'
    },
    {
      id: 'diagonal-dynamic' as const,
      name: '다이아고날 다이나믹',
      description: '대각선 역동적 레이아웃',
      preview: 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500'
    },
    {
      id: 'overlap-chaos' as const,
      name: '오버랩 카오스',
      description: '겹치는 레이어 무질서',
      preview: 'bg-gradient-to-br from-red-500 via-blue-500 to-yellow-400'
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-200">
        <h3 className="text-sm font-bold mb-3 text-gray-800">디자인 테마 선택</h3>
        <div className="flex flex-col gap-2">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`
                group relative flex items-center gap-3 p-3 rounded-lg text-left transition-all
                ${theme === t.id
                  ? 'bg-amber-900 text-white shadow-lg scale-105'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-102'
                }
              `}
            >
              <div className={`w-12 h-12 rounded-lg ${t.preview} shadow-sm border border-gray-200`} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className={`text-xs ${theme === t.id ? 'text-white/80' : 'text-gray-500'}`}>
                  {t.description}
                </div>
              </div>
              {theme === t.id && (
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
