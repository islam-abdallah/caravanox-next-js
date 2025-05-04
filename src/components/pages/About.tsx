'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart } from 'lucide-react';
import { Locale } from '@/i18n.config';

interface AboutPageProps {
  locale: Locale;
  dictionary: {
    about: {
      title: string;
      brief: string;
      description: string;
      vision: {
        title: string;
        text: string;
      };
      mission: {
        title: string;
        text: string;
      };
      values: {
        title: string;
        text: string;
      };
      timeline: {
        title: string;
        [key: string]: any;
      };
    };
  };
}

const AboutPage: React.FC<AboutPageProps> = ({ locale = 'ar', dictionary }) => {
  const { about } = dictionary;
  const isRTL = locale === 'ar';
  
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-28 pb-32 bg-gray-50">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-us.png" 
            alt="About our company" 
            className="w-full h-full object-full"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-4">{about.title}</h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <h2 className="text-2xl font-semibold mb-4">{about.brief}</h2>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                {about.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Vision, Mission, Values Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{about.vision.title}</h3>
              <p className="text-gray-600 leading-relaxed">{about.vision.text}</p>
            </div>
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{about.mission.title}</h3>
              <p className="text-gray-600 leading-relaxed">{about.mission.text}</p>
            </div>
            
            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{about.values.title}</h3>
              <p className="text-gray-600 leading-relaxed">{about.values.text}</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{about.timeline.title}</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {Object.entries(about.timeline)
                .filter(([key]) => key !== 'title')
                .map(([year, content], index) => (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${isRTL ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
                  >
                    <div className={`flex-1 ${isRTL ? 'md:text-right md:pl-8' : 'md:text-right md:pr-8'} mb-4 md:mb-0`}>
                      <h3 className="text-xl font-bold text-primary">{year}</h3>
                      <h4 className="text-lg font-semibold mb-2">{content.title}</h4>
                      <p className="text-gray-700">{content.description}</p>
                    </div>
                    <div className="bg-primary w-8 h-8 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="flex-1 md:pl-8">
                      {/* Spacer for layout balance */}
                      <div className="md:hidden h-4"></div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;