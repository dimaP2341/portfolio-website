import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import ActiveSectionContent from '@/context/active-section-content'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dmytro Plotkin | Portfolio',
  description:
    'Dmytro is a front-end developer who specializes in building user interfaces, ensuring responsive design, and optimizing web performance to create seamless user experiences.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32px" />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-35 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2f6] absolute top-[-6rem] right-[11rem] h-[31.3rem] w-[31.3rem] rounded-full blur-[10rem] sm:w-[67rem] -z-50 dark:bg-[#946263]"></div>
        <div className="bg-[rgb(219,215,251)] absolute top-[-1rem] left-[-35rem] h-[31.3rem] w-[41.3rem] rounded-full blur-[10rem] sm:w-[67rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-50 dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContent>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
            <Toaster position="top-right" />
          </ActiveSectionContent>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
