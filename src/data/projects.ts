import { type ProjectType } from '../types/project';

export const projects: Record<string, ProjectType> = {
  'beach-resort': {
    id: 'beach-resort',
    title: 'Beach Resort Cabins',
    titleAr: 'كبائن منتجع الشاطئ',
    category: 'Prefabricated Buildings',
    categoryAr: 'مباني مسبقة الصنع',
    client: 'Coastal Resorts Ltd.',
    clientAr: 'منتجعات الساحل المحدودة',
    date: '2024',
    location: 'Red Sea Coast, Egypt',
    locationAr: 'ساحل البحر الأحمر، مصر',
    description: 'Custom designed prefabricated cabins for a luxury beach resort. The units were designed to withstand coastal weather conditions while providing comfort and style.',
    descriptionAr: 'كبائن مسبقة الصنع مصممة خصيصًا لمنتجع شاطئي فاخر. تم تصميم الوحدات لتتحمل الظروف الجوية الساحلية مع توفير الراحة والأناقة.',
    image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg',
    gallery: [
      'https://images.pexels.com/photos/2449450/pexels-photo-2449450.jpeg',
      'https://images.pexels.com/photos/2111764/pexels-photo-2111764.jpeg',
      'https://images.pexels.com/photos/1612607/pexels-photo-1612607.jpeg'
    ],
    features: [
      'Custom interior layouts',
      'Weather-resistant materials',
      'Luxury finishes',
      'Energy-efficient design'
    ],
    featuresAr: [
      'تصميمات داخلية مخصصة',
      'مواد مقاومة للطقس',
      'تشطيبات فاخرة',
      'تصميم موفر للطاقة'
    ],
    scope: [
      'Design and engineering',
      'Manufacturing',
      'Transportation',
      'Installation',
      'Interior finishing'
    ],
    scopeAr: [
      'التصميم والهندسة',
      'التصنيع',
      'النقل',
      'التركيب',
      'التشطيبات الداخلية'
    ]
  },
  'industrial-complex': {
    id: 'industrial-complex',
    title: 'Industrial Complex Facilities',
    titleAr: 'مرافق المجمع الصناعي',
    category: 'Industrial Buildings',
    categoryAr: 'مباني صناعية',
    client: 'Industrial Development Group',
    clientAr: 'مجموعة التنمية الصناعية',
    date: '2024',
    location: '6th of October City, Egypt',
    locationAr: 'مدينة 6 أكتوبر، مصر',
    description: 'Comprehensive industrial facility including warehouses, offices, and worker accommodations.',
    descriptionAr: 'منشأة صناعية شاملة تتضمن مستودعات ومكاتب وأماكن إقامة للعمال.',
    image: 'https://images.pexels.com/photos/2590716/pexels-photo-2590716.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg',
      'https://images.pexels.com/photos/2449450/pexels-photo-2449450.jpeg',
      'https://images.pexels.com/photos/1612607/pexels-photo-1612607.jpeg'
    ],
    features: [
      'Modern facilities',
      'Safety systems',
      'Worker amenities',
      'Storage solutions'
    ],
    featuresAr: [
      'مرافق حديثة',
      'أنظمة السلامة',
      'وسائل راحة للعمال',
      'حلول تخزين'
    ],
    scope: [
      'Site planning',
      'Construction',
      'Systems integration',
      'Safety implementation'
    ],
    scopeAr: [
      'تخطيط الموقع',
      'البناء',
      'تكامل الأنظمة',
      'تنفيذ السلامة'
    ]
  }
};

export const getFeaturedProjects = () => Object.values(projects).slice(0, 4);
export const getAllProjects = () => Object.values(projects);
export const getProjectById = (id: string) => projects[id];