import { Metadata } from "next";
import AboutPage from "@/components/pages/About";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export const metadata: Metadata = {
  title: "About | Caravans & Mobile Buildings",
  description: "Learn about our company and our mission",
};

export default async function About(props: {
  params: Promise<{ locale: Locale }>;
}) {
  // await the params before accessing locale
  const { locale } = await props.params;

  const dictionary = await getDictionary(locale);
  return <AboutPage locale={locale} dictionary={dictionary} />;
}
