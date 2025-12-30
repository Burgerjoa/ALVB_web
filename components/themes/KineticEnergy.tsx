import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function KineticEnergy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero - 역동적인 스포츠 감성 */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
        {/* 역동적인 배경 요소들 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-lime-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500 rounded-full blur-[120px] opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* 대각선 스트라이프 */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(132, 204, 22, 0.2) 35px, rgba(132, 204, 22, 0.2) 70px)'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-ping"></div>
                <span className="text-sm tracking-[0.3em] text-lime-400 uppercase font-bold">
                  Performance Driven
                </span>
              </div>

              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.85] tracking-tighter">
                <span className="block text-white">MOVE</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">
                  FORWARD
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light">
                정체되지 않는 공간. 에너지가 흐르는 디자인.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="group relative px-10 py-5 bg-gradient-to-r from-lime-400 to-green-500 text-black font-black text-lg uppercase overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    START NOW
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/portfolio"
                  className="px-10 py-5 border-2 border-lime-400 text-lime-400 font-black text-lg uppercase hover:bg-lime-400 hover:text-black transition-all"
                >
                  EXPLORE
                </Link>
              </div>
            </div>

            {/* 오른쪽 - 역동적인 통계 */}
            <div className="space-y-6">
              {[
                { label: "PROJECTS", value: "150+", desc: "완료된 프로젝트" },
                { label: "SPEED", value: "2x", desc: "일반 대비 빠른 시공" },
                { label: "POWER", value: "100%", desc: "고객 만족 목표" }
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-r from-zinc-900 to-black border-l-4 border-lime-400 p-6 transform hover:scale-105 transition-transform">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs tracking-[0.3em] text-lime-400 uppercase font-bold">{item.label}</span>
                    <span className="text-4xl font-black text-white">{item.value}</span>
                  </div>
                  <div className="text-sm text-gray-400">{item.desc}</div>
                  <div className="mt-3 h-1 bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-lime-400 to-green-500 animate-pulse" style={{width: '100%'}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 스크롤 인디케이터 */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-lime-400 uppercase tracking-wider">Scroll</span>
          <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features - 역동적인 카드 레이아웃 */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(132, 204, 22, 0.1) 100px, rgba(132, 204, 22, 0.1) 101px)'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase">
              OUR <span className="text-lime-400">EDGE</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-lime-400 to-green-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "SPEED", desc: "빠른 실행력으로 프로젝트를 추진합니다", angle: "-rotate-2" },
              { icon: "🎯", title: "PRECISION", desc: "정확한 계획과 완벽한 실행", angle: "rotate-1" },
              { icon: "🚀", title: "INNOVATION", desc: "끊임없이 새로운 방법을 시도합니다", angle: "-rotate-1" }
            ].map((item, i) => (
              <div key={i} className={`group relative transform ${item.angle} hover:rotate-0 transition-all duration-300`}>
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400 to-green-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                <div className="relative bg-zinc-900 border-2 border-zinc-800 group-hover:border-lime-400 p-8 transition-all">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  <div className="mt-6 w-0 group-hover:w-full h-1 bg-gradient-to-r from-lime-400 to-green-500 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics - 스포츠 스코어보드 스타일 */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-black border-4 border-lime-400 p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { metric: "150+", label: "PROJECTS", unit: "" },
                { metric: "98", label: "SATISFACTION", unit: "%" },
                { metric: "7", label: "EXPERIENCE", unit: "YRS" },
                { metric: "24", label: "SUPPORT", unit: "/7" }
              ].map((stat, i) => (
                <div key={i} className="relative">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-lime-400 to-green-500 mb-2 tabular-nums">
                    {stat.metric}
                    <span className="text-3xl">{stat.unit}</span>
                  </div>
                  <div className="text-xs tracking-[0.3em] text-gray-400 uppercase font-bold">{stat.label}</div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-lime-400 opacity-50"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - 강력한 행동 유도 */}
      <section className="relative py-40 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lime-400/10 to-green-500/10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(132, 204, 22, 0.03) 50px, rgba(132, 204, 22, 0.03) 100px)'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center gap-2">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase leading-tight">
            LET'S GO.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">
              RIGHT NOW.
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 font-light">
            더 이상 기다리지 마세요. 지금 바로 시작하세요.
          </p>

          <Link
            href="/quote"
            className="inline-flex items-center gap-3 px-16 py-6 bg-gradient-to-r from-lime-400 to-green-500 text-black font-black text-xl uppercase hover:shadow-2xl hover:shadow-lime-400/50 transition-all group"
          >
            GET STARTED
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
