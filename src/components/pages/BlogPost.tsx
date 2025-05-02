'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { Locale } from '@/i18n.config';
import { getBlogById } from '@/data/blogs';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface BlogPostPageProps {
  locale: Locale;
  id: string;
  dictionary?: any;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ locale = 'ar', id, dictionary = {} }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const post = getBlogById(id);
  const { blog = {} } = dictionary;
  const isRTL = locale === 'ar';

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {isRTL ? 'المقال غير موجود' : 'Post not found'}
          </h2>
          <button
            onClick={() => router.push(`/${locale}/blog`)}
            className="text-primary hover:text-primary/80"
          >
            {blog.backToBlog || (isRTL ? 'العودة إلى المدونة' : 'Return to Blog')}
          </button>
        </div>
      </div>
    );
  }

  const title = isRTL ? post.titleAr : post.title;
  const content = isRTL ? post.contentAr : post.content;

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back button with RTL support */}
        <button
          onClick={() => router.back()}
          className={`group inline-flex items-center text-primary hover:text-primary/80 mb-6 ${
            isRTL ? 'flex-row-reverse' : ''
          }`}
        >
          <ArrowLeft 
            size={20} 
            className={`transition-transform duration-300 ${
              isRTL 
                ? 'ml-2 rotate-180 group-hover:-translate-x-1' 
                : 'mr-2 group-hover:translate-x-1'
            }`}
          />
          <span>{blog.backToBlog || (isRTL ? 'العودة إلى المدونة' : 'Back to Blog')}</span>
        </button>

        <article>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-xl overflow-hidden mb-8 cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            <img
              src={post.image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} text-gray-600`}>
                  <Calendar size={18} />
                  <time>{post.date}</time>
                </div>
                <button
                  className={`flex items-center ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'} text-gray-600 hover:text-primary`}
                  onClick={() => {
                    navigator.share({
                      title,
                      url: window.location.href
                    });
                  }}
                >
                  <Share2 size={18} />
                  <span>{blog.share || (isRTL ? 'مشاركة' : 'Share')}</span>
                </button>
              </div>

              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                {title}
              </h1>

              <div className="prose prose-lg max-w-none">
                {content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={[{ src: post.image }]}
              />
            </motion.div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;