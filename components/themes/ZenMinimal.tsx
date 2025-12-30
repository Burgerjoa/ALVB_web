import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ZenMinimal() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero - 극도의 여백 */}
      <section className="relative pt-48 pb-48 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto">
            {/* 작은 원 - 선(禪) */}
            <div className="flex justify-center mb-24">
              <div className="w-3 h-3 rounded-full bg-stone-800"></div>
            </div>

            {/* 극도로 심플한 타이포 */}
            <h1 className="text-center mb-32">
              <span className="block text-8xl md:text-9xl font-light text-stone-900 mb-8 tracking-tight">
                空
              </span>
              <span className="block text-2xl md:text-3xl font-light text-stone-600 tracking-[0.5em]">
                SPACE
              </span>
            </h1>

            <div className="max-w-2xl mx-auto text-center mb-32">
              <p className="text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-2">
                비움으로써 채우고
              </p>
              <p className="text-lg md:text-xl text-stone-700 font-light leading-relaxed">
                고요함으로써 완성하다
              </p>
            </div>

            {/* 미니멀 버튼 */}
            <div className="flex flex-col items-center gap-8">
              <Link
                href="/quote"
                className="group relative"
              >
                <div className="border-b-2 border-stone-900 pb-2 text-stone-900 text-sm tracking-[0.3em] uppercase font-light hover:border-stone-400 transition-colors">
                  Begin Your Journey
                </div>
              </Link>
              <div className="w-px h-16 bg-stone-300"></div>
            </div>
          </div>
        </div>

        {/* 극도로 미니멀한 장식 */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
          <svg width="1" height="100" className="text-stone-300">
            <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      </section>

      {/* Philosophy - 동양적 레이아웃 */}
      <section className="py-48 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* 중앙 정렬 제목 */}
          <div className="text-center mb-32">
            <div className="inline-block">
              <div className="w-16 h-px bg-stone-800 mx-auto mb-8"></div>
              <h2 className="text-4xl font-light text-stone-900 tracking-wide">
                Philosophy
              </h2>
              <div className="w-16 h-px bg-stone-800 mx-auto mt-8"></div>
            </div>
          </div>

          {/* 세로 레이아웃 */}
          <div className="space-y-32">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-8 h-8 border border-stone-300 mx-auto mb-12"></div>
              <h3 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">
                여백의 미학
              </h3>
              <p className="text-stone-600 leading-relaxed font-light">
                불필요한 것을 덜어내고 본질만을 남긴다<br />
                공간에 숨을 불어넣는 것은 비움에서 시작된다
              </p>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <div className="w-8 h-8 rounded-full border border-stone-300 mx-auto mb-12"></div>
              <h3 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">
                조화의 균형
              </h3>
              <p className="text-stone-600 leading-relaxed font-light">
                모든 요소가 서로를 존중하며 공존한다<br />
                완벽한 균형 속에서 평온함을 발견한다
              </p>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <div className="w-12 h-px bg-stone-800 mx-auto mb-12"></div>
              <h3 className="text-2xl font-light text-stone-900 mb-6 tracking-wide">
                자연의 본질
              </h3>
              <p className="text-stone-600 leading-relaxed font-light">
                인위적이지 않은 자연스러움을 추구한다<br />
                시간이 흐를수록 아름다워지는 공간을 만든다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process - 수직 플로우 */}
      <section className="py-48 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-32">
            <div className="w-px h-24 bg-stone-300 mx-auto mb-12"></div>
            <h2 className="text-4xl font-light text-stone-900 tracking-wide">
              The Way
            </h2>
          </div>

          <div className="space-y-24">
            {[
              { num: "一", title: "듣다", desc: "당신의 이야기에 귀 기울입니다" },
              { num: "二", title: "느끼다", desc: "공간의 기운을 느낍니다" },
              { num: "三", title: "비우다", desc: "불필요한 것을 덜어냅니다" },
              { num: "四", title: "채우다", desc: "본질로 공간을 완성합니다" }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="flex items-start gap-12">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="text-5xl font-light text-stone-800">{item.num}</div>
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-2xl font-light text-stone-900 mb-4">{item.title}</h3>
                    <p className="text-stone-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                {i < 3 && (
                  <div className="absolute left-12 top-20 w-px h-24 bg-stone-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - 미니멀 */}
      <section className="py-32 bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {[
              { num: "150", label: "Projects" },
              { num: "98", label: "Satisfaction" },
              { num: "7", label: "Years" },
              { num: "∞", label: "Possibilities" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-light text-stone-900 mb-4">{stat.num}</div>
                <div className="w-8 h-px bg-stone-300 mx-auto mb-3"></div>
                <div className="text-xs text-stone-600 uppercase tracking-[0.3em] font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 극도의 심플함 */}
      <section className="relative py-48 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-16">
            <div className="w-2 h-2 rounded-full bg-stone-800 mx-auto"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-light text-stone-900 mb-24 tracking-tight leading-tight">
            당신의 공간에<br />
            고요함을 더하다
          </h2>

          <div className="space-y-8">
            <p className="text-lg text-stone-600 font-light">
              첫 대화는 언제나 여유롭게
            </p>

            <Link
              href="/quote"
              className="inline-block group"
            >
              <div className="relative inline-block">
                <div className="border border-stone-900 px-12 py-4 text-stone-900 text-sm tracking-[0.3em] uppercase font-light group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                  Begin
                </div>
              </div>
            </Link>

            <div className="pt-12">
              <div className="w-px h-24 bg-stone-200 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* 미니멀 장식 */}
        <div className="absolute top-32 left-32 w-px h-32 bg-stone-200"></div>
        <div className="absolute top-32 right-32 w-px h-32 bg-stone-200"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-px bg-stone-200"></div>
        <div className="absolute bottom-32 right-1/4 w-16 h-px bg-stone-200"></div>
      </section>

      <Footer />
    </div>
  )
}
