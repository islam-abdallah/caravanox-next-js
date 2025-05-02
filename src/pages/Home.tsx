import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CTAButton from '../components/CTAButton';
import ServiceCard from '../components/ServiceCard';
import ClientLogos from '../components/ClientLogos';
import { CheckCircle2, Calendar, Users } from 'lucide-react';
import { featuredServices } from '../data/services';

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  const featuredProjects = [
    {
      id: 'beach-resort',
      title: 'Beach Resort Cabins',
      category: 'Prefabricated Buildings',
      client: 'Coastal Resorts Ltd.',
      date: '2024',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg'
    },
    {
      id: 'cold-storage',
      title: 'Industrial Cold Storage Facility',
      category: 'Cold Rooms',
      client: 'Fresh Foods Distribution',
      date: '2023',
      image: 'https://images.pexels.com/photos/2111764/pexels-photo-2111764.jpeg'
    },
    {
      id: 'construction-site',
      title: 'Construction Site Facilities',
      category: 'Mobile Offices',
      client: 'BuildCorp International',
      date: '2023',
      image: 'https://images.pexels.com/photos/2590716/pexels-photo-2590716.jpeg'
    },
    {
      id: 'security-complex',
      title: 'Security Complex Units',
      category: 'Security Booths',
      client: 'National Security Corp',
      date: '2023',
      image: 'https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg'
    }
  ];

  const featuredBlogs = [
    {
      id: 'why-choose-caravans',
      title: 'Why Choose Ready-Made Caravans for Your Project?',
      excerpt: 'In a world that demands quick execution and cost reduction, ready-made caravans have become an ideal choice for offices, residential projects, and service facilities.',
      image: 'https://images.pexels.com/photos/1612607/pexels-photo-1612607.jpeg',
      date: '2024-03-15'
    },
    {
      id: 'new-vs-used',
      title: 'New vs Used Caravans: What to Choose?',
      excerpt: 'Choosing the right caravan depends on several factors such as budget, duration of use, and project nature.',
      image: 'https://images.pexels.com/photos/2449450/pexels-photo-2449450.jpeg',
      date: '2024-03-10'
    },
    {
      id: 'cold-room-setup',
      title: 'How to Set Up a Perfect Cold Room?',
      excerpt: 'When designing a cold room, attention must be paid to insulation quality, choosing an effective cooling system, and ensuring appropriate internal equipment.',
      image: 'https://images.pexels.com/photos/2902108/pexels-photo-2902108.jpeg',
      date: '2024-03-05'
    },
    {
      id: 'mobile-office-trends',
      title: '2024 Mobile Office Trends',
      excerpt: 'Discover the latest trends in mobile office solutions and how they\'re reshaping the modern workplace.',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
      date: '2024-03-01'
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1639013/pexels-photo-1639013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Prefabricated building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {t('hero.subtitle')}
            </p>
            <CTAButton 
              text={t('hero.cta')} 
              to="/contact" 
              className="text-lg"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('quality')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg font-medium text-gray-800">{t('features.feature1')}</p>
              </div>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg font-medium text-gray-800">{t('features.feature2')}</p>
              </div>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg font-medium text-gray-800">{t('features.feature3')}</p>
              </div>
            </motion.div>
            
            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg font-medium text-gray-800">{t('features.feature4')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard 
                key={service.id}
                title={t(service.title)}
                imageSrc={service.image}
                delay={index}
                id={service.id}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <CTAButton 
              text={t('services.title')} 
              to="/services" 
              primary={false}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our successful projects and see how we've helped our clients achieve their goals
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary/90 text-white text-sm rounded-full mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-white line-clamp-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        <span className="line-clamp-1">{project.client}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton 
              text="View All Projects" 
              to="/projects" 
              primary={false}
            />
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest News & Insights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest articles and industry insights
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBlogs.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href={`/blog/${post.id}`}>
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
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-primary text-sm font-medium">Read More →</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton 
              text="View All Articles" 
              to="/blog" 
              primary={false}
            />
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <CTAButton 
            text={t('hero.cta')} 
            to="/contact" 
            primary={false}
          />
        </div>
      </section>
    </>
  );
};

export default Home;