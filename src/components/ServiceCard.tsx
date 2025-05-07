import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Locale } from '@/i18n.config';

interface ServiceCardProps {
  id: string;
  title: string;
  titleAr: string;
  image: string;
  description: string;
  descriptionAr: string;
  delay?: number;
  locale: Locale;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  id, 
  title, 
  titleAr, 
  image, 
  description,
  descriptionAr,
  delay = 0, 
  locale = 'ar' 
}) => {
  const displayTitle = locale === 'ar' ? titleAr : title;
  const displayDescription = locale === 'ar' ? descriptionAr : description;
  console.log('ServiceCard', { id, title, titleAr, image, description, descriptionAr, delay, locale });
  console.log('displayTitle', displayTitle);
  console.log("locale === ar", locale);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <Link href={`/${locale}/services/${id}`}>
        <div className="relative h-48">
          <img
            src={image}
            alt={displayTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white">
              {displayTitle}
            </h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-600 line-clamp-2">
            {displayDescription}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;