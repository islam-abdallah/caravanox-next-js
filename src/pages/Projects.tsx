'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Calendar } from 'lucide-react';
import { Locale } from '@/i18n.config';
import { getAllProjects } from '@/data/projects';
import { useSearchParams } from 'next/navigation';

interface ProjectsProps {
  locale: Locale;
  searchParams : any;
}

const Projects: React.FC<ProjectsProps> = ({ locale, searchParams }) => {
  const { t } = useTranslation();
  searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  useEffect(() => {
    const category = searchParams.get("catId");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);
  const allProjects = getAllProjects();
  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.product_id === selectedCategory);
  return (
    <>
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              {t("projects.heading", "Our Projects")}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t(
                "projects.description",
                "Explore our successful projects and see how we've helped our clients achieve their goals."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href={`/projects/${project.id}`}>
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={locale === "ar" ? project.titleAr : project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary/90 text-white text-sm rounded-full mb-2">
                        {locale === "ar"
                          ? project.categoryAr
                          : project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white line-clamp-1">
                        {locale === "ar" ? project.titleAr : project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between  items-center space-x-4 rtl:space-x-reverse text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Users size={18} className="mr-2 rtl:ml-2" />
                        <span className="line-clamp-1">
                          {locale == "ar" ? project.clientAr : project.client}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={18} className="mr-2 rtl:ml-2" />
                        <span className="line-clamp-1">
                          {project.date.slice(0, 4)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;