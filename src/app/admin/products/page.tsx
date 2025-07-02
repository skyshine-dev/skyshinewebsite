// File: src/app/admin/products/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface KeyFeature {
  title: string;
  desc: string;
}

interface PlatformExample {
  label: string;
  url: string;
  file?: File | null;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  heroImageUrl: string;
  keyFeatures: { number: number; title: string; desc: string }[];
  platformExamples: { label: string; url: string }[];
  testimonials: { quote: string; author: string; role: string }[];
  previewDescription: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaImageUrl?: string;
  tagline: string;
  highlights: string[];
  homepageImageUrl: string;
  isFeaturedOnHomePage: boolean;
  href: string;
  createdAt: string;
  updatedAt: string;
}

export default function ProductsAdminPage() {
  // Add new state for submitting
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  // State for list of products
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingList, setLoadingList] = useState<boolean>(false);

  // State for form (create or edit)
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");

  const [formState, setFormState] = useState<{
    id: string;
    title: string;
    description: string;
    icon: string;
    heroImageUrl: string;
    heroImageFile: File | null;
    keyFeatures: KeyFeature[];
    newKeyTitle: string;
    newKeyDesc: string;
    platformExamples: PlatformExample[];
    testimonials: Testimonial[];
    newTestQuote: string;
    newTestAuthor: string;
    newTestRole: string;
    previewDescription: string;
    ctaHeading: string;
    ctaDescription: string;
    ctaImageUrl: string;
    ctaImageFile: File | null;
    tagline: string;
    highlights: string[];
    newHighlight: string;
    homepageImageUrl: string;
    homepageImageFile: File | null;
    isFeaturedOnHomePage: boolean;
    href: string;
  }>({
    id: "",
    title: "",
    description: "",
    icon: "",
    heroImageUrl: "",
    heroImageFile: null,
    keyFeatures: [],
    newKeyTitle: "",
    newKeyDesc: "",
    platformExamples: Array.from({ length: 5 }, (_, i) => ({
      label: `block-${i + 1}`,
      url: "",
      file: null,
    })),
    testimonials: [],
    newTestQuote: "",
    newTestAuthor: "",
    newTestRole: "",
    previewDescription: "",
    ctaHeading: "",
    ctaDescription: "",
    ctaImageUrl: "",
    ctaImageFile: null,
    tagline: "",
    highlights: [],
    newHighlight: "",
    homepageImageUrl: "",
    homepageImageFile: null,
    isFeaturedOnHomePage: false,
    href: "",
  });

  // Delete a product
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    
    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/product/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      await fetchProducts();
      if (isEditing && selectedId === id) resetForm();
      showNotification('success', 'Product successfully deleted!');
    } catch (err) {
      console.error(err);
      showNotification('error', 'Error deleting product');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fetch products on mount and after CRUD
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoadingList(true);
    try {
      const res = await fetch("/api/product");
      const data: Product[] = await res.json();
      setProducts(data);
    } catch (e) {
      console.error("Failed to fetch products", e);
    } finally {
      setLoadingList(false);
    }
  };

  // Handle input changes for basic string fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, checked } = e.target as HTMLInputElement;
    if (name === "isFeaturedOnHomePage") {
      setFormState((prev) => ({ ...prev, isFeaturedOnHomePage: checked }));
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Upload an image to /api/upload, return path
  const uploadImage = async (file: File): Promise<string> => {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: fd,
    });
    const json = await res.json();
    return json.path as string;
  };

  // Handle hero image selection & upload
  const handleHeroImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormState((prev) => ({ ...prev, heroImageFile: file }));
  };

  // Handle CTA image selection
  const handleCtaImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormState((prev) => ({ ...prev, ctaImageFile: file }));
  };

  // Handle Homepage image
  const handleHomepageImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormState((prev) => ({ ...prev, homepageImageFile: file }));
  };

  // Handle platform example image changes for index i
  const handlePlatformImageChange = (
    idx: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] || null;
    setFormState((prev) => {
      const newExamples = [...prev.platformExamples];
      newExamples[idx].file = file;
      return { ...prev, platformExamples: newExamples };
    });
  };

  // Handle platform label changes
  const handlePlatformLabelChange = (
    idx: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setFormState((prev) => {
      const newExamples = [...prev.platformExamples];
      newExamples[idx].label = value.trim() === "" ? `block-${idx + 1}` : value;
      return { ...prev, platformExamples: newExamples };
    });
  };

  // Add a key feature (auto-increment number)
  const handleAddKeyFeature = () => {
    const { newKeyTitle, newKeyDesc } = formState;
    if (!newKeyTitle.trim() || !newKeyDesc.trim()) return;
    setFormState((prev) => ({
      ...prev,
      keyFeatures: [
        ...prev.keyFeatures,
        { title: newKeyTitle, desc: newKeyDesc },
      ],
      newKeyTitle: "",
      newKeyDesc: "",
    }));
  };

  // Remove a key feature at index i
  const handleRemoveKeyFeature = (i: number) => {
    setFormState((prev) => {
      const filtered = prev.keyFeatures.filter((_, idx) => idx !== i);
      return { ...prev, keyFeatures: filtered };
    });
  };

  // Add a testimonial
  const handleAddTestimonial = () => {
    const { newTestQuote, newTestAuthor, newTestRole } =
      formState;
    if (
      !newTestQuote.trim() ||
      !newTestAuthor.trim() ||
      !newTestRole.trim()
    )
      return;
    setFormState((prev) => ({
      ...prev,
      testimonials: [
        ...prev.testimonials,
        { quote: newTestQuote, author: newTestAuthor, role: newTestRole },
      ],
      newTestQuote: "",
      newTestAuthor: "",
      newTestRole: "",
    }));
  };

  const handleRemoveTestimonial = (i: number) => {
    setFormState((prev) => {
      const filtered = prev.testimonials.filter((_, idx) => idx !== i);
      return { ...prev, testimonials: filtered };
    });
  };

  // Add a highlight
  const handleAddHighlight = () => {
    const { newHighlight } = formState;
    if (!newHighlight.trim()) return;
    setFormState((prev) => ({
      ...prev,
      highlights: [...prev.highlights, newHighlight],
      newHighlight: "",
    }));
  };

  const handleRemoveHighlight = (i: number) => {
    setFormState((prev) => {
      const filtered = prev.highlights.filter((_, idx) => idx !== i);
      return { ...prev, highlights: filtered };
    });
  };

  // Load a product into form for editing
  const loadForEdit = (prod: Product) => {
    setIsEditing(true);
    setSelectedId(prod.id);
    setFormState({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      icon: prod.icon,
      heroImageUrl: prod.heroImageUrl,
      heroImageFile: null,
      keyFeatures: prod.keyFeatures.map((kf) => ({
        title: kf.title,
        desc: kf.desc,
      })),
      newKeyTitle: "",
      newKeyDesc: "",
      platformExamples: prod.platformExamples.map((ex, idx) => ({
        label: ex.label || `block-${idx + 1}`,
        url: ex.url,
        file: null,
      })),
      testimonials: prod.testimonials.map((t) => ({
        quote: t.quote,
        author: t.author,
        role: t.role,
      })),
      newTestQuote: "",
      newTestAuthor: "",
      newTestRole: "",
      previewDescription: prod.previewDescription,
      ctaHeading: prod.ctaHeading,
      ctaDescription: prod.ctaDescription,
      ctaImageUrl: prod.ctaImageUrl || "",
      ctaImageFile: null,
      tagline: prod.tagline,
      highlights: prod.highlights,
      newHighlight: "",
      homepageImageUrl: prod.homepageImageUrl,
      homepageImageFile: null,
      isFeaturedOnHomePage: prod.isFeaturedOnHomePage,
      href: prod.href,
    });
  };

  // Reset form to blank
  const resetForm = () => {
    setIsEditing(false);
    setSelectedId("");
    setFormState({
      id: "",
      title: "",
      description: "",
      icon: "",
      heroImageUrl: "",
      heroImageFile: null,
      keyFeatures: [],
      newKeyTitle: "",
      newKeyDesc: "",
      platformExamples: Array.from({ length: 5 }, (_, i) => ({
        label: `block-${i + 1}`,
        url: "",
        file: null,
      })),
      testimonials: [],
      newTestQuote: "",
      newTestAuthor: "",
      newTestRole: "",
      previewDescription: "",
      ctaHeading: "",
      ctaDescription: "",
      ctaImageUrl: "",
      ctaImageFile: null,
      tagline: "",
      highlights: [],
      newHighlight: "",
      homepageImageUrl: "",
      homepageImageFile: null,
      isFeaturedOnHomePage: false,
      href: "",
    });
  };

  // Show notification helper
  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  // Handle form submit (create or update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Build payload
      const {
        id,
        title,
        description,
        icon,
        heroImageUrl,
        heroImageFile,
        keyFeatures,
        platformExamples,
        testimonials,
        previewDescription,
        ctaHeading,
        ctaDescription,
        ctaImageUrl,
        ctaImageFile,
        tagline,
        highlights,
        homepageImageUrl,
        homepageImageFile,
        isFeaturedOnHomePage,
        href,
      } = formState;

      // Upload heroImage if new file
      if (heroImageFile) {
        const path = await uploadImage(heroImageFile);
        heroImageUrl = path;
      }

      // Upload CTA image if new file
      if (ctaImageFile) {
        const path = await uploadImage(ctaImageFile);
        ctaImageUrl = path;
      }

      // Upload homepage image if new file
      if (homepageImageFile) {
        const path = await uploadImage(homepageImageFile);
        homepageImageUrl = path;
      }

      // Process platformExamples: upload each file if exists, ensure label default
      const finalPlatformExamples = await Promise.all(
        platformExamples.map(async (pex, idx) => {
          let url = pex.url;
          if (pex.file) {
            url = await uploadImage(pex.file);
          }
          const label =
            pex.label.trim() === "" ? `block-${idx + 1}` : pex.label;
          return { label, url };
        })
      );

      // Build keyFeatures with auto-incremented numbers
      const finalKeyFeatures = keyFeatures.map((kf, idx) => ({
        number: idx + 1,
        title: kf.title,
        desc: kf.desc,
      }));

      const payload = {
        id,
        title,
        description,
        icon,
        heroImageUrl,
        keyFeatures: finalKeyFeatures,
        platformExamples: finalPlatformExamples,
        testimonials,
        previewDescription,
        ctaHeading,
        ctaDescription,
        ctaImageUrl,
        tagline,
        highlights,
        homepageImageUrl,
        isFeaturedOnHomePage,
        href,
      };

      const method = isEditing ? "PUT" : "POST";
      const endpoint = isEditing ? `/api/product/${id}` : "/api/product";
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      if (!res.ok) throw new Error("Failed to save");
      
      await fetchProducts();
      resetForm();
      showNotification('success', `Product successfully ${isEditing ? 'updated' : 'created'}!`);
    } catch (err) {
      console.error(err);
      showNotification('error', 'Error saving product');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen relative">
      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
              notification.type === 'success' 
                ? 'bg-green-500 dark:bg-green-600' 
                : 'bg-red-500 dark:bg-red-600'
            } text-white z-50`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Products Admin
      </h1>

      {/* ───────── Form ───────── */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/30 mb-10 relative"
      
      >
          {isSubmitting && (
          <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 flex items-center justify-center rounded-xl z-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div>
          </div>
        )}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          {isEditing ? "Edit Product" : "Create New Product"}
        </h2>

        {/* ID (only on create) */}
        {!isEditing && (
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              ID (slug)
            </label>
            <input
              type="text"
              name="id"
              value={formState.id}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
            />
          </div>
        )}

        {/* Title, Icon, Href, Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formState.title}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Icon (Emoji or short text)
            </label>
            <input
              type="text"
              name="icon"
              value={formState.icon}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Href (link path)
            </label>
            <input
              type="text"
              name="href"
              value={formState.href}
              onChange={handleChange}
              placeholder="/services/saas/your-product"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>
          <div className="md:col-span-2 mb-4">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              value={formState.description}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 h-20"
            />
          </div>
        </div>

        {/* Hero Image Upload */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Hero Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleHeroImageChange}
            className="block w-full text-gray-700 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 dark:file:bg-blue-900/50 file:text-blue-700 dark:file:text-blue-400 hover:file:bg-blue-100 dark:hover:file:bg-blue-900/70"
          />
          {formState.heroImageUrl && (
            <Image
              src={formState.heroImageUrl}
              alt="Hero"
              width={192}
              height={144}
              className="mt-2 w-48 h-auto rounded"
            />
          )}
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            <input
              type="text"
              placeholder="Feature Title"
              value={formState.newKeyTitle}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, newKeyTitle: e.target.value }))
              }
              className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
            <input
              type="text"
              placeholder="Feature Description"
              value={formState.newKeyDesc}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, newKeyDesc: e.target.value }))
              }
              className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
            <button
              type="button"
              onClick={handleAddKeyFeature}
              className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              + Add Feature
            </button>
          </div>

          {formState.keyFeatures.length > 0 && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2 text-gray-700 dark:text-gray-300">
                    #
                  </th>
                  <th className="border-b py-2 text-gray-700 dark:text-gray-300">
                    Title
                  </th>
                  <th className="border-b py-2 text-gray-700 dark:text-gray-300">
                    Description
                  </th>
                  <th className="border-b py-2 text-gray-700 dark:text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {formState.keyFeatures.map((kf, idx) => (
                  <tr key={idx} className="odd:bg-gray-100 dark:odd:bg-gray-700">
                    <td className="py-2 text-gray-800 dark:text-gray-200">
                      {idx + 1}
                    </td>
                    <td className="py-2 text-gray-800 dark:text-gray-200">
                      {kf.title}
                    </td>
                    <td className="py-2 text-gray-800 dark:text-gray-200">
                      {kf.desc}
                    </td>
                    <td className="py-2">
                      <button
                        type="button"
                        onClick={() => handleRemoveKeyFeature(idx)}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Platform Examples (5 slots) */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Platform Examples (5)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formState.platformExamples.map((pex, idx) => (
              <div
                key={idx}
                className="p-4 border rounded dark:border-gray-600"
              >
                <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                  Label (default: block-{idx + 1})
                </label>
                <input
                  type="text"
                  value={pex.label}
                  onChange={(e) => handlePlatformLabelChange(idx, e)}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 mb-2"
                />
                <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handlePlatformImageChange(idx, e)}
                  className="block mb-2"
                />
                {pex.url && (
                  <Image
                    src={pex.url}
                    alt={pex.label}
                    width={128}
                    height={96}
                    className="mt-1 w-32 h-auto rounded"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            <input
              type="text"
              placeholder="Quote"
              value={formState.newTestQuote}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, newTestQuote: e.target.value }))
              }
              className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
            <input
              type="text"
              placeholder="Author"
              value={formState.newTestAuthor}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, newTestAuthor: e.target.value }))
              }
              className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
            <input
              type="text"
              placeholder="Role"
              value={formState.newTestRole}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, newTestRole: e.target.value }))
              }
              className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
            <button
              type="button"
              onClick={handleAddTestimonial}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              + Add Testimonial
            </button>
          </div>

          {formState.testimonials.length > 0 && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2 text-gray-700 dark:text-gray-300">
                    Quote
                  </th>
                  <th className="border-b py-2 text-gray-700 dark:text-gray-300">
                    Author
                  </th>
                  <th className="border-b py-2 text-gray-700 dark:text-gray-300">
                    Role
                  </th>
                  <th className="border-b py-2 text-gray-700 dark:text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {formState.testimonials.map((t, idx) => (
                  <tr key={idx} className="odd:bg-gray-100 dark:odd:bg-gray-700">
                    <td className="py-2 text-gray-800 dark:text-gray-200">
                      {t.quote}
                    </td>
                    <td className="py-2 text-gray-800 dark:text-gray-200">
                      {t.author}
                    </td>
                    <td className="py-2 text-gray-800 dark:text-gray-200">
                      {t.role}
                    </td>
                    <td className="py-2">
                      <button
                        type="button"
                        onClick={() => handleRemoveTestimonial(idx)}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Preview Description */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Preview Description
          </label>
          <textarea
            name="previewDescription"
            value={formState.previewDescription}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 h-20"
          />
        </div>

        {/* CTA Heading, Description, Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              CTA Heading
            </label>
            <input
              type="text"
              name="ctaHeading"
              value={formState.ctaHeading}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              CTA Description
            </label>
            <textarea
              name="ctaDescription"
              value={formState.ctaDescription}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 h-20"
            />
          </div>
          <div className="md:col-span-2 mb-4">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              CTA Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleCtaImageChange}
              className="block"
            />
            {formState.ctaImageUrl && (
              <Image
                src={formState.ctaImageUrl}
                alt="CTA"
                width={192}
                height={144}
                className="mt-2 w-48 h-auto rounded"
              />
            )}
          </div>
        </div>

        {/* Homepage Fields */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Tagline
          </label>
          <input
            type="text"
            name="tagline"
            value={formState.tagline}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Highlights (add one at a time)
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Highlight text"
              value={formState.newHighlight}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, newHighlight: e.target.value }))
              }
              className="flex-grow p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
            <button
              type="button"
              onClick={handleAddHighlight}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              + Add
            </button>
          </div>
          {formState.highlights.length > 0 && (
            <ul className="list-disc list-inside mb-2 text-gray-800 dark:text-gray-200">
              {formState.highlights.map((h, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{h}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveHighlight(idx)}
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Homepage Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleHomepageImageChange}
            className="block"
          />
          {formState.homepageImageUrl && (
            <Image
              src={formState.homepageImageUrl}
              alt="Homepage"
              width={192}
              height={144}
              className="mt-2 w-48 h-auto rounded"
            />
          )}
        </div>
        <div className="mb-4 flex items-center gap-2">
          <input
            type="checkbox"
            name="isFeaturedOnHomePage"
            checked={formState.isFeaturedOnHomePage}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 dark:text-blue-500 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          <label className="text-gray-700 dark:text-gray-300">
            Feature on Homepage
          </label>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
        >
          {isEditing ? "Update Product" : "Create Product"}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={resetForm}
            disabled={isSubmitting}
            className={`ml-4 px-6 py-3 bg-gray-500 dark:bg-gray-600 text-white rounded hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Cancel
          </button>
        )}
      </form>

      {/* ───────── Products List ───────── */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/30">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Existing Products
        </h2>

        {loadingList ? (
          <p className="text-gray-700 dark:text-gray-300">Loading...</p>
        ) : (
          <table className="w-full text-left border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="border-b border-gray-200 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold">
                  ID
                </th>
                <th className="border-b border-gray-200 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold">
                  Title
                </th>
                <th className="border-b border-gray-200 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold">
                  Featured?
                </th>
                <th className="border-b border-gray-200 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod, idx) => (
                <tr
                  key={prod.id}
                  className={
                    idx % 2 === 0
                      ? "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600/50"
                  }
                >
                  <td className="border-b border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">
                    {prod.id}
                  </td>
                  <td className="border-b border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">
                    {prod.title}
                  </td>
                  <td className="border-b border-gray-200 dark:border-gray-700 px-4 py-2">
                    {prod.isFeaturedOnHomePage ? (
                      <span className="text-green-600 dark:text-green-400">Yes</span>
                    ) : (
                      <span className="text-red-600 dark:text-red-400">No</span>
                    )}
                  </td>
                  <td className="border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex gap-4">
                    <button
                      onClick={() => loadForEdit(prod)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(prod.id)}
                      disabled={isSubmitting}
                      className={`text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}