"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "Skyshine Technologies was founded with a vision to provide innovative technology solutions."
    },
    {
      year: "2021",
      title: "SaaS Launch",
      description: "Launched our first suite of SaaS products, marking our entry into cloud solutions."
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded operations globally with a focus on building a diverse, international team."
    },
    {
      year: "2023",
      title: "Service Evolution",
      description: "Introduced Data Center as a Service and Digital Marketing solutions."
    }
  ];

  const leaders = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      expertise: "Enterprise Software & Global Operations",
      image: "/team/sarah-chen.jpg"
    },
    {
      name: "Raj Patel",
      role: "Chief Technology Officer",
      expertise: "Cloud Architecture & Innovation",
      image: "/team/raj-patel.jpg"
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Global Services",
      expertise: "Service Delivery & Client Relations",
      image: "/team/maria-rodriguez.jpg"
    }
  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
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
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              About Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At Skyshine, we are passionate technologists driven by innovation, creativity, and results. With a strong foundation in SaaS products, custom software development, data center infrastructure, and digital marketing, Skyshine is committed to helping businesses thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/mission.svg"
                alt="Our Mission"
                width={500}
                height={400}
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                To empower businesses through cutting-edge software solutions that drive efficiency, scalability, and innovation. We achieve this by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Developing transformative digital solutions that solve complex business challenges</li>
                <li>Fostering technological advancement through continuous research and development</li>
                <li>Building lasting partnerships with clients to ensure their long-term success</li>
                <li>Maintaining the highest standards of security and reliability in all our services</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:order-1"
            >
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Our Vision
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                To be a globally recognized leader in digital technology, trusted for delivering excellence, integrity, and customer success. Our vision encompasses:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Pioneering innovative solutions that shape the future of digital transformation</li>
                <li>Creating a positive impact on businesses and communities worldwide</li>
                <li>Building a diverse and inclusive global team of technology experts</li>
                <li>Setting new standards for technological excellence and ethical practices</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative md:order-2"
            >
            <Image

                src="/images/vision.svg"
                alt="Our Vision"
                width={500}
                height={400}
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
            
            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center justify-between mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-5/12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
                <div className="w-5/12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <span className="text-blue-500 font-bold">{milestone.year}</span>
                  <h3 className="text-xl font-semibold mt-2">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At Skyshine, our values shape everything we do - from how we develop solutions to how we serve our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries to create cutting-edge solutions",
                icon: "🚀"
              },
              {
                title: "Global Excellence",
                description: "Maintaining high standards across our international operations",
                icon: "🌍"
              },
              {
                title: "Client Success",
                description: "Dedicated to delivering exceptional results for our clients",
                icon: "🎯"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 opacity-20"></div>
                  {/* Placeholder avatar */}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white bg-blue-500">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{leader.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{leader.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Skyshine Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Why Skyshine?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Choose Skyshine for our commitment to innovation, proven track record of client satisfaction, and comprehensive end-to-end digital services. Our global team brings diverse perspectives and expertise, ensuring we deliver solutions that drive your business forward.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
                <div className="text-gray-600 dark:text-gray-300">Global Clients</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-300">Countries Served</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">95%</div>
                <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

