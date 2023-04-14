import '@/styles/reset.css';
import '@/styles/global.css';

import { Inter } from '@next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'

const interFont = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={interFont.className}>
      <head>
        <title>NetFilms</title>
      </head>
      <body className='container'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}