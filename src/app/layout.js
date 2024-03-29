import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScrLen from '@/components/SmoothScrLen'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <SmoothScrLen>
      {children}
      </SmoothScrLen>
      </body>
    </html>
  )
}
