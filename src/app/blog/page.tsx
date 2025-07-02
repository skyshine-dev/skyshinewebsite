"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
  imagePath: string;
  isFeatured: boolean;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/blog");
        if (!res.ok) throw new Error("Fetch failed");
        const data = (await res.json()) as BlogPost[];
        setPosts(data);
        setCategories(["all", ...Array.from(new Set(data.map((p) => p.category)))]);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const featured = posts.filter((p) => p.isFeatured);
  const filtered =
    selectedCategory === "all"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* ✨ Background Animations (unchanged) */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2.5 w-2.5 bg-blue-400/60 dark:bg-blue-300 rounded-full shadow-glow"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [0, 1.2, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.2, 0.3], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full"
        />
      </div>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0.8, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent
                       bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
          >
            Knowledge Center
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, updates, and expert perspectives on technology, innovation, and digital transformation.
          </p>
        </div>
      </section>

      {/* Categories */}
      

  {/* Featured Articles */}
{featured.length > 0 && (
  <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Featured Articles</h2>
      <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
        {featured.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative flex-none w-[320px] sm:w-[420px] h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <Image
              src={post.imagePath || "/estate-placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white z-10">
              <span className="px-3 py-1 text-xs font-semibold bg-blue-600/90 rounded-full mb-4 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {post.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <Link 
                  href={`/blog/${post.slug}?id=${post.id}`} 
                  className="hover:text-blue-300 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-800 !text-white  line-clamp-2 max-w-sm mx-auto transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {post.excerpt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)}

      {/* All Posts */}
      <section className="py-12 bg-white dark:bg-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
              {selectedCategory === "all" ? "All Posts" : `Category: ${selectedCategory}`}
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500"
                  }`}
                >
                  {cat === "all" ? "All Posts" : cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <motion.article
                key={post.slug}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl
                           border border-gray-200 dark:border-gray-700 transform hover:-translate-y-1
                           transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.imagePath || "/estate-placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    <Link
                      href={`/blog/${post.slug}?id=${post.id}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-700">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stay Updated */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Subscribe for the latest insights and updates.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700
                           border border-gray-300 dark:border-gray-600 focus:outline-none
                           focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Share Knowledge */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Share Knowledge</h3>
            <div className="flex space-x-4">
              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-blue-900
                           text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 
                           transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149 4.916 4.916 0 003.195 9.72a4.9 4.9 0 01-2.229-.616v.06a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.919 4.919 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.058 0 14.01-7.513 14.01-14.01 0-.213-.004-.425-.013-.636A10.025 10.025 0 0024 4.59z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-blue-900
                           text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 
                           transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5A2.49 2.49 0 002.49 5.99 2.49 2.49 0 004.98 8.48 2.49 2.49 0 007.47 5.99 2.49 2.49 0 004.98 3.5zM2 21.5h6V9.98H2V21.5zM9.5 9.98h5.72v1.56h.08c.8-1.5 2.76-3.08 5.68-3.08 6.08 0 7.2 4 7.2 9.2v10.74h-6V19.7c0-2.55-.05-5.83-3.56-5.83-3.57 0-4.12 2.8-4.12 5.7v11H9.5V9.98z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-blue-900
                           text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 
                           transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.5v-2.9h2.5v-2.2c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}