import { Montserrat } from 'next/font/google'

import Navbar from "@/components/Navbar";
import "./globals.css";

const monteserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${monteserrat.className} w-full flex flex-col`}
        suppressHydrationWarning={true}
      >
        <Navbar/>
        <main className='px-24 py-5'>
          {children}
        </main>
      </body>
    </html>
  );
}
