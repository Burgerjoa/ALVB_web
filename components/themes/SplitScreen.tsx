import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SplitScreen() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero - 완전 분할 화면 */}
      <section className="relative min-h-screen flex">
        {/* 왼쪽: 이미지/비주얼 영역 */}
        <div className="w-1/2 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center px-12">
            <div className="text-white/50 text-9xl font-black mb-8">01</div>
            <h2 className="text-white text-5xl font-light tracking-wider mb-4">VISUAL</h2>
            <p className="text-white/70 text-lg font-light">Design Excellence</p>
          </div>
        </div>

        {/* 오른쪽: 텍스트 영역 */}
        <div className="w-1/2 bg-white flex items-center justify-center p-16">
          <div className="max-w-xl">
            <div className="mb-8">
              <div className="w-16 h-1 bg-black mb-6"></div>
              <span className="text-xs tracking-[0.5em] text-gray-600 uppercase">Interior Design</span>
            </div>

            <h1 className="text-7xl font-black mb-8 leading-none text-black">
              ALVB<br />
              STUDIO
            </h1>

            <p className="text-xl text-gray-700 mb-12 leading-relaxed font-light">
              공간의 경계를 허물고<br />
              새로운 경험을 만듭니다
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href="/quote"
                className="px-10 py-5 bg-black text-white text-sm uppercase tracking-[0.3em] hover:bg-gray-900 transition-all text-center"
              >
                Start Project
              </Link>
              <Link
                href="/portfolio"
                className="px-10 py-5 border-2 border-black text-black text-sm uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all text-center"
              >
                View Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="mb-16 px-16">
          <h2 className="text-6xl font-black text-black mb-4">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-black"></div>
        </div>

        <div className="flex gap-8 px-16 pb-8 overflow-x-auto">
          {[
            { num: "01", title: "공간 기획", desc: "전략적 공간 설계" },
            { num: "02", title: "인테리어", desc: "완벽한 디자인 구현" },
            { num: "03", title: "시공 관리", desc: "품질 보증 시공" },
            { num: "04", title: "사후 관리", desc: "지속적인 케어" }
          ].map((item, i) => (
            <div
              key={i}
              className="min-w-[400px] h-[500px] bg-gradient-to-br from-gray-900 to-black p-12 flex flex-col justify-between group hover:scale-105 transition-transform"
            >
              <div>
                <div className="text-white/30 text-8xl font-black mb-8">{item.num}</div>
                <h3 className="text-white text-4xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 text-lg font-light">{item.desc}</p>
              </div>
              <div className="w-12 h-12 border-2 border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 세로 분할 Stats */}
      <section className="flex h-screen">
        <div className="w-1/3 bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="text-white text-8xl font-black mb-6">150+</div>
            <div className="text-white/50 text-sm uppercase tracking-[0.3em]">Projects</div>
          </div>
        </div>
        <div className="w-1/3 bg-purple-600 flex items-center justify-center">
          <div className="text-center">
            <div className="text-white text-8xl font-black mb-6">98%</div>
            <div className="text-white/70 text-sm uppercase tracking-[0.3em]">Satisfaction</div>
          </div>
        </div>
        <div className="w-1/3 bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="text-black text-8xl font-black mb-6">7</div>
            <div className="text-gray-600 text-sm uppercase tracking-[0.3em]">Years</div>
          </div>
        </div>
      </section>

      {/* Full Screen CTA */}
      <section className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-8">
          <h2 className="text-white text-8xl md:text-9xl font-black mb-12 leading-none">
            LET'S<br />CREATE
          </h2>
          <p className="text-white/90 text-2xl mb-16 font-light">
            당신의 프로젝트를 시작하세요
          </p>
          <Link
            href="/quote"
            className="inline-block px-16 py-6 bg-white text-black text-lg font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
