import { type ServiceType } from '../types/service';

export const categories = [
  'All',
  'Caravans',
  'Storage Solution',
  'Prefabricated Building',
  'Steel structures',
  'Facilities',
  'Support Services'
] as const;

export const categoriesAr = {
  'All': 'الكل',
  'Caravans': 'كرفانات',
  'Storage Solution': 'حلول تخزين',
  'Prefabricated Building': 'مبانى جاهزة',
  'Steel structures': 'هياكل معدنية',
  'Facilities': 'مرافق',
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
  // 'special-caravans': {
  //   id: 'special-caravans',
  //   title: 'Special Caravans',
  //   titleAr: 'كرفانات خاصة',
  //   category: 'Caravans',
  //   categoryAr: 'كرفانات',
  //   image: 'https://fakeimg.pl/800x600/cccccc/666666?text=New+Caravans',
  //   description: null,
  //   descriptionAr: null,
  //   features: [],
  //   featuresAr: [],
  //   gallery: [
  //     'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
  //     'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
  //     'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
  //   ]
  // },
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
    description: 'Modular prefabricated containers are a smart, modern solution for projects that require fast execution and high efficiency. Whether used as offices, housing units, restaurants, or more, they offer durability, easy transport, and quick on-site installation thanks to off-site manufacturing. This significantly reduces construction time and costs compared to traditional building methods without compromising on quality or functionality making them an ideal choice for flexible and reliable project needs.',
    descriptionAr: 'الحاويات المجهزة تُعد من أنسب الحلول العصرية للمشروعات اللي بتحتاج تنفيذ سريع وكفاءة عالية. سواء كانت للاستخدام كمكاتب، وحدات سكنية، مطاعم أو غيرها، فهى بتتميز بالمتانة، وسهولة النقل، وسرعة التركيب في وقت قياسي بفضل التصنيع المسبق. وده بيوفر وقت كبير في التنفيذ وتكلفة أقل مقارنة بالبناء التقليدي، من غير ما نقلل من جودة التشطيب أو كفاءة الاستخدام، وده بيخليها اختيار مثالي للمشروعات اللي بتحتاج مرونة واعتمادية.',
    features: [
      "Fast installation and immediate readiness",
      "Pre-manufactured for time and cost efficiency",
      "Steel structure resistant to weather conditions",
      "Flexible interior design based on use"
    ],
    featuresAr: ["تركيب سريع وجاهزية فورية",
      "تصنيع مسبق يوفر الوقت والتكلفة",
      "هيكل فولاذي مقاوم للعوامل الجوية",
      "تصميم داخلي مرن حسب الاستخدام"],
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
    description: 'Metal racks are among the most efficient and reliable storage solutions for industrial and commercial environments. Built to withstand heavy-duty use, they feature a robust structure capable of handling heavy loads. Made from corrosion-resistant materials, they offer long-lasting durability. Their modular design allows for easy customization and installation, maximizing space efficiency.',
    descriptionAr: 'ألارفف المعدنية تُعد من أكثر حلول التخزين كفاءة واعتمادية في البيئات الصناعية والتجارية. مصممة لتحمّل الأعمال الشاقة، وتتميز بهيكل قوي يتحمل الأوزان الثقيلة، ومصنوعة من خامات مقاومة للتآكل والصدأ لضمان عمر افتراضي طويل. تصميمها المعياري يتيح سهولة التخصيص والتركيب، مما يعزز تنظيم المساحات بأعلى كفاءة',
    features: ["Easy and quick to install",
      "Fast production for storage needs",
      "Durable, rust-resistant metal frames",
      "Flexible design to fit spaces"],
    featuresAr: ["تركيب ونقل سريع وسهل",
      "تصنيع فوري لتخزين فعال",
      "هياكل قوية مقاومة للصدأ",
      "تصميم مرن حسب الحاجة"],
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
    description: 'When looking for a quick and efficient solution for projects, prefabricated buildings are an ideal choice. Thanks to off-site manufacturing, units can be assembled in a short time, significantly reducing time and costs compared to traditional construction methods. These solutions offer design flexibility, making them suitable for various uses such as offices, housing, or service units. With durability, easy transport, and installation, prefabricated buildings provide a practical solution that kickstarts your project quickly while maintaining the highest quality standards.',
    descriptionAr: 'عند البحث عن حل سريع وفعّال لتنفيذ المشاريع، تعتبر المباني الجاهزة خيارًا مثاليًا. بفضل التصنيع المسبق في المصانع، يتم تركيب الوحدات في وقت قياسي، مما يقلل من الوقت والتكاليف مقارنة بأساليب البناء التقليدية. توفر هذه الحلول مرونة في التصميم، مما يجعلها مناسبة للاستخدامات المختلفة مثل المكاتب، السكن، أو الوحدات الخدمية. مع ضمان المتانة وسهولة النقل والتركيب، تُعد المباني الجاهزة خيارًا عمليًا يبدأ مشروعك بسرعة ويحافظ على أعلى معايير الجودة.',
    features: ["Fast installation and immediate readiness",
      "Pre-manufactured for time and cost efficiency",
      "Strong structure resistant to weather conditions",
      "Flexible design tailored to various needs"],
    featuresAr: ["تركيب سريع وجودة فورية",
      "تصنيع مسبق يوفر الوقت والتكلفة",
      "هيكل قوي يتحمل الظروف المناخية",
      "تصميم مرن يتناسب مع الاحتياجات المختلفة"],
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
    description: `
<div lang="en" dir="ltr" style="font-family: sans-serif; line-height: 1.6;">
  <p>If you’re looking to build a home quickly and without hassle, prefabricated houses are a smart choice. They’re fully built in factories and delivered ready for installation, saving you a lot of time and effort compared to traditional construction.</p>
  <p>You can customize the layout to fit your needs—whether it’s the number of rooms, finishes, or space. The materials are durable, weather-resistant, and well-insulated for both heat and sound.</p>
  <p>These homes are perfect for permanent living, vacation houses, or even temporary site accommodations. Plus, they’re easy to transport and assemble, so relocating them is no issue.</p>
  <p>Prefabricated homes also reduce material waste and are eco-friendly, designed to be energy efficient and sustainable.</p>
  <p>In short, if you want a reliable, fast, and cost-effective housing solution without compromising on quality, a prefab home is the modern, practical way to go.</p>
</div>
  `.trim(),

    descriptionAr: `
<div lang="ar" dir="rtl" style="font-family: sans-serif; line-height: 1.6;">
  <p>لو بتفكر تبني بيت بسرعة ومن غير وجع دماغ، المنازل الجاهزة هتكون اختيار ممتاز. بتتعمل بالكامل في المصنع وبتوصل للموقع جاهزة على التركيب، يعني هتوفر وقت ومجهود كتير مقارنة بالبناء التقليدي.</p>
  <p>الميزة إنك تقدر تتحكم في التصميم على حسب احتياجك، سواء عدد الغرف أو التشطيب أو المساحة. وكمان خاماتها قوية وتستحمل الجو، ومعزولة كويس من الحرارة والصوت.</p>
  <p>المنازل دي مناسبة للسكن، الشاليهات، أو حتى مواقع العمل المؤقتة. وسهلة في النقل والتركيب، فلو احتجت تنقلها من مكان لمكان، مفيش مشكلة.</p>
  <p>كمان بتقلل الهدر في الخامات، وبتكون صديقة للبيئة وموفرة في استهلاك الطاقة.</p>
  <p>يعني باختصار، لو عايز تبدأ مشروع أو تعيش في بيت محترم بأقل وقت وتكلفة، ومن غير ما تستنا شهور في البناء، المنازل الجاهزة هي الحل العملي والذكي.</p>
</div>
  `.trim(),
    features: ["Quick installation and immediate readiness",
      "Off-site manufacturing saves time and cost",
      "Durable steel structure withstands weather conditions",
      "Flexible interior layout tailored to your needs"],
    featuresAr: ["تركيب سريع وجاهزية للسكن فورًا",
      "تصنيع مسبق يوفر الوقت والتكاليف",
      "هيكل قوي يتحمل الظروف المناخية",
      "تصميم داخلي مرن حسب احتياجاتك"],
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
    description: 'Steel hangars are structural buildings based on pre-engineered steel frames, designed for versatile uses such as storage, manufacturing, agriculture, and exhibitions. Thanks to their flexibility and quick assembly, they are an ideal solution for projects requiring large-scale construction in a short time and at a reasonable cost. Hangars can be customized in size and shape to suit specific needs, while offering excellent protection against weather conditions. Widely used in factories, workshops, warehouses, and logistics centers, they are known for their strength, load-bearing capacity, and easy maintenance. Their robust structure makes them suitable for long-term use with the potential for future expansion.',
    descriptionAr: 'الهناجر المعدنية هي مبانٍ إنشائية تعتمد على هياكل فولاذية مصممة مسبقًا لتُستخدم في مجالات متعددة مثل التخزين، الإنتاج، الزراعة، والمعارض. بفضل مرونتها وسرعة تركيبها، تُعد خيارًا مثاليًا للمشروعات التي تتطلب إنشاءات واسعة بوقت قصير وتكلفة مناسبة. يمكن تصميم الهناجر بأحجام وأشكال مختلفة لتناسب طبيعة الاستخدام، كما توفر حماية ممتازة من العوامل الجوية. تُستخدم على نطاق واسع في المصانع، الورش، المخازن، ومراكز الخدمات اللوجستية، وتُعرف بتحملها للأحمال الثقيلة وسهولة صيانتها. هيكلها القوي يجعلها مناسبة للاستخدام طويل الأمد مع إمكانية التوسعة المستقبلية حسب الحاجة',
    features: ["Fast installation significantly reduces build time",
      "Steel structure handles heavy industrial loads",
      "Flexible design suits various applications",
      "High resistance to harsh weather conditions"],
    featuresAr: ["تركيب سريع يقلل وقت التنفيذ تمامًا",
      "هيكل معدني يتحمل الأحمال الثقيلة",
      "تصميم مرن يناسب مختلف الاستخدامات",
      "مقاومة عالية للعوامل الجوية القاسية"
    ],
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
    description: `
<div lang="en" dir="ltr" style="font-family: sans-serif; line-height: 1.6;">
  <p>
    If your work relies on weighing trucks or heavy loads, weighbridges (bascule scales) are an essential tool for any industrial or logistics site looking to operate with precision and efficiency. These systems are fully manufactured off-site and come in different configurations—surface-mounted or pit-mounted—making installation and operation easy and adaptable.
  </p>
  <p>
    Built from heavy-duty materials, they’re designed to handle high loads and withstand harsh conditions, ensuring long-term reliability. They can also be seamlessly integrated with your management systems or software for smooth operation and tracking.
  </p>
  <p>
    Ideal for factories, distribution hubs, construction sites, and ports, weighbridges offer high accuracy and help reduce waste and operational errors.
  </p>
  <p>
    In short, a bascule scale is a smart, practical investment for any business that values precision, speed, and durability in every weighing process.
  </p>
</div>
  `.trim(),

    descriptionAr: `
<div lang="ar" dir="rtl" style="font-family: sans-serif; line-height: 1.6;">
  <p>
    لو شغلك بيعتمد على وزن الشاحنات أو الحمولات الكبيرة، فموازين البسكول هي أداة أساسية لأي موقع صناعي أو لوجيستي عايز يشتغل بكفاءة ودقة. الموازين دي بتتصنع بالكامل في المصنع وبتتوفر بأنظمة مختلفة تناسب احتياجاتك، سواء كانت سطحية أو مدفونة، مع سهولة في التركيب والتشغيل.
  </p>
  <p>
    الخامات المستخدمة قوية ومصممة علشان تتحمل الضغط العالي والاستخدام اليومي تحت أصعب الظروف، وكمان بتشتغل بكفاءة في كل الأجواء. تقدر تربطها بسهولة بأنظمة الإدارة أو برامج المتابعة عندك علشان تسهل كل خطوات التشغيل والمتابعة.
  </p>
  <p>
    الموازين دي مناسبة للمصانع، محطات التوزيع، المواقع الإنشائية، والموانئ، وبتوفرلك دقة عالية في الوزن، وتقليل كبير للهدر أو الخطأ.
  </p>
  <p>
    باختصار، موازين البسكول هي الحل العملي لأي مشروع بيحتاج يعتمد على الدقة، السرعة، والمتانة في كل عملية وزن.
  </p>
</div>
  `.trim(),
    features: ["Quick installation and immediate operation",
      "Pre-fabricated structure saves time and cost",
      "Heavy-duty frame built for high loads",
      "Flexible design to suit various sites and uses"],
    featuresAr: ["تركيب سريع وتشغيل فوري",
      "تصنيع مسبق يقلل الوقت والتكاليف",
      "هيكل معدني قوي يتحمل الأوزان الثقيلة",
      "تصميم مرن يناسب مختلف المواقع والاستخدامات"],
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
    description: `
<div lang="en" dir="ltr" style="font-family: sans-serif; line-height: 1.6;">
  <p>
    Fiberglass security booths are ideal solutions for providing a safe and functional working environment for security personnel at various locations such as factories, villas, tourist resorts, and hospitals. These booths are lightweight and easy to transport and install, making them suitable for both temporary and permanent use. They are also weather-resistant, thermally and acoustically insulated, and designed to ensure comfort during daily use.
  </p>

  <h3>Standard Sizes of Fiberglass Security Booths:</h3>
  <ul>
    <li>1 × 1 meter (suitable for one security guard)</li>
    <li>1.2 × 1.2 meters</li>
    <li>1.5 × 1.5 meters</li>
    <li>2 × 2 meters (for two or more personnel)</li>
    <li>3 × 2 meters (for larger sites or multi-functional booths)</li>
  </ul>

  <p>
    Custom sizes can also be made to suit the site and the client’s specific needs.
  </p>
</div>
  `.trim(),

    descriptionAr: `
<div lang="ar" dir="rtl" style="font-family: sans-serif; line-height: 1.6;">
  <p>
    أكشاك الحراسة المصنوعة من الفيبر جلاس تُعد من الحلول المثالية لتوفير بيئة عمل آمنة وعملية لأفراد الأمن في مختلف المواقع، مثل المصانع، الفيلات، القرى السياحية، والمستشفيات. تتميز هذه الأكشاك بخفة وزنها وسهولة نقلها وتركيبها، مما يجعلها مناسبة للاستخدام المؤقت أو الدائم. كما أنها مقاومة للعوامل الجوية، ومعزولة حراريًا وصوتيًا، ومصممة لتوفير الراحة أثناء الاستخدام اليومي.
  </p>

  <h3>المقاسات القياسية لأكشاك الأمن الفيبر جلاس:</h3>
  <ul>
    <li>1 × 1 متر (مناسب لفرد أمن واحد)</li>
    <li>1.2 × 1.2 متر</li>
    <li>1.5 × 1.5 متر</li>
    <li>2 × 2 متر (لفردين أو أكثر)</li>
    <li>3 × 2 متر (للمواقع الأكبر أو الأكشاك متعددة الوظائف)</li>
  </ul>

  <p>
    ويمكن أيضًا تفصيل المقاسات حسب الطلب، لتناسب الموقع واحتياجات العميل.
  </p>
</div>
  `.trim(),
    features: ["Lightweight for easy transport and quick installation",
      "High resistance to heat, humidity, and rain",
      "Thermal and acoustic insulation for enhanced comfort",
      "Flexible design suitable for various spaces"],
    featuresAr: ["خفة الوزن تسهل النقل والتركيب السريع",
      "مقاومة عالية للحرارة، الرطوبة والأمطار",
      "عزل حراري وصوتي يعزز راحة المستخدم",
      "تصميم مرن يتناسب مع المساحات المختلفة"],
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
    description: 'Mobile toilets made from sandwich panels offer a smart, fast solution for any site that needs temporary sanitary facilities. Their insulated design ensures user comfort in both hot and cold weather, while the durable materials resist harsh environmental conditions. They’re easy to transport and install, and available in various sizes based on your needs—without requiring complex setup. Perfect for construction sites, events, and camps, they can also be equipped with showers, fans, lighting, and water tanks as needed. A practical, clean, and professional-looking option for any location.',
    descriptionAr: 'الحمامات المتنقلة المصنوعة من الساندويتش بانل بتوفر حل ذكي وسريع لأي موقع محتاج مرافق صحية مؤقتة. تصميمها العازل بيضمن راحة في الاستخدام سواء في الحر أو البرد، وخامتها القوية مقاومة للعوامل الجوية. سهلة في النقل والتركيب، وبتتوفر بمقاسات متنوعة حسب الاحتياج، من غير ما تحتاج تجهيزات معقدة. مناسبة لمواقع الإنشاء، الفعاليات، والمعسكرات، وكمان ممكن تتجهز بدوش، مراوح، إضاءة، وخزانات مياه حسب الطلب. خيار عملي ونظيف ويدّي شكل محترم في أي مكان.',
    features: ["Quick setup and immediate use",
      "Fully waterproof and moisture-resistant",
      "Sturdy structure built for tough conditions",
      "Flexible design tailored to your needs"],
    featuresAr: ["تركيب سريع واستخدام فوري",
      "عزل تام ضد المياه والرطوبة",
      "هيكل قوي يستحمل الشغل والجو",
      "تصميم مرن يتظبط حسب احتياجك"],
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
    description: `
<div lang="en" dir="ltr" style="font-family: sans-serif; line-height: 1.6;">
  <h3>Our Comprehensive Services for Installation and Dismantling of Metal Works and Prefabricated Buildings</h3>
  <p>
    At our company, we offer integrated installation and dismantling services for metal works,
    sandwich panels, icon sheets, trusses, and prefabricated buildings, providing fast and
    efficient solutions to meet the needs of our clients across various industries.
  </p>
  <h4>Our Services Include:</h4>
  <ul>
    <li><strong>Installation and Dismantling of Metal Works:</strong> Whether it’s steel structures or trusses, our specialized team ensures high-precision execution according to the highest quality standards.</li>
    <li><strong>Sandwich Panel Installation:</strong> Fast and professional installation of insulating panels for outstanding thermal and acoustic performance.</li>
    <li><strong>Icon Sheet Installation:</strong> Comprehensive installation solutions that offer optimal protection against weather conditions.</li>
    <li><strong>Prefabricated Building Installation:</strong> Leveraging the latest prefabrication technologies to deliver exceptional quality in record time.</li>
  </ul>
  <h4>Advantages of Our Services:</h4>
  <ul>
    <li><strong>Fast Execution:</strong> Saving you time and helping you start your project as soon as possible.</li>
    <li><strong>High Quality:</strong> Precision execution using the latest equipment.</li>
    <li><strong>Flexibility and Customization:</strong> Solutions tailored to the specific needs of your projects.</li>
  </ul>
  <p>
    We are here to provide the best construction solutions for your projects, ensuring the highest levels
    of efficiency and professionalism.
  </p>
</div>
  `.trim(),

    descriptionAr: `
<div lang="ar" dir="rtl" style="font-family: sans-serif; line-height: 1.6;">
  <h3>خدماتنا المتكاملة للتركيب والفك للأعمال المعدنية والمباني الجاهزة</h3>
  <p>
    في شركتنا، نوفّر خدمات تركيب وفك متكاملة للأعمال المعدنية، السندوتش بانل،
    الصاج الأيكون، الجمالونات، والمباني الجاهزة، حيث نوفر حلولًا سريعة وفعّالة
    لتلبية احتياجات عملائنا في مختلف الصناعات.
  </p>
  <h4>تشمل خدماتنا:</h4>
  <ul>
    <li><strong>التركيب والفك للأعمال المعدنية:</strong> سواء كانت هياكل فولاذية أو جمالونات، فريقنا المتخصص يتأكد من تنفيذ الأعمال بدقة عالية وفقًا لأعلى معايير الجودة.</li>
    <li><strong>تركيب السندوتش بانل:</strong> تركيب سريع واحترافي للألواح العازلة لضمان أداء متميز في العزل الحراري والصوتي.</li>
    <li><strong>تركيب الصاج الأيكون:</strong> تقديم حلول تركيب متكاملة توفر الحماية المثلى ضد العوامل الجوية.</li>
    <li><strong>تركيب المباني الجاهزة:</strong> باستخدام أحدث تقنيات التصنيع المسبق لضمان تركيب بجودة فائقة وفي وقت قياسي.</li>
  </ul>
  <h4>مزايا خدماتنا:</h4>
  <ul>
    <li><strong>سرعة التنفيذ:</strong> نوفر الوقت ونساعدك على بدء مشروعك في أقرب وقت ممكن.</li>
    <li><strong>جودة عالية:</strong> تنفيذ دقيق باستخدام أحدث المعدات.</li>
    <li><strong>مرونة وتخصيص:</strong> حلول مصممة خصيصًا لتلبية احتياجات مشاريعك.</li>
  </ul>
  <p>
    نحن هنا لنقدم أفضل حلول البناء لمشاريعك، مع ضمان أعلى مستويات الكفاءة والاحترافية.
  </p>
</div>
  `.trim(),
    features: ["Fast Execution: We ensure the project is completed swiftly, allowing you to start as soon as possible.",
      "High Quality: Every task is carried out with precision using the latest equipment and technologies.",
      "Flexibility and Customization: Our services are designed to meet your specific project needs, ensuring the best solutions.",
      "Professional Expertise: Our specialized team guarantees the highest standards and optimal solutions for all your construction needs."
    ],
    featuresAr: ["سرعة التنفيذ: نضمن إتمام المشروع بسرعة، مما يساعدك على البدء في أقرب وقت ممكن.",
      "جودة عالية: يتم تنفيذ كل مهمة بدقة باستخدام أحدث المعدات والتقنيات.",
      "مرونة وتخصيص: خدماتنا مصممة لتلبية احتياجات مشروعك الخاصة، مما يضمن أفضل الحلول.",
      "خبرة احترافية: فريقنا المتخصص يضمن أعلى المعايير وأفضل الحلول لجميع احتياجاتك."
    ],
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
    description: `  <p>
    At our company, we provide comprehensive and regular maintenance services for all types of structures—whether prefabricated buildings, caravans, steel hangars, trusses, or sandwich panels. Our goal is to maintain optimal operational efficiency, extend the lifespan of your assets, and prevent future issues.
  </p>

  <h3>Our Maintenance Services Include:</h3>
  <ul>
    <li>Full inspection of structures and caravans to ensure safety and integrity</li>
    <li>Rust treatment and corrosion protection for metal components</li>
    <li>Waterproofing and thermal insulation maintenance based on usage</li>
    <li>Repair or replacement of damaged parts such as doors, windows, and panels</li>
    <li>Re-fastening components and checking all connections</li>
  </ul>

  <p>
    If you’re looking for durability, reliability, and long-term performance—Caravanox maintenance services have you covered.
  </p>`,
    descriptionAr: `  <h3>خدمات الصيانة الفنية للمباني الجاهزة والمنشآت المعدنية والكرفانات</h3>
  <p>
    في شركتنا، بنقدّم خدمات صيانة شاملة ودورية لكل أنواع المنشآت، سواء كانت مباني جاهزة،
    كرفانات، هياكل معدنية، جمالونات، أو ألواح سندوتش بانل. هدفنا نحافظ على كفاءة التشغيل،
    ونطوّل عمر المنشأة، ونمنع أي مشاكل ممكن تظهر مع الوقت.
  </p>

  <h4>تشمل خدمات الصيانة:</h4>
  <ul>
    <li>فحص شامل للهياكل والكرفانات والتأكد من سلامتها</li>
    <li>معالجة الصدأ والتآكل في القطاعات المعدنية</li>
    <li>صيانة العزل المائي والحراري حسب الاستخدام</li>
    <li>استبدال أو إصلاح الأجزاء التالفة مثل الأبواب والنوافذ والألواح</li>
    <li>إعادة تثبيت المكونات والتأكد من سلامة التوصيلات</li>
  </ul>

  <p>
    لو بتدور على استدامة حقيقية وجودة تدوم، صيانة كرفان أوكس هتكون دايمًا في ضهرك.
  </p>`,
    features: ["Fast emergency response",
      "Periodic maintenance contracts tailored to your needs",
      "Detailed technical reports after every visit",
      "A skilled and well-trained professional team"],
    featuresAr: ["سرعة استجابة في الطوارئ",
      "عقود صيانة دورية حسب احتياجك",
      "تقارير مفصلة بعد كل زيارة",
      "فريق فني محترف ومدرّب"],
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
    description: `  <p>
    At Caravanox, we offer fast and professional transportation services for all types of
    prefabricated units, caravans, containers, and heavy equipment—whether within the same site
    or across governorates. With the right capabilities and experience, we ensure safe,
    well-organized transport with full commitment to timelines and project requirements.
  </p>

  <h3>We Transport:</h3>
  <ul>
    <li>Office and accommodation caravans</li>
    <li>Storage containers and equipment</li>
    <li>Mobile toilets and utility units</li>
    <li>Steel hangars and prefabricated buildings</li>
  </ul>

  <p>
    If your company needs reliable, hassle-free transportation, we’re ready to deliver—anytime,
    anywhere.
  </p>`,
    descriptionAr: `  <p>
    نوفّر في كرفان أوكس خدمات نقل احترافية وسريعة لكل أنواع المنشآت الجاهزة، الكرفانات، الحاويات،
    والمعدات الثقيلة، سواء داخل المواقع أو بين المحافظات. عندنا الإمكانيات والخبرة
    اللي تضمنلك نقل آمن ومنظم، مع الالتزام الكامل بالمواعيد ومتطلبات كل مشروع.
  </p>

  <h3>نقل يشمل:</h3>
  <ul>
    <li>كرفانات المكاتب والسكن</li>
    <li>حاويات التخزين والمعدات</li>
    <li>الحمامات المتنقلة والوحدات الخدمية</li>
    <li>الهناجر والمباني سابقة التجهيز</li>
  </ul>

  <p>
    لو شركتك محتاجة نقل سريع وآمن، إحنا جاهزين نخدمك في أي وقت.
  </p>`,
    features: ["Fully equipped transport fleet",
      "Trained teams for safe lifting and securing",
      "Pre-planned transport routes and delivery schedules",
      "Flexible timing and 24/7 service availability"],
    featuresAr: ["أسطول نقل مجهز بالكامل",
      "فرق مدربة على الرفع والتثبيت الآمن",
      "تخطيط مسبق لمسارات النقل والتسليم",
      "مرونة في المواعيد وخدمة على مدار الساعة"],
    gallery: [
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+1',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+2',
      'https://fakeimg.pl/800x600/cccccc/666666?text=Caravan+3'
    ]
  }
} as const;

export const getFeaturedServices = () => [
  services['standard-caravans'],
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