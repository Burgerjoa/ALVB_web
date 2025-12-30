import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MediterraneanChic() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Hero - 지중해 럭셔리 */}
      <section className="relative pt-20 pb-32 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        {/* 태양 그라데이션 배경 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-300 to-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-5xl mx-auto text-center">
            {/* 이탈리안 스타일 장식 라인 */}
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-800"></div>
              <div className="text-amber-900 text-sm tracking-[0.5em] font-light italic">
                DOLCE VITA
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-800"></div>
            </div>

            <h1 className="mb-8">
              <span className="block text-7xl md:text-8xl lg:text-9xl font-serif italic text-amber-900 mb-4 tracking-tight">
                Bellissimo
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-light text-orange-700 tracking-wide uppercase">
                INTERIOR DESIGN
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-amber-800 mb-16 leading-relaxed font-light max-w-3xl mx-auto italic">
              "La vita è bella - 아름다운 삶을 위한 공간"<br />
              <span className="text-lg not-italic text-amber-700">
                지중해의 따뜻한 햇살과 정열을 담은 인테리어
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link
                href="/quote"
                className="group relative px-12 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white overflow-hidden"
              >
                <span className="relative z-10 text-sm uppercase tracking-[0.3em] font-light">Inizia Ora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              <Link
                href="/portfolio"
                className="px-12 py-5 border-2 border-amber-800 text-amber-900 text-sm uppercase tracking-[0.3em] font-light hover:bg-amber-800 hover:text-white transition-all duration-500"
              >
                Portfolio
              </Link>
            </div>

            {/* 장식 요소 */}
            <div className="flex justify-center gap-3 opacity-60">
              <div className="w-2 h-2 rotate-45 bg-amber-700"></div>
              <div className="w-2 h-2 rotate-45 bg-orange-600"></div>
              <div className="w-2 h-2 rotate-45 bg-red-600"></div>
              <div className="w-2 h-2 rotate-45 bg-orange-600"></div>
              <div className="w-2 h-2 rotate-45 bg-amber-700"></div>
            </div>
          </div>
        </div>

        {/* 하단 웨이브 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z" fill="#fffbeb" opacity="0.8"/>
          </svg>
        </div>
      </section>

      {/* Philosophy - 지중해 철학 */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block">
              <span className="text-sm tracking-[0.4em] text-orange-600 uppercase font-light mb-4 block italic">
                La Nostra Filosofia
              </span>
              <h2 className="text-5xl md:text-6xl font-serif italic text-amber-900 mb-6">
                예술과 열정의 조화
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
                <div className="w-3 h-3 rotate-45 bg-orange-600"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: "Terracotta & Earth",
                subtitle: "테라코타의 온기",
                desc: "지중해의 붉은 흙과 태양이 만든 따뜻한 색감. 자연스러운 소재와 질감으로 공간에 생명력을 불어넣습니다.",
                icon: "○"
              },
              {
                title: "Artisan Craftsmanship",
                subtitle: "장인의 손길",
                desc: "세대를 거쳐 전해진 장인정신. 수작업의 디테일과 전통 기법으로 완성되는 유일무이한 공간을 만듭니다.",
                icon: "◇"
              },
              {
                title: "Sun-Kissed Elegance",
                subtitle: "햇살의 우아함",
                desc: "지중해의 빛을 담은 밝고 여유로운 분위기. 자연광과 따뜻한 조명이 어우러진 낭만적인 공간을 디자인합니다.",
                icon: "△"
              },
              {
                title: "Passione per il Design",
                subtitle: "디자인에 대한 열정",
                desc: "이탈리아와 스페인의 풍부한 문화유산에서 영감을 받아, 현대적 감각과 전통미를 완벽하게 조화시킵니다.",
                icon: "□"
              }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute -top-6 -left-6 text-8xl font-serif text-orange-100 italic">
                  {item.icon}
                </div>
                <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 p-10 border-l-4 border-orange-600 hover:border-red-600 transition-all duration-500">
                  <h3 className="text-2xl font-serif italic text-amber-900 mb-2">{item.title}</h3>
                  <div className="text-sm text-orange-700 mb-4 font-light">{item.subtitle}</div>
                  <p className="text-amber-800 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elements - 지중해 요소들 */}
      <section className="py-32 bg-gradient-to-br from-orange-50 to-amber-50 border-y-2 border-orange-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif italic text-amber-900 mb-6">
              Elementi Essenziali
            </h2>
            <p className="text-xl text-amber-700 font-light italic">핵심 디자인 요소</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Ceramica",
                desc: "수작업 타일과 도자기로 만드는 지중해 특유의 패턴과 색감",
                gradient: "from-orange-400 to-red-500"
              },
              {
                title: "Legno Rustico",
                desc: "시간의 흔적이 담긴 러스틱 우드로 완성하는 따뜻한 질감",
                gradient: "from-amber-500 to-orange-500"
              },
              {
                title: "Ferro Battuto",
                desc: "수작업 철제 장식으로 더하는 우아하고 강렬한 액센트",
                gradient: "from-red-500 to-amber-600"
              }
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden bg-white">
                <div className={`h-3 bg-gradient-to-r ${item.gradient}`}></div>
                <div className="p-8">
                  <h3 className="text-3xl font-serif italic text-amber-900 mb-4">{item.title}</h3>
                  <p className="text-amber-700 leading-relaxed font-light">{item.desc}</p>
                  <div className="mt-6 flex gap-2">
                    <div className="w-8 h-px bg-orange-400 mt-2"></div>
                    <div className="w-2 h-2 rotate-45 bg-orange-600 mt-1"></div>
                  </div>
                </div>
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${item.gradient} opacity-5 rounded-tl-full transform translate-x-16 translate-y-16 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-700`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview - 패션 쇼룸 스타일 */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm tracking-[0.4em] text-orange-600 uppercase font-light italic block mb-4">
                Featured Collection
              </span>
              <h2 className="text-5xl md:text-6xl font-serif italic text-amber-900 mb-8 leading-tight">
                Our Latest<br />
                Masterpieces
              </h2>
              <p className="text-lg text-amber-800 mb-8 leading-relaxed font-light">
                각 프로젝트는 하나의 예술 작품입니다.<br />
                이탈리아의 르네상스 정신과 스페인의 열정을<br />
                현대적 공간에 담아냅니다.
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 text-orange-600 font-light uppercase tracking-[0.3em] text-sm group"
              >
                <span>View All Works</span>
                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-amber-200 via-orange-200 to-red-200 hover:scale-105 transition-transform duration-500 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-sm font-light italic">Project {item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats - 우아한 통계 */}
      <section className="py-32 bg-gradient-to-br from-amber-900 to-red-900 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {[
              { num: "150+", label: "Progetti", sub: "프로젝트" },
              { num: "98%", label: "Soddisfazione", sub: "만족도" },
              { num: "7", label: "Anni", sub: "년 경력" },
              { num: "∞", label: "Passione", sub: "열정" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-6xl md:text-7xl font-serif italic mb-4 text-amber-200 group-hover:text-white transition-colors">
                  {stat.num}
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-8 h-px bg-amber-400"></div>
                  <div className="w-1 h-1 rotate-45 bg-orange-400"></div>
                  <div className="w-8 h-px bg-amber-400"></div>
                </div>
                <div className="text-sm uppercase tracking-[0.3em] font-light text-amber-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-amber-300/80 font-light">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 로맨틱 마무리 */}
      <section className="relative py-40 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        {/* 배경 장식 */}
        <div className="absolute top-20 left-10 w-64 h-64 border border-orange-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 border border-amber-300 rounded-full opacity-20"></div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-600"></div>
              <div className="w-3 h-3 rotate-45 bg-orange-600"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-600"></div>
            </div>
          </div>

          <h2 className="text-6xl md:text-7xl font-serif italic text-amber-900 mb-8 leading-tight">
            Iniziamo Insieme<br />
            <span className="text-5xl md:text-6xl text-orange-700">Il Tuo Sogno</span>
          </h2>

          <p className="text-xl md:text-2xl text-amber-800 mb-12 font-light italic leading-relaxed">
            "당신의 꿈을 함께 시작합니다"
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/quote"
              className="group relative px-14 py-6 bg-gradient-to-r from-orange-600 to-red-600 text-white overflow-hidden"
            >
              <span className="relative z-10 text-sm uppercase tracking-[0.3em] font-light">
                Preventivo Gratuito
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          </div>

          <div className="flex justify-center gap-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{
                  background: i % 2 === 0 ? '#d97706' : '#ea580c'
                }}
              ></div>
            ))}
          </div>

          <p className="mt-12 text-sm text-amber-700 font-light italic">
            © ALVB Interior Design Studio · Made with ❤️ in Mediterranean Style
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
