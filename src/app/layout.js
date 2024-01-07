import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ROS SPORTS',
  description: 'Admin Panel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Theme className=" h-full w-full">{children}</Theme></body>
    </html>
  )
}
