import { Locale } from "@/i18n.config";
import ProjectsPage from "@/pages/Projects";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Projects | Caravans & Mobile Buildings",
  description: "Explore our successful projects",
};

export default async function Projects(props: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await props.params;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsPage locale={locale} />
    </Suspense>
  );
}
