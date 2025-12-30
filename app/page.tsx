'use client'

import { useTheme } from '@/components/ThemeContext'
import AnalogAtelier from '@/components/themes/AnalogAtelier'
import ModernLuxury from '@/components/themes/ModernLuxury'
import TechnicalFusion from '@/components/themes/TechnicalFusion'
import BrutalistBold from '@/components/themes/BrutalistBold'
import NeoRetro from '@/components/themes/NeoRetro'
import ZenMinimal from '@/components/themes/ZenMinimal'
import EditorialMono from '@/components/themes/EditorialMono'
import KineticEnergy from '@/components/themes/KineticEnergy'
import NordicCalm from '@/components/themes/NordicCalm'
import MaximalistFestival from '@/components/themes/MaximalistFestival'
import MediterraneanChic from '@/components/themes/MediterraneanChic'
import SplitScreen from '@/components/themes/SplitScreen'
import CircularFlow from '@/components/themes/CircularFlow'
import DiagonalDynamic from '@/components/themes/DiagonalDynamic'
import OverlapChaos from '@/components/themes/OverlapChaos'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// 기본 테마 (organic-warmth, digital-future)
function DefaultTheme() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-32 min-h-screen flex items-center overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block">
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-theme-secondary">Interior Design Studio</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
              <span className="text-theme-primary">공간에</span>
              <br />
              <span className="text-theme-secondary">가치를 더하다</span>
            </h1>
            <p className="text-lg md:text-xl text-theme-secondary mb-12 max-w-2xl leading-relaxed font-light">
              ALVB는 상업공간을 위한 혁신적이고 세련된 인테리어 디자인을 제공합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="group relative bg-theme-accent text-white px-8 py-4 text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300"
              >
                <span className="relative z-10">START PROJECT</span>
              </Link>
              <Link
                href="/portfolio"
                className="group relative border-2 border-theme-accent text-theme-accent px-8 py-4 text-sm font-medium tracking-wide hover:opacity-80 transition-all duration-300"
              >
                <span className="relative z-10">VIEW WORKS</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 border-t border-theme-accent-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <span className="text-xs font-medium tracking-[0.3em] text-theme-secondary uppercase">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-theme-primary tracking-tight">
              우리의 강점
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "혁신적인 디자인", desc: "트렌디하고 창의적인 디자인으로 공간의 특별함을 만들어냅니다" },
              { title: "빠른 시공", desc: "효율적인 프로세스로 정확한 일정 내에 완벽한 결과를 제공합니다" },
              { title: "합리적인 가격", desc: "최고의 품질을 합리적인 비용으로 제공하는 것이 우리의 약속입니다" }
            ].map((item, i) => (
              <div key={i} className="group relative p-8 border-2 border-theme-accent-20 hover:border-theme-accent-30 transition-all duration-500 bg-theme-accent-5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-theme-primary tracking-tight">{item.title}</h3>
                <p className="text-theme-secondary leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 border-t border-theme-accent-20" style={{backgroundColor: 'rgba(var(--accent), 0.03)'}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {[
              { num: "150+", label: "완료 프로젝트" },
              { num: "98%", label: "고객 만족도" },
              { num: "7년", label: "업계 경력" },
              { num: "24/7", label: "고객 지원" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-bold text-theme-primary mb-3 tracking-tight">{stat.num}</div>
                <div className="text-sm text-theme-secondary uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 border-t border-theme-accent-20 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-theme-secondary uppercase block mb-6">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-theme-primary tracking-tight">
            프로젝트를 시작할<br className="md:hidden" /> 준비가 되셨나요?
          </h2>
          <p className="text-lg text-theme-secondary mb-12 max-w-2xl mx-auto font-light">
            간단한 정보 입력으로 무료 견적을 받아보세요
          </p>
          <Link
            href="/quote"
            className="inline-block bg-theme-accent text-white px-10 py-4 text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300"
          >
            START PROJECT
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function Home() {
  const { theme } = useTheme()

  // 테마에 따라 다른 페이지 렌더링
  switch (theme) {
    case 'analog-atelier':
      return <AnalogAtelier />
    case 'modern-luxury':
      return <ModernLuxury />
    case 'technical-fusion':
      return <TechnicalFusion />
    case 'brutalist-bold':
      return <BrutalistBold />
    case 'neo-retro':
      return <NeoRetro />
    case 'zen-minimal':
      return <ZenMinimal />
    case 'editorial-mono':
      return <EditorialMono />
    case 'kinetic-energy':
      return <KineticEnergy />
    case 'nordic-calm':
      return <NordicCalm />
    case 'maximalist-festival':
      return <MaximalistFestival />
    case 'mediterranean-chic':
      return <MediterraneanChic />
    case 'split-screen':
      return <SplitScreen />
    case 'circular-flow':
      return <CircularFlow />
    case 'diagonal-dynamic':
      return <DiagonalDynamic />
    case 'overlap-chaos':
      return <OverlapChaos />
    case 'organic-warmth':
    case 'digital-future':
    default:
      return <DefaultTheme />
  }
}
