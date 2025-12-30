'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'analog-atelier' | 'modern-luxury' | 'technical-fusion' | 'organic-warmth' | 'digital-future' | 'brutalist-bold' | 'neo-retro' | 'zen-minimal' | 'editorial-mono' | 'kinetic-energy' | 'nordic-calm' | 'maximalist-festival' | 'mediterranean-chic' | 'split-screen' | 'circular-flow' | 'diagonal-dynamic' | 'overlap-chaos'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('analog-atelier')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
