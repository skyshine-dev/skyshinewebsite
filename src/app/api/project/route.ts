// app/api/project/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';



// GET /api/project — Fetch all active projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('GET /api/project error:', error);
    return NextResponse.json({ message: 'Failed to fetch projects' }, { status: 500 });
  }
}

// POST /api/project — Save a new project
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      title,
      slug,
      category,  
      description,
      fullDesc,
      previewImage,
      tools,
      features,
      examples,
      statistics,
      testimonial,
      isActive,
    } = body;

    if (!title || !slug || !description || !fullDesc || !previewImage) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newProject = await prisma.project.create({
      data: {
        title,
        slug,
        category,  
        description,
        fullDesc,
        previewImage,
        tools,
        features,
        examples,
        statistics,
        testimonial,
        isActive: isActive ?? true,
      },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('POST /api/project error:', error);
    return NextResponse.json({ message: 'Failed to save project' }, { status: 500 });
  }
}