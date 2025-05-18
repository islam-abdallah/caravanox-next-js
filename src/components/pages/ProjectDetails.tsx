'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Users, Calendar, CheckCircle2, Mail, Phone, MessageCircle } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import { Locale } from '@/i18n.config';
import { getProjectById } from '@/data/projects';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ProjectDetailsPageProps {
  locale: Locale;
  id: string;
  dictionary?: any;
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({ locale = 'ar', id, dictionary = {} }) => {
  const windowHref = window.location.href;
  let messageWatsApp =
    locale === "ar"
      ? "مرحبًا، أنا مهتم بخدمتكم"
      : " Hello, I'm interested in your service";

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Project not found</h2>
          <button
            onClick={() => router.push(`/${locale}/projects`)}
            className="text-primary hover:text-primary/80"
          >
            Return to Projects
          </button>
        </div>
      </div>
    );
  }

  const title = locale === 'ar' ? project.titleAr : project.title;
  const category = locale === 'ar' ? project.categoryAr : project.category;
  const client = locale === 'ar' ? project.clientAr : project.client;
  const location = locale === 'ar' ? project.locationAr : project.location;
  const description = locale === 'ar' ? project.descriptionAr : project.description;
  const features = locale === 'ar' ? project.featuresAr : project.features;
  const scope = locale === 'ar' ? project.scopeAr : project.scope;

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 rtl:space-x-reverse text-primary hover:text-primary/80 mb-6">
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px] rounded-xl overflow-hidden mb-8 cursor-pointer"
          onClick={() => {
            setPhotoIndex(0);
            setIsOpen(true);
          }}>
          <img
            src={project.image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
            <span className="inline-block px-4 py-2 bg-primary text-white text-sm rounded-full mb-4 max-w-max">
              {category}
            </span>
            <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
            <div className="flex items-center space-x-6 rtl:space-x-reverse text-white">
              <div className="flex items-center">
                <Users size={20} className="mr-2 rtl:ml-2" />
                <span>{client}</span>
              </div>
              <div className="flex items-center">
                <Building2 size={20} className="mr-2 rtl:ml-2" />
                <span>{location}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={20} className="mr-2 rtl:ml-2" />
                <span>{project.date}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {locale == "ar" ? "نظرة عامة على المشروع" : "Project Overview"}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {locale == "ar" ? "الميزات الرئيسية" : "Key Features"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 rtl:space-x-reverse">
                    <CheckCircle2
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {locale == "ar" ? "نطاق المشروع" : "Project Scope"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {scope.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 rtl:space-x-reverse">
                    <CheckCircle2
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {locale == "ar" ? "معرض المشروع" : "Project Gallery"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}>
                    <div className="relative">
                      <img
                        src={image}
                        alt={`${title} gallery image ${index + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                index={photoIndex}
                slides={[project.image, ...project.gallery].map((src) => ({
                  src,
                }))}
              />
            </motion.div>
          </div>

          {/* <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Interested in a Similar Project?
              </h3>
              <p className="text-gray-600 mb-6">
                We can help you create a custom solution tailored to your
                specific needs. Contact us today for a consultation.
              </p>
              <CTAButton
                text="Request a Quote"
                to="/contact"
                locale={locale}
                className="w-full justify-center"
              />
            </motion.div>
          </div> */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {locale === "ar" ? "طلب معلومات" : "Request Information"}
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === "ar"
                  ? "مهتم بهذه الخدمة؟ اتصل بنا لمزيد من المعلومات أو عرض سعر مخصص"
                  : "Interested in this service? Contact us for more information or a custom quote"}
              </p>

              <div className="space-y-4">
                {/* Email Button */}
                <a
                  href="mailto:sales@caravans-mobile.com"
                  className="flex items-center justify-center space-x-2 rtl:space-x-reverse w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  <Mail size={20} />
                  <span>sales@caravans.com</span>
                </a>

                {/* Phone Button */}
                <a
                  href="tel:+201019319133"
                  className="flex items-center justify-center space-x-2 rtl:space-x-reverse w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Phone size={20} />
                  <span>01019319133</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/201019319133?text=${encodeURIComponent(
                    `${messageWatsApp} : ${windowHref}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 rtl:space-x-reverse w-full px-4 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#25D366]/90 transition-colors">
                  <MessageCircle size={20} />
                  <span>01019319133</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;