import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Providers from '@/containers/providers';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-controller';
import Navbar from '@/components/navbar';
import CursorLight from '@/components/CursorLight';

const outfit = Outfit({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Frontend | Advance',
  description: 'Frontend Advance Personal portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${outfit.className} flex flex-col bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#e7c5b8] absolute top-[-6rem] flex-1 -z-[10] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#835b55]"></div>
        <div className="bg-[#a8bfd6] absolute top-[-1rem] -z-[10] flex-1 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#2f4058]"></div>
        <Providers>
          <Navbar />
          <CursorLight />
          {children}
          <Footer />
          <ThemeSwitch />
        </Providers>
      </body>
    </html>
  );
}
