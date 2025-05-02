'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { Locale } from '@/i18n.config';
import { getFeaturedBlogs } from '@/data/blogs';

interface BlogPageProps {
  locale: Locale;
  dictionary?: {
    blog?: {
      title?: string;
      subtitle?: string;
    };
  };
}

const BlogPage: React.FC<BlogPageProps> = ({ locale = 'ar', dictionary = {} }) => {
  const blogPosts = getFeaturedBlogs();
  const { blog = {} } = dictionary;

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {blog.title || (locale === 'ar' ? 'أحدث الأخبار والمقالات' : 'Latest News & Insights')}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {blog.subtitle || (locale === 'ar' 
              ? 'ابق على اطلاع بآخر الأخبار والمقالات في مجال الكرفانات والمباني المتنقلة'
              : 'Stay updated with our latest articles and industry insights'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/${locale}/blog/${post.id}`}>
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={locale === 'ar' ? post.titleAr : post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center text-white">
                      <Calendar size={16} className="mr-2 rtl:ml-2" />
                      <time>{post.date}</time>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {locale === 'ar' ? post.titleAr : post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {locale === 'ar' ? post.excerptAr : post.excerpt}
                  </p>
                  <span className="text-primary font-medium">
                    {locale === 'ar' ? 'اقرأ المزيد ←' : 'Read More →'}
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;