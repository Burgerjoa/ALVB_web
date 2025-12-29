import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About ALVB
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              상업공간의 새로운 가치를 창조하는 젊은 인테리어 디자인 전문기업
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                우리의 철학
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                ALVB는 단순히 공간을 꾸미는 것을 넘어, 브랜드의 정체성과
                고객의 경험을 극대화하는 상업공간을 창조합니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                젊고 역동적인 팀이 최신 트렌드와 혁신적인 아이디어로
                고객의 비즈니스 성공을 돕습니다.
              </p>
              <p className="text-lg text-gray-600">
                우리는 모든 프로젝트에서 완벽을 추구하며,
                고객의 만족을 최우선으로 생각합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl p-12 text-center">
              <div className="mb-8">
                <div className="text-6xl font-bold text-primary-600">ALVB</div>
                <div className="text-xl text-gray-700 mt-2">
                  Ars longa, vita brevis
                </div>
              </div>
              <p className="text-gray-600">
                건축, 라이프스타일, 비전, 아름다움을 담아
                공간의 새로운 가치를 제시합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            핵심 가치
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">창의성</h3>
              <p className="text-gray-600">
                독창적이고 혁신적인 디자인으로 공간에 생명력을 불어넣습니다.
                획일화된 디자인이 아닌, 각 공간만의 특별한 스토리를 만들어냅니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">효율성</h3>
              <p className="text-gray-600">
                빠르고 정확한 프로세스로 시간과 비용을 절약합니다.
                체계적인 시공 관리로 약속된 일정을 반드시 지킵니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">신뢰</h3>
              <p className="text-gray-600">
                투명한 커뮤니케이션과 책임감 있는 태도로 고객과의
                신뢰를 최우선으로 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            작업 프로세스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">상담</h3>
              <p className="text-gray-600">
                고객의 니즈와 비전을 정확히 파악합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">기획</h3>
              <p className="text-gray-600">
                공간 분석과 콘셉트 설정으로 최적의 디자인을 기획합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">디자인</h3>
              <p className="text-gray-600">
                3D 시뮬레이션으로 현실감 있는 디자인을 제시합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">시공</h3>
              <p className="text-gray-600">
                체계적인 관리로 완벽한 결과물을 구현합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
            전문가 팀
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            다양한 분야의 전문가들이 협력하여 최상의 결과를 만들어냅니다
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center shadow-md">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">디자인팀</h3>
              <p className="text-gray-600">
                창의적이고 실용적인 디자인 제안
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-md">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">시공팀</h3>
              <p className="text-gray-600">
                정밀하고 완벽한 시공 진행
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-md">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">관리팀</h3>
              <p className="text-gray-600">
                체계적인 프로젝트 관리와 고객 지원
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
