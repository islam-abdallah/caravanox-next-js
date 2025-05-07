"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "./../ServiceCard";
import {
  getAllServices,
  categories,
  categoriesAr,
  type CategoryType,
} from "./../../data/services";
import { Locale } from "@/i18n.config";
interface ServicesPageProps {
  locale: Locale;
  dictionary?: any;
}
const Services: React.FC<ServicesPageProps> = ({
  dictionary = {},
  locale = 'ar',
}) => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const allServices = getAllServices();

  const filteredServices =
    selectedCategory === "All"
      ? allServices
      : allServices.filter((service) => service.category === selectedCategory);
  return (
    <>
      {/* Header Section */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              {locale === "ar" ? "خدماتنا" : "Our Services"}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {locale === "ar"
                ? "نقدم مجموعة شاملة من الحلول المبتكرة لتلبية احتياجاتكم"
                : "We provide a comprehensive range of innovative solutions to meet your needs"}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}>
                {locale === "ar" ? categoriesAr[category] : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* <AnimatePresence mode="wait"> */}
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  {...service}
                  delay={index}
                  locale={locale}
                />
              ))}
            </motion.div>
          {/* </AnimatePresence> */}
        </div>
      </section>

   
    </>
  );
};

export default Services;
