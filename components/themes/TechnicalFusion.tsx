import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TechnicalFusion() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero - 설계도 느낌 */}
      <section className="relative pt-32 pb-32 min-h-screen flex items-center overflow-hidden">
        {/* 그리드 배경 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
          {/* 주요 그리드 라인 */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 2px, transparent 2px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 2px, transparent 2px)
            `,
            backgroundSize: '200px 200px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-5xl">
            <div className="mb-8 font-mono text-xs text-cyan-400 tracking-wider">
              {'>'} INITIALIZING_PROJECT.exe
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tight">
              <span className="block text-white">BLUEPRINT</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 font-mono">
                TO_REALITY
              </span>
            </h1>

            <div className="border-l-2 border-cyan-500 pl-6 mb-12">
              <p className="text-lg md:text-xl text-gray-300 font-mono leading-relaxed">
                [ 정밀한 설계 ] + [ 완벽한 시공 ]<br />
                = 당신의 이상적인 공간
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 font-mono">
              <Link
                href="/quote"
                className="group relative px-8 py-4 bg-cyan-500 text-slate-950 font-bold text-xs tracking-widest uppercase overflow-hidden"
              >
                <span className="relative z-10">[ START_PROJECT ]</span>
                <div className="absolute inset-0 bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold text-xs tracking-widest uppercase hover:bg-cyan-500/10 transition-all"
              >
                [ VIEW_PORTFOLIO ]
              </Link>
            </div>

            {/* 좌표 표시 */}
            <div className="mt-12 flex gap-8 text-xs font-mono text-gray-600">
              <span>X: 127.0294</span>
              <span>Y: 37.4979</span>
              <span>Z: 0.0000</span>
            </div>
          </div>
        </div>

        {/* 측정 라인들 */}
        <div className="absolute top-20 left-10 w-px h-24 bg-cyan-500/30"></div>
        <div className="absolute top-20 left-10 w-24 h-px bg-cyan-500/30"></div>
        <div className="absolute bottom-20 right-10 w-px h-24 bg-cyan-500/30"></div>
        <div className="absolute bottom-20 right-10 w-24 h-px bg-cyan-500/30"></div>
      </section>

      {/* Process - 설계 단계 */}
      <section className="relative py-32 border-t-2 border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 font-mono">
            <div className="text-xs text-cyan-400 mb-4">{'>'} PROCESS_OVERVIEW</div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              설계에서 완성까지
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { phase: "PHASE_01", title: "측량 & 분석", desc: "공간의 모든 데이터를 수집합니다" },
              { phase: "PHASE_02", title: "설계 & 시뮬레이션", desc: "3D 모델링으로 사전 검증합니다" },
              { phase: "PHASE_03", title: "시공 & 완성", desc: "설계도를 현실로 구현합니다" }
            ].map((item, i) => (
              <div key={i} className="group relative p-8 border-2 border-slate-800 hover:border-cyan-500/50 transition-all bg-slate-900/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>

                <div className="font-mono text-xs text-cyan-400 mb-4">{item.phase}</div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>

                {/* 단계 번호 */}
                <div className="absolute top-4 right-4 text-5xl font-black text-cyan-500/10">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - 데이터 시각화 */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "150+", label: "COMPLETED", unit: "projects" },
              { num: "98%", label: "ACCURACY", unit: "rate" },
              { num: "7", label: "EXPERIENCE", unit: "years" },
              { num: "24/7", label: "SUPPORT", unit: "hours" }
            ].map((stat, i) => (
              <div key={i} className="relative p-6 border border-slate-800 bg-slate-900/50">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent"></div>
                <div className="font-mono text-xs text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-4xl font-black text-white mb-1">{stat.num}</div>
                <div className="font-mono text-xs text-gray-600">{stat.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 테크니컬 */}
      <section className="relative py-32 border-t-2 border-cyan-900/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="font-mono text-xs text-cyan-400 mb-6">{'>'} READY_TO_START?</div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            정밀한 설계로<br />
            <span className="text-cyan-400">완벽한 공간을</span> 만듭니다
          </h2>
          <p className="text-lg text-gray-400 mb-12 font-mono">
            [ 무료 상담 ] {'>'} [ 설계 제안 ] {'>'} [ 프로젝트 시작 ]
          </p>
          <Link
            href="/quote"
            className="inline-block px-10 py-5 bg-cyan-500 text-slate-950 font-black text-sm tracking-wider uppercase hover:bg-blue-500 transition-colors font-mono"
          >
            [ EXECUTE_PROJECT ]
          </Link>
        </div>

        {/* 기술적 장식 */}
        <div className="absolute top-10 right-10 font-mono text-xs text-cyan-900">
          <div>SYSTEM_READY</div>
          <div>STATUS: ONLINE</div>
          <div>LOAD: 100%</div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
