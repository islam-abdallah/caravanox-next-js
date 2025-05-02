import { type BlogType } from '../types/blog';

export const blogs: Record<string, BlogType> = {
  'why-choose-caravans': {
    id: 'why-choose-caravans',
    title: 'Why Choose Ready-Made Caravans for Your Project?',
    titleAr: 'لماذا تختار الكرفانات الجاهزة لمشروعك؟',
    excerpt: 'Discover the advantages of ready-made caravans for your next project, from cost savings to quick deployment.',
    excerptAr: 'اكتشف مزايا الكرفانات الجاهزة لمشروعك القادم، من توفير التكاليف إلى سرعة التنفيذ.',
    content: `Ready-made caravans offer numerous advantages for both temporary and permanent installations. Here's why they might be the perfect solution for your project:

1. Cost-Effective Solution
- Lower initial investment compared to traditional construction
- Reduced labor costs
- Minimal site preparation required
- Quick return on investment

2. Time-Saving Benefits
- Immediate availability
- Rapid installation
- Minimal disruption to operations
- Quick project completion

3. Flexibility and Mobility
- Easy to relocate
- Adaptable to different uses
- Expandable design options
- Suitable for temporary or permanent use`,
    contentAr: `تقدم الكرفانات الجاهزة العديد من المزايا للتركيبات المؤقتة والدائمة. إليك لماذا قد تكون الحل المثالي لمشروعك:

1. حل فعال من حيث التكلفة
- استثمار أولي أقل مقارنة بالبناء التقليدي
- تكاليف عمالة منخفضة
- الحد الأدنى من تحضير الموقع المطلوب
- عائد سريع على الاستثمار

2. فوائد توفير الوقت
- توفر فوري
- تركيب سريع
- الحد الأدنى من تعطيل العمليات
- إنجاز سريع للمشروع

3. المرونة والتنقل
- سهولة النقل
- قابلة للتكيف مع استخدامات مختلفة
- خيارات تصميم قابلة للتوسيع
- مناسبة للاستخدام المؤقت أو الدائم`,
    image: 'https://images.pexels.com/photos/1612607/pexels-photo-1612607.jpeg',
    date: '2024-03-15'
  },
  'cold-storage-solutions': {
    id: 'cold-storage-solutions',
    title: 'Modern Cold Storage Solutions for Every Industry',
    titleAr: 'حلول التخزين البارد الحديثة لكل صناعة',
    excerpt: 'Explore the latest innovations in cold storage technology and how they can benefit your business.',
    excerptAr: 'اكتشف أحدث الابتكارات في تكنولوجيا التخزين البارد وكيف يمكن أن تفيد عملك.',
    content: `Modern cold storage solutions have evolved significantly, offering advanced features for various industries:

1. Temperature Control
- Precise temperature management
- Multiple temperature zones
- Remote monitoring capabilities
- Energy-efficient systems

2. Industry Applications
- Food and beverage storage
- Pharmaceutical storage
- Chemical storage
- Agricultural products

3. Advanced Features
- Smart monitoring systems
- Energy management
- Backup power solutions
- Mobile access control`,
    contentAr: `تطورت حلول التخزين البارد الحديثة بشكل كبير، وتقدم ميزات متقدمة لمختلف الصناعات:

1. التحكم في درجة الحرارة
- إدارة دقيقة لدرجة الحرارة
- مناطق متعددة لدرجات الحرارة
- إمكانيات المراقبة عن بعد
- أنظمة موفرة للطاقة

2. تطبيقات الصناعة
- تخزين الأغذية والمشروبات
- تخزين المستحضرات الصيدلانية
- تخزين المواد الكيميائية
- المنتجات الزراعية

3. ميزات متقدمة
- أنظمة مراقبة ذكية
- إدارة الطاقة
- حلول الطاقة الاحتياطية
- التحكم في الوصول عبر الهاتف المحمول`,
    image: 'https://images.pexels.com/photos/2902108/pexels-photo-2902108.jpeg',
    date: '2024-03-10'
  }
};

export const getFeaturedBlogs = () => Object.values(blogs).slice(0, 4);
export const getAllBlogs = () => Object.values(blogs);
export const getBlogById = (id: string) => blogs[id];