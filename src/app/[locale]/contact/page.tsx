import { Metadata } from "next";
import ContactPage from "@/components/pages/Contact";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export const metadata: Metadata = {
  title: "Contact | Caravans & Mobile Buildings",
  description: "Get in touch with us",
};

export default async function Contact(props: {
  params: Promise<{ locale: Locale }>;
}) {
  // await the params before accessing locale
  const { locale } = await props.params;

  const dictionary = await getDictionary(locale);
  return <ContactPage locale={locale} dictionary={dictionary} />;
}
