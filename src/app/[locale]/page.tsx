import { Metadata } from 'next';
import HomePage from '@/components/pages/Home';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export const metadata: Metadata = {
  title: 'Home | Caravans & Mobile Buildings',
  description: 'World-Class Caravans & Mobile Building Solutions',
};

export default async function Home(props: {
  // again, params is a Promise
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await props.params;
  const dictionary = await getDictionary(locale);

  return <HomePage locale={locale} dictionary={dictionary} />;
}