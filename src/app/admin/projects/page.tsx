// app/services/admin/projects/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import RichTextEditor from "../RichTextEditor";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
// Import only the icons you actually use
import {} from "@heroicons/react/24/outline"; // at top of file
import Image from "next/image";

 
const ICON_CHOICES = [
  "🔥","⚡","🚀","💡","✅","📈","📉","🎯","🔒","💰",
  "🏆","🛠️","🎉","📊","🌟","💻","🧠","📦","🌀","🤖"
] as const;
// ──────────────────────────────────────────────────────────────
// Section TypeScript interfaces (match Prisma JSON shapes)
// ──────────────────────────────────────────────────────────────
// ──────────────────────────────────────────────────────────────
// HeroSection interface
// ──────────────────────────────────────────────────────────────
// ──────────────────────────────────────────────────────────────
// HeroSection interface
// ──────────────────────────────────────────────────────────────
interface HeroSection {
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageFile?: File;  // for upload only
}
interface ProblemSolutionSection {
  heading: string;
  problemTitle: string;
  problemDescription: string;
  problemImages: string[];
  problemImageFiles?: File[];
  idealFor: string[];
  solutionTitle: string;
  solutionDescription: string;
  features: { title: string; description: string; image: string; imageFile?: File }[];
}
interface ProofOfConceptSection {
  heading: string;
  description: string;
  samples: { title: string; description: string; image: string; href: string; imageFile?: File }[];
}
interface ExperienceSection { heading: string; description: string; highlightedText: string; bullets: string[]; image: string; imageFile?: File }
interface ModulesSection { heading: string; description: string; modules: { icon: string; text: string }[] }
interface ProcessSection { heading: string; description: string; image: string; imageFile?: File }
interface CTASection { heading: string; text: string; buttonText: string; buttonHref: string; cost: string }
interface ImpactSection {
  heading: string;
  description: string;
  impacts: {
    highlight: { bullet: string; icon: string; iconFile?: File }[];
    statImage: string;
    statImageFile?: File;
  }[];
}
interface StatisticsSection { heading: string; statistics: { statLabel: string; value: string }[] }
interface TestimonialsSection { heading: string; testimonials: { quote: string; author: string; role: string }[] }
interface TechStackSection { heading: string; description: string; technologies: { name: string; icon: string }[] }

interface ProjectFormData {
  id?: string;
  slug: string;
  description: string;
  category: string;
  isActive: boolean;
  hero: HeroSection;
  problemSolution: ProblemSolutionSection;
  proofOfConcept: ProofOfConceptSection;
  experienceSection: ExperienceSection;
  modulesSection: ModulesSection;
  processSection: ProcessSection;
  ctaSection: CTASection;
  impactSection: ImpactSection;
  statisticsSection: StatisticsSection;
  testimonialsSection: TestimonialsSection;
  techStackSection: TechStackSection;
}

// ──────────────────────────────────────────────────────────────
// Utility: upload image file and return path
// ──────────────────────────────────────────────────────────────
async function uploadImage(file?: File): Promise<string> {
  if (!file) return "";
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch('/api/upload', { method: 'POST', body: fd });
  if (!res.ok) throw new Error('Upload failed');
  const data = await res.json();
  return data.path;
}

// ──────────────────────────────────────────────────────────────
// AdminProjectsPage Component
// ──────────────────────────────────────────────────────────────
export default function AdminProjectsPage() {
  const blank: ProjectFormData = {
    slug: '', category: '', isActive: true, description: '',
    hero: { title: '', tagline: '', description: '', image: '' },
    problemSolution: { heading: '', problemTitle: '', problemDescription: '', problemImages: [], idealFor: [], solutionTitle: '', solutionDescription: '', features: [] },
    proofOfConcept: { heading: '', description: '', samples: [] },
    experienceSection: { heading: '', description: '', highlightedText: '', bullets: [], image: '' },
    modulesSection: { heading: '', description: '', modules: [] },
    processSection: { heading: '', description: '', image: '' },
    ctaSection: { heading: '', text: '', buttonText: '', buttonHref: '', cost: '' },
   impactSection: {
  heading: '',
  description: '',
  impacts: [
    {
      highlight: [{ bullet: '', icon: '' }], // at least one bullet row to start
      statImage: ''
    }
  ]
},
    statisticsSection: { heading: '', statistics: [] },
    testimonialsSection: { heading: '', testimonials: [] },
    techStackSection: { heading: '', description: '', technologies: [] }
  };
  const [formData, setFormData] = useState<ProjectFormData>(blank);
  const [projects, setProjects] = useState<ProjectFormData[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectFormData | null>(null);

  const update = <K extends keyof ProjectFormData>(key: K, value: ProjectFormData[K]) =>
    setFormData(d => ({ ...d, [key]: value }));
    
  // Fetch projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) throw new Error('Failed to fetch projects');
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setMessage('Failed to load projects');
      }
    };

    fetchProjects();
    
    // Check if there's a project to edit in localStorage
    const storedProject = localStorage.getItem('editProject');
    if (storedProject) {
      try {
        const projectData = JSON.parse(storedProject);
        setSelectedProject(projectData);
        setIsEditing(true);
        
        // Map the project data to the form structure
         const mappedData: ProjectFormData = {
           id: projectData.id,
           slug: projectData.slug,
           category: projectData.category || '',
           isActive: projectData.isActive,
           description: projectData.description || '',
           hero: {
             title: projectData.hero?.title || '',
             tagline: projectData.hero?.tagline || '',
             description: projectData.hero?.description || '',
             image: projectData.hero?.image || ''
           },
          problemSolution: projectData.problemSolution,
          proofOfConcept: projectData.proofOfConcept,
          experienceSection: projectData.experienceSection,
          modulesSection: projectData.modulesSection,
          processSection: projectData.processSection,
          ctaSection: projectData.ctaSection,
          impactSection: projectData.impactSection,
          statisticsSection: projectData.statisticsSection,
          testimonialsSection: projectData.testimonialsSection,
          techStackSection: projectData.techStackSection
        };
        
        setFormData(mappedData);
        
        // Clear localStorage
        localStorage.removeItem('editProject');
      } catch (error) {
        console.error('Error parsing stored project:', error);
      }
    }
  }, []);

  // Helper to build dynamic lists
  const buildList = <T,>(items: T[], onChange: (items: T[]) => void, renderItem: (item: T, idx: number) => React.ReactNode) => (
    <div className="space-y-2">
      {items.map(renderItem)}
      <button
        type="button"
        onClick={() => onChange([...items, {} as T])}
        className="flex items-center gap-1 text-blue-600"
      >
        <PlusIcon className="w-4 h-4" /> Add
      </button>
    </div>
  );

  // Submit handler
/* ───────────────────────── handleSubmit ───────────────────────── */
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setMessage('');

  try {
    /* ---------- uploads from other sections stay the same ---------- */
    const heroImage = await uploadImage(formData.hero.imageFile);
    const psImages  = await Promise.all(
      (formData.problemSolution.problemImageFiles || []).map(uploadImage)
    );
    const features  = await Promise.all(
      formData.problemSolution.features.map(async f => ({
        ...f,
        image: f.imageFile ? await uploadImage(f.imageFile) : f.image
      }))
    );
    const samples   = await Promise.all(
      formData.proofOfConcept.samples.map(async s => ({
        ...s,
        image: s.imageFile ? await uploadImage(s.imageFile) : s.image
      }))
    );
    const expImage  = await uploadImage(formData.experienceSection.imageFile);
    const procImage = await uploadImage(formData.processSection.imageFile);

    /* ---------- NEW: iterate over the impacts array ---------- */
    const processedImpacts = await Promise.all(
      formData.impactSection.impacts.map(async blk => {
        const uploadedStat = await uploadImage(blk.statImageFile);
        return {
          ...blk,
          statImage: uploadedStat || blk.statImage,
          // highlight array is already strings; nothing to upload there
        };
      })
    );

    /* ---------- build the payload ---------- */
    const payload: ProjectFormData = {
      ...(isEditing && formData.id ? { id: formData.id } : {}),
      ...formData,
      hero: { ...formData.hero, image: heroImage || formData.hero.image },
      problemSolution: {
        ...formData.problemSolution,
        problemImages: psImages.length
          ? psImages
          : formData.problemSolution.problemImages,
        features
      },
      proofOfConcept: { ...formData.proofOfConcept, samples },
      experienceSection: {
        ...formData.experienceSection,
        image: expImage || formData.experienceSection.image
      },
      processSection: {
        ...formData.processSection,
        image: procImage || formData.processSection.image
      },
      impactSection: { ...formData.impactSection, impacts: processedImpacts },
      /* meta */
      slug: formData.slug,
      description: formData.description,
      category: formData.category,
      isActive: formData.isActive
    };

    const res = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error('Save failed');
    const savedProject = await res.json();
    
    if (isEditing) {
      setProjects(projects.map(p => p.id === savedProject.id ? savedProject : p));
      setMessage('Project updated successfully');
    } else {
      setProjects([savedProject, ...projects]);
      setMessage('Project created successfully');
    }
    
    // Reset form
    setFormData(blank);
    setIsEditing(false);
    setSelectedProject(null);
  } catch (err: unknown) {
    setMessage(err instanceof Error ? err.message : 'An unknown error occurred');
  } finally {
    setLoading(false);
  }
};

  const handleEdit = (project: ProjectFormData) => {
    setSelectedProject(project);
    setIsEditing(true);
    
    // Map the project data to the form structure
    const mappedData: ProjectFormData = {
      id: project.id,
      slug: project.slug,
      category: project.category || '',
      isActive: project.isActive,
      description: project.description || '',
      hero: {
        title: project.hero?.title || '',
        tagline: project.hero?.tagline || '',
        description: project.hero?.description || '',
        image: project.hero?.image || ''
      },
      problemSolution: project.problemSolution,
      proofOfConcept: project.proofOfConcept,
      experienceSection: project.experienceSection,
      modulesSection: project.modulesSection,
      processSection: project.processSection,
      ctaSection: project.ctaSection,
      impactSection: project.impactSection,
      statisticsSection: project.statisticsSection,
      testimonialsSection: project.testimonialsSection,
      techStackSection: project.techStackSection
    };
    
    setFormData(mappedData);
    
    // Scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleCancel = () => {
    setFormData(blank);
    setIsEditing(false);
    setSelectedProject(null);
    setMessage('');
  };
  
  const handleDelete = async (project: ProjectFormData) => {
    if (!confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      return;
    }
    
    try {
      const res = await fetch(`/api/projects/${project.slug}`, {
        method: 'DELETE',
      });
      
      if (!res.ok) throw new Error('Delete failed');
      
      setProjects(projects.filter(p => p.id !== project.id));
      setMessage('Project deleted successfully');
      
      if (selectedProject?.id === project.id) {
        handleCancel();
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      setMessage('Failed to delete project');
    }
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">{isEditing ? 'Edit Project' : 'Create Project'}</h1>
      {message && <div className="mb-4 text-green-600">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Hero Section */}
       {/* ── Hero Section ── */}
<section className="space-y-4">
  <h2 className="text-2xl font-semibold">Hero Section</h2>

  {/* Title */}
  <input
    className="w-full p-2 border rounded"
    placeholder="Title"
    value={formData.hero.title}
    onChange={e =>
      update("hero", { ...formData.hero, title: e.target.value })
    }
  />

  {/* Tagline */}
  <input
    className="w-full p-2 border rounded"
    placeholder="Tagline"
    value={formData.hero.tagline}
    onChange={e =>
      update("hero", { ...formData.hero, tagline: e.target.value })
    }
  />

  {/* Description */}
  <RichTextEditor
    value={formData.hero.description}
    onChange={html =>
      update("hero", { ...formData.hero, description: html })
    }
    placeholder="Description"
  />

  {/* Image Upload */}
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">Hero Image</label>
    <div className="flex items-center gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={e => update('hero', { ...formData.hero, imageFile: e.target.files?.[0] })}
        className="flex-1"
      />
      {formData.hero.image && (
        <div className="relative w-20 h-20">
          <Image 
            src={formData.hero.image} 
            alt="Preview"
            width={80}
            height={80}
            className="w-full h-full object-cover rounded"
          />
          <button
            type="button"
            onClick={() => update('hero', { ...formData.hero, image: '', imageFile: undefined })}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  </div>
</section>

        {/* Problem & Solution Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Problem & Solution</h2>
          <input
            className="w-full p-2 border"
            placeholder="Section Heading"
            value={formData.problemSolution.heading}
            onChange={e => update('problemSolution', { ...formData.problemSolution, heading: e.target.value })}
          />
          <input
            className="w-full p-2 border"
            placeholder="Problem Title"
            value={formData.problemSolution.problemTitle}
            onChange={e => update('problemSolution', { ...formData.problemSolution, problemTitle: e.target.value })}
          />
          <textarea
            className="w-full p-2 border"
            placeholder="Problem Description"
            value={formData.problemSolution.problemDescription}
            onChange={e => update('problemSolution', { ...formData.problemSolution, problemDescription: e.target.value })}
          />
          {/* Problem Images */}
          {buildList(
            formData.problemSolution.problemImages,
            Images => update('problemSolution', { ...formData.problemSolution, problemImages: Images }),
            (Image, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <input
                  type="file"
                  onChange={e => {
                    const files = [...(formData.problemSolution.problemImageFiles || [])];
                    const file = e.target.files?.[0];
                    if (file) {
                      files[idx] = file;
                    }
                    update('problemSolution', { ...formData.problemSolution, problemImageFiles: files });
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    const Images = formData.problemSolution.problemImages.filter((_, i) => i !== idx);
                    update('problemSolution', { ...formData.problemSolution, problemImages: Images });
                  }}
                >
                  <XMarkIcon className="w-5 h-5 text-red-600" />
                </button>
              </div>
            )
          )}
          <input
            className="w-full p-2 border"
            placeholder="Ideal For (comma separated)"
            value={formData.problemSolution.idealFor.join(',')}
            onChange={e =>
              update('problemSolution', {
                ...formData.problemSolution,
                idealFor: e.target.value.split(',').map(s => s.trim())
              })
            }
          />
          <input
            className="w-full p-2 border"
            placeholder="Solution Title"
            value={formData.problemSolution.solutionTitle}
            onChange={e => update('problemSolution', { ...formData.problemSolution, solutionTitle: e.target.value })}
          />
          <textarea
            className="w-full p-2 border"
            placeholder="Solution Description"
            value={formData.problemSolution.solutionDescription}
            onChange={e => update('problemSolution', { ...formData.problemSolution, solutionDescription: e.target.value })}
          />
          {/* Features */}
          {buildList(
            formData.problemSolution.features,
            fts => update('problemSolution', { ...formData.problemSolution, features: fts }),
            (f, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-2">
                <input
                  className="p-2 border"
                  placeholder="Feature Title"
                  value={f.title}
                  onChange={e => {
                    const fs = [...formData.problemSolution.features];
                    fs[idx].title = e.target.value;
                    update('problemSolution', { ...formData.problemSolution, features: fs });
                  }}
                />
                <input
                  className="p-2 border"
                  placeholder="Feature Desc"
                  value={f.description}
                  onChange={e => {
                    const fs = [...formData.problemSolution.features];
                    fs[idx].description = e.target.value;
                    update('problemSolution', { ...formData.problemSolution, features: fs });
                  }}
                />
                <input
                  type="file"
                  onChange={e => {
                    const fs = [...formData.problemSolution.features];
                    fs[idx].imageFile = e.target.files?.[0];
                    update('problemSolution', { ...formData.problemSolution, features: fs });
                  }}
                />
              </div>
            )
          )}
        </section>

        {/* Proof of Concept Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Proof of Concept</h2>
          <input
            className="w-full p-2 border"
            placeholder="Section Heading"
            value={formData.proofOfConcept.heading}
            onChange={e => update('proofOfConcept', { ...formData.proofOfConcept, heading: e.target.value })}
          />
          <textarea
            className="w-full p-2 border"
            placeholder="Description"
            value={formData.proofOfConcept.description}
            onChange={e => update('proofOfConcept', { ...formData.proofOfConcept, description: e.target.value })}
          />
          {/* Samples */}
          {buildList(
            formData.proofOfConcept.samples,
            samps => update('proofOfConcept', { ...formData.proofOfConcept, samples: samps }),
            (s, idx) => (
              <div key={idx} className="grid grid-cols-4 gap-2">
                <input
                  className="p-2 border"
                  placeholder="Sample Title"
                  value={s.title}
                  onChange={e => {
                    const ss = [...formData.proofOfConcept.samples];
                    ss[idx].title = e.target.value;
                    update('proofOfConcept', { ...formData.proofOfConcept, samples: ss });
                  }}
                />
                <input
                  className="p-2 border"
                  placeholder="Description"
                  value={s.description}
                  onChange={e => {
                    const ss = [...formData.proofOfConcept.samples];
                    ss[idx].description = e.target.value;
                    update('proofOfConcept', { ...formData.proofOfConcept, samples: ss });
                  }}
                />
                <input
                  type="file"
                  onChange={e => {
                    const ss = [...formData.proofOfConcept.samples];
                    ss[idx].imageFile = e.target.files?.[0];
                    update('proofOfConcept', { ...formData.proofOfConcept, samples: ss });
                  }}
                />
                <input
                  className="p-2 border"
                  placeholder="Href"
                  value={s.href}
                  onChange={e => {
                    const ss = [...formData.proofOfConcept.samples];
                    ss[idx].href = e.target.value;
                    update('proofOfConcept', { ...formData.proofOfConcept, samples: ss });
                  }}
                />
              </div>
            )
          )}
        </section>

        {/* Our Experience Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Our Experience</h2>
          <input
            className="w-full p-2 border"
            placeholder="Heading"
            value={formData.experienceSection.heading}
            onChange={e => update('experienceSection', { ...formData.experienceSection, heading: e.target.value })}
          />
          <textarea
            className="w-full p-2 border"
            placeholder="Description"
            value={formData.experienceSection.description}
            onChange={e => update('experienceSection', { ...formData.experienceSection, description: e.target.value })}
          />
          <input
            className="w-full p-2 border"
            placeholder="Highlighted Text"
            value={formData.experienceSection.highlightedText}
            onChange={e => update('experienceSection', { ...formData.experienceSection, highlightedText: e.target.value })}
          />
          {/* Bullets */}
          {buildList(
            formData.experienceSection.bullets,
            bs => update('experienceSection', { ...formData.experienceSection, bullets: bs }),
            (b, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <input
                  className="flex-1 p-2 border"
                  placeholder="Bullet"
                  value={b}
                  onChange={e => {
                    const bs = [...formData.experienceSection.bullets];
                    bs[idx] = e.target.value;
                    update('experienceSection', { ...formData.experienceSection, bullets: bs });
                  }}
                />
                <button type="button" onClick={() => {
                  const bs = formData.experienceSection.bullets.filter((_, i) => i !== idx);
                  update('experienceSection', { ...formData.experienceSection, bullets: bs });
                }}>
                  <XMarkIcon className="w-5 h-5 text-red-600" />
                </button>
              </div>
            )
          )}
          <input
            type="file"
            onChange={e => update('experienceSection', { ...formData.experienceSection, imageFile: e.target.files?.[0] })}
          />
        </section>

        {/* Modules Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Modules</h2>
          <input
            className="w-full p-2 border"
            placeholder="Heading"
            value={formData.modulesSection.heading}
            onChange={e => update('modulesSection', { ...formData.modulesSection, heading: e.target.value })}
          />
          <textarea
            className="w-full p-2 border"
            placeholder="Description"
            value={formData.modulesSection.description}
            onChange={e => update('modulesSection', { ...formData.modulesSection, description: e.target.value })}
          />
          {/* Modules List */}
          {buildList(
            formData.modulesSection.modules,
            mods => update('modulesSection', { ...formData.modulesSection, modules: mods }),
            (m, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <input
                  className="p-2 border"
                  placeholder="Icon"
                  value={m.icon}
                  onChange={e => {
                    const ms = [...formData.modulesSection.modules];
                    ms[idx].icon = e.target.value;
                    update('modulesSection', { ...formData.modulesSection, modules: ms });
                  }}
                />
                <input
                  className="flex-1 p-2 border"
                  placeholder="Text"
                  value={m.text}
                  onChange={e => {
                    const ms = [...formData.modulesSection.modules];
                    ms[idx].text = e.target.value;
                    update('modulesSection', { ...formData.modulesSection, modules: ms });
                  }}
                />
                <button type="button" onClick={() => {
                  const ms = formData.modulesSection.modules.filter((_, i) => i !== idx);
                  update('modulesSection', { ...formData.modulesSection, modules: ms });
                }}>
                  <XMarkIcon className="w-5 h-5 text-red-600" />
                </button>
              </div>
            )
          )}
        </section>

        {/* Process Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Process</h2>
          <input
            className="w-full p-2 border"
            placeholder="Heading"
            value={formData.processSection.heading}
            onChange={e => update('processSection', { ...formData.processSection, heading: e.target.value })}
          />
          <textarea
            className="w-full p-2 border"
            placeholder="Description"
            value={formData.processSection.description}
            onChange={e => update('processSection', { ...formData.processSection, description: e.target.value })}
          />
          <input
            type="file"
            onChange={e => update('processSection', { ...formData.processSection, imageFile: e.target.files?.[0] })}
          />
        </section>

        {/* CTA Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Call To Action</h2>
          <input
            className="w-full p-2 border"
            placeholder="Heading"
            value={formData.ctaSection.heading}
            onChange={e => update('ctaSection', { ...formData.ctaSection, heading: e.target.value })}
          />
          <textarea
            className="w-full p-2 border"
            placeholder="Text"
            value={formData.ctaSection.text}
            onChange={e => update('ctaSection', { ...formData.ctaSection, text: e.target.value })}
          />
          <input
            className="w-full p-2 border"
            placeholder="Button Text"
            value={formData.ctaSection.buttonText}
            onChange={e => update('ctaSection', { ...formData.ctaSection, buttonText: e.target.value })}
          />
          <input
            className="w-full p-2 border"
            placeholder="Button Href"
            value={formData.ctaSection.buttonHref}
            onChange={e => update('ctaSection', { ...formData.ctaSection, buttonHref: e.target.value })}
          />
          <input
            className="w-full p-2 border"
            placeholder="Cost"
            value={formData.ctaSection.cost}
            onChange={e => update('ctaSection', { ...formData.ctaSection, cost: e.target.value })}
          />
        </section>
{/* ─────────────────────── META (slug · category · active) ─────────────────────── */}
<section className="space-y-4">
  <h2 className="text-2xl font-semibold">Project Meta</h2>

  {/* Slug */}
  <input
    className="w-full p-2 border rounded"
    placeholder="Slug (unique identifier, e.g. `great-crm-app`)"
    value={formData.slug}
    onChange={e => update('slug', e.target.value)}
  />

  {/* Category */}
  <input
    className="w-full p-2 border rounded"
    placeholder="Category (e.g. CRM, E-commerce, AI …)"
    value={formData.category}
    onChange={e => update('category', e.target.value)}
  />

  {/* Active Toggle */}
  <label className="flex items-center gap-2">
    <input
      type="checkbox"
      checked={formData.isActive}
      onChange={e => update('isActive', e.target.checked)}
      className="h-4 w-4"
    />
    <span className="select-none">Active (show on site)</span>
  </label>
</section>
        {/* Impact Section */}
      
        <section className="space-y-6">
  <h2 className="text-2xl font-semibold">Impact Section</h2>

  {/* Heading & description */}
  <input
    className="w-full p-2 border rounded"
    placeholder="Heading"
    value={formData.impactSection.heading}
    onChange={(e) =>
      update("impactSection", { ...formData.impactSection, heading: e.target.value })
    }
  />
  <textarea
    className="w-full p-2 border rounded"
    placeholder="Description"
    value={formData.impactSection.description}
    onChange={(e) =>
      update("impactSection", { ...formData.impactSection, description: e.target.value })
    }
  />

  {/* Impact rows */}
  {buildList(
    formData.impactSection.impacts,
    (rows) => update("impactSection", { ...formData.impactSection, impacts: rows }),
    (row, rowIdx) => (
      <div key={rowIdx} className="space-y-4 rounded-lg border p-4 bg-gray-50 dark:bg-gray-800">
        {/* highlight bullets list */}
        <h3 className="font-medium">Highlight Points</h3>

        {buildList(
          row.highlight || [],
          (hlArr) => {
            const rows = [...formData.impactSection.impacts];
            rows[rowIdx] = { ...rows[rowIdx], highlight: hlArr };
            update("impactSection", { ...formData.impactSection, impacts: rows });
          },
          (hl, hlIdx) => (
            <div key={hlIdx} className="grid grid-cols-[1fr_auto] gap-2">
              <input
                className="p-2 border rounded"
                placeholder="Bullet text"
                value={hl.bullet}
                onChange={(e) => {
                  const rows = [...formData.impactSection.impacts];
                  rows[rowIdx].highlight![hlIdx].bullet = e.target.value;
                  update("impactSection", { ...formData.impactSection, impacts: rows });
                }}
              />

              {/* icon dropdown */}
              <select
                className="p-2 border rounded bg-white dark:bg-gray-900"
                value={hl.icon}
                onChange={(e) => {
                  const rows = [...formData.impactSection.impacts];
                  rows[rowIdx].highlight![hlIdx].icon = e.target.value;
                  update("impactSection", { ...formData.impactSection, impacts: rows });
                }}
              >
                <option value="">Choose icon…</option>
                {ICON_CHOICES.map((ic) => (
                  <option key={ic} value={ic}>
                    {ic}
                  </option>
                ))}
              </select>
            </div>
          )
        )}

        {/* statistics image */}
        <div>
          <label className="block text-sm font-medium">Statistics Image</label>
          <div className="flex items-center gap-4 mt-1">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const rows = [...formData.impactSection.impacts];
                rows[rowIdx].statImageFile = e.target.files?.[0];
                update("impactSection", { ...formData.impactSection, impacts: rows });
              }}
              className="flex-1"
            />
            {row.statImage && (
              <div className="relative w-24 h-16">
                <Image
                  src={row.statImage}
                  alt="statistic"
                  width={96}
                  height={64}
                  className="object-cover w-full h-full rounded"
                />
                <button
                  type="button"
                  onClick={() => {
                    const rows = [...formData.impactSection.impacts];
                    rows[rowIdx].statImage = "";
                    rows[rowIdx].statImageFile = undefined;
                    update("impactSection", { ...formData.impactSection, impacts: rows });
                  }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  )}
</section>

        {/* Statistics Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Statistics</h2>
          <input
            className="w-full p-2 border"
            placeholder="Heading"
            value={formData.statisticsSection.heading}
            onChange={e => update('statisticsSection', { ...formData.statisticsSection, heading: e.target.value })}
          />
          {/* Stats */}
          {buildList(
            formData.statisticsSection.statistics,
            stats => update('statisticsSection', { ...formData.statisticsSection, statistics: stats }),
            (s, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <input
                  className="flex-1 p-2 border"
                  placeholder="Label"
                  value={s.statLabel}
                  onChange={e => {
                    const ss = [...formData.statisticsSection.statistics];
                    ss[idx].statLabel = e.target.value;
                    update('statisticsSection', { ...formData.statisticsSection, statistics: ss });
                  }}
                />
                <input
                  className="p-2 border"
                  placeholder="Value"
                  value={s.value}
                  onChange={e => {
                    const ss = [...formData.statisticsSection.statistics];
                    ss[idx].value = e.target.value;
                    update('statisticsSection', { ...formData.statisticsSection, statistics: ss });
                  }}
                />
                <button type="button" onClick={() => {
                  const ss = formData.statisticsSection.statistics.filter((_, i) => i !== idx);
                  update('statisticsSection', { ...formData.statisticsSection, statistics: ss });
                }}>
                  <XMarkIcon className="w-5 h-5 text-red-600" />
                </button>
              </div>
            )
          )}
        </section>

        {/* Testimonials Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Testimonials</h2>  
          <input
            className="w-full p-2 border"
            placeholder="Heading"
            value={formData.testimonialsSection.heading}
            onChange={e => update('testimonialsSection', { ...formData.testimonialsSection, heading: e.target.value })}
          />
          {buildList(
            formData.testimonialsSection.testimonials,
            t => update('testimonialsSection', { ...formData.testimonialsSection, testimonials: t }),
            (t, idx) => (
              <div key={idx} className="space-y-1">
                <textarea
                  className="w-full p-2 border"
                  placeholder="Quote"
                  value={t.quote}
                  onChange={e => {
                    const arr = [...formData.testimonialsSection.testimonials];
                    arr[idx].quote = e.target.value;
                    update('testimonialsSection', { ...formData.testimonialsSection, testimonials: arr });
                  }}
                />
                <div className="flex gap-2">
                  <input
                    className="flex-1 p-2 border"
                    placeholder="Author"
                    value={t.author}
                    onChange={e => {
                      const arr = [...formData.testimonialsSection.testimonials];
                      arr[idx].author = e.target.value;
                      update('testimonialsSection', { ...formData.testimonialsSection, testimonials: arr });
                    }}
                  />
                  <input
                    className="flex-1 p-2 border"
                    placeholder="Role"
                    value={t.role}
                    onChange={e => {
                      const arr = [...formData.testimonialsSection.testimonials];
                      arr[idx].role = e.target.value;
                      update('testimonialsSection', { ...formData.testimonialsSection, testimonials: arr });
                    }}
                  />
                  <button type="button" onClick={() => {
                    const arr = formData.testimonialsSection.testimonials.filter((_, i) => i !== idx);
                    update('testimonialsSection', { ...formData.testimonialsSection, testimonials: arr });
                  }}>
                    <XMarkIcon className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              </div>
            )
          )}
        </section>

        {/* Tech Stack Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <input
            className="w-full p-2 border"
            placeholder="Heading"
            value={formData.techStackSection.heading}
            onChange={e => update('techStackSection', { ...formData.techStackSection, heading: e.target.value })}
          />
          <textarea
            className="w-full p-2 border"
            placeholder="Description"
            value={formData.techStackSection.description}
            onChange={e => update('techStackSection', { ...formData.techStackSection, description: e.target.value })}
          />
          {buildList(
            formData.techStackSection.technologies,
            techs => update('techStackSection', { ...formData.techStackSection, technologies: techs }),
            (t, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <input
                  className="p-2 border"
                  placeholder="Name"
                  value={t.name}
                  onChange={e => {
                    const arr = [...formData.techStackSection.technologies];
                    arr[idx].name = e.target.value;
                    update('techStackSection', { ...formData.techStackSection, technologies: arr });
                  }}
                />
                <input
                  className="flex-1 p-2 border"
                  placeholder="Icon"
                  value={t.icon}
                  onChange={e => {
                    const arr = [...formData.techStackSection.technologies];
                    arr[idx].icon = e.target.value;
                    update('techStackSection', { ...formData.techStackSection, technologies: arr });
                  }}
                />
                <button type="button" onClick={() => {
                  const arr = formData.techStackSection.technologies.filter((_, i) => i !== idx);
                  update('techStackSection', { ...formData.techStackSection, technologies: arr });
                }}>
                  <XMarkIcon className="w-5 h-5 text-red-600" />
                </button>
              </div>
            )
          )}
        </section>

        <div className="flex space-x-4">
          {isEditing && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {loading ? "Saving..." : isEditing ? "Update Project" : "Save Project"}
          </button>
        </div>
      </form>
      
      {/* List of Projects */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Existing Projects</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          {projects.length === 0 ? (
            <p className="p-6 text-center text-gray-500">No projects found</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Created</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {project.previewImage && (
                            <Image src={project.previewImage} alt={project.title} width={40} height={40} className="h-10 w-10 rounded-full mr-3 object-cover" />
                          )}
                          <div>
                            <div className="font-medium">{project.title}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">{project.tagline}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {project.category || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {project.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {new Date(project.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button
                          onClick={() => handleEdit(project)}
                          className="text-blue-600 hover:text-blue-900 dark:hover:text-blue-400"
                        >
                          Edit
                        </button>
                        <a
                          href={`/admin/projects/${project.slug}`}
                          className="text-green-600 hover:text-green-900 dark:hover:text-green-400"
                        >
                          View
                        </a>
                        <button
                          onClick={() => handleDelete(project)}
                          className="text-red-600 hover:text-red-900 dark:hover:text-red-400"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}