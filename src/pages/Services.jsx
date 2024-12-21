import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard, FeatureCard } from '../components/ui/HoverCard';
import { Scene3D } from '../components/3d/Scene3D';
import PageTransition from '../components/transitions/PageTransition';
import Icon from '../components/ui/Icon';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Node.js, and more.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Custom CMS'],
      icon: '🌐',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Native Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Deployment'],
      icon: '📱',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end development services covering both frontend and backend technologies.',
      features: ['API Development', 'Database Design', 'Cloud Integration', 'Security Implementation'],
      icon: '⚡',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup and management using AWS, Azure, or Google Cloud.',
      features: ['Cloud Migration', 'Serverless Architecture', 'DevOps', 'Scalability'],
      icon: '☁️',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer comprehensive software solutions tailored to your business needs,
              from web development to cloud infrastructure.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemAnimation}>
                <ServiceCard className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{service.icon}</span>
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <div className="mt-auto">
                      <h4 className="text-white font-semibold mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                            <Icon
                              icon={() => (
                                <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                              className="mr-2 text-blue-500"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ServiceCard>
              </motion.div>
            ))}
          </motion.div>

          {/* 3D Scene */}
          <div className="h-[400px] mb-20 rounded-xl overflow-hidden">
            <Scene3D>
              {/* Add your 3D elements here */}
            </Scene3D>
          </div>

          {/* Additional Features */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-gray-400">Experience excellence in software development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Expert Team',
                description: 'Skilled developers with years of experience',
                icon: '👨‍💻'
              },
              {
                title: 'Modern Tech Stack',
                description: 'Using the latest technologies and best practices',
                icon: '🚀'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock technical support and maintenance',
                icon: '🛠️'
              }
            ].map((feature, index) => (
              <FeatureCard key={index}>
                <div className="text-center">
                  <span className="text-4xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;
