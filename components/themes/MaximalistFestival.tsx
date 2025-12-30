import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MaximalistFestival() {
  return (
    <div className="min-h-screen bg-rose-50">
      <Navbar />

      {/* Hero - 화려한 극대주의 */}
      <section className="relative pt-32 pb-32 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-rose-100 via-amber-50 to-violet-100">
        {/* 화려한 패턴 배경 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-yellow-500 to-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* 화려한 장식 */}
            <div className="mb-8 flex justify-center gap-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rotate-45"
                  style={{
                    background: `linear-gradient(135deg,
                      ${['#ec4899', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4'][i]},
                      ${['#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4', '#ec4899'][i]})`,
                    animation: `pulse ${1 + i * 0.2}s infinite`
                  }}
                ></div>
              ))}
            </div>

            <div className="mb-6">
              <span className="px-6 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-xs uppercase tracking-[0.4em] font-bold">
                Maximalist Interior Design
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                MORE
              </span>
              <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mt-2">
                IS MORE
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 font-bold max-w-3xl mx-auto">
              <span className="text-pink-600">대담한 색채</span>
              <span className="text-gray-800">, </span>
              <span className="text-purple-600">풍부한 패턴</span>
              <span className="text-gray-800">, </span>
              <span className="text-orange-600">화려한 디테일</span>
              <br />
              <span className="text-violet-600">당신의 개성을 폭발시키다</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/quote"
                className="group relative px-12 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg uppercase tracking-wider overflow-hidden"
              >
                <span className="relative z-10">시작하기</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href="/portfolio"
                className="px-12 py-5 border-4 border-purple-600 text-purple-600 font-bold text-lg uppercase tracking-wider hover:bg-purple-600 hover:text-white transition-all"
              >
                갤러리
              </Link>
            </div>

            {/* 장식 요소들 */}
            <div className="mt-16 flex justify-center gap-8">
              {['★', '◆', '●', '■', '▲'].map((shape, i) => (
                <div
                  key={i}
                  className="text-4xl font-bold animate-bounce"
                  style={{
                    color: ['#ec4899', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4'][i],
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  {shape}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 물결 장식 */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 via-purple-500 via-orange-500 via-red-500 to-indigo-500"></div>
      </section>

      {/* Philosophy - 극대주의 철학 */}
      <section className="py-32 bg-gradient-to-br from-amber-50 to-rose-50 border-y-4 border-purple-600">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 transform -rotate-2">
              <span className="text-white font-black text-sm uppercase tracking-[0.3em]">Our Philosophy</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                극대주의의 미학
              </span>
            </h2>
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: ['#ec4899', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4', '#10b981', '#f97316'][i]
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "색채의 향연",
                desc: "과감한 색의 조합으로 공간에 생명력을 불어넣습니다. 핑크, 오렌지, 퍼플, 그린이 어우러진 화려한 팔레트로 당신의 공간을 특별하게 만듭니다.",
                gradient: "from-pink-500 to-purple-500",
                icon: "●●●"
              },
              {
                title: "패턴의 조화",
                desc: "다양한 패턴과 텍스처의 레이어링으로 풍성한 시각적 경험을 선사합니다. 플로럴, 기하학, 추상이 공존하는 대담한 믹스앤매치.",
                gradient: "from-orange-500 to-red-500",
                icon: "■■■"
              },
              {
                title: "디테일의 풍요",
                desc: "장식적 요소들이 모여 이야기를 만듭니다. 골드 액센트, 벨벳 소재, 크리스탈 조명이 만드는 럭셔리한 디테일.",
                gradient: "from-violet-500 to-indigo-500",
                icon: "★★★"
              },
              {
                title: "개성의 표현",
                desc: "규칙을 깨고 자신만의 스타일을 만듭니다. 아트워크, 컬렉션, 오브제가 공간에 당신의 스토리를 담아냅니다.",
                gradient: "from-emerald-500 to-teal-500",
                icon: "▲▲▲"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-10 bg-white border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-x-1 hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 text-3xl font-black opacity-20">{item.icon}</div>
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.gradient} mb-6`}>
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - 컬러풀 카드들 */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { color: "from-pink-400 to-rose-400", title: "Bold Colors", num: "100+" },
              { color: "from-purple-400 to-violet-400", title: "Patterns", num: "50+" },
              { color: "from-orange-400 to-amber-400", title: "Textures", num: "75+" }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className={`h-64 bg-gradient-to-br ${item.color} p-8 flex flex-col justify-between transform group-hover:scale-105 transition-transform`}>
                  <div className="text-white font-black text-6xl">{item.num}</div>
                  <div className="text-white font-black text-2xl uppercase">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - 화려한 통계 */}
      <section className="py-32 bg-gradient-to-br from-violet-100 via-pink-100 to-orange-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { num: "150+", label: "Projects", color: "from-pink-600 to-purple-600" },
              { num: "98%", label: "Satisfaction", color: "from-orange-600 to-red-600" },
              { num: "7", label: "Years", color: "from-violet-600 to-indigo-600" },
              { num: "∞", label: "Creativity", color: "from-emerald-600 to-teal-600" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-6xl font-black mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.num}
                </div>
                <div className="text-lg font-bold text-gray-800 uppercase tracking-wider">{stat.label}</div>
                <div className="mt-4 flex justify-center gap-1">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className={`w-2 h-2 rounded-full bg-gradient-to-r ${stat.color}`}></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 폭발적인 마무리 */}
      <section className="relative py-40 overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
        {/* 배경 장식 */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${['#ec4899', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4'][Math.floor(Math.random() * 5)]}, transparent)`,
                animation: `pulse ${Math.random() * 3 + 2}s infinite`
              }}
            ></div>
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center gap-3">
            {['★', '●', '■', '▲', '◆'].map((shape, i) => (
              <div key={i} className="text-5xl font-black text-white animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                {shape}
              </div>
            ))}
          </div>

          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
            당신의 공간을<br />
            예술 작품으로
          </h2>

          <p className="text-2xl text-white mb-12 font-bold">
            더 많은 색채, 더 많은 패턴, 더 많은 개성
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/quote"
              className="px-14 py-6 bg-white text-purple-600 font-black text-xl uppercase tracking-wider hover:bg-yellow-300 hover:text-black transition-all transform hover:scale-110"
            >
              지금 시작하기
            </Link>
          </div>

          <div className="mt-16 flex justify-center gap-2">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-white"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
