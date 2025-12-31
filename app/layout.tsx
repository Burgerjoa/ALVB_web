import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeContext'
import ThemeSwitcher from '@/components/ThemeSwitcher'

// 영어, 숫자, 기호용 OG 르네상스 폰트
const ogRenaissance = localFont({
  src: '../public/fonts/OG 르네상스 비밀.ttf',
  display: 'swap',
  variable: '--font-og-renaissance',
  // 영어, 숫자, 기호에만 적용
  unicodeRange: 'U+0020-007F, U+00A0-00FF, U+0100-017F, U+0180-024F, U+2000-206F, U+2070-209F, U+20A0-20CF, U+2100-214F, U+2150-218F, U+2190-21FF, U+2200-22FF',
})

// 한글용 고딕체 폰트 (시스템 폰트 사용)
const koreanGothic = localFont({
  src: [
    {
      path: '../public/fonts/OG 르네상스 비밀.ttf',
      weight: '400',
    }
  ],
  display: 'swap',
  variable: '--font-korean-gothic',
  // 한글 범위에만 적용
  unicodeRange: 'U+AC00-D7AF, U+1100-11FF, U+3130-318F, U+A960-A97F, U+D7B0-D7FF',
  fallback: ['AppleSDGothicNeo-Regular', 'Malgun Gothic', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'ALVB DESIGNS - 인테리어 디자인',
  description: '상업공간 인테리어 디자인 전문 기업',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${ogRenaissance.variable} ${koreanGothic.variable}`}>
        <ThemeProvider>
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
}
