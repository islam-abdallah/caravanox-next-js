// src/app/[locale]/services/[id]/page.tsx

import { Metadata } from "next";
import ServiceDetailsPage from "@/pages/ServiceDetails";
import { Locale } from "@/i18n.config";
import { getServiceById } from "@/data/services";
import { getDictionary } from "@/lib/dictionary";

/**
 * Dynamic Metadata must also await its params in Next.js 15+
 */
export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  // await the params before you use them
  const { id } = await props.params;
  const service = getServiceById(id);

  return {
    title: `${service?.title} | Products`,
    description: service?.description,
  };
}

export default async function ServiceDetails(props: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  // await again here…
  const { locale, id } = await props.params;

  const dictionary = await getDictionary(locale);
  return <ServiceDetailsPage locale={locale} id={id} dictionary={dictionary} />;
}
