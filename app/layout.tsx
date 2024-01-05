import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {Rubik_Moonrocks, VT323 } from "next/font/google";
import MouseTracker from './components/mouse-tracker/MouseTracker';

export const metadata: Metadata = {
  title: 'Katie Narain.',
  description: 'Web3 Business Strategist and Marketeer.',
}

const vt323 = VT323({
  subsets: ['latin'],
  display: 'auto',
  variable: '--font-vt323',
  weight: '400'
})

const rubik = Rubik_Moonrocks({
  subsets: ['cyrillic'],
  display: 'auto',
  variable: '--font-rubik-moonrocks',
  weight: '400'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-gradient-to-b from-thirdBg-100 to-mainBg-100 
                        text-white 
                        container 
                        m-auto 
                        font-mainFont 
                        box-border
                        flex flex-col
                        items-center
                        min-h-screen
                        w-full
                        ${vt323.variable}`}>   
      <MouseTracker />        
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  )
}
