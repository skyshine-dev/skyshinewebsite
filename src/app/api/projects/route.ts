import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Determine if we're updating an existing project by ID
    const whereClause = data.id 
      ? { id: data.id } 
      : { slug: data.slug };

    // Create or update project
    const project = await prisma.projects.upsert({
      where: whereClause,
      update: {
        title: data.hero.title,
        tagline: data.hero.tagline,
        description: data.hero.description,
        previewImage: data.hero.image,
        category: data.category,
        isActive: data.isActive,
        problemSolution: {
          heading: data.problemSolution.heading,
          problemTitle: data.problemSolution.problemTitle,
          problemDescription: data.problemSolution.problemDescription,
          problemImage: data.problemSolution.problemImage,
          idealFor: data.problemSolution.idealFor,
          solutionTitle: data.problemSolution.solutionTitle,
          solutionDescription: data.problemSolution.solutionDescription,
          features: data.problemSolution.features
        },
        proofOfConcept: {
          heading: data.proofOfConcept.heading,
          description: data.proofOfConcept.description,
          samples: data.proofOfConcept.samples
        },
        experienceSection: {
          heading: data.experienceSection.heading,
          description: data.experienceSection.description,
          highlightedText: data.experienceSection.highlightedText,
          bullets: data.experienceSection.bullets,
          image: data.experienceSection.image
        },
        modulesSection: {
          heading: data.modulesSection.heading,
          description: data.modulesSection.description,
          modules: data.modulesSection.modules
        },
        processSection: {
          heading: data.processSection.heading,
          description: data.processSection.description,
          image: data.processSection.image
        },
        ctaSection: {
          heading: data.ctaSection.heading,
          text: data.ctaSection.text,
          buttonText: data.ctaSection.buttonText,
          buttonHref: data.ctaSection.buttonHref,
          cost: data.ctaSection.cost
        },
        impactSection: {
          heading: data.impactSection.heading,
          description: data.impactSection.description,
          impacts: data.impactSection.impacts
        },
        statisticsSection: {
          heading: data.statisticsSection.heading,
          statistics: data.statisticsSection.statistics
        },
        testimonialsSection: {
          heading: data.testimonialsSection.heading,
          testimonials: data.testimonialsSection.testimonials
        },
        techStackSection: {
          heading: data.techStackSection.heading,
          description: data.techStackSection.description,
          technologies: data.techStackSection.technologies
        }
      },
      create: {
        slug: data.slug,
        title: data.hero.title,
        tagline: data.hero.tagline,
        description: data.hero.description,
        previewImage: data.hero.image,
        category: data.category,
        isActive: data.isActive,
        problemSolution: data.problemSolution,
        proofOfConcept: data.proofOfConcept,
        experienceSection: data.experienceSection,
        modulesSection: data.modulesSection,
        processSection: data.processSection,
        ctaSection: data.ctaSection,
        impactSection: data.impactSection,
        statisticsSection: data.statisticsSection,
        testimonialsSection: data.testimonialsSection,
        techStackSection: data.techStackSection
      }
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error('Error saving project:', error);
    return NextResponse.json(
      { error: 'Failed to save project' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const projects = await prisma.projects.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}