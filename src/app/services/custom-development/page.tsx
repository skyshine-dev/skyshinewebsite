// app/services/custom-development/page.tsx
"use client";
import DOMPurify from 'isomorphic-dompurify'; 
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// Three gradient “solutions” for the "Highly effective solutions" section
const gradientSolutions = [
  {
    category: "Mobile Apps",
    gradientFrom: "from-gray-800",
    gradientTo: "to-gray-900",
  },
  {
    category: "Web Development",
    gradientFrom: "from-gray-800",
    gradientTo: "to-gray-900",
  },
  {
    category: "Enterprise Software",
    gradientFrom: "from-gray-800",
    gradientTo: "to-gray-900",
  },
];

// Technologies used
const technologiesLogos = [
  "Netflix",
  "Stripe",
  "Buffer",
  "Framer",
  "HubSpot",
  "Dropbox",
  "Amazon",
  "Firebase",
];

// Sample process steps for the “process” section
const processSteps = [
  {
    title: "Discovery",
    description: "Understanding your requirements and business objectives",
    icon: "🔍",
  },
  {
    title: "Planning",
    description: "Detailed project roadmap and architecture design",
    icon: "📋",
  },
  {
    title: "Development",
    description: "Agile dev with regular updates and feedback",
    icon: "⚙️",
  },
];

interface Tool {
  name: string;
  icon: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Example {
  title: string;
  description: string;
  image: string;
}

interface Stats {
  clients: number;
  satisfaction: number;
  experience: number;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  fullDesc: string;
  previewImage: string;
  tools: Tool[];
  features: Feature[];
  examples: Example[];
  statistics: Stats;
  testimonial: Testimonial;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Sample data-fetch URL: "/api/project" returns all active projects as Project[]

export default function CustomDevelopmentPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data: Project[] = await res.json();
        setProjects(data);

        const uniqueCats = Array.from(
          new Set(data.map((p) => p.category).filter(Boolean))
        );
        setCategories(uniqueCats);
        if (uniqueCats.length) {
          setActiveCategory(uniqueCats[0]);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchProjects();
  }, []);

  const currentProducts = projects.filter(
    (p) => p.category === activeCategory
  );

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* ============ 1) Animated Background ============ */}
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
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full 
                     bg-gradient-to-br from-blue-400/20 to-indigo-400/20 
                     rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full"
        />
      </div>

      {/* ============ 2) Hero Section ============ */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-3">
        {/* Left Column: 2 small + 1 wide image */}
        <div className="space-y-4 md:col-span-1 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-xl overflow-hidden shadow-md aspect-square border border-gray-200 dark:border-gray-700">
              <img
                src="/images/custom-hero-1.png"
                alt="Custom Development 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-md aspect-square border border-gray-200 dark:border-gray-700">
              <img
                src="/images/custom-hero-2.png"
                alt="Custom Development 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-[3/1] border border-gray-200 dark:border-gray-700">
            <img
              src="/images/custom-hero-3.png"
              alt="Custom Development Wide"
              fill
              className="object-fill"
            />
          </div>
        </div>

        {/* Center Column: single square image */}
        <div className="flex items-center justify-center">
          <div className="relative rounded-xl overflow-hidden shadow-md aspect-square w-full max-w-xs">
            <img
              src="/images/custom-hero-4.png"
              alt="Custom Development Main"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="flex flex-col justify-center text-center md:text-right md:items-end space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Custom Software Development
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto md:mx-0">
            Tailored solutions to meet your unique business requirements
          </p>
          {/* If you need CTAs, add them here */}
          <div className="flex gap-4 justify-center md:justify-end">
            {/* Example CTA:
            <Link href="/contact" className="px-6 py-2 bg-blue-600 text-white rounded-full">
              Get Started
            </Link>
            */}
          </div>
        </div>
      </div>
    </section>

      {/* ============ 3) Highly Effective Solutions ============ */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 dark:text-white">
            Highly effective solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            Discover our comprehensive range of custom software development solutions designed to transform your business with innovation and expertise.
          </p>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {gradientSolutions.map((sol) => (
            <div
              key={sol.category}
              className={`relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br ${sol.gradientFrom} ${sol.gradientTo} h-60 p-6 text-white flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{sol.category}</h3>
                <p className="text-sm text-white/80 leading-snug">
                  Elevate your {sol.category.toLowerCase()} projects with high-performance solutions built by our dedicated engineering teams.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 h-12 w-12 bg-gray-700/40 flex items-center justify-center rounded-md">
                <span className="text-gray-400 text-xs">Image</span>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
            Technologies We Use
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {technologiesLogos.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4) Our Products ============ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Our Products
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Explore our diverse portfolio of custom software solutions, each tailored to meet specific industry needs and business challenges.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm font-semibold rounded-full border transition-colors duration-300 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {currentProducts.map((project) => {
              // Stringify and encode the project object for the query parameter

              return (
                <Link
                  key={project.id}
                  href={{
                    pathname: `/services/custom-development/${project.slug}`,
                   // query: { data: jsonData },
                  }}
                  passHref
                >
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 group block"
                  >
                    {/* Preview Image */}
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg mb-6 overflow-hidden">
                      <img
                        src={project.previewImage}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div
  className="text-gray-600 dark:text-gray-300 mb-4 prose dark:prose-invert"
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(project.description),   // or just project.description
  }}
/>

                  
                  </motion.a>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 5) Process Section ============ */}
      <section className="py-16 bg-white dark:bg-gray-700">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Our Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our proven development process ensures efficient delivery of
              high-quality software solutions that meet your business objectives
              and exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6) CTA Section ============ */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Column */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Excited to work together on your next project?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Transform your business with our expert custom software development
            services. Our team of skilled developers and architects will work
            closely with you to create solutions that drive growth and
            innovation.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg">
            Get a Quote
          </button>
        </div>

        {/* Image Column */}
        <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 aspect-video">
          <img
            src="/images/custom-cta.png"
            alt="Team collaborating on project"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
    </div>
  );
}