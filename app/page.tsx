import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block">
              <span className="text-xs font-medium tracking-[0.3em] text-gray-500 uppercase">Interior Design Studio</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
              <span className="text-white">공간에</span>
              <br />
              <span className="text-gray-400">가치를 더하다</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
              ALVB는 상업공간을 위한 혁신적이고 세련된 인테리어 디자인을 제공합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="group relative bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-200 transition-all duration-300"
              >
                <span className="relative z-10">START PROJECT</span>
              </Link>
              <Link
                href="/portfolio"
                className="group relative border border-white/20 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/5 transition-all duration-300"
              >
                <span className="relative z-10">VIEW WORKS</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/40 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 bg-zinc-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <span className="text-xs font-medium tracking-[0.3em] text-gray-500 uppercase">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white tracking-tight">
              우리의 강점
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-8 border border-white/10 hover:border-white/20 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.05]">
              <div className="mb-6">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white tracking-tight">혁신적인 디자인</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                트렌디하고 창의적인 디자인으로 공간의 특별함을 만들어냅니다
              </p>
            </div>

            <div className="group relative p-8 border border-white/10 hover:border-white/20 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.05]">
              <div className="mb-6">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white tracking-tight">빠른 시공</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                효율적인 프로세스로 정확한 일정 내에 완벽한 결과를 제공합니다
              </p>
            </div>

            <div className="group relative p-8 border border-white/10 hover:border-white/20 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.05]">
              <div className="mb-6">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white tracking-tight">합리적인 가격</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                최고의 품질을 합리적인 비용으로 제공하는 것이 우리의 약속입니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 bg-zinc-800 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">150+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">완료 프로젝트</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">98%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">고객 만족도</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">7년</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">업계 경력</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">24/7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">고객 지원</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-zinc-900 border-t border-white/5 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-gray-400 uppercase block mb-6">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            프로젝트를 시작할<br className="md:hidden" /> 준비가 되셨나요?
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            간단한 정보 입력으로 무료 견적을 받아보세요
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-black px-10 py-4 text-sm font-medium tracking-wide hover:bg-gray-200 transition-all duration-300"
          >
            START PROJECT
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
