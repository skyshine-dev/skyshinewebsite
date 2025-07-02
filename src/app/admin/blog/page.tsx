// app/components/AdminBlog.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RichTextEditor from '../RichTextEditor';

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

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState<Omit<BlogPost, 'id'>>({
    title: '',
    category: '',
    excerpt: '',
    content: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    slug: '',
    imagePath: '',
    isFeatured: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' }>({
    text: '',
    type: 'success',
  });

  // holds a freshly selected File if the user picks a new image
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    // fetch existing posts
    fetch('/api/blog')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data: BlogPost[]) => setPosts(data))
      .catch(() => setMessage({ text: 'Failed to load posts', type: 'error' }));
  }, []);

  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      excerpt: '',
      content: '',
      author: '',
      date: new Date().toISOString().split('T')[0],
      slug: '',
      imagePath: '',
      isFeatured: false,
    });
    setSelectedPost(null);
    setIsEditing(false);
    setSelectedImage(null);
  };

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post);
    setFormData({ ...post });
    setIsEditing(true);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData((d) => ({
      ...d,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // start with the formData copy
    const payload: Partial<BlogPost> = { ...formData };

    // 1) If there’s a newly selected file, upload it first
    if (selectedImage) {
      const uploadData = new FormData();
      uploadData.append('file', selectedImage);
      try {
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: uploadData,
        });
        if (!uploadRes.ok) throw new Error('Image upload failed');
        const { path } = await uploadRes.json();
        payload.imagePath = path;
      } catch {
        setMessage({ text: 'Image upload failed', type: 'error' });
        return;
      }
    }

    // 2) If editing, attach the ID
    const method = isEditing && selectedPost ? 'PUT' : 'POST';
    if (isEditing && selectedPost) {
      payload.id = selectedPost.id;
      // preserve existing imagePath if no new file chosen
      if (!selectedImage) {
        payload.imagePath = formData.imagePath;
      }
    }

    // 3) Send create/update
    try {
      const res = await fetch('/api/blog', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      const saved = await res.json();

      if (isEditing) {
        setPosts((ps) => ps.map((p) => (p.id === saved.id ? saved : p)));
        setMessage({ text: 'Post updated!', type: 'success' });
      } else {
        setPosts((ps) => [...ps, saved]);
        setMessage({ text: 'Post created!', type: 'success' });
      }
      resetForm();
    } catch {
      setMessage({ text: 'Save failed, try again.', type: 'error' });
    }
  };

  return (
    <div className="min-h-screen pt-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Blog Management</h1>

        {message.text && (
          <div
            className={`p-3 mb-4 rounded ${
              message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Post' : 'Create New Post'}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {['title', 'category', 'author', 'slug'].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  name={field}
                  value={formData[field as keyof BlogPost] as string}
                  onChange={handleInput}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-1">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
              {isEditing && !selectedImage && formData.imagePath && (
                <p className="mt-1 text-sm text-gray-500">Current image: {formData.imagePath}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Excerpt</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInput}
                rows={2}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Content</label>
            <RichTextEditor
              value={formData.content}
              onChange={(html: string) => setFormData((d) => ({ ...d, content: html }))}
              placeholder="Write the full article here..."
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleInput}
              className="h-4 w-4 text-blue-600"
            />
            <label className="ml-2 text-sm font-medium">Featured Post</label>
          </div>

          <div className="flex justify-end space-x-4">
            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
            )}
            <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              {isEditing ? 'Update' : 'Create'}
            </button>
          </div>
        </form>

        {/* List of Posts */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Published Posts</h2>
            <div className="space-y-4">
              {posts.length === 0 && (
                <p className="text-center text-gray-500 dark:text-gray-400">No posts yet.</p>
              )}
              {posts.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 border dark:border-gray-700 rounded"
                >
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{p.excerpt}</p>
                  <div className="mt-2 flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{new Date(p.date).toLocaleDateString()}</span>
                    <button onClick={() => handleEdit(p)} className="text-blue-600 hover:underline">
                      Edit
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}