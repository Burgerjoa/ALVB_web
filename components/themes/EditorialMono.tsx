import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function EditorialMono() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero - 매거진 커버 스타일 */}
      <section className="relative h-screen flex items-end pb-20 overflow-hidden bg-black">
        {/* 대형 이미지 영역 (실제로는 이미지가 들어갈 자리) */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-gray-800 to-black opacity-90"></div>

        {/* 텍스트 오버레이 */}
        <div className="relative max-w-[1800px] mx-auto px-8 lg:px-16 w-full">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <div className="mb-4">
                <span className="text-xs tracking-[0.5em] text-gray-400 uppercase font-light">
                  Issue 2025 / Vol. 01
                </span>
              </div>

              <h1 className="text-[5rem] md:text-[8rem] lg:text-[12rem] font-light leading-[0.85] tracking-tighter mb-6">
                <span className="block text-white">ALVB</span>
                <span className="block text-gray-400 text-6xl md:text-8xl mt-4">
                  Interior Studio
                </span>
              </h1>

              <div className="max-w-2xl">
                <p className="text-xl text-gray-300 font-light leading-relaxed mb-8 border-l-2 border-white pl-6">
                  공간을 재정의하는 디자인 철학.<br />
                  모던함과 시대를 초월한 우아함의 만남.
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex items-end">
              <div className="space-y-4 w-full">
                <Link
                  href="/quote"
                  className="block w-full bg-white text-black text-center py-5 text-sm tracking-[0.3em] uppercase font-light hover:bg-gray-100 transition-all"
                >
                  상담 예약
                </Link>
                <Link
                  href="/portfolio"
                  className="block w-full border border-white text-white text-center py-5 text-sm tracking-[0.3em] uppercase font-light hover:bg-white hover:text-black transition-all"
                >
                  포트폴리오
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 페이지 넘버 */}
        <div className="absolute bottom-8 left-8 text-xs text-gray-500 font-light">
          01 / 04
        </div>
      </section>

      {/* Editorial Grid Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          {/* 매거진 스타일 타이틀 */}
          <div className="mb-20">
            <div className="flex items-center gap-8 mb-6">
              <div className="w-12 h-px bg-black"></div>
              <span className="text-xs tracking-[0.5em] text-gray-500 uppercase">Our Approach</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light text-black tracking-tight">
              디자인 언어
            </h2>
          </div>

          {/* 2열 그리드 레이아웃 */}
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-6 space-y-12">
              <div className="aspect-[3/4] bg-gray-100 relative group overflow-hidden">
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-2xl font-light">Minimalism</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-light mb-4">절제된 아름다움</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  불필요한 요소를 제거하고 본질만을 남긴다.
                  각각의 선택은 의도적이며, 모든 디테일은 목적을 가진다.
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 space-y-12 md:pt-32">
              <div className="aspect-[3/4] bg-gray-100 relative group overflow-hidden">
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-2xl font-light">Timeless</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-light mb-4">시대를 초월한</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  트렌드를 따르지 않고, 트렌드를 만든다.
                  10년 후에도 아름다운 공간을 설계한다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section - 매거진 인용구 스타일 */}
      <section className="py-40 bg-black text-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <div className="mb-8">
            <div className="w-px h-24 bg-white/20 mx-auto"></div>
          </div>
          <blockquote className="text-4xl md:text-5xl font-light leading-relaxed italic mb-12">
            "공간은 단순히 채워지는 것이 아니라,<br />
            경험되어야 한다"
          </blockquote>
          <cite className="text-sm tracking-[0.3em] text-gray-400 not-italic uppercase">
            — ALVB Design Philosophy
          </cite>
        </div>
      </section>

      {/* Stats - 에디토리얼 스타일 */}
      <section className="py-32 bg-white border-y border-gray-200">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {[
              { num: "150+", label: "완료된 프로젝트", sublabel: "Projects Completed" },
              { num: "98%", label: "고객 만족도", sublabel: "Client Satisfaction" },
              { num: "2018", label: "설립년도", sublabel: "Est." },
              { num: "24/7", label: "고객 지원", sublabel: "Support" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl md:text-7xl font-light text-black mb-4 tracking-tight">{stat.num}</div>
                <div className="text-sm text-gray-900 mb-2 font-light">{stat.label}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-light">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 심플한 끝맺음 */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <div className="mb-12">
            <span className="text-xs tracking-[0.5em] text-gray-500 uppercase">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-black mb-16 leading-tight">
            당신의 프로젝트를<br />
            시작할 준비가 되셨나요?
          </h2>
          <Link
            href="/quote"
            className="inline-block border-2 border-black text-black px-16 py-6 text-sm tracking-[0.3em] uppercase font-light hover:bg-black hover:text-white transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
