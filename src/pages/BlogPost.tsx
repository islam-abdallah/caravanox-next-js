import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';

const BlogPost: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const id = params?.id as string;

  const blogPosts = {
    'why-choose-caravans': {
      title: 'لماذا تختار الكرفانات الجاهزة لمشروعك؟',
      titleEn: 'Why Choose Ready-Made Caravans for Your Project?',
      content: `
        في عالم يتطلب سرعة الإنجاز وتقليل التكاليف، أصبحت الكرفانات الجاهزة خيارًا مثاليًا للمكاتب والمشاريع السكنية والمرافق الخدمية.

        المميزات الرئيسية للكرفانات الجاهزة:
        1. سرعة التركيب والتجهيز
        2. تكلفة اقتصادية مقارنة بالبناء التقليدي
        3. مرونة في التصميم والتخصيص
        4. قابلية النقل وإعادة الاستخدام
        5. جودة تصنيع عالية وفقًا للمعايير العالمية

        كيف تختار الكرفان المناسب لمشروعك؟
        - حدد احتياجاتك وميزانيتك
        - اختر الحجم المناسب
        - راجع خيارات التصميم الداخلي
        - تأكد من جودة المواد المستخدمة
        - اطلب عرض سعر تفصيلي
      `,
      contentEn: `
        In a world that demands quick execution and cost reduction, ready-made caravans have become an ideal choice for offices, residential projects, and service facilities.

        Key advantages of ready-made caravans:
        1. Quick installation and setup
        2. Cost-effective compared to traditional construction
        3. Design and customization flexibility
        4. Portability and reusability
        5. High manufacturing quality according to international standards

        How to choose the right caravan for your project?
        - Define your needs and budget
        - Select the appropriate size
        - Review interior design options
        - Ensure quality of materials used
        - Request a detailed quote
      `,
      image: 'https://images.pexels.com/photos/1612607/pexels-photo-1612607.jpeg',
      date: '2024-03-15'
    },
    // ... other blog posts
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h2>
          <button
            onClick={() => router.push('/blog')}
            className="text-primary hover:text-primary/80"
          >
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  const content = i18n.language === 'ar' ? post.content : post.contentEn;
  const title = i18n.language === 'ar' ? post.title : post.titleEn;

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 rtl:space-x-reverse text-primary hover:text-primary/80 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </button>

        <article>
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-xl overflow-hidden mb-8"
          >
            <img
              src={post.image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Meta */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600">
                  <Calendar size={18} />
                  <time>{post.date}</time>
                </div>
                <button
                  className="flex items-center space-x-1 rtl:space-x-reverse text-gray-600 hover:text-primary"
                  onClick={() => {
                    navigator.share({
                      title,
                      url: window.location.href
                    });
                  }}
                >
                  <Share2 size={18} />
                  <span>Share</span>
                </button>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                {title}
              </h1>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;