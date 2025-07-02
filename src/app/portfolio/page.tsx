"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "AI-Powered Healthcare Analytics",
    client: "MedTech Solutions",
    challenge: "Legacy system bottlenecks causing 40% delay in patient diagnostics",
    solution: "Implemented ML-based diagnostic prediction system",
    impact: ["65% faster diagnosis", "98% accuracy rate", "$2M annual savings"],
    techStack: ["TensorFlow", "Python", "AWS", "React"],
    image: "/portfolio/healthcare.jpg"
  },
  {
    title: "Blockchain Supply Chain Platform",
    client: "Global Logistics Corp",
    challenge: "Lack of transparency and traceability in supply chain",
    solution: "Built decentralized tracking system with smart contracts",
    impact: ["100% traceability", "30% cost reduction", "Real-time tracking"],
    techStack: ["Ethereum", "Solidity", "Node.js", "React"],
    image: "/portfolio/blockchain.jpg"
  },
  {
    title: "Smart City Infrastructure",
    client: "Metropolitan Council",
    challenge: "Inefficient urban resource management",
    solution: "Developed IoT-based monitoring system",
    impact: ["40% energy savings", "Smart traffic control", "Reduced pollution"],
    techStack: ["IoT", "Python", "Azure", "React Native"],
    image: "/portfolio/smartcity.jpg"
  }
];

export default function Portfolio() {
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
      <section className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0.5, y: 10, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our innovative solutions that have helped businesses overcome complex technical challenges
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-white dark:bg-gray-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "50+", label: "Projects Delivered", color: "text-blue-600 dark:text-blue-400" },
              { metric: "$100M+", label: "Client ROI Generated", color: "text-blue-600 dark:text-blue-400" },
              { metric: "98%", label: "Client Satisfaction", color: "text-blue-600 dark:text-blue-400" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`text-5xl font-bold mb-4 ${item.color}`}>
                  {item.metric}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Featured Case Studies
          </motion.h2>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-600">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{project.client}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-600">
                      <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Challenge</h4>
                      <p className="text-gray-700 dark:text-gray-300">{project.challenge}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-600">
                      <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Solution</h4>
                      <p className="text-gray-700 dark:text-gray-300">{project.solution}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Impact</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.impact.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-gray-700">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Ready to Transform Your Business?</h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your ideas to life
            </p>
            <button
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}