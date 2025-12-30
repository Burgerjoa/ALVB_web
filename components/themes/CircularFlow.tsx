import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CircularFlow() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero - 원형 중심 레이아웃 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
        {/* 중앙 원형 메인 */}
        <div className="relative">
          {/* 중심 원 */}
          <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center relative z-20 shadow-2xl">
            <div className="text-center text-white">
              <h1 className="text-6xl font-black mb-4">ALVB</h1>
              <p className="text-lg font-light tracking-wider">Interior Studio</p>
            </div>
          </div>

          {/* 위성 원들 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-32">
            <div className="w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-emerald-500">
              <div className="text-center">
                <div className="text-3xl font-black text-emerald-600">150+</div>
                <div className="text-xs text-gray-600">Projects</div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-40">
            <div className="w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-teal-500">
              <div className="text-center">
                <div className="text-3xl font-black text-teal-600">98%</div>
                <div className="text-xs text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-32">
            <div className="w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-emerald-500">
              <div className="text-center">
                <div className="text-3xl font-black text-emerald-600">7</div>
                <div className="text-xs text-gray-600">Years</div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-40">
            <div className="w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-teal-500">
              <div className="text-center">
                <div className="text-3xl font-black text-teal-600">∞</div>
                <div className="text-xs text-gray-600">Creativity</div>
              </div>
            </div>
          </div>

          {/* 연결선 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full" style={{ width: '700px', height: '700px' }}>
              <circle cx="350" cy="350" r="300" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="5,5"/>
              <circle cx="350" cy="350" r="200" stroke="#14b8a6" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="5,5"/>
            </svg>
          </div>
        </div>

        {/* 하단 버튼 영역 */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-4">
          <Link
            href="/quote"
            className="px-10 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all shadow-lg"
          >
            시작하기
          </Link>
          <Link
            href="/portfolio"
            className="px-10 py-4 bg-white text-emerald-600 rounded-full hover:bg-gray-100 transition-all shadow-lg border-2 border-emerald-600"
          >
            포트폴리오
          </Link>
        </div>
      </section>

      {/* 원형 카드 그리드 */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-gray-900 mb-4">OUR SERVICES</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "공간 기획", icon: "○", color: "emerald" },
              { title: "인테리어", icon: "◐", color: "teal" },
              { title: "시공 관리", icon: "◑", color: "cyan" },
              { title: "사후 관리", icon: "●", color: "emerald" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-48 h-48 rounded-full bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 flex items-center justify-center mb-6 hover:scale-110 transition-transform shadow-xl`}>
                  <div className={`text-white text-8xl font-light`}>{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center text-sm">전문적인 서비스 제공</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 파형 레이아웃 */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-gray-900 mb-4">PROCESS</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="relative">
            {/* 파형 경로 */}
            <svg className="w-full h-64 mb-12" viewBox="0 0 1200 200" fill="none">
              <path d="M 0,100 Q 150,20 300,100 T 600,100 T 900,100 T 1200,100" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.3"/>
            </svg>

            {/* 단계별 원형 */}
            <div className="grid grid-cols-4 gap-8">
              {[
                { num: "01", title: "상담" },
                { num: "02", title: "설계" },
                { num: "03", title: "시공" },
                { num: "04", title: "완성" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 shadow-xl">
                    <div className="text-white text-3xl font-black">{item.num}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Radial CTA */}
      <section className="relative py-40 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-[800px] h-[800px] rounded-full border-2 border-emerald-500"></div>
          <div className="absolute w-[600px] h-[600px] rounded-full border-2 border-teal-500"></div>
          <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-emerald-500"></div>
        </div>

        <div className="relative z-10 text-center px-8">
          <div className="inline-block mb-12">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6">
              <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          <h2 className="text-6xl font-black text-gray-900 mb-8">
            프로젝트 시작하기
          </h2>

          <p className="text-xl text-gray-700 mb-12 font-light max-w-2xl mx-auto">
            원형의 완벽함처럼, 당신의 공간도 완벽하게 만들어드립니다
          </p>

          <Link
            href="/quote"
            className="inline-block px-16 py-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-lg font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all"
          >
            무료 상담 신청
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
