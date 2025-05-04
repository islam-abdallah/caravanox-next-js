'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { Locale } from '@/i18n.config';
import { getFeaturedServices } from '@/data/services';
import { getFeaturedProjects } from '@/data/projects';
import { getFeaturedBlogs } from '@/data/blogs';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import CTAButton from '@/components/CTAButton';
import ClientLogos from '@/components/ClientLogos';

interface HomePageProps {
  locale: Locale;
  dictionary: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    features: {
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
    };
    quality: {
      title: string;
    };
    clients: {
      title: string;
      subtitle: string;
    };
    services: {
      title: string;
      subtitle: string;
      viewAll: string;
    };
    projects: {
      title: string;
      subtitle: string;
      viewAll: string;
    };
    blog: {
      title: string;
      subtitle: string;
      viewAll: string;
    };
    contact: {
      title: string;
      subtitle: string;
    };
  } | any;
}

function HomePage({ locale = 'ar', dictionary = {} }: HomePageProps) {
  const [mounted, setMounted] = useState(false);
  const featuredServices = getFeaturedServices()?.filter(service => service && service.id) || [];
  const featuredProjects = getFeaturedProjects()?.filter(project => project && project.id) || [];
  const featuredBlogs = getFeaturedBlogs()?.filter(blog => blog && blog.id) || [];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const { 
    hero = { title: '', subtitle: '', cta: '' }, 
    features = { feature1: '', feature2: '', feature3: '', feature4: '' }, 
    quality = { title: '' },
    services = { title: '', subtitle: '', viewAll: '' },
    projects = { title: '', subtitle: '', viewAll: '' },
    blog = { title: '', subtitle: '', viewAll: '' },
    contact = { title: '', subtitle: '' }
  } = dictionary;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero.jpg"
              alt="Prefabricated building"
              width={1920}
              height={1080}
              className="object-cover"
              priority
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {hero.subtitle}
            </p>
            <CTAButton
              text={hero.cta}
              to="/contact"
              locale={locale}
              className="text-lg "
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {quality.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg font-medium text-gray-800">
                  {features.feature1}
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg font-medium text-gray-800">
                  {features.feature2}
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg font-medium text-gray-800">
                  {features.feature3}
                </p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg font-medium text-gray-800">
                  {features.feature4}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {services.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {services.subtitle}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                {...service}
                delay={index}
                locale={locale}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton
              text={services.viewAll}
              to="/services"
              locale={locale}
              primary={false}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {projects.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {projects.subtitle}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                delay={index}
                locale={locale}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton
              text={projects.viewAll}
              to="/projects"
              locale={locale}
              primary={false}
            />
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {blog.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {blog.subtitle}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBlogs.map((post, index) => (
              <BlogCard key={post.id} {...post} locale={locale} delay={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton
              text={blog.viewAll}
              to="/blog"
              locale={locale}
              primary={false}
            />
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos locale={locale} dictionary={dictionary} />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{contact.title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{contact.subtitle}</p>
          <CTAButton
            text={hero.cta}
            to="/contact"
            locale={locale}
            primary={false}
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;