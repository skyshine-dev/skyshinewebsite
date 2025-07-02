"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
}

const employeeTestimonials = [
  {
    name: "Priya Sharma",
    role: "Senior Software Architect",
    location: "Bangalore, India",
    quote: "At Skyshine, I've found a truly global platform where my ideas are valued. The collaborative environment here has helped me grow both professionally and personally.",
    image: "/team/priya-sharma.jpg"
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    location: "Singapore",
    quote: "The diversity at Skyshine isn't just about different nationalities - it's about different perspectives and ideas coming together to create innovative solutions.",
    image: "/team/michael-chen.jpg"
  },
  {
    name: "Sophie Anderson",
    role: "UX Design Lead",
    location: "London, UK",
    quote: "Working with team members across different time zones has taught me the value of asynchronous collaboration and global thinking.",
    image: "/team/sophie-anderson.jpg"
  }
];

const cultureValues = [
  {
    title: "Global Collaboration",
    description: "We embrace diverse perspectives and foster an environment where every voice is heard and valued.",
    icon: "🌍"
  },
  {
    title: "Continuous Learning",
    description: "We invest in our team's growth through training, mentorship, and innovation labs.",
    icon: "📚"
  },
  {
    title: "Work-Life Harmony",
    description: "We believe in flexible working arrangements that respect different time zones and personal commitments.",
    icon: "⚖️"
  },
  {
    title: "Innovation First",
    description: "We encourage experimentation and creative problem-solving across all teams and levels.",
    icon: "💡"
  }
];

export default function Team() {
  const [openPositions, setOpenPositions] = useState<JobPosition[]>([]);

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobListings');
    if (savedJobs) {
      setOpenPositions(JSON.parse(savedJobs));
    }
  }, []);
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Our Team & Culture
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join our diverse, global team of innovators shaping the future of technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-20 bg-white dark:bg-gray-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At Skyshine, we foster an inclusive environment that celebrates diversity and drives innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from our global team members about their experiences at Skyshine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {employeeTestimonials.map((employee, index) => (
              <motion.div
                key={employee.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
              >
                <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 opacity-20"></div>
                  {/* Placeholder avatar */}
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white bg-blue-500">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{employee.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{employee.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{employee.location}</p>
                <p className="text-gray-600 dark:text-gray-300 italic">{employee.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white dark:bg-gray-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore opportunities to be part of our global innovation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px 0px 0px" }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{position.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{position.department}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="mr-4">{position.location}</span>
                  <span>{position.type}</span>
                </div>
                <a
                  href="/careers/apply"
                  target="_self"
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 inline-block text-center"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}