import { Metadata } from "next";
import ProjectDetailsPage from "@/components/pages/ProjectDetails";
import { Locale } from "@/i18n.config";
import { getProjectById } from "@/data/projects";
import { getDictionary } from "@/lib/dictionary";

/**
 * Metadata also gets `params` as a Promise
 */
export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await props.params;
  const project = getProjectById(id);
  return {
    title: `${project?.title} | Projects`,
    description: project?.description,
  };
}

export default async function ProjectDetails(props: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await props.params;

  const dictionary = await getDictionary(locale);
  return <ProjectDetailsPage locale={locale} id={id} dictionary={dictionary} />;
}
