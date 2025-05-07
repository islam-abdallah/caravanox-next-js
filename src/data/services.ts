import { type ServiceType } from '../types/service';

export const categories = [
  'All',
  'Mobile Buildings',
  'Storage Solutions',
  'Facilities',
  'Support Services'
] as const;

export const categoriesAr = {
  'All': 'الكل',
  'Mobile Buildings': 'المباني المتنقلة',
  'Storage Solutions': 'حلول التخزين',
  'Facilities': 'المرافق',
  'Support Services': 'خدمات الدعم'
} as const;

export type CategoryType = (typeof categories)[number];

export const services = {
  'new-caravans': {
    id: 'new-caravans',
    title: 'caravans new',
    titleAr: 'كرفانات جديدة',
    category: 'Mobile Buildings',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: 'Modern, customizable caravans built to the highest standards of quality and comfort.',
    descriptionAr: 'كرفانات حديثة وقابلة للتخصيص مبنية وفقًا لأعلى معايير الجودة والراحة.',
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
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'used-caravans': {
    id: 'used-caravans',
    title: 'services.service2',
    titleAr: 'كرفانات مستعملة',
    category: 'Mobile Buildings',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=Used+Caravans',
    description: 'Quality pre-owned caravans, thoroughly inspected and refurbished.',
    descriptionAr: 'كرفانات مستعملة ذات جودة عالية، تم فحصها وتجديدها بشكل شامل.',
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
      'https://fakeimg.pl/800x600/cccccc/666666?text=Used+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Used+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Used+3'
    ]
  },
  'prefab-buildings': {
    id: 'prefab-buildings',
    title: 'services.service3',
    titleAr: 'مباني مسبقة الصنع',
    category: 'Mobile Buildings',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=Prefab+Buildings',
    description: 'Custom prefabricated buildings for various applications.',
    descriptionAr: 'مباني مسبقة الصنع مخصصة لمختلف التطبيقات.',
    features: [
      'Quick installation',
      'Customizable designs',
      'Durable construction',
      'Cost-effective solutions'
    ],
    featuresAr: [
      'تركيب سريع',
      'تصاميم قابلة للتخصيص',
      'بناء متين',
      'حلول اقتصادية'
    ],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Prefab+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Prefab+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Prefab+3'
    ]
  },
  'storage-containers': {
    id: 'storage-containers',
    title: 'services.service4',
    titleAr: 'حاويات تخزين',
    category: 'Storage Solutions',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=Storage+Containers',
    description: 'Modified storage containers for various applications.',
    descriptionAr: 'حاويات تخزين معدلة لمختلف التطبيقات.',
    features: [
      'Custom modifications',
      'Secure storage',
      'Weather-resistant',
      'Multiple sizes available'
    ],
    featuresAr: [
      'تعديلات مخصصة',
      'تخزين آمن',
      'مقاوم للعوامل الجوية',
      'متوفر بأحجام متعددة'
    ],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Container+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Container+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Container+3'
    ]
  },
  'cold-rooms': {
    id: 'cold-rooms',
    title: 'services.service5',
    titleAr: 'غرف تبريد',
    category: 'Storage Solutions',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=Cold+Rooms',
    description: 'Professional cold storage solutions for various industries.',
    descriptionAr: 'حلول تخزين مبردة احترافية لمختلف الصناعات.',
    features: [
      'Temperature control',
      'Energy efficient',
      'Custom sizes',
      'Professional installation'
    ],
    featuresAr: [
      'التحكم في درجة الحرارة',
      'كفاءة في استهلاك الطاقة',
      'أحجام مخصصة',
      'تركيب احترافي'
    ],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Cold+Room+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Cold+Room+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Cold+Room+3'
    ]
  },
  'security-booths': {
    id: 'security-booths',
    title: 'services.service6',
    titleAr: 'أكشاك أمنية',
    category: 'Facilities',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=Security+Booths',
    description: 'Security booths and mobile cabins for various security applications.',
    descriptionAr: 'أكشاك أمنية وكبائن متنقلة لمختلف التطبيقات الأمنية.',
    features: [
      'Durable construction',
      'Climate controlled',
      'Custom features',
      'Quick installation'
    ],
    featuresAr: [
      'بناء متين',
      'تحكم في المناخ',
      'ميزات مخصصة',
      'تركيب سريع'
    ],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Security+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Security+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Security+3'
    ]
  },
  'portable-bathrooms': {
    id: 'portable-bathrooms',
    title: 'services.service7',
    titleAr: 'حمامات متنقلة',
    category: 'Facilities',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=Portable+Bathrooms',
    description: 'High-quality portable bathroom solutions.',
    descriptionAr: 'حلول حمامات متنقلة عالية الجودة.',
    features: [
      'Modern facilities',
      'Easy maintenance',
      'Hygienic design',
      'Various sizes'
    ],
    featuresAr: [
      'مرافق حديثة',
      'صيانة سهلة',
      'تصميم صحي',
      'أحجام متنوعة'
    ],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Bathroom+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Bathroom+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Bathroom+3'
    ]
  },
  'storage-shelves': {
    id: 'storage-shelves',
    title: 'services.service8',
    titleAr: 'أرفف تخزين',
    category: 'Storage Solutions',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=Storage+Shelves',
    description: 'Custom storage solutions for any application.',
    descriptionAr: 'حلول تخزين مخصصة لأي تطبيق.',
    features: [
      'Custom designs',
      'Heavy-duty options',
      'Professional installation',
      'Various configurations'
    ],
    featuresAr: [
      'تصاميم مخصصة',
      'خيارات ثقيلة التحمل',
      'تركيب احترافي',
      'تكوينات متنوعة'
    ],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Shelves+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Shelves+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Shelves+3'
    ]
  },
  'transport-installation': {
    id: 'transport-installation',
    title: 'services.service9',
    titleAr: 'نقل وتركيب',
    category: 'Support Services',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=Transport+Installation',
    description: 'Professional transportation and installation services.',
    descriptionAr: 'خدمات نقل وتركيب احترافية.',
    features: [
      'Expert handling',
      'Nationwide service',
      'Professional team',
      'Timely delivery'
    ],
    featuresAr: [
      'تعامل خبير',
      'خدمة على مستوى الدولة',
      'فريق محترف',
      'تسليم في الوقت المحدد'
    ],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Transport+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Transport+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Transport+3'
    ]
  }
} as const;

export const getFeaturedServices = () => [
  services['new-caravans'],
  services['used-caravans'],
  services['cold-rooms'],
  services['security-booths']
];

export const getAllServices = () => Object.values(services);
export const getServiceById = (id: string) => services[id as keyof typeof services];
export const getServicesByCategory = (category: CategoryType) => {
  if (category === 'All') return getAllServices();
  return getAllServices().filter(service => service.category === category);
};

export type ServicesType = typeof services;
export type ServiceIds = keyof ServicesType;