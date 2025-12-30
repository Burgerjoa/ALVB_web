import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function OverlapChaos() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />

      {/* Hero - 겹치는 레이어 */}
      <section className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden">
        {/* 배경 레이어들 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-96 h-96 bg-red-500 rounded-3xl transform rotate-12 -translate-x-32 -translate-y-16 opacity-90"></div>
          <div className="absolute w-96 h-96 bg-blue-500 rounded-3xl transform -rotate-12 translate-x-32 translate-y-16 opacity-90"></div>
          <div className="absolute w-80 h-80 bg-yellow-400 rounded-3xl transform rotate-45 opacity-90"></div>
        </div>

        {/* 중앙 컨텐츠 */}
        <div className="relative z-20 text-center px-8">
          <div className="relative inline-block mb-8">
            <h1 className="text-9xl font-black text-white relative z-10">ALVB</h1>
            <div className="absolute inset-0 text-9xl font-black text-black transform translate-x-2 translate-y-2">ALVB</div>
            <div className="absolute inset-0 text-9xl font-black text-red-500 transform -translate-x-2 -translate-y-2 -z-10">ALVB</div>
          </div>

          <div className="relative inline-block mb-12">
            <div className="bg-white px-8 py-4 transform -rotate-3 shadow-2xl">
              <p className="text-xl font-bold text-gray-900">무질서 속의 완벽한 조화</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/quote"
              className="relative px-10 py-5 bg-red-500 text-white font-black uppercase tracking-wider transform rotate-2 hover:rotate-0 hover:scale-110 transition-all shadow-xl"
            >
              시작하기
            </Link>
            <Link
              href="/portfolio"
              className="relative px-10 py-5 bg-blue-500 text-white font-black uppercase tracking-wider transform -rotate-2 hover:rotate-0 hover:scale-110 transition-all shadow-xl"
            >
              포트폴리오
            </Link>
          </div>
        </div>
      </section>

      {/* Services - 카드 겹침 */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-7xl font-black text-gray-900 relative inline-block">
              SERVICES
              <span className="absolute inset-0 text-7xl font-black text-red-500 transform translate-x-1 translate-y-1 -z-10">SERVICES</span>
            </h2>
          </div>

          <div className="relative h-[600px]">
            {[
              { title: "공간 기획", bg: "bg-red-500", rotate: "rotate-6", top: "0", left: "0", z: "z-40" },
              { title: "인테리어", bg: "bg-blue-500", rotate: "-rotate-3", top: "80px", left: "300px", z: "z-30" },
              { title: "시공 관리", bg: "bg-yellow-500", rotate: "rotate-12", top: "160px", left: "600px", z: "z-20" },
              { title: "사후 관리", bg: "bg-green-500", rotate: "-rotate-6", top: "240px", left: "200px", z: "z-10" }
            ].map((item, i) => (
              <div
                key={i}
                className={`absolute ${item.z} ${item.bg} ${item.rotate} w-80 h-64 p-8 shadow-2xl hover:scale-110 hover:rotate-0 hover:z-50 transition-all cursor-pointer group`}
                style={{ top: item.top, left: item.left }}
              >
                <div className="text-white">
                  <div className="text-7xl font-black mb-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl font-black">{item.title}</h3>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm">전문적인 서비스</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - 겹치는 원형 */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative flex items-center justify-center h-[500px]">
            {/* 겹치는 원들 */}
            <div className="absolute w-80 h-80 rounded-full bg-red-500 flex items-center justify-center transform -translate-x-32 shadow-2xl">
              <div className="text-center text-white">
                <div className="text-7xl font-black">150+</div>
                <div className="text-sm font-bold uppercase tracking-wider">Projects</div>
              </div>
            </div>

            <div className="absolute w-80 h-80 rounded-full bg-blue-500 flex items-center justify-center transform translate-x-32 shadow-2xl opacity-90">
              <div className="text-center text-white">
                <div className="text-7xl font-black">98%</div>
                <div className="text-sm font-bold uppercase tracking-wider">Satisfaction</div>
              </div>
            </div>

            <div className="absolute w-80 h-80 rounded-full bg-yellow-400 flex items-center justify-center transform translate-y-32 shadow-2xl opacity-80 z-30">
              <div className="text-center text-gray-900">
                <div className="text-7xl font-black">7</div>
                <div className="text-sm font-bold uppercase tracking-wider">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio - 랜덤 배치 그리드 */}
      <section className="py-32 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-7xl font-black text-gray-900 relative inline-block">
              PORTFOLIO
              <span className="absolute inset-0 text-7xl font-black text-blue-500 transform translate-x-2 translate-y-2 -z-10 opacity-50">PORTFOLIO</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-5 h-64 bg-gradient-to-br from-red-500 to-pink-500 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all shadow-xl"></div>
            <div className="col-span-7 h-64 bg-gradient-to-br from-blue-500 to-cyan-500 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all shadow-xl"></div>
            <div className="col-span-4 h-80 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all shadow-xl"></div>
            <div className="col-span-4 h-80 bg-gradient-to-br from-green-500 to-teal-500 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all shadow-xl"></div>
            <div className="col-span-4 h-80 bg-gradient-to-br from-purple-500 to-indigo-500 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all shadow-xl"></div>
            <div className="col-span-6 h-64 bg-gradient-to-br from-pink-500 to-rose-500 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all shadow-xl"></div>
            <div className="col-span-6 h-64 bg-gradient-to-br from-indigo-500 to-blue-500 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all shadow-xl"></div>
          </div>
        </div>
      </section>

      {/* Testimonials - 떠있는 카드들 */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-7xl font-black text-gray-900">REVIEWS</h2>
          </div>

          <div className="relative h-[600px]">
            {[
              { text: "최고의 인테리어!", author: "김○○", rotate: "rotate-6", top: "0", left: "0", bg: "bg-yellow-400" },
              { text: "완벽한 시공 품질", author: "이○○", rotate: "-rotate-3", top: "100px", left: "400px", bg: "bg-blue-400" },
              { text: "기대 이상이에요", author: "박○○", rotate: "rotate-12", top: "200px", left: "200px", bg: "bg-red-400" },
              { text: "강력 추천합니다!", author: "최○○", rotate: "-rotate-6", top: "300px", left: "600px", bg: "bg-green-400" }
            ].map((item, i) => (
              <div
                key={i}
                className={`absolute ${item.bg} ${item.rotate} w-72 p-8 shadow-2xl hover:scale-110 hover:rotate-0 transition-all cursor-pointer`}
                style={{ top: item.top, left: item.left }}
              >
                <div className="text-white">
                  <p className="text-xl font-bold mb-4">"{item.text}"</p>
                  <p className="text-sm font-medium opacity-80">- {item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 레이어 폭발 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-96 h-96 bg-red-500 rounded-full transform scale-150 opacity-20 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-blue-500 rounded-full transform scale-125 opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute w-64 h-64 bg-yellow-400 rounded-full transform scale-100 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-20 text-center px-8">
          <div className="mb-12">
            <h2 className="text-9xl font-black text-white relative inline-block">
              START
              <span className="absolute inset-0 text-9xl font-black text-red-500 transform translate-x-3 translate-y-3 -z-10">START</span>
              <span className="absolute inset-0 text-9xl font-black text-blue-500 transform -translate-x-3 -translate-y-3 -z-20">START</span>
            </h2>
          </div>

          <div className="mb-12">
            <p className="text-2xl text-white font-bold">지금 바로 시작하세요</p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="/quote"
              className="px-14 py-6 bg-red-500 text-white text-lg font-black uppercase tracking-wider transform rotate-3 hover:rotate-0 hover:scale-110 transition-all shadow-2xl"
            >
              무료 견적
            </Link>
            <Link
              href="/portfolio"
              className="px-14 py-6 bg-blue-500 text-white text-lg font-black uppercase tracking-wider transform -rotate-3 hover:rotate-0 hover:scale-110 transition-all shadow-2xl"
            >
              작품 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
