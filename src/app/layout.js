import { Montserrat } from 'next/font/google'

import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from '@/components/Footer';
import { FurnizoriProvider } from '@/lib/context/furnizori';
import { ClientiProvider } from '@/lib/context/clienti';
import { OferteProvider } from '@/lib/context/oferte';

const monteserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${monteserrat.className} w-full flex flex-col min-h-screen`}
        suppressHydrationWarning={true}
      >
        <Navbar/>
          <OferteProvider>
            <FurnizoriProvider>
              <ClientiProvider>
                <main className='px-24 py-5 flex-grow flex-1'>
                  {children}
                </main>
              </ClientiProvider>
            </FurnizoriProvider>
          </OferteProvider>
        <Footer/>
      </body>
    </html>
  );
}
