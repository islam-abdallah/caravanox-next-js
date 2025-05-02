"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Header Section */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{t('about.title')}</h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3764594/pexels-photo-3764594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="About our company" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {/* Vision */}
                <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <Target size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('about.vision')}</h3>
                  <p className="text-gray-600">{t('about.visionText')}</p>
                </div>
                
                {/* Mission */}
                <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <Award size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('about.mission')}</h3>
                  <p className="text-gray-600">{t('about.missionText')}</p>
                </div>
                
                {/* Values */}
                <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <Heart size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('about.values')}</h3>
                  <p className="text-gray-600">{t('about.valuesText')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 z-0"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12 relative z-10">
              {/* 2016 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="flex-1 md:text-right md:pe-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-primary">2016</h3>
                  <h4 className="text-lg font-semibold mb-2">Company Established</h4>
                  <p className="text-gray-700">
                    Founded with a vision to revolutionize the mobile building industry
                  </p>
                </div>
                <div className="bg-primary w-8 h-8 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 md:ps-8">
                  {/* Spacer for layout balance on mobile */}
                  <div className="md:hidden h-4"></div>
                </div>
              </motion.div>
              
              {/* 2018 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="flex-1 md:text-right md:pe-8 md:hidden">
                  {/* Spacer for layout balance on mobile */}
                  <div className="h-4"></div>
                </div>
                <div className="bg-primary w-8 h-8 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 md:ps-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-primary">2018</h3>
                  <h4 className="text-lg font-semibold mb-2">Expansion Phase</h4>
                  <p className="text-gray-700">
                    Expanded services to include custom container modifications and cold storage solutions
                  </p>
                </div>
              </motion.div>
              
              {/* 2021 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="flex-1 md:text-right md:pe-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-primary">2021</h3>
                  <h4 className="text-lg font-semibold mb-2">Technology Integration</h4>
                  <p className="text-gray-700">
                    Adopted advanced CAD/CAM technology for precision manufacturing
                  </p>
                </div>
                <div className="bg-primary w-8 h-8 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 md:ps-8">
                  {/* Spacer for layout balance on mobile */}
                  <div className="md:hidden h-4"></div>
                </div>
              </motion.div>
              
              {/* 2025 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="flex-1 md:text-right md:pe-8 md:hidden">
                  {/* Spacer for layout balance on mobile */}
                  <div className="h-4"></div>
                </div>
                <div className="bg-primary w-8 h-8 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 md:ps-8">
                  <h3 className="text-xl font-bold text-primary">2025</h3>
                  <h4 className="text-lg font-semibold mb-2">Today</h4>
                  <p className="text-gray-700">
                    Leading provider of innovative mobile building solutions across the region
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;