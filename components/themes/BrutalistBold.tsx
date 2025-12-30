import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function BrutalistBold() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero - 비대칭 파격적 레이아웃 */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black border-b-8 border-orange-600">
        {/* 배경 노이즈 */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 w-full py-32">
          <div className="grid grid-cols-12 gap-8">
            {/* 왼쪽 - 초대형 텍스트 */}
            <div className="col-span-12 lg:col-span-7">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-2 h-2 bg-orange-600 animate-pulse"></div>
                <div className="w-24 h-px bg-white"></div>
              </div>

              <h1 className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-black leading-[0.85] tracking-tighter mb-0">
                <span className="block text-white">AL</span>
                <span className="block text-orange-600 -mt-8">VB</span>
              </h1>

              <div className="mt-12 -ml-4 border-l-8 border-orange-600 pl-8 py-6 bg-white/5">
                <p className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                  공간을 부순다<br />
                  다시 만든다
                </p>
              </div>
            </div>

            {/* 오른쪽 - 비대칭 배치 */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-end gap-8">
              <div className="bg-orange-600 p-12 transform rotate-2">
                <p className="text-2xl font-bold uppercase mb-6">
                  INTERIOR<br />REVOLUTION
                </p>
                <p className="text-lg font-light leading-relaxed">
                  기존의 틀을 깨는<br />
                  새로운 공간 설계
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/quote"
                  className="bg-white text-black px-10 py-6 text-xl font-black uppercase hover:bg-orange-600 hover:text-white transition-all transform hover:scale-105 border-4 border-black hover:border-orange-600"
                >
                  → START NOW
                </Link>
                <Link
                  href="/portfolio"
                  className="border-4 border-white text-white px-10 py-6 text-xl font-black uppercase hover:bg-white hover:text-black transition-all"
                >
                  PORTFOLIO
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 장식 요소 - 거친 선들 */}
        <div className="absolute top-20 left-0 w-full h-px bg-white opacity-20"></div>
        <div className="absolute bottom-20 left-0 w-full h-2 bg-orange-600"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/10"></div>
      </section>

      {/* Services - 그리드 파괴적 레이아웃 */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4 bg-orange-600 p-12 transform -rotate-1">
              <div className="text-8xl font-black mb-4">01</div>
              <h3 className="text-3xl font-black mb-4 uppercase">파괴</h3>
              <p className="text-lg">
                기존 공간의 한계를 부순다
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 bg-white text-black p-12 transform rotate-1">
              <div className="text-8xl font-black mb-4 text-orange-600">02</div>
              <h3 className="text-3xl font-black mb-4 uppercase">재구성</h3>
              <p className="text-lg">
                새로운 질서로 재배치한다
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 bg-red-900 p-12">
              <div className="text-8xl font-black mb-4">03</div>
              <h3 className="text-3xl font-black mb-4 uppercase">완성</h3>
              <p className="text-lg">
                전에 없던 공간을 만든다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - 강렬한 타이포 */}
      <section className="py-24 bg-black border-y-4 border-orange-600">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 bg-orange-600 p-1">
            {[
              { num: "150", label: "PROJECTS" },
              { num: "98", label: "PERCENT" },
              { num: "07", label: "YEARS" },
              { num: "24", label: "HOURS" }
            ].map((stat, i) => (
              <div key={i} className="bg-black p-8 text-center">
                <div className="text-6xl font-black text-orange-600 mb-2">{stat.num}</div>
                <div className="text-sm font-black text-white tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 대각선 레이아웃 */}
      <section className="relative py-40 bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
          <div className="transform -rotate-2">
            <div className="bg-orange-600 p-16 border-8 border-white">
              <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
                당신의 공간<br />
                우리가 혁명한다
              </h2>
              <Link
                href="/quote"
                className="inline-block bg-white text-black px-12 py-6 text-2xl font-black uppercase hover:bg-black hover:text-white border-4 border-black hover:border-white transition-all"
              >
                CONTACT US NOW →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
