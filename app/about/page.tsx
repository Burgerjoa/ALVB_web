import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 min-h-screen flex items-center overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block">
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-theme-secondary">About Us</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
              <span className="text-theme-primary">우리의</span>
              <br />
              <span className="text-theme-secondary">이야기</span>
            </h1>
            <p className="text-lg md:text-xl text-theme-secondary mb-12 max-w-2xl leading-relaxed font-light">
              ALVB는 상업공간의 새로운 가치를 창조하는 젊은 인테리어 디자인 전문기업입니다
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="relative py-32 border-t border-theme-accent-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-medium tracking-[0.3em] text-theme-secondary uppercase">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-theme-primary tracking-tight">
                우리의 철학
              </h2>
              <p className="text-lg text-theme-secondary mb-6 leading-relaxed font-light">
                ALVB는 단순히 공간을 꾸미는 것을 넘어, 브랜드의 정체성과
                고객의 경험을 극대화하는 상업공간을 창조합니다.
              </p>
              <p className="text-lg text-theme-secondary mb-6 leading-relaxed font-light">
                젊고 역동적인 팀이 최신 트렌드와 혁신적인 아이디어로
                고객의 비즈니스 성공을 돕습니다.
              </p>
              <p className="text-lg text-theme-secondary leading-relaxed font-light">
                우리는 모든 프로젝트에서 완벽을 추구하며,
                고객의 만족을 최우선으로 생각합니다.
              </p>
            </div>
            <div className="border-2 border-theme-accent-20 p-12 text-center bg-theme-accent-5 backdrop-blur-sm">
              <div className="mb-8">
                <div className="text-6xl font-bold text-theme-primary">ALVB</div>
                <div className="text-xl text-theme-secondary mt-2">
                  Ars longa, vita brevis
                </div>
              </div>
              <p className="text-theme-secondary leading-relaxed font-light">
                건축, 라이프스타일, 비전, 아름다움을 담아
                공간의 새로운 가치를 제시합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-32 border-t border-theme-accent-20" style={{backgroundColor: 'rgba(var(--accent), 0.03)'}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <span className="text-xs font-medium tracking-[0.3em] text-theme-secondary uppercase">Core Values</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-theme-primary tracking-tight">
              핵심 가치
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-8 border-2 border-theme-accent-20 hover:border-theme-accent-30 transition-all duration-500 bg-theme-accent-5 backdrop-blur-sm">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-4 text-theme-primary tracking-tight">창의성</h3>
              <p className="text-theme-secondary leading-relaxed font-light">
                독창적이고 혁신적인 디자인으로 공간에 생명력을 불어넣습니다.
                획일화된 디자인이 아닌, 각 공간만의 특별한 스토리를 만들어냅니다.
              </p>
            </div>

            <div className="group relative p-8 border-2 border-theme-accent-20 hover:border-theme-accent-30 transition-all duration-500 bg-theme-accent-5 backdrop-blur-sm">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4 text-theme-primary tracking-tight">효율성</h3>
              <p className="text-theme-secondary leading-relaxed font-light">
                빠르고 정확한 프로세스로 시간과 비용을 절약합니다.
                체계적인 시공 관리로 약속된 일정을 반드시 지킵니다.
              </p>
            </div>

            <div className="group relative p-8 border-2 border-theme-accent-20 hover:border-theme-accent-30 transition-all duration-500 bg-theme-accent-5 backdrop-blur-sm">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-4 text-theme-primary tracking-tight">신뢰</h3>
              <p className="text-theme-secondary leading-relaxed font-light">
                투명한 커뮤니케이션과 책임감 있는 태도로 고객과의
                신뢰를 최우선으로 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-32 border-t border-theme-accent-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <span className="text-xs font-medium tracking-[0.3em] text-theme-secondary uppercase">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-theme-primary tracking-tight">
              작업 프로세스
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-theme-accent text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-theme-primary tracking-tight">상담</h3>
              <p className="text-theme-secondary leading-relaxed font-light">
                고객의 니즈와 비전을 정확히 파악합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-theme-accent text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-theme-primary tracking-tight">기획</h3>
              <p className="text-theme-secondary leading-relaxed font-light">
                공간 분석과 콘셉트 설정으로 최적의 디자인을 기획합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-theme-accent text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-theme-primary tracking-tight">디자인</h3>
              <p className="text-theme-secondary leading-relaxed font-light">
                3D 시뮬레이션으로 현실감 있는 디자인을 제시합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-theme-accent text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-theme-primary tracking-tight">시공</h3>
              <p className="text-theme-secondary leading-relaxed font-light">
                체계적인 관리로 완벽한 결과물을 구현합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-32 border-t border-theme-accent-20" style={{backgroundColor: 'rgba(var(--accent), 0.03)'}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <span className="text-xs font-medium tracking-[0.3em] text-theme-secondary uppercase">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-theme-primary tracking-tight">
              전문가 팀
            </h2>
            <p className="text-xl text-theme-secondary mt-6 max-w-3xl font-light">
              다양한 분야의 전문가들이 협력하여 최상의 결과를 만들어냅니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-8 border-2 border-theme-accent-20 hover:border-theme-accent-30 transition-all duration-500 bg-theme-accent-5 backdrop-blur-sm text-center">
              <div className="w-24 h-24 bg-theme-accent rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-theme-primary tracking-tight">디자인팀</h3>
              <p className="text-theme-secondary leading-relaxed font-light">
                창의적이고 실용적인 디자인 제안
              </p>
            </div>

            <div className="group relative p-8 border-2 border-theme-accent-20 hover:border-theme-accent-30 transition-all duration-500 bg-theme-accent-5 backdrop-blur-sm text-center">
              <div className="w-24 h-24 bg-theme-accent rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-theme-primary tracking-tight">시공팀</h3>
              <p className="text-theme-secondary leading-relaxed font-light">
                정밀하고 완벽한 시공 진행
              </p>
            </div>

            <div className="group relative p-8 border-2 border-theme-accent-20 hover:border-theme-accent-30 transition-all duration-500 bg-theme-accent-5 backdrop-blur-sm text-center">
              <div className="w-24 h-24 bg-theme-accent rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-theme-primary tracking-tight">관리팀</h3>
              <p className="text-theme-secondary leading-relaxed font-light">
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
