// components/WhyChooseSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    icon: "👥",
    title: "Client-First Approach",
    description:
      "Your goals shape our solutions. Every project is tailored to meet your specific business needs.",
  },
  {
    icon: "🔄",
    title: "End-to-End Expertise",
    description:
      "From ideation to deployment, we cover the full software lifecycle—and beyond, including hosting, marketing, and maintenance.",
  },
  {
    icon: "🚀",
    title: "Innovation-Driven",
    description:
      "We embrace the latest in AI, automation, and cloud infrastructure to future-proof your business.",
  },
  {
    icon: "💡",
    title: "Reliable Support",
    description:
      "Post-launch, we stay involved—offering continuous updates, optimizations, and technical support.",
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Heading & Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Why Choose Skyshine?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            At Skyshine, we don’t just deliver technology—we build scalable, innovative ecosystems that empower
            businesses to excel. Here’s why companies across industries trust us as their long-term technology partner:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Feature Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 flex items-center justify-center"
          >
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/why-visual.png"
                alt="Why choose Skyshine illustration"
                fill
                className="object-contain"
              />
              {/* Optional overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 pointer-events-none" />
              <div className="absolute inset-0 border border-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;