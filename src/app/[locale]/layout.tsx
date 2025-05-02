import type { Metadata } from 'next';
import { Poppins, Cairo } from 'next/font/google';
import '@/app/globals.css';
import { Locale, i18n } from '@/i18n.config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getDictionary } from '@/lib/dictionary';

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

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  // ← params is now a Promise
  params: Promise<{ locale: Locale }>;
}) {
  // await the params before using
  const { locale } = await props.params;
  const dictionary = await getDictionary(locale);
  const isRTL = locale === "ar";

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      className={`${poppins.variable} ${cairo.variable}`}
      dir={isRTL ? "rtl" : "ltr"}>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-white">
        <Navbar locale={locale} navigation={dictionary.navigation || {}} />
        <main className="flex-grow pt-20">{props.children}</main>
        <Footer
          locale={locale}
          navigation={dictionary.navigation}
          footer={dictionary.footer}
          quality={dictionary.quality}
        />
      </body>
    </html>
  );
}