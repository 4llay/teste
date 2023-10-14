import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/Footer'
import CartProvider from '@/providers/CartProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cones Trufadassos',
  description: 'sei la alguma coisa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster toastOptions={{
        style:{
          background: 'rgb(51 65 85)',
          color: '#fff'
        }
      }}></Toaster>
      <CartProvider>
          <div className='flex flex-col min-h-screen'>
            <NavBar />
            <main className='flex-grow'>
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
