import './globals.css'
import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miguel Buca',
  description: "Hi! I'm looking for new challenges 👋🏻 ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex bg-light-secondary justify-center dark:bg-black dark:text-white h-[100vh] w-[100vw] overflow-auto scroll-smooth'>
          <div className='flex md:container flex-1 flex-col'>
            <div className='scroll-auto dark:bg-dark-primary bg-light-primary py-4 border border-t-0 border-b-0 border-black/[0.06] dark:border-white/[0.06]'>
              <div className='container'>
                <Header />
              </div>
              <div className='overflow-hidden'>
                {children}
              </div>
              <div className='container'>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
