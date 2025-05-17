'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, FileDown, Mail, MessageCircle, Phone, Users } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import { Locale } from '@/i18n.config';
import { getServiceById } from '@/data/services';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useTranslation } from "react-i18next";
import { getAllProjects } from "@/data/projects";

interface ServiceDetailsPageProps {
  locale: Locale;
  id: string;
  dictionary?: any;
}

const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({ locale = 'ar', id, dictionary = {} }) => {
  const { t } = useTranslation();
  const router  = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const service = getServiceById(id);
    // Get related projects based on service category
  const relatedProjects = getAllProjects().filter(
    (project) => project.product_id === service?.id
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {locale === "ar" ? "الخدمة غير موجودة" : "Service Not Found"}
          </h2>
          <button
            onClick={() => router.push(`/${locale}/products`)}
            className="text-primary hover:text-primary/80">
            {t("services.returnToServices")}
          </button>
        </div>
      </div>
    );
  }
  const windowHref = window.location.href;
  const title = locale === 'ar' ? service.titleAr : service.title;
  const description = locale === 'ar' ? service.descriptionAr : service.description;
  const features = locale === 'ar' ? service.featuresAr : service.features;
  let messageWatsApp = locale === "ar" ? "مرحبًا، أنا مهتم بخدمتكم" : " Hello, I'm interested in your service";
  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 rtl:space-x-reverse text-primary hover:text-primary/80 mb-6">
          {locale === "ar" ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          <span>
            {locale === "ar" ? "العودة للمنتجات" : "Return to Products"}
          </span>
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
            src={service.image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{title}</h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {locale === "ar" ? "نظرة عامة" : "Overview"}
              </h2>
                <div
                className="text-gray-600 mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
                />

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {locale === "ar" ? "المميزات" : "Features"}
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
              {/* Download PDF Button */}
              <div className="mb-8">
                <a
                  href={`/brochures/${id}.pdf`}
                  download
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  <FileDown size={20} />
                  <span>
                    {locale === "ar" ? "تحميل الكتيب" : "Download Brochure"}
                  </span>
                </a>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {locale === "ar" ? "معرض الصور" : "Gallery"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.gallery.map((image, index) => (
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
                slides={[service.image, ...service.gallery].map((src) => ({
                  src,
                }))}
              />
            </motion.div>
            {/* Related Projects Section */}
            {relatedProjects.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">
                  {locale === "ar" ? "مشاريع ذات صلة" : "Related Projects"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedProjects.slice(0, 2).map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div
                        onClick={() => router.push(`/projects/${project.id}`)}
                        className="cursor-pointer">
                        <div className="relative h-48">
                          <img
                            src={project.image}
                            alt={
                              locale === "ar" ? project.titleAr : project.title
                            }
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <span className="inline-block px-3 py-1 bg-primary/90 text-white text-sm rounded-full mb-2">
                              {locale === "ar"
                                ? project.categoryAr
                                : project.category}
                            </span>
                            <h3 className="text-lg font-bold text-white line-clamp-1">
                              {locale === "ar"
                                ? project.titleAr
                                : project.title}
                            </h3>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className="flex items-center">
                              <Users size={16} className="mr-1 rtl:ml-1" />
                              <span className="line-clamp-1">
                                {locale === "ar"
                                  ? project.clientAr
                                  : project.client}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Calendar size={16} className="mr-1 rtl:ml-1" />
                              <span>{project.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <CTAButton
                    text={
                      locale === "ar"
                        ? "عرض جميع المشاريع"
                        : "View All Projects"
                    }
                    to="/projects"
                    locale={locale as "en" | "ar"}
                    primary={false}
                  />
                </div>
              </div>
            )}
          </div>

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
                  href="mailto:info@caravans-mobile.com"
                  className="flex items-center justify-center space-x-2 rtl:space-x-reverse w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  <Mail size={20} />
                  <span>info@caravans.com</span>
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

export default ServiceDetailsPage;