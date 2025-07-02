"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  image?: string;
}

interface ProblemSolution {
  heading: string;
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  features: Feature[];
  problemImages: string[];
  idealFor: string[];
}

interface ProofOfConcept {
  title: string;
  description: string;
  imageUrl?: string;
}

interface ExperienceSection {
  title: string;
  description: string;
  items: Array<{ title: string; description: string }>;
}

interface ModulesSection {
  title: string;
  description: string;
  modules: Array<{ title: string; description: string; imageUrl?: string }>;
}

interface ProcessSection {
  title: string;
  description: string;
  steps: Array<{ title: string; description: string; imageUrl?: string }>;
}

interface CtaSection {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

interface ImpactSection {
  title: string;
  description: string;
  items: Array<{ title: string; description: string }>;
}

interface StatisticsSection {
  title: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
}

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  imageUrl?: string;
}

interface TestimonialsSection {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

interface TechStackSection {
  title: string;
  description: string;
  technologies: Array<{ name: string; imageUrl?: string }>;
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  previewImage: string;
  slug: string;
  category: string;
  isActive: boolean;
  problemSolution: ProblemSolution;
  proofOfConcept: ProofOfConcept;
  experienceSection: ExperienceSection;
  modulesSection: ModulesSection;
  processSection: ProcessSection;
  ctaSection: CtaSection;
  impactSection: ImpactSection;
  statisticsSection: StatisticsSection;
  testimonialsSection: TestimonialsSection;
  techStackSection: TechStackSection;
  createdAt: string;
  updatedAt: string;
}

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        // Fetch project by slug
        const response = await fetch(`/api/projects/${slug}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch project');
        }
        
        const data = await response.json();
        setProject(data);
      } catch (err) {
        console.error('Error fetching project:', err);
        setError('Failed to load project details');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  const handleEdit = () => {
    // Store the project data in localStorage to be used by the edit form
    if (project) {
      localStorage.setItem('editProject', JSON.stringify(project));
      router.push('/admin/projects');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <div className="animate-pulse">Loading project details...</div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen pt-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <div className="text-red-500">{error || 'Project not found'}</div>
          <Link href="/admin/projects" className="text-blue-500 hover:underline mt-4 inline-block">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Project Details</h1>
          <div className="space-x-4">
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Edit Project
            </button>
            <Link
              href="/admin/projects"
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 inline-block"
            >
              Back to Projects
            </Link>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          {/* Hero Section */}
          <div className="p-6 border-b dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Hero Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Title</p>
                <p className="font-medium">{project.title}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Tagline</p>
                <p className="font-medium">{project.tagline}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-500 dark:text-gray-400">Description</p>
                <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: project.description }} />
              </div>
              {project.previewImage && (
                <div className="md:col-span-2">
                  <p className="text-gray-500 dark:text-gray-400">Preview Image</p>
                  <Image src={project.previewImage} alt={project.title} className="mt-2 max-h-60 object-contain" />
                </div>
              )}
            </div>
          </div>

          {/* Meta Section */}
          <div className="p-6 border-b dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Project Meta</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Slug</p>
                <p className="font-medium">{project.slug}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Category</p>
                <p className="font-medium">{project.category || 'None'}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Status</p>
                <p className="font-medium">
                  {project.isActive ? (
                    <span className="text-green-600">Active</span>
                  ) : (
                    <span className="text-red-600">Inactive</span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Problem & Solution Section */}
          <div className="p-6 border-b dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Problem & Solution</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Heading</p>
                <p className="font-medium">{project.problemSolution.heading}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Problem Title</p>
                <p className="font-medium">{project.problemSolution.problemTitle}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Problem Description</p>
                <p>{project.problemSolution.problemDescription}</p>
              </div>
              {project.problemSolution.problemImages && project.problemSolution.problemImages.length > 0 && (
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Problem Images</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.problemSolution.problemImages.map((img: string, i: number) => (
                      <Image key={i} src={img} alt={`Problem ${i + 1}`} className="h-20 w-auto object-contain" />
                    ))}
                  </div>
                </div>
              )}
              {project.problemSolution.idealFor && project.problemSolution.idealFor.length > 0 && (
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Ideal For</p>
                  <ul className="list-disc pl-5 mt-1">
                    {project.problemSolution.idealFor.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <p className="text-gray-500 dark:text-gray-400">Solution Title</p>
                <p className="font-medium">{project.problemSolution.solutionTitle}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Solution Description</p>
                <p>{project.problemSolution.solutionDescription}</p>
              </div>
              {project.problemSolution.features && project.problemSolution.features.length > 0 && (
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Features</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {project.problemSolution.features.map((feature: Feature, i: number) => (
                      <div key={i} className="border dark:border-gray-700 p-3 rounded">
                        <p className="font-medium">{feature.title}</p>
                        <p className="text-sm">{feature.description}</p>
                        {feature.image && (
                          <Image src={feature.image} alt={feature.title} className="mt-2 h-16 object-contain" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Other sections would follow the same pattern */}
          {/* For brevity, I'm showing just a few key sections */}

          {/* Created/Updated Info */}
          <div className="p-6 text-sm text-gray-500 dark:text-gray-400">
            <p>Created: {new Date(project.createdAt).toLocaleString()}</p>
            <p>Last Updated: {new Date(project.updatedAt).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}