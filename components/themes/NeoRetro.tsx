import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NeoRetro() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-black">
      <Navbar />

      {/* Hero - 80s 네온 스타일 */}
      <section className="relative pt-32 pb-32 min-h-screen flex items-center overflow-hidden">
        {/* 그리드 배경 */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(236, 72, 153, 0.3) 2px, transparent 2px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.3) 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center bottom'
        }}></div>

        {/* 네온 원들 */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-pink-500 blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-cyan-400 blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* 네온 사인 스타일 텍스트 */}
            <div className="mb-8">
              <span className="inline-block px-6 py-2 border-2 border-cyan-400 text-cyan-400 font-mono text-sm tracking-widest animate-pulse">
                ▶ SINCE 2018 ◀
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-pulse" style={{
                textShadow: '0 0 30px rgba(236, 72, 153, 0.8), 0 0 60px rgba(236, 72, 153, 0.5)'
              }}>
                ALVB
              </span>
              <span className="block text-white font-mono text-4xl mt-4" style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
              }}>
                INTERIOR_DESIGN.EXE
              </span>
            </h1>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300 mb-4">
                미래로 돌아온 디자인
              </p>
              <p className="text-lg text-purple-200 font-mono">
                [ 80년대 감성 × 현대 기술 = 당신의 레트로 퓨처 공간 ]
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center font-mono">
              <Link
                href="/quote"
                className="group relative px-12 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black text-lg uppercase overflow-hidden border-2 border-cyan-400"
                style={{boxShadow: '0 0 30px rgba(236, 72, 153, 0.6)'}}
              >
                <span className="relative z-10">▶ START_PROJECT</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
              <Link
                href="/portfolio"
                className="px-12 py-5 border-2 border-pink-400 text-pink-300 font-black text-lg uppercase hover:bg-pink-400/20 transition-all"
                style={{boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)'}}
              >
                PORTFOLIO_V1.0
              </Link>
            </div>
          </div>
        </div>

        {/* 스캔라인 효과 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 4px)'
        }}></div>
      </section>

      {/* Features - 레트로 카드 */}
      <section className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-4 font-mono">
              {'>'} FEATURES.SYS
            </h2>
            <div className="w-64 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "◆", title: "RETRO_DESIGN", desc: "80년대 감성을 현대적으로 재해석합니다", color: "from-pink-500 to-purple-600" },
              { icon: "●", title: "NEON_LIGHTING", desc: "네온 조명으로 공간을 빛냅니다", color: "from-cyan-500 to-blue-600" },
              { icon: "■", title: "FUTURE_PAST", desc: "과거와 미래가 만나는 공간을 만듭니다", color: "from-purple-500 to-pink-600" }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`}></div>
                <div className={`relative p-8 border-2 border-pink-500/50 bg-black/80 backdrop-blur-sm hover:border-cyan-400 transition-all`}>
                  <div className="text-6xl text-cyan-400 mb-4 animate-pulse">{item.icon}</div>
                  <h3 className="text-xl font-black text-white mb-4 font-mono">{item.title}</h3>
                  <p className="text-purple-200 leading-relaxed font-mono text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - 디지털 카운터 */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "150", label: "PROJECTS.DAT", unit: "+" },
              { num: "98", label: "SUCCESS.RATE", unit: "%" },
              { num: "07", label: "YEARS.EXP", unit: "" },
              { num: "24", label: "SUPPORT.SYS", unit: "/7" }
            ].map((stat, i) => (
              <div key={i} className="relative p-6 border-2 border-pink-500/30 bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-500"></div>
                <div className="font-mono text-xs text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-1">
                  {stat.num}{stat.unit}
                </div>
                <div className="w-full h-2 bg-pink-500/20 mt-2">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-cyan-500 animate-pulse" style={{width: '100%'}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 네온 사인 */}
      <section className="relative py-40 bg-black overflow-hidden">
        {/* 배경 그리드 */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(236, 72, 153, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 border-2 border-cyan-400 text-cyan-400 font-mono text-sm animate-pulse">
              ▶▶▶ LOADING_FUTURE ▶▶▶
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 font-mono leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400" style={{
              textShadow: '0 0 40px rgba(236, 72, 153, 0.8)'
            }}>
              당신의 공간을
            </span>
            <span className="block text-white mt-2" style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.8)'
            }}>
              레트로 퓨처로
            </span>
          </h2>

          <p className="text-xl text-purple-200 mb-12 font-mono">
            [ 무료 상담으로 시작하는 당신만의 80s 공간 ]
          </p>

          <Link
            href="/quote"
            className="inline-block px-16 py-6 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-black text-xl uppercase border-4 border-cyan-400 hover:border-pink-400 transition-all font-mono"
            style={{boxShadow: '0 0 50px rgba(236, 72, 153, 0.8), 0 0 100px rgba(6, 182, 212, 0.5)'}}
          >
            ▶ EXECUTE_NOW.EXE
          </Link>
        </div>

        {/* 네온 링 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-pink-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-cyan-400/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </section>

      <Footer />
    </div>
  )
}
