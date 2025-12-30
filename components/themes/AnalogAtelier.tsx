import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AnalogAtelier() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero - 손그림 스케치 느낌 */}
      <section className="relative pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-block relative">
              <span className="text-sm tracking-[0.5em] text-amber-900/60 uppercase font-light">
                Handcrafted Spaces
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent"></div>
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light mb-10 leading-[0.95] tracking-tighter text-amber-950">
              <span className="block italic">Design</span>
              <span className="block font-normal">Atelier</span>
            </h1>

            <div className="relative inline-block mb-12">
              <p className="text-xl md:text-2xl text-amber-800/80 max-w-3xl mx-auto leading-relaxed font-light">
                손으로 그린 스케치에서 시작되는<br />
                당신만의 공간 이야기
              </p>
              <svg className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 opacity-30" viewBox="0 0 100 20">
                <path d="M0,10 Q25,0 50,10 T100,10" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-amber-900"/>
              </svg>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
              <Link
                href="/quote"
                className="group relative px-12 py-5 border-2 border-amber-900 text-amber-950 font-light text-sm tracking-widest uppercase overflow-hidden transition-all hover:text-white"
              >
                <span className="relative z-10">프로젝트 시작하기</span>
                <div className="absolute inset-0 bg-amber-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
              <Link
                href="/portfolio"
                className="text-amber-900 font-light text-sm tracking-widest uppercase border-b border-amber-900/30 hover:border-amber-900 transition-colors pb-1"
              >
                포트폴리오 보기 →
              </Link>
            </div>
          </div>
        </div>

        {/* 손그림 화살표 */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-40">
          <svg width="24" height="60" viewBox="0 0 24 60" className="text-amber-900 animate-bounce">
            <path d="M12 0 C12 0, 10 20, 12 30 C14 20, 12 0, 12 0" stroke="currentColor" fill="none" strokeWidth="1.5"/>
            <path d="M12 30 L8 26 M12 30 L16 26" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </section>

      {/* 프로세스 섹션 - 스케치북 느낌 */}
      <section className="py-32 border-t-2 border-amber-900/20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-24 text-center">
            <h2 className="text-5xl md:text-6xl font-light text-amber-950 mb-6 italic">Our Process</h2>
            <div className="w-24 h-px bg-amber-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "스케치", desc: "아이디어를 손으로 그려냅니다" },
              { num: "02", title: "구상", desc: "디테일을 더해 완성도를 높입니다" },
              { num: "03", title: "실현", desc: "공간에 생명을 불어넣습니다" }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute -top-8 -left-4 text-8xl font-light text-amber-900/10 group-hover:text-amber-900/20 transition-colors">
                  {item.num}
                </div>
                <div className="relative pt-12 pl-4 border-l-2 border-amber-900/20 group-hover:border-amber-900/40 transition-colors">
                  <h3 className="text-2xl font-light text-amber-950 mb-4 italic">{item.title}</h3>
                  <p className="text-amber-800/70 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 종이 질감 효과 */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(120, 53, 15, 0.03) 2px, rgba(120, 53, 15, 0.03) 3px)`
          }}></div>
        </div>
      </section>

      {/* Stats - 손글씨 느낌 */}
      <section className="py-24 bg-amber-50/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "150+", label: "완료 프로젝트" },
              { num: "98%", label: "고객 만족도" },
              { num: "7년", label: "업계 경력" },
              { num: "24/7", label: "고객 지원" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-light text-amber-950 mb-2 italic">{stat.num}</div>
                <div className="text-sm text-amber-800/60 uppercase tracking-wider font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 손그림 스타일 */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-amber-950 mb-8 italic">
            당신의 이야기를<br />
            함께 그려갑니다
          </h2>
          <p className="text-lg text-amber-800/70 mb-12 font-light">
            첫 스케치부터 완성까지, 함께하는 여정
          </p>
          <Link
            href="/quote"
            className="inline-block px-12 py-5 border-2 border-amber-900 text-amber-950 font-light text-sm tracking-widest uppercase hover:bg-amber-900 hover:text-white transition-all"
          >
            무료 상담 시작하기
          </Link>
        </div>

        {/* 배경 장식 */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-32 h-32 border border-amber-900/10 rotate-12"></div>
        <div className="absolute top-1/3 right-10 w-24 h-24 border border-amber-900/10 -rotate-6"></div>
      </section>

      <Footer />
    </div>
  )
}
