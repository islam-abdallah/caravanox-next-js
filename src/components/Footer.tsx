'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
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
            <h3 className="text-2xl font-bold mb-6">Logo</h3>
            <p className="text-gray-400 mb-6">
              Leading provider of mobile building solutions, delivering quality and innovation since {quality?.since || '2016'}.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{footer?.quick_links || 'Quick Links'}</h3>
            <ul className="space-y-4">
              <li>
                <Link href={`/${locale}`} className="text-gray-400 hover:text-white transition-colors">
                  {navigation?.home || 'Home'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-400 hover:text-white transition-colors">
                  {navigation?.about || 'About'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-gray-400 hover:text-white transition-colors">
                  {navigation?.services || 'Services'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/projects`} className="text-gray-400 hover:text-white transition-colors">
                  {navigation?.projects || 'Projects'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-gray-400 hover:text-white transition-colors">
                  {navigation?.blog || 'Blog'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{footer?.our_services || 'Our Services'}</h3>
            <ul className="space-y-4">
              <li>
                <Link href={`/${locale}/services/prefab`} className="text-gray-400 hover:text-white transition-colors">
                  Prefabricated Buildings
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/cold-rooms`} className="text-gray-400 hover:text-white transition-colors">
                  Cold Rooms
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/mobile-offices`} className="text-gray-400 hover:text-white transition-colors">
                  Mobile Offices
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/security`} className="text-gray-400 hover:text-white transition-colors">
                  Security Booths
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{footer?.contact_us || 'Contact Us'}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">Abu Rawash Industrial Area, Egypt</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-400">+20 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-400">info@caravans-mobile.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Caravans Mobile. All rights reserved.
            </p>
            <a 
              href="https://islamabdallah.netlify.app/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {locale === 'ar' ? 'تصميم وتطوير إسلام عبدالله' : 'Designed by Islam Abdallah'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
