"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Locale } from "@/i18n.config";

interface ContactPageProps {
  locale: Locale;
  dictionary: {
    contact: {
      title: string;
      subtitle: string;
      phone: string;
      email: string;
      address: string;
    };
  };
}

const ContactPage: React.FC<ContactPageProps> = ({
  locale = "ar",
  dictionary,
}) => {
  const { contact } = dictionary;

  return (
    <>
      {/* Header Section */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              {contact.title}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {contact.subtitle}
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {contact.phone}
                    </h3>
                    <p className="text-gray-600">01019319133</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {contact.email}
                    </h3>
                    <p className="text-gray-600"> sales@caravanox.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {contact.address}
                    </h3>
                    <p className="text-gray-600">
                      {locale === "ar"
                        ? "تقاطع محور الضبعة مع ك 28 طريق مصر اسكندرية الصحراوي – المنطقة الصناعية أبو رواش – الجيزة – مصر"
                        : "Intersection of El Dabaa Axis with km 28 Cairo-Alexandria Desert Road – Abu Rawash Industrial Area – Giza – Egypt"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div>
              {/* Map Image */}
              <p className="text-2xl font-bold text-gray-800 ">
                {locale === "ar"
                  ? "موقعنا ع الخريطة"
                  : "Our Location on the Map"}
              </p>
              <div className="mt-16 rounded-lg overflow-hidden border border-gray-200 h-64">
                <a
                  href="https://maps.app.goo.gl/z5j9T1LykD5shiti7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on Google Maps">
                  <img
                    src="/images/map.png"
                    alt="Location Map"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
