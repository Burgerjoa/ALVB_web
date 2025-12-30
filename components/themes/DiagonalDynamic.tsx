import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DiagonalDynamic() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <Navbar />

      {/* Hero - 대각선 분할 */}
      <section className="relative min-h-screen overflow-hidden">
        {/* 대각선 배경 */}
        <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 100% 0, 60% 100%, 0 100%)' }}>
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* 왼쪽: 텍스트 */}
              <div className="text-white">
                <div className="mb-8 transform -rotate-3">
                  <div className="inline-block bg-black px-6 py-2">
                    <span className="text-xs tracking-[0.5em] uppercase">Interior Design</span>
                  </div>
                </div>

                <h1 className="text-8xl md:text-9xl font-black mb-8 leading-none transform -skew-y-3">
                  ALVB
                </h1>

                <div className="transform rotate-1">
                  <p className="text-2xl mb-12 font-bold bg-black inline-block px-6 py-3">
                    대각선으로 세상을 바꾸다
                  </p>
                </div>

                <div className="flex flex-col gap-4 max-w-sm">
                  <Link
                    href="/quote"
                    className="px-10 py-5 bg-black text-white text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all text-center transform hover:-rotate-2 font-bold"
                  >
                    Start Now →
                  </Link>
                </div>
              </div>

              {/* 오른쪽: 통계 박스들 (비스듬히) */}
              <div className="relative h-[600px]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white shadow-2xl p-6 transform rotate-12 hover:rotate-6 transition-transform">
                  <div className="text-6xl font-black text-yellow-500 mb-2">150+</div>
                  <div className="text-sm text-gray-700 font-bold">PROJECTS</div>
                </div>

                <div className="absolute top-40 right-32 w-48 h-48 bg-black text-white shadow-2xl p-6 transform -rotate-6 hover:rotate-0 transition-transform">
                  <div className="text-6xl font-black mb-2">98%</div>
                  <div className="text-sm font-bold">SATISFACTION</div>
                </div>

                <div className="absolute bottom-20 right-8 w-48 h-48 bg-white shadow-2xl p-6 transform rotate-6 hover:rotate-12 transition-transform">
                  <div className="text-6xl font-black text-orange-500 mb-2">7</div>
                  <div className="text-sm text-gray-700 font-bold">YEARS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - 지그재그 레이아웃 */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 transform -rotate-1">
            <h2 className="text-7xl font-black bg-black text-white inline-block px-8 py-4">
              SERVICES
            </h2>
          </div>

          <div className="space-y-16">
            {[
              { num: "01", title: "공간 기획", desc: "전략적 설계", align: "left", rotate: "rotate-2" },
              { num: "02", title: "인테리어 디자인", desc: "창의적 구현", align: "right", rotate: "-rotate-2" },
              { num: "03", title: "시공 관리", desc: "완벽한 실행", align: "left", rotate: "rotate-1" },
              { num: "04", title: "사후 서비스", desc: "지속적 케어", align: "right", rotate: "-rotate-1" }
            ].map((item, i) => (
              <div
                key={i}
                className={`flex ${item.align === 'right' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-2xl bg-gradient-to-br from-yellow-400 to-orange-500 p-12 shadow-xl transform ${item.rotate} hover:rotate-0 transition-transform`}>
                  <div className="flex items-start gap-8">
                    <div className="text-8xl font-black text-white/30">{item.num}</div>
                    <div>
                      <h3 className="text-4xl font-black text-white mb-4">{item.title}</h3>
                      <p className="text-xl text-white/90 font-bold">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - 계단식 레이아웃 */}
      <section className="py-32 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-7xl font-black text-gray-900 transform -rotate-1 inline-block">
              PROCESS
            </h2>
          </div>

          <div className="relative">
            {[
              { step: "상담", desc: "니즈 파악", top: "0", left: "0" },
              { step: "설계", desc: "디자인 개발", top: "150px", left: "200px" },
              { step: "시공", desc: "품질 구현", top: "300px", left: "400px" },
              { step: "완성", desc: "최종 인도", top: "450px", left: "600px" }
            ].map((item, i) => (
              <div
                key={i}
                className="absolute transform hover:scale-110 transition-all"
                style={{ top: item.top, left: item.left }}
              >
                <div className="w-64 h-40 bg-white shadow-2xl p-6 border-l-8 border-yellow-500 transform -rotate-3 hover:rotate-0">
                  <div className="text-5xl font-black text-yellow-500 mb-2">{i + 1}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.step}</h3>
                  <p className="text-gray-600 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[650px]"></div>
        </div>
      </section>

      {/* Gallery - 비대칭 그리드 */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-7xl font-black text-white transform rotate-1 inline-block">
              PORTFOLIO
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-4 h-[800px]">
            <div className="col-span-7 row-span-2 bg-gradient-to-br from-yellow-400 to-orange-500 transform -rotate-1 hover:rotate-0 transition-all"></div>
            <div className="col-span-5 bg-gradient-to-br from-red-400 to-pink-500 transform rotate-2 hover:rotate-0 transition-all"></div>
            <div className="col-span-5 bg-gradient-to-br from-purple-400 to-indigo-500 transform -rotate-2 hover:rotate-0 transition-all"></div>
            <div className="col-span-4 bg-gradient-to-br from-green-400 to-teal-500 transform rotate-1 hover:rotate-0 transition-all"></div>
            <div className="col-span-8 bg-gradient-to-br from-blue-400 to-cyan-500 transform -rotate-1 hover:rotate-0 transition-all"></div>
          </div>
        </div>
      </section>

      {/* CTA - 대각선 분할 */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0" style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)' }}>
          <div className="w-full h-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-500"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center px-8">
            <div className="transform -rotate-2 mb-12">
              <h2 className="text-8xl md:text-9xl font-black text-white leading-none">
                LET'S<br />START
              </h2>
            </div>

            <div className="transform rotate-1 mb-12">
              <p className="text-2xl text-white font-bold bg-black inline-block px-8 py-4">
                당신의 프로젝트를 시작하세요
              </p>
            </div>

            <Link
              href="/quote"
              className="inline-block px-16 py-6 bg-black text-white text-lg font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all transform hover:rotate-3"
            >
              Get Quote →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
