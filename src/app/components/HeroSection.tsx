"use client";

import { motion, useAnimation, useDragControls, PanInfo } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

// Import services data for the carousel
const services = [
  {
    title: "SaaS Solutions",
    description: "Cloud-based software solutions designed for scalability and efficiency",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18l9-2zm0 0v-8" />
      </svg>
    ),
    link: "/services/saas",
    features: ["Custom SaaS Products", "Third-party Solutions", "Cloud Integration"],
    metrics: {
      clients: "200+",
      satisfaction: "98%",
      uptime: "99.99%"
    }
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions to meet your unique business requirements",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    link: "/services/custom-development",
    features: ["Web Applications", "Mobile Apps", "Enterprise Software"],
    metrics: {
      projects: "500+",
      satisfaction: "96%",
      retention: "92%"
    }
  },
  {
    title: "Data Center as a Service",
    description: "Reliable and secure infrastructure solutions for your business",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    link: "/services/daas",
    features: ["Virtual Servers", "Cloud Computing", "Kubernetes Management"],
    metrics: {
      datacenters: "25+",
      uptime: "99.999%",
      security: "ISO 27001"
    }
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your online presence",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    link: "/services/digital-marketing",
    features: ["SEO Optimization", "Social Media", "PPC Campaigns"],
    metrics: {
      campaigns: "1000+",
      ROI: "300%",
      growth: "150%"
    }
  }
];

// Service Card Component
type ServiceCardProps = {
  service: typeof services[0];
  isActive: boolean;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isActive }) => {
  const cardClasses = isActive
    ? 'opacity-100 z-30'
    : 'opacity-80 z-10';

  return (
    <motion.div 
      className={`w-full max-w-sm sm:max-w-lg h-[500px] relative group ${cardClasses} transition-all duration-300`}
      initial="initial"
      whileHover="hover"
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.02 }
      }}
      transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 30 }}
    >
      {/* Card Background with Custom Hover Effects */}
      <motion.div 
        className="absolute inset-0 bg-white dark:bg-gray-800 rounded-[20px] overflow-hidden"
        variants={{
          initial: { 
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          },
          hover: { 
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(59, 130, 246, 0.2)',
          }
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('/tech-pattern.svg')]"></div>
        
        {/* Gradient Overlay with Animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Animated Glow Effect */}
        <motion.div 
          className="absolute inset-0 opacity-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-[20px]"
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Card Content with Enhanced Hover Effects */}
      <motion.div 
        className="relative p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 rounded-[20px] flex flex-col items-center text-center h-full bg-white dark:bg-gray-800"
        variants={{
          initial: { 
            borderColor: 'rgba(229, 231, 235, 1)', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          },
          hover: { 
            borderColor: 'rgba(59, 130, 246, 0.3)', 
            boxShadow: '0 0 25px rgba(15, 23, 42, 0.3), 0 0 10px rgba(59, 130, 246, 0.2)'
          }
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon with Rotation Animation */}
        <motion.div 
          className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 text-blue-400 relative"
          variants={{
            hover: { y: -5 }
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="absolute inset-0 bg-blue-400/10 rounded-lg transform rotate-45"
            variants={{
              initial: { rotate: 45 },
              hover: { rotate: 90, scale: 1.1 }
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="relative z-10"
            variants={{
              hover: { scale: 1.1 }
            }}
            transition={{ duration: 0.3 }}
          >
            {service.icon}
          </motion.div>
        </motion.div>

        {/* Title with Color Animation */}
        <motion.h3 
          className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-900 dark:text-white"
          variants={{
            initial: { color: '' },
            hover: { color: 'rgb(59, 130, 246)' }
          }}
          transition={{ duration: 0.3 }}
        >
          {service.title}
        </motion.h3>

        <motion.p 
          className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6"
          variants={{
            hover: { y: -2 }
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {service.description}
        </motion.p>

        {/* Features with Enhanced Staggered Animation */}
        <motion.div 
          className="flex flex-col items-start w-full mb-6 space-y-2"
          variants={{
            hover: { y: -2 }
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {service.features.map((feature, index) => (
            <motion.div
              key={feature}
              className="flex items-center w-full gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg group"
              variants={{
                hover: { x: 5, scale: 1.02 }
              }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <span className="text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200">
                ✓
              </span>
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                {feature}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics with Staggered Animation */}
        <motion.div 
          className="mt-auto grid grid-cols-3 gap-4 w-full"
          variants={{
            hover: { y: -2 }
          }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          {Object.entries(service.metrics).map(([key, value], index) => (
            <motion.div 
              key={key} 
              className="text-center"
              variants={{
                hover: { y: -2, scale: 1.05 }
              }}
              transition={{ duration: 0.2, delay: 0.15 + (index * 0.05) }}
            >
              <motion.div 
                className="text-lg sm:text-xl font-bold text-blue-500 dark:text-blue-400"
                variants={{
                  hover: { scale: 1.1 }
                }}
                transition={{ duration: 0.2 }}
              >
                {value}
              </motion.div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 capitalize">{key}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button with Enhanced Hover Effect */}
        <motion.div
          className="mt-6"
          variants={{
            hover: { y: -2 }
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link href={service.link}>
            <motion.span
              className="inline-block px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full text-sm sm:text-base shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4), 0 8px 10px -6px rgba(59, 130, 246, 0.3)'
              }}
              transition={{ duration: 0.2 }}
            >
              Learn More
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const dragControls = useDragControls();
  const [isDragging, setIsDragging] = useState(false);

  const handleNextSlide = useCallback(async () => {
    const nextIndex = (currentIndex + 1) % services.length;
    await controls.start({ 
      x: -100,
      opacity: 0,
      transition: { duration: 0.3, type: "spring", stiffness: 400, damping: 35 }
    });
    setCurrentIndex(nextIndex);
    controls.set({ x: 100 });
    await controls.start({ 
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, type: "spring", stiffness: 400, damping: 35 }
    });
  }, [currentIndex, controls]);

  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(handleNextSlide, 5000);
    return () => clearInterval(timer);
  }, [isDragging, handleNextSlide]);

  const handlePrevSlide = async () => {
    const prevIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    await controls.start({ 
      x: 100,
      opacity: 0,
      transition: { duration: 0.3, type: "spring", stiffness: 400, damping: 35 }
    });
    setCurrentIndex(prevIndex);
    controls.set({ x: -100 });
    await controls.start({ 
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, type: "spring", stiffness: 400, damping: 35 }
    });
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    if (Math.abs(info.offset.x) > 50) {
      if (info.offset.x > 0) {
        handlePrevSlide();
      } else {
        handleNextSlide();
      }
    }
  };

  const handleSideCardClick = (index: number) => {
    if (index === ((currentIndex - 1 + services.length) % services.length)) {
      handlePrevSlide();
    } else if (index === ((currentIndex + 1) % services.length)) {
      handleNextSlide();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 overflow-hidden perspective-1000">
      <div className="fixed inset-0 pointer-events-none">
        {/* Stars Animation */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2.5 w-2.5 bg-blue-400/60 dark:bg-blue-300 rounded-full shadow-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 1.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full"
        />
      </div>

      <motion.div 
        initial={{
          opacity: 0.5,
          y: 10,
          rotateX: 20
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0
        }}
        transition={{
          duration: 0.8,
          type: "spring"
        }}
        className="container mx-auto px-4 sm:px-6 pt-28 pb-16 relative z-10 transform-gpu"
      >
        {/* Headline and Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explore Our Core Capabilities</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Transform your business with tailored digital solutions built for scale and performance.
          </p>
        </motion.div>

        {/* 3D Service Carousel */}
        <div className="relative flex items-center justify-center min-h-[600px] mb-12">
          {/* Service Cards Container */}
          <motion.div 
            className="relative flex items-center justify-center min-h-[600px] w-full max-w-4xl mx-auto overflow-visible perspective-[1200px]"
            drag="x"
            dragControls={dragControls}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
          >
            {services.map((service, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === ((currentIndex - 1 + services.length) % services.length);
              const isNext = index === ((currentIndex + 1) % services.length);
              
              if (!isActive && !isPrev && !isNext) return null;
              
              let rotateY = 0;
              let x = 0;
              let z = 0;
              let opacity = 1;
              
              if (isPrev) {
                rotateY = 45;
                x = -400;
                z = -250;
                opacity = 0.7;
              } else if (isNext) {
                rotateY = -45;
                x = 400;
                z = -250;
                opacity = 0.7;
              } else if (isActive) {
                z = 50;
                opacity = 1;
              }
              
              return (
                <motion.div
                  key={`card-${index}`}
                  className={`absolute ${isActive ? 'relative z-30' : 'z-10 cursor-pointer'}`}
                  initial={false}
                  animate={{
                    rotateY,
                    x,
                    z,
                    opacity,
                    scale: isActive ? 1 : 0.85
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.5
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden"
                  }}
                  onClick={() => !isActive && handleSideCardClick(index)}
                >
                  <ServiceCard 
                    service={service} 
                    isActive={isActive} 
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700"
           onClick={() => window.location.href = '/services'}>
            Explore Solutions
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20"
           onClick={() => window.location.href = '/contact'}>
            Contact Us
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}