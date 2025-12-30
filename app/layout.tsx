import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeContext'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const ogRenaissance = localFont({
  src: '../public/fonts/OG 르네상스 비밀.ttf',
  display: 'swap',
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
      <body className={ogRenaissance.className}>
        <ThemeProvider>
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
}
