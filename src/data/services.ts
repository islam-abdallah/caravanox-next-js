import { type ServiceType } from '../types/service';

export const services = {
  'new-caravans': {
    id: 'new-caravans',
    title: 'New Caravans',
    titleAr: 'كرفانات جديدة',
    description: 'Modern, customizable caravans built to the highest standards of quality and comfort.',
    descriptionAr: 'كرفانات حديثة قابلة للتخصيص مبنية وفقًا لأعلى معايير الجودة والراحة.',
    image: '/images/service.jpg',
    features: [
      'Custom interior layouts',
      'High-quality materials',
      'Climate control systems',
      'Modern amenities'
    ],
    featuresAr: [
      'تصميمات داخلية مخصصة',
      'مواد عالية الجودة',
      'أنظمة تحكم في المناخ',
      'وسائل راحة حديثة'
    ],
    gallery: [
      'https://images.pexels.com/photos/2449450/pexels-photo-2449450.jpeg',
      'https://images.pexels.com/photos/2111764/pexels-photo-2111764.jpeg',
      'https://images.pexels.com/photos/1612607/pexels-photo-1612607.jpeg'
    ]
  },
  'used-caravans': {
    id: 'used-caravans',
    title: 'Used Caravans',
    titleAr: 'كرفانات مستعملة',
    description: 'Quality pre-owned caravans, thoroughly inspected and refurbished.',
    descriptionAr: 'كرفانات مستعملة ذات جودة عالية، تم فحصها وتجديدها بشكل شامل.',
    image: 'https://images.pexels.com/photos/2449450/pexels-photo-2449450.jpeg',
    features: [
      'Competitive pricing',
      'Quality assurance',
      'Maintenance history',
      'Flexible options'
    ],
    featuresAr: [
      'أسعار تنافسية',
      'ضمان الجودة',
      'سجل الصيانة',
      'خيارات مرنة'
    ],
    gallery: [
      'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg',
      'https://images.pexels.com/photos/2111764/pexels-photo-2111764.jpeg',
      'https://images.pexels.com/photos/1612607/pexels-photo-1612607.jpeg'
    ]
  },
  'cold-rooms': {
    id: 'cold-rooms',
    title: 'Cold Rooms',
    titleAr: 'غرف تبريد',
    description: 'Professional cold storage solutions for various industries.',
    descriptionAr: 'حلول تخزين مبردة احترافية لمختلف الصناعات.',
    image: 'https://images.pexels.com/photos/2902108/pexels-photo-2902108.jpeg',
    features: [
      'Temperature control',
      'Energy efficient',
      'Custom sizes',
      'Professional installation'
    ],
    featuresAr: [
      'تحكم في درجة الحرارة',
      'كفاءة في استهلاك الطاقة',
      'أحجام مخصصة',
      'تركيب احترافي'
    ],
    gallery: [
      'https://images.pexels.com/photos/2111764/pexels-photo-2111764.jpeg',
      'https://images.pexels.com/photos/2449450/pexels-photo-2449450.jpeg',
      'https://images.pexels.com/photos/1612607/pexels-photo-1612607.jpeg'
    ]
  }
} as const;

export const getFeaturedServices = () => [
  services['new-caravans'],
  services['used-caravans'],
  services['cold-rooms']
];

export const getAllServices = () => Object.values(services);
export const getServiceById = (id: string) => services[id as keyof typeof services];

export type ServicesType = typeof services;
export type ServiceIds = keyof ServicesType;