import { Metadata } from "next";
import ServicesPage from "@/components/pages/Services";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export const metadata: Metadata = {
  title: "Services | Caravans & Mobile Buildings",
  description: "Explore our comprehensive range of services",
};

export default async function Services(props: {
  params: Promise<{ locale: Locale }>;
}) {
  // await the params before accessing locale
  const { locale } = await props.params;

  const dictionary = await getDictionary(locale);
  return <ServicesPage locale={locale} dictionary={dictionary} />;
}
