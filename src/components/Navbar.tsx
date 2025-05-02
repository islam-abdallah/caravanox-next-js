'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { i18n, Locale } from '@/i18n.config';

interface NavbarProps {
  locale: Locale;
  navigation: {
    home?: string;
    about?: string;
    services?: string;
    projects?: string;
    blog?: string;
    contact?: string;
  };
}

const Navbar: React.FC<NavbarProps> = ({ locale = 'ar', navigation = {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  // Function to check if a link is active
  const isLinkActive = (href: string) => {
    if (!pathName) return false;
    
    // Remove locale from current path for comparison
    const currentPath = pathName.split('/').slice(2).join('/');
    const linkPath = href.split('/').slice(2).join('/');
    
    // Check if the current path starts with the link path
    // This ensures nested routes are considered active
    return currentPath === linkPath || currentPath.startsWith(linkPath + '/');
  };

  const navLinks = [
    { href: `/${locale}`, label: navigation.home || 'Home' },
    { href: `/${locale}/about`, label: navigation.about || 'About' },
    { href: `/${locale}/services`, label: navigation.services || 'Services' },
    { href: `/${locale}/projects`, label: navigation.projects || 'Projects' },
    { href: `/${locale}/blog`, label: navigation.blog || 'Blog' },
    { href: `/${locale}/contact`, label: navigation.contact || 'Contact' },
  ];

  // Get the opposite locale
  const oppositeLocale = locale === 'ar' ? 'en' : 'ar';
  const oppositeLocaleLabel = locale === 'ar' ? 'English' : 'العربية';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="text-2xl font-bold text-primary">
            Logo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-600 hover:text-primary transition-colors ${
                  isLinkActive(link.href) ? 'text-primary font-medium' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:block">
            <Link
              href={redirectedPathName(oppositeLocale)}
              className="text-sm font-medium text-gray-500 hover:text-primary"
            >
              {oppositeLocaleLabel}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-gray-600 hover:text-primary transition-colors px-4 py-2 ${
                    isLinkActive(link.href) ? 'text-primary font-medium' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Language Switcher - Mobile */}
              <Link
                href={redirectedPathName(oppositeLocale)}
                className="text-sm font-medium text-gray-500 hover:text-primary px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {oppositeLocaleLabel}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;