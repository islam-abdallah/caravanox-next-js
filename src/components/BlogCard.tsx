import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { Locale } from '@/i18n.config';

interface BlogCardProps {
  id: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  image: string;
  date: string;
  delay?: number;
  locale: Locale;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  id, 
  title,
  titleAr,
  excerpt,
  excerptAr,
  image, 
  date, 
  delay = 0, 
  locale = 'ar'
}) => {
  const displayTitle = locale === 'ar' ? titleAr : title;
  const displayExcerpt = locale === 'ar' ? excerptAr : excerpt;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <Link href={`/${locale}/blog/${id}`}>
        <div className="relative h-48">
          <img
            src={image}
            alt={displayTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="flex items-center text-white text-sm">
              <Calendar size={16} className="mr-2" />
              <time>{date}</time>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
            {displayTitle}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {displayExcerpt}
          </p>
          <span className="text-primary text-sm font-medium">
            {locale === 'ar' ? 'اقرأ المزيد ←' : 'Read More →'}
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;