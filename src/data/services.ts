import { type ServiceType } from '../types/service';

export const categories = [
  'All',
  'Caravans',
  'Facilities',
  'Prefabricated Building',
  'Steel structures',
  'Storage Solution',
  'Support Services'
] as const;

export const categoriesAr = {
  'All': 'الكل',
  'Caravans': 'كرفانات',
  'Facilities': 'مرافق',
  'Prefabricated Building': 'مبانى جاهزة',
  'Steel structures': 'هياكل معدنية',
  'Storage Solution': 'حلول تخزين',
  'Support Services': 'خدمات الدعم'
} as const;

export type CategoryType = (typeof categories)[number];

export const services = {
  'standard-caravans': {
    id: 'standard-caravans',
    title: 'Standard Caravans',
    titleAr: 'كرفانات',
    category: 'Caravans',
    categoryAr: 'كرفانات',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: 'caravans provide fast and efficient solutions for companies in various sectors, such as residential units, offices, and clinics. Available in Standard sizes 3×3, 3×6, 3×9, and 3×12 meters, with custom manufacturing options to meet each project’s needs with efficiency and flexibility, ensuring the highest quality and reliability standards',
    descriptionAr: 'تقدم الكرفانات حلولًا سريعة وفعّالة للشركات في مختلف المجالات، مثل الوحدات السكنية، المكاتب، والعيادات. متوفرة بمقاسات قياسية 3×3، 3×6، 3×9، 3×12 متر، مع إمكانية التصنيع حسب الطلب لتلبية احتياجات كل مشروع بكفاءة ومرونة، مع ضمان أعلى مستويات الجودة والاعتمادية.',
    features: [
      'Optimal dimensions for use and easy transport',
      'Fast production to meet urgent project needs',
      'Steel structures and sandwich panels weather-resistant',
      'Effective thermal and sound insulation ensures comfort'
    ],
    featuresAr: [
      'أبعاد مثالية الاستخدام وسهولة النقل',
      'تصنيع سريع يلبى احتياجات المشاريع العاجلة',
      'هياكل فلاذية و ألواح ساندوتش بانل مقاومة للعوامل المناخية',
      'عزل حراري وصوتي فعّال يوفر بيئة مريحة'
    ],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'special-caravans': {
    id: 'special-caravans',
    title: 'Special Caravans',
    titleAr: 'كرفانات خاصة',
    category: 'Caravans',
    categoryAr: 'كرفانات',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: null,
    descriptionAr: null,
    features: [],
    featuresAr: [],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'foldable-caravans': {
    id: 'foldable-caravans',
    title: 'Foldable Caravans',
    titleAr: 'كرفان قابل للطى',
    category: 'Caravans',
    categoryAr: 'كرفانات',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: 'Folding caravans offer quick and flexible solutions for housing, offices, and clinics, with ideal dimensions for shipping and transportation. Available in various sizes (3×7 meters, 2.40×6 meters), they feature easy installation and setup, providing comfortable living spaces in a short time. Made from weather-resistant materials, they are ready for immediate use.',
    descriptionAr: 'تقدم الكرفانات القابلة للطّي حلولًا سريعة ومرنة للمساكن والمكاتب والعيادات، مع أبعاد مثالية للشحن والنقل. تتوفر بأحجام متنوعة (3×7 متر، 2.40×6 متر) وتتميز بسهولة التركيب والتثبيت، مما يوفر مساحات معيشية مريحة في وقت قصير. مصنوعة من مواد مقاومة للعوامل المناخية، جاهزة للاستخدام فورًا.',
    features: [
      'Easy to transport and store due to folding',
      'Fast manufacturing to meet urgent housing needs',
      'Structures resistant to weather conditions and corrosion',
      'Easy installation and ready for immediate use'
    ],
    featuresAr: [
      'سهولة في النقل والتخزين بفضل الطي',
      'تصنيع سريع يلبّي احتياجات المساكن العاجلة',
      'هياكل مقاومة للعوامل المناخية والتآكل',
      'تركيب سهل وجاهزية للاستخدام فورًا'
    ],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'storage-containers': {
    id: 'storage-containers',
    title: 'Storage Containers',
    titleAr: 'حاويات مخازن',
    category: 'Storage Solution',
    categoryAr: 'حلول تخزين',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: 'Storage containers offer practical and secure solutions for storing materials and equipment at worksites and industrial projects. Available in standard sizes such as 10, 20, and 40 feet, with customization options to meet specific storage needs, while ensuring durability and high performance under tough operating conditions.',
    descriptionAr: 'توفّر الكونتينرات الجاهزة حلولًا عملية وآمنة لتخزين المواد والمعدات في مواقع العمل والمشروعات الصناعية. متاحة بمقاسات قياسية مثل 10، 20، و40 قدم، مع إمكانية التعديل أو التصنيع حسب الطلب لتناسب طبيعة التخزين المطلوبة، مع ضمان الجودة والمتانة في أصعب الظروف التشغيلية',
    features: [
      'Easy to transport and store',
      'Durable steel structures resistant to corrosion and weather',
      'High durability suitable for harsh conditions',
      'Available in standard sizes: 10, 20, and 40 feet'
    ],
    featuresAr: [
      'سهولة في النقل والتخزين',
      'هياكل حديدية قوية مقاومة للتآكل والعوامل المناخية',
      'متانة عالية تناسب الظروف القاسية',
      'مقاسات قياسية: 10، 20، و40 قدم'
    ],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'equipped-containers': {
    id: 'equipped-containers',
    title: 'Equipped Containers',
    titleAr: 'حاويات مجهزة',
    category: 'Storage Solution',
    categoryAr: 'حلول تخزين',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: null,
    descriptionAr: null,
    features: [],
    featuresAr: [],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'refrigerated-containers': {
    id: 'refrigerated-containers',
    title: 'Refrigerated Containers',
    titleAr: 'حاويات مبردة',
    category: 'Storage Solution',
    categoryAr: 'حلول تخزين',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: 'Refrigerated containers offer efficient and secure solutions for storing temperature-sensitive products such as food, pharmaceuticals, and chemicals at worksites and industrial projects. Available in standard sizes like 10, 20, and 40 feet, with customization options upon request, ensuring reliable cooling performance and durability in various operating conditions.',
    descriptionAr: 'توفّر الحاويات المبردة حلولًا فعّالة وآمنة لحفظ وتخزين المنتجات الحساسة للحرارة مثل الأغذية، الأدوية، والمواد الكيميائية في المواقع والمشروعات الصناعية. متاحة بمقاسات قياسية مثل 10، 20، و40 قدم، مع إمكانية التعديل أو التصنيع حسب الطلب، مع ضمان كفاءة التبريد والمتانة في مختلف الظروف التشغيلية.',
    features: [
      'Easy to transport and deploy in the field',
      'Insulated structures resistant to weather conditions',
      'Consistent cooling performance suitable for harsh conditions',
      'Available in standard sizes: 10, 20, and 40 feet'
    ],
    featuresAr: [
      'سهولة في النقل والتشغيل الميداني',
      'هياكل معزولة ومقاومة للعوامل المناخية',
      'تبريد ثابت يناسب أصعب الظروف',
      'مقاسات قياسية: 10، 20، و40 قدم'
    ],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'storage-shelves': {
    id: 'storage-shelves',
    title: 'Storage shelves',
    titleAr: 'ارفف تخزين',
    category: 'Storage Solution',
    categoryAr: 'حلول تخزين',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: null,
    descriptionAr: null,
    features: [],
    featuresAr: [],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'prefab-buildings': {
    id: 'prefab-buildings',
    title: 'Prefabricated administrative and commercial buildings',
    titleAr: 'مبانى ادارية وتجارية جاهزة',
    category: 'Prefabricated Building',
    categoryAr: 'مبانى جاهزة',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: null,
    descriptionAr: null,
    features: [],
    featuresAr: [],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'prefab-houses': {
    id: 'prefab-houses',
    title: 'Prefabricated houses',
    titleAr: 'بيوت جاهزة',
    category: 'Prefabricated Building',
    categoryAr: 'مبانى جاهزة',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: null,
    descriptionAr: null,
    features: [],
    featuresAr: [],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'steel-hangar': {
    id: 'steel-hangar',
    title: 'Steel Hangar',
    titleAr: 'هنجر معدنى',
    category: 'Steel structures',
    categoryAr: 'هياكل معدنية',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: null,
    descriptionAr: null,
    features: [],
    featuresAr: [],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'bascule-scale': {
    id: 'bascule-scale',
    title: 'Bascule scale',
    titleAr: 'ميزان بسكول',
    category: 'Steel structures',
    categoryAr: 'هياكل معدنية',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: null,
    descriptionAr: null,
    features: [],
    featuresAr: [],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'security-booths': {
    id: 'security-booths',
    title: 'Security booths',
    titleAr: 'أكشاك أمن',
    category: 'Facilities',
    categoryAr: 'مرافق',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: null,
    descriptionAr: null,
    features: [],
    featuresAr: [],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'portable-restrooms': {
    id: 'portable-restrooms',
    title: 'Portable restrooms',
    titleAr: 'حمامات متنقلة',
    category: 'Facilities',
    categoryAr: 'مرافق',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: null,
    descriptionAr: null,
    features: [],
    featuresAr: [],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'disassembly-assembly': {
    id: 'disassembly-assembly',
    title: 'Disassembly & assembly',
    titleAr: 'فك و تركيب',
    category: 'Support Services',
    categoryAr: 'خدمات الدعم',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: null,
    descriptionAr: null,
    features: [],
    featuresAr: [],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'maintenance': {
    id: 'maintenance',
    title: 'Maintenance',
    titleAr: 'صيانات',
    category: 'Support Services',
    categoryAr: 'خدمات الدعم',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: null,
    descriptionAr: null,
    features: [],
    featuresAr: [],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  },
  'transportation': {
    id: 'transportation',
    title: 'Transportation',
    titleAr: 'نقل',
    category: 'Support Services',
    categoryAr: 'خدمات الدعم',
    image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
    description: null,
    descriptionAr: null,
    features: [],
    featuresAr: [],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  }
} as const;

export const getFeaturedServices = () => [
  services['storage-containers'],
  services['equipped-containers'],
  services['refrigerated-containers'],
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