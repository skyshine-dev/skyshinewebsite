"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  slug: string;
  imagePath: string;
  isFeatured: boolean;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Fetch posts once
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/blog");
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = (await res.json()) as BlogPost[];
      setPosts(data);
    }
    fetchPosts().catch(console.error);
  }, []);

  // Derive a **unique** sorted category list every render
  const categories = useMemo(() => {
    const allCats = posts.map((p) => p.category.trim().toLowerCase());
    return Array.from(new Set(allCats)).sort();
  }, [posts]);

  // Filter logic
  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((p) => p.category.trim().toLowerCase() === selectedCategory.toLowerCase());

  const featured = posts.filter((p) => p.isFeatured);

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* … your background animations & hero … */}

      {/* ——— Category Buttons ——— */}
      <section className="py-12 bg-white dark:bg-gray-700">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
          {/* “All Posts” */}
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-5 py-2 rounded-full font-medium transition ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500"
            }`}
          >
            All Posts
          </button>

          {/* One button per unique category */}
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ——— Featured Articles ——— */}
      {featured.length > 0 && (
        <section className="py-12 bg-gray-50 dark:bg-gray-700 overflow-hidden">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
              Featured Articles
            </h2>
            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
              {featured.map((post) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group relative flex-none w-[320px] sm:w-[420px] h-[280px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
                >
                  <Image
                    src={post.imagePath || "/estate-placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* blur only on hover */}
                  <div className="absolute inset-0 transition-filter duration-300 group-hover:backdrop-blur-sm" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white z-10">
                    <span className="px-3 py-1 text-xs font-semibold bg-blue-600/90 rounded-full mb-4 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {post.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                      <Link
                        href={`/blog/${post.slug}?id=${post.id}`}
                        className="hover:text-blue-300 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-200 line-clamp-2 max-w-sm mx-auto transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ——— All Posts Grid ——— */}
      <section className="py-12 bg-white dark:bg-gray-700">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {selectedCategory === "all"
              ? "All Posts"
              : `Category: ${selectedCategory}`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.slug}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 overflow-hidden"
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
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
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
                    <span>
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}