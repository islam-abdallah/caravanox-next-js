'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { getAllServices } from '@/data/services';
import { Locale } from '@/i18n.config';

interface ServicesPageProps {
  locale: Locale;
  dictionary?: any;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ locale = 'ar', dictionary = {} }) => {
  const allServices = getAllServices();
  const { services = {} } = dictionary;
  
  return (
    <>
      {/* Header Section */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              {services.title || (locale === 'ar' ? 'خدماتنا' : 'Our Services')}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {services.subtitle || (locale === 'ar' 
                ? 'نقدم مجموعة شاملة من الحلول المبتكرة لتلبية احتياجاتكم'
                : 'We provide a comprehensive range of innovative solutions to meet your needs'
              )}
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard 
                key={service.id}
                {...service}
                delay={index}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;