import React from 'react';
import { motion } from 'framer-motion';
import { Locale } from '@/i18n.config';

interface ClientLogosProps {
  locale: Locale;
  dictionary?: {
    clients?: {
      title?: string;
      subtitle?: string;
    };
  };
}

const ClientLogos: React.FC<ClientLogosProps> = ({ locale = 'ar', dictionary = {} }) => {
  const { clients = {} } = dictionary;

  const clientLogos = [
    {
      name: "Client 1",
      logo: "images/logo-clients/1.png",
    },
    {
      name: "Client 1",
      logo: "images/logo-clients/2.png",
    },
    {
      name: "Client 1",
      logo: "images/logo-clients/3.png",
    },
    {
      name: "Client 1",
      logo: "images/logo-clients/4.png",
    },
    {
      name: "Client 1",
      logo: "images/logo-clients/5.png",
    },
    {
      name: "Client 1",
      logo: "images/logo-clients/6.png",
    },
    {
      name: "Client 1",
      logo: "images/logo-clients/7.png",
    },
    {
      name: "Client 1",
      logo: "images/logo-clients/8.png",
    },

  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {clients.title || (locale === "ar" ? "عملاؤنا" : "Our Clients")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {clients.subtitle ||
              (locale === "ar"
                ? "نفخر بثقة عملائنا وشراكتنا مع أكبر الشركات والمؤسسات في المنطقة"
                : "We take pride in our clients' trust and partnerships with major corporations in the region")}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="relative overflow-hidden">
          {/* Single Slider */}
          <motion.div
            className="flex space-x-8 rtl:space-x-reverse"
            animate={{
              x: locale === "ar" ? ["0%", "100%"] : ["0%", "-100%"],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}>
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[200px] h-[100px] bg-white rounded-lg shadow-md p-4 group">
                <div className="relative w-full h-full overflow-hidden rounded-md">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;