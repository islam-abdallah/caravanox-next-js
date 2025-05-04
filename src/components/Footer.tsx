'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Locale } from '@/i18n.config';

interface FooterProps {
  locale: Locale;
  navigation: {
    home?: string;
    about?: string;
    services?: string;
    projects?: string;
    blog?: string;
    contact?: string;
  };
  footer: {
    company_info?: string;
    quick_links?: string;
    our_services?: string;
    contact_us?: string;
  };
  quality: {
    since?: string;
  };
}

const Footer: React.FC<FooterProps> = ({ 
  locale = 'ar', 
  navigation = {}, 
  footer = {}, 
  quality = {} 
}) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/images/logo.png" alt="Logo" className="h-20" />
            <p className="text-gray-400 mb-6">
              {locale === "ar"
                ? `خبرة تمتد لأكثر من 10 سنوات في تقديم أفضل الحلول المبتكرة للكرفانات والمباني سابقة التجهيز والحاويات المعدلة`
                : `Over 10 years of experience delivering the best innovative solutions for caravans, prefabricated buildings, and customized containers`}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a
                href="https://www.facebook.com/Caravanox"
                className="text-gray-400 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              {/* <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a> */}
              {/* <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a> */}
              <a
                href="https://www.linkedin.com/in/%D9%83%D8%B1%D9%81%D8%A7%D9%86-%D8%A7%D9%88%D9%83%D8%B3-caravanox-a97b11222/"
                className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {footer?.quick_links || "Quick Links"}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-gray-400 hover:text-accent transition-colors">
                  {navigation?.home || "Home"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-gray-400 hover:text-accent transition-colors">
                  {navigation?.about || "About"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-400 hover:text-accent transition-colors">
                  {navigation?.services || "Services"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/projects`}
                  className="text-gray-400 hover:text-accent transition-colors">
                  {navigation?.projects || "Projects"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/blog`}
                  className="text-gray-400 hover:text-accent transition-colors">
                  {navigation?.blog || "Blog"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {footer?.our_services || "Our Services"}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href={`/${locale}/services/prefab`}
                  className="text-gray-400 hover:text-accent transition-colors">
                  Prefabricated Buildings
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/cold-rooms`}
                  className="text-gray-400 hover:text-accent transition-colors">
                  Cold Rooms
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/mobile-offices`}
                  className="text-gray-400 hover:text-accent transition-colors">
                  Mobile Offices
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/security`}
                  className="text-gray-400 hover:text-accent transition-colors">
                  Security Booths
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {footer?.contact_us || "Contact Us"}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span>
                  {" "}
                  <a
                    href="tel:+201019319133"
                    className="hover:text-accent hover:underline">
                    01019319133
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span>
                  {" "}
                  <a
                    href="tel:+201019983980"
                    className="hover:text-accent hover:underline">
                    01019983980
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span>
                  <a
                    href="mailto:info@caravanox.com"
                    className="hover:text-accent hover:underline">
                    info@caravanox.com
                  </a>
                </span>
              </li>
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  {locale === "ar"
                    ? "تقاطع محور الضبعة مع ك 28 طريق مصر اسكندرية الصحراوي – المنطقة الصناعية أبو رواش – الجيزة – مصر"
                    : "Intersection of El Dabaa Axis with km 28 Cairo-Alexandria Desert Road – Abu Rawash Industrial Area – Giza – Egypt"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {locale === "ar"
                ? `© ${new Date().getFullYear()} كرافانز. جميع الحقوق محفوظة.`
                : `© ${new Date().getFullYear()} Caravans. All rights reserved.`}
            </p>
            <a
              href="https://islamabdallah.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent text-sm transition-colors">
              Designed by Islam Abdullah
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
