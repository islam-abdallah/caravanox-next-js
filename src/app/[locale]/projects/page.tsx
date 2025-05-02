import { Metadata } from 'next';
import ProjectsPage from '@/pages/Projects';
import { Locale } from '@/i18n.config';
import { getDictionary } from "@/lib/dictionary";

export const metadata: Metadata = {
  title: 'Projects | Caravans & Mobile Buildings',
  description: 'Explore our successful projects',
};

export default async function Projects(props: {
  params: Promise<{ locale: Locale }>;
}) {
  // await the params before accessing locale
  const { locale } = await props.params;

  return <ProjectsPage locale={locale}  />;
}