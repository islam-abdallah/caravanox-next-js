'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Calendar } from 'lucide-react';
import { Locale } from '@/i18n.config';

interface ProjectsProps {
  locale: Locale;
}

const Projects: React.FC<ProjectsProps> = ({ locale }) => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'beach-resort',
      title: t('projects.beachResort.title', 'Beach Resort Cabins'),
      category: t('projects.beachResort.category', 'Prefabricated Buildings'),
      client: t('projects.beachResort.client', 'Coastal Resorts Ltd.'),
      date: t('projects.beachResort.date', '2024'),
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg'
    },
    // ... other projects
  ];

  return (
    <>
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              {t('projects.heading', 'Our Projects')}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t(
                'projects.description',
                "Explore our successful projects and see how we've helped our clients achieve their goals."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary/90 text-white text-sm rounded-full mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Users size={18} className="mr-2 rtl:ml-2" />
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={18} className="mr-2 rtl:ml-2" />
                        <span>{project.date}</span>
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