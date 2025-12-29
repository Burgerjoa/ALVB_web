import type { Metadata } from 'next'
import { Nanum_Pen_Script } from 'next/font/google'
import './globals.css'

const nanumPenScript = Nanum_Pen_Script({
  weight: '400',
  subsets: ['latin'],
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
      <body className={nanumPenScript.className}>{children}</body>
    </html>
  )
}
