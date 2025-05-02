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

const ContactPage: React.FC<ContactPageProps> = ({ dictionary }) => {
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
                    <p className="text-gray-600">+20 123 456 7890</p>
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
                    <p className="text-gray-600">info@caravans-mobile.com</p>
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
                      Abu Rawash Industrial Area, Egypt
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Image */}
              <div className="mt-8 rounded-lg overflow-hidden border border-gray-200 h-64">
                <img
                  src="https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg"
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
