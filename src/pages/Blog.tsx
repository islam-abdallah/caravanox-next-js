import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 'why-choose-caravans',
      title: 'لماذا تختار الكرفانات الجاهزة لمشروعك؟',
      titleEn: 'Why Choose Ready-Made Caravans for Your Project?',
      excerpt: 'في عالم يتطلب سرعة الإنجاز وتقليل التكاليف، أصبحت الكرفانات الجاهزة خيارًا مثاليًا للمكاتب والمشاريع السكنية والمرافق الخدمية.',
      excerptEn: 'In a world that demands quick execution and cost reduction, ready-made caravans have become an ideal choice for offices, residential projects, and service facilities.',
      image: 'https://images.pexels.com/photos/1612607/pexels-photo-1612607.jpeg',
      date: '2024-03-15'
    },
    {
      id: 'new-vs-used',
      title: 'الفرق بين الكرفانات الجديدة والمستعملة: ماذا تختار؟',
      titleEn: 'New vs Used Caravans: What to Choose?',
      excerpt: 'اختيار الكرفان المناسب يعتمد على عدة عوامل مثل الميزانية، مدة الاستخدام، وطبيعة المشروع.',
      excerptEn: 'Choosing the right caravan depends on several factors such as budget, duration of use, and project nature.',
      image: 'https://images.pexels.com/photos/2449450/pexels-photo-2449450.jpeg',
      date: '2024-03-10'
    },
    {
      id: 'cold-room-setup',
      title: 'كيفية تجهيز غرفة تبريد مثالية؟',
      titleEn: 'How to Set Up a Perfect Cold Room?',
      excerpt: 'عند تصميم غرفة تبريد، يجب الاهتمام بجودة العزل، اختيار نظام تبريد فعال، وضمان توافر تجهيزات داخلية مناسبة.',
      excerptEn: 'When designing a cold room, attention must be paid to insulation quality, choosing an effective cooling system, and ensuring appropriate internal equipment.',
      image: 'https://images.pexels.com/photos/2902108/pexels-photo-2902108.jpeg',
      date: '2024-03-05'
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Blog</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/blog/${post.id}`} passHref>
                <a>
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <time className="text-white text-sm">{post.date}</time>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="text-primary font-medium hover:text-primary/80">
                      Read More →
                    </div>
                  </div>
                </a>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;