import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { LocaleSwitch } from '@/components/locale-switch'
import { ThemeSwitch } from '@/components/theme-switch'
import { fetchLocales } from '@/lib/api'
import { cn } from '@/lib/utils'
import { Providers } from './providers'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'TurboStrapi App',
  description: 'Strapi starter with turborepo',
}

export async function generateStaticParams() {
  const locales = await fetchLocales()

  return locales.map((locale) => ({
    locale: locale.code,
  }))
}

type RootLayoutProps = {
  children: React.ReactNode
  params: { locale: string }
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <Providers>
          <main>
            <h1 className="text-5xl font-bold text-primary">TurboStrapi</h1>
            {children}
          </main>
          <LocaleSwitch className="fixed bottom-6 left-4 z-40 md:absolute md:bottom-2 md:left-2" />
          <ThemeSwitch className="fixed bottom-6 right-4 z-40 md:absolute md:bottom-2 md:right-2" />
        </Providers>
      </body>
    </html>
  )
}
