// components/ProductShowcase.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  homepageImageUrl: string;
  previewDescription: string;
  isFeaturedOnHomePage: boolean;
}

export default function ProductShowcase() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/product");
        const all: Product[] = await res.json();
        const featured = all.filter((p) => p.isFeaturedOnHomePage);
        setFeaturedProducts(featured);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">Loading featured products...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our flagship solutions designed to transform your business
          </p>
        </motion.div>

        <div className="container mx-auto px-6 space-y-20">
          {featuredProducts.map((product, idx) => (
            <div
              key={product.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                idx === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br p-8"
                >
                  <Image
                    src={product.homepageImageUrl}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Text side */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: idx === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                    {product.title}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300">{product.tagline}</p>
                  <p className="text-gray-600 dark:text-gray-300">{product.description}</p>

                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Key Highlights:
                    </h3>
                    <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                      {product.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>


                  <Link
                    href={`/services/saas/${product.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-12">
          <Link
            href="/services/saas"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group/link transition-colors duration-300"
          >
            View all our products
            <svg
              className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}