import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Users } from 'lucide-react';
import { Locale } from '@/i18n.config';

interface ProjectCardProps {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  client: string;
  clientAr: string;
  date: string;
  image: string;
  delay?: number;
  locale: Locale;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title,
  titleAr,
  category,
  categoryAr,
  client,
  clientAr,
  date, 
  image,
  delay = 0,
  locale = 'ar'
}) => {
  const displayTitle = locale === 'ar' ? titleAr : title;
  const displayCategory = locale === 'ar' ? categoryAr : category;
  const displayClient = locale === 'ar' ? clientAr : client;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <Link href={`/${locale}/projects/${id}`}>
        <div className="relative h-48">
          <img
            src={image}
            alt={displayTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 bg-primary/90 text-white text-sm rounded-full mb-2">
              {displayCategory}
            </span>
            <h3 className="text-lg font-bold text-white line-clamp-1">
              {displayTitle}
            </h3>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Users size={16} className="mr-1" />
              <span className="line-clamp-1">{displayClient}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;