"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Import services data for the carousel




const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
        {/* Tech background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 w-full"></div>
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/tech-pattern.svg')] bg-repeat opacity-5"></div>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`circuit-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              style={{
                top: `${15 + (i * 10)}%`,
                left: 0,
                right: 0,
                height: '1px',
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scaleX: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 4 + (i * 0.5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
          
          {/* Floating tech elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`tech-particle-${i}`}
              className="absolute rounded-full bg-blue-400/30 dark:bg-blue-400/20"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to drive your digital transformation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {[
              {
                title: "SaaS Solutions",
                description: "Cloud-based software solutions for scalability and efficiency",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                ),
                features: ["Custom SaaS Products", "Third-party Solutions", "Cloud Integration"],
                link: "/services/saas",
                techBg: "circuit-board"
              },
              {
                title: "Custom Software Development",
                description: "Tailored solutions to meet your unique business requirements",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                features: ["Web Applications", "Mobile Apps", "Enterprise Software"],
                link: "/services/custom-development",
                techBg: "code-pattern"
              },
              {
                title: "Data Center as a Service",
                description: "Reliable and secure infrastructure solutions for your business",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                ),
                features: ["Virtual Servers", "Cloud Computing", "Kubernetes Management"],
                link: "/services/daas",
                techBg: "server-grid"
              },
              {
                title: "Digital Marketing",
                description: "Data-driven marketing strategies to grow your online presence",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                ),
                features: ["SEO Optimization", "Social Media", "PPC Campaigns"],
                link: "/services/digital-marketing",
                techBg: "data-flow"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Tech-inspired background with animated elements */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 opacity-90 dark:opacity-90"></div>
                  <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[url('/tech-pattern.svg')]"></div>
                </div>
                
                {/* Glowing border effect */}
                <motion.div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 transition duration-500"
                  animate={{ 
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
                
                <div className="relative p-8 rounded-2xl border border-gray-200 dark:border-gray-700 h-full flex flex-col group-hover:border-blue-300/50 dark:group-hover:border-blue-500/30 transition-colors duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 mr-4 text-blue-600 dark:text-blue-400 relative">
                      {/* Tech circuit animation around icon */}
                      <div className="absolute inset-0 rounded-full border border-blue-200 dark:border-blue-800 group-hover:border-blue-400 dark:group-hover:border-blue-600 transition-colors duration-300"></div>
                      <motion.div 
                        className="absolute inset-0 rounded-full border border-blue-400/0 dark:border-blue-400/0 group-hover:border-blue-400/50 dark:group-hover:border-blue-400/50"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      ></motion.div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                        <motion.div 
                          className="w-4 h-4 mr-3 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center"
                          whileHover={{ scale: 1.2 }}
                        >
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"
                            animate={{ 
                              scale: [1, 1.2, 1],
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          ></motion.div>
                        </motion.div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 group/link"
                  >
                    <span className="relative">
                      <span className="relative z-10">Learn More</span>
                      <motion.span 
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover/link:w-full transition-all duration-300"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      ></motion.span>
                    </span>
                    <motion.svg
                      className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </Link>
                  
                  {/* Tech-inspired decorative elements */}
                  <div className="absolute top-6 right-6 w-20 h-20 opacity-5 dark:opacity-10">
                    {service.techBg === "circuit-board" && (
                      <svg viewBox="0 0 100 100" fill="currentColor" className="text-blue-900 dark:text-blue-300">
                        <circle cx="10" cy="10" r="2" />
                        <circle cx="30" cy="10" r="2" />
                        <circle cx="50" cy="10" r="2" />
                        <circle cx="70" cy="10" r="2" />
                        <circle cx="90" cy="10" r="2" />
                        <circle cx="10" cy="30" r="2" />
                        <circle cx="30" cy="30" r="2" />
                        <circle cx="50" cy="30" r="2" />
                        <circle cx="70" cy="30" r="2" />
                        <circle cx="90" cy="30" r="2" />
                        <path d="M10 10h80v0.5H10z" />
                        <path d="M10 30h80v0.5H10z" />
                        <path d="M10 50h80v0.5H10z" />
                      </svg>
                    )}
                    {service.techBg === "code-pattern" && (
                      <svg viewBox="0 0 100 100" fill="currentColor" className="text-blue-900 dark:text-blue-300">
                        <path d="M30 20l-15 15 15 15" strokeWidth="1" stroke="currentColor" fill="none" />
                        <path d="M70 20l15 15-15 15" strokeWidth="1" stroke="currentColor" fill="none" />
                        <path d="M45 15l10 70" strokeWidth="1" stroke="currentColor" fill="none" />
                      </svg>
                    )}
                    {service.techBg === "server-grid" && (
                      <svg viewBox="0 0 100 100" fill="currentColor" className="text-blue-900 dark:text-blue-300">
                        <rect x="10" y="10" width="30" height="10" rx="2" />
                        <rect x="10" y="30" width="30" height="10" rx="2" />
                        <rect x="10" y="50" width="30" height="10" rx="2" />
                        <rect x="10" y="70" width="30" height="10" rx="2" />
                        <rect x="60" y="10" width="30" height="10" rx="2" />
                        <rect x="60" y="30" width="30" height="10" rx="2" />
                        <rect x="60" y="50" width="30" height="10" rx="2" />
                        <rect x="60" y="70" width="30" height="10" rx="2" />
                      </svg>
                    )}
                    {service.techBg === "data-flow" && (
                      <svg viewBox="0 0 100 100" fill="currentColor" className="text-blue-900 dark:text-blue-300">
                        <circle cx="20" cy="20" r="8" />
                        <circle cx="80" cy="20" r="8" />
                        <circle cx="20" cy="80" r="8" />
                        <circle cx="80" cy="80" r="8" />
                        <path d="M20 28v44M28 20h44M80 28v44M28 80h44" strokeWidth="1" stroke="currentColor" fill="none" />
                      </svg>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <Link
              href="/services"
              className="relative inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 group px-6 py-3"
            >
              <span className="relative z-10">View All Services</span>
              <span className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
              <motion.svg
                className="w-5 h-5 ml-2 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </section>
  );
};

export default ServicesSection;