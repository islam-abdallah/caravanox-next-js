// src/app/[locale]/blog/[id]/page.tsx

import { Metadata } from "next";
import BlogPostPage from "@/components/pages/BlogPost";
import { Locale } from "@/i18n.config";
import { getBlogById } from "@/data/blogs";
import { getDictionary } from "@/lib/dictionary";

/**
 * Await params in metadata too
 */
export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await props.params;
  const post = getBlogById(id);

  return {
    title: `${post?.title} | Blog`,
    description: post?.excerpt,
  };
}

export default async function BlogPost(props: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  // await the dynamic params
  const { locale, id } = await props.params;

  const dictionary = await getDictionary(locale);
  return <BlogPostPage locale={locale} id={id} dictionary={dictionary} />;
}
