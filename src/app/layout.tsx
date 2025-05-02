import type { Metadata } from 'next';
import { Poppins, Cairo } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cairo'
});

export const metadata: Metadata = {
  title: 'Caravans & Mobile Buildings',
  description: 'World-Class Caravans & Mobile Building Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cairo.variable}`}
      suppressHydrationWarning>
      <body
        className="min-h-screen flex flex-col bg-white"
        suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}