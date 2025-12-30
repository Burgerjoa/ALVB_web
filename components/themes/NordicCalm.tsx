import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NordicCalm() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero - 북유럽 감성 */}
      <section className="relative pt-40 pb-40 min-h-screen flex items-center bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center">
            {/* 작은 아이콘 */}
            <div className="mb-12 flex justify-center">
              <svg className="w-16 h-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-12 leading-tight tracking-tight text-slate-900">
              Hygge<br />
              <span className="text-slate-500">Living Space</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-16 leading-relaxed font-light max-w-2xl mx-auto">
              따뜻함과 편안함이 공존하는 공간.<br />
              자연의 소재와 부드러운 빛이 만드는 북유럽 인테리어.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/quote"
                className="px-10 py-4 bg-slate-800 text-white text-sm uppercase tracking-wider font-light hover:bg-slate-700 transition-all"
              >
                무료 상담
              </Link>
              <Link
                href="/portfolio"
                className="px-10 py-4 border border-slate-300 text-slate-800 text-sm uppercase tracking-wider font-light hover:border-slate-800 transition-all"
              >
                프로젝트 보기
              </Link>
            </div>
          </div>
        </div>

        {/* 물결 모양 장식 */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      </section>

      {/* Philosophy - 북유럽 철학 */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="mb-6">
                <span className="text-xs tracking-[0.3em] text-slate-400 uppercase font-light">Nordic Design</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 leading-tight">
                자연과 함께<br />
                살아가는 공간
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed font-light">
                <p>
                  북유럽 디자인은 기능성과 아름다움의 완벽한 조화입니다.
                  불필요한 장식을 배제하고 실용성에 집중하며,
                  자연 소재와 부드러운 색감으로 편안함을 전합니다.
                </p>
                <p>
                  우리는 이러한 철학을 바탕으로 당신의 공간에
                  따뜻함과 평온함을 더합니다.
                </p>
              </div>
            </div>

            <div className="aspect-square bg-slate-100 relative">
              <div className="absolute inset-8 border border-slate-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Elements - 북유럽 요소들 */}
      <section className="py-32 bg-blue-50/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-light text-slate-900 mb-4">핵심 요소</h2>
            <div className="w-16 h-px bg-slate-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "자연 소재",
                desc: "나무, 리넨, 울 등 자연에서 온 소재로 따뜻함을 더합니다",
                icon: (
                  <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                title: "부드러운 빛",
                desc: "자연광을 최대한 활용하고 간접조명으로 아늑함을 만듭니다",
                icon: (
                  <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: "차분한 색감",
                desc: "화이트, 그레이, 베이지의 중성색으로 평온함을 전달합니다",
                icon: (
                  <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="p-6 bg-white rounded-full group-hover:bg-slate-100 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - 심플한 통계 */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {[
              { num: "150+", label: "프로젝트" },
              { num: "98%", label: "만족도" },
              { num: "7년", label: "경력" },
              { num: "100%", label: "자연 소재" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-light text-slate-900 mb-3">{stat.num}</div>
                <div className="text-sm text-slate-500 font-light">{stat.label}</div>
                <div className="mt-4 w-12 h-px bg-slate-200 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 북유럽 스타일 마무리 */}
      <section className="py-40 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <svg className="w-12 h-12 text-slate-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>

          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-8 leading-tight">
            당신의 Hygge를<br />
            함께 만들어갑니다
          </h2>

          <p className="text-lg text-slate-600 mb-12 font-light">
            편안하고 아늑한 공간, 지금 시작하세요
          </p>

          <Link
            href="/quote"
            className="inline-block px-12 py-5 bg-slate-800 text-white text-sm uppercase tracking-wider font-light hover:bg-slate-700 transition-all"
          >
            상담 신청하기
          </Link>

          <div className="mt-16">
            <div className="w-px h-16 bg-slate-200 mx-auto"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
