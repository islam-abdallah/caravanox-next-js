import { Metadata } from 'next';
import BlogPage from '@/components/pages/Blog';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export const metadata: Metadata = {
  title: 'Blog | Caravans & Mobile Buildings',
  description: 'Latest news and insights from our industry',
};

export default async function Blog(props: {
  params: Promise<{ locale: Locale }>;
}) {
  // await the params before accessing locale
  const { locale } = await props.params;

  const dictionary = await getDictionary(locale);
  return <BlogPage locale={locale} dictionary={dictionary} />;
}