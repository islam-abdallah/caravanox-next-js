import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Users, Calendar, CheckCircle2 } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProjectDetails: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const id = params?.id as string;

  const projects = {
    'beach-resort': {
      title: 'Beach Resort Cabins',
      titleAr: 'كبائن منتجع الشاطئ',
      category: 'Prefabricated Buildings',
      categoryAr: 'مباني مسبقة الصنع',
      client: 'Coastal Resorts Ltd.',
      clientAr: 'منتجعات الساحل المحدودة',
      date: '2024',
      location: 'Red Sea Coast, Egypt',
      locationAr: 'ساحل البحر الأحمر، مصر',
      mainImage: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg',
      gallery: [
        'https://images.pexels.com/photos/2449450/pexels-photo-2449450.jpeg',
        'https://images.pexels.com/photos/2111764/pexels-photo-2111764.jpeg',
        'https://images.pexels.com/photos/1612607/pexels-photo-1612607.jpeg'
      ],
      description: 'Custom designed prefabricated cabins for a luxury beach resort. The units were designed to withstand coastal weather conditions while providing comfort and style.',
      descriptionAr: 'كبائن مسبقة الصنع مصممة خصيصًا لمنتجع شاطئي فاخر. تم تصميم الوحدات لتتحمل الظروف الجوية الساحلية مع توفير الراحة والأناقة.',
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
    'cold-storage': {
      title: 'Industrial Cold Storage Facility',
      titleAr: 'منشأة التخزين البارد الصناعية',
      category: 'Cold Rooms',
      categoryAr: 'غرف التبريد',
      client: 'Fresh Foods Distribution',
      clientAr: 'توزيع الأغذية الطازجة',
      date: '2023',
      location: '6th of October Industrial City, Egypt',
      locationAr: 'مدينة 6 أكتوبر الصناعية، مصر',
      mainImage: 'https://images.pexels.com/photos/2111764/pexels-photo-2111764.jpeg',
      gallery: [
        'https://images.pexels.com/photos/2902108/pexels-photo-2902108.jpeg',
        'https://images.pexels.com/photos/2449450/pexels-photo-2449450.jpeg',
        'https://images.pexels.com/photos/1612607/pexels-photo-1612607.jpeg'
      ],
      description: 'A large-scale cold storage facility for a food distribution company. The project included multiple temperature-controlled rooms and advanced monitoring systems.',
      descriptionAr: 'منشأة تخزين باردة واسعة النطاق لشركة توزيع أغذية. تضمن المشروع غرف متعددة للتحكم في درجة الحرارة وأنظمة مراقبة متقدمة.',
      features: [
        'Multiple temperature zones',
        'Advanced monitoring system',
        'Energy-efficient cooling',
        'Heavy-duty flooring'
      ],
      featuresAr: [
        'مناطق متعددة لدرجات الحرارة',
        'نظام مراقبة متقدم',
        'تبريد موفر للطاقة',
        'أرضيات متينة'
      ],
      scope: [
        'Facility planning',
        'Installation of cooling systems',
        'Monitoring setup',
        'Staff training'
      ],
      scopeAr: [
        'تخطيط المنشأة',
        'تركيب أنظمة التبريد',
        'إعداد المراقبة',
        'تدريب الموظفين'
      ]
    },
    'construction-site': {
      title: 'Construction Site Facilities',
      titleAr: 'مرافق موقع البناء',
      category: 'Mobile Offices',
      categoryAr: 'مكاتب متنقلة',
      client: 'BuildCorp International',
      clientAr: 'بيلد كورب الدولية',
      date: '2023',
      location: 'New Administrative Capital, Egypt',
      locationAr: 'العاصمة الإدارية الجديدة، مصر',
      mainImage: 'https://images.pexels.com/photos/2590716/pexels-photo-2590716.jpeg',
      gallery: [
        'https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg',
        'https://images.pexels.com/photos/2449450/pexels-photo-2449450.jpeg',
        'https://images.pexels.com/photos/1612607/pexels-photo-1612607.jpeg'
      ],
      description: 'Comprehensive mobile office and facility solutions for a major construction project, including offices, meeting rooms, and worker facilities.',
      descriptionAr: 'حلول شاملة للمكاتب والمرافق المتنقلة لمشروع بناء رئيسي، بما في ذلك المكاتب وغرف الاجتماعات ومرافق العمال.',
      features: [
        'Office spaces',
        'Meeting rooms',
        'Worker facilities',
        'Storage units'
      ],
      featuresAr: [
        'مساحات مكتبية',
        'غرف اجتماعات',
        'مرافق للعمال',
        'وحدات تخزين'
      ],
      scope: [
        'Site planning',
        'Unit deployment',
        'Utility connections',
        'Ongoing maintenance'
      ],
      scopeAr: [
        'تخطيط الموقع',
        'نشر الوحدات',
        'توصيلات المرافق',
        'الصيانة المستمرة'
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Project not found</h2>
          <button
            onClick={() => router.push('/projects')}
            className="text-primary hover:text-primary/80"
          >
            Return to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 rtl:space-x-reverse text-primary hover:text-primary/80 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px] rounded-xl overflow-hidden mb-8"
        >
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
            <span className="inline-block px-4 py-2 bg-primary text-white text-sm rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
            <div className="flex items-center space-x-6 rtl:space-x-reverse text-white">
              <div className="flex items-center">
                <Users size={20} className="mr-2 rtl:ml-2" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center">
                <Building2 size={20} className="mr-2 rtl:ml-2" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={20} className="mr-2 rtl:ml-2" />
                <span>{project.date}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 rtl:space-x-reverse"
                  >
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Scope</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {project.scope.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 rtl:space-x-reverse"
                  >
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>

              <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                index={photoIndex}
                slides={project.gallery.map(src => ({ src }))}
              />
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-6 sticky top-24"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Interested in a Similar Project?
              </h3>
              <p className="text-gray-600 mb-6">
                We can help you create a custom solution tailored to your specific needs.
                Contact us today for a consultation.
              </p>
              <CTAButton
                text="Request a Quote"
                to="/contact"
                className="w-full justify-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;