import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ModernLuxury() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      {/* Hero - 대리석 럭셔리 느낌 */}
      <section className="relative pt-32 pb-32 min-h-screen flex items-center overflow-hidden">
        {/* 대리석 패턴 배경 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.05) 75%)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-5xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
              <span className="text-xs tracking-[0.4em] text-gray-400 uppercase">
                Premium Interior Design
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-bold mb-10 leading-[0.9] tracking-tighter">
              <span className="block text-white">LUXURY</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600">
                DEFINED
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light">
              완벽한 마감, 최상급 소재,<br />
              타협 없는 디테일로 완성되는 공간
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Link
                href="/quote"
                className="group relative px-10 py-5 bg-gradient-to-r from-amber-600 to-yellow-600 text-zinc-950 font-semibold text-sm tracking-wider uppercase overflow-hidden"
              >
                <span className="relative z-10">CONSULT NOW</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link
                href="/portfolio"
                className="px-10 py-5 border border-gray-700 text-gray-300 font-semibold text-sm tracking-wider uppercase hover:border-amber-600 hover:text-white transition-all"
              >
                PORTFOLIO
              </Link>
            </div>
          </div>
        </div>

        {/* 장식 요소 */}
        <div className="absolute top-1/4 right-10 w-1 h-32 bg-gradient-to-b from-transparent via-amber-600 to-transparent"></div>
        <div className="absolute bottom-1/4 left-10 w-32 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
      </section>

      {/* Features - 대리석 그리드 */}
      <section className="relative py-32 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-12 h-px bg-amber-600"></div>
              <span className="text-xs tracking-[0.4em] text-gray-500 uppercase">Excellence</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              완벽을 향한 집착
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-800">
            {[
              { title: "MATERIAL", desc: "최상급 대리석과 천연 소재만을 사용합니다" },
              { title: "PRECISION", desc: "0.1mm의 오차도 허용하지 않는 정밀함" },
              { title: "TIMELESS", desc: "시간이 지나도 가치가 빛나는 디자인" }
            ].map((item, i) => (
              <div key={i} className="group bg-zinc-950 p-12 hover:bg-zinc-900 transition-all">
                <div className="mb-6">
                  <div className="w-16 h-16 border border-amber-600/30 flex items-center justify-center group-hover:border-amber-600 transition-colors">
                    <div className="w-2 h-2 bg-amber-600"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - 미니멀 럭셔리 */}
      <section className="py-32 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { num: "150+", label: "PROJECTS" },
              { num: "98%", label: "SATISFACTION" },
              { num: "7 YRS", label: "EXPERIENCE" },
              { num: "24/7", label: "SUPPORT" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-3">
                  {stat.num}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.3em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 럭셔리 마무리 */}
      <section className="relative py-40 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            당신이 꿈꾸는 공간,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
              완벽하게 실현합니다
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light">
            최고의 품질, 최상의 경험
          </p>
          <Link
            href="/quote"
            className="inline-block px-12 py-6 bg-gradient-to-r from-amber-600 to-yellow-600 text-zinc-950 font-bold text-sm tracking-widest uppercase hover:shadow-2xl hover:shadow-amber-600/20 transition-all"
          >
            START YOUR PROJECT
          </Link>
        </div>

        {/* 골드 라인 장식 */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
      </section>

      <Footer />
    </div>
  )
}
