// app/api/project/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

interface Params {
  params: { slug: string };
}

// GET /api/project/:slug — fetch single project
export async function GET(_req: NextRequest, { params }: Params) {
  const { slug } = params;
  try {
    const project = await prisma.project.findUnique({ where: { slug } });
    if (!project) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error("GET /api/project/[slug] error:", error);
    return NextResponse.json({ message: "Failed to fetch" }, { status: 500 });
  }
}

// PUT /api/project/:slug — update existing project
export async function PUT(req: NextRequest, { params }: Params) {
  const { slug } = params;
  try {
    const body = await req.json();
    const {
      title,
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

    // You could validate required fields here (e.g. title, description, fullDesc, previewImage)
    if (!title || !description || !fullDesc || !previewImage) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Attempt to update. We match by slug, but you could also match by id if desired.
    const updated = await prisma.project.update({
      where: { slug },
      data: {
        title,
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

    return NextResponse.json(updated, { status: 200 });
  } catch (error: unknown) {
    console.error("PUT /api/project/[slug] error:", error);
    // If the slug doesn't exist, Prisma throws a P2025 "Record to update not found"  
    if (error && typeof error === 'object' && 'code' in error && error.code === "P2025") {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Failed to update" }, { status: 500 });
  }
}

// DELETE /api/project/:slug — delete project
export async function DELETE(_req: NextRequest, { params }: Params) {
  const { slug } = params;
  try {
    await prisma.project.delete({ where: { slug } });
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error: unknown) {
    console.error("DELETE /api/project/[slug] error:", error);
    if (error && typeof error === 'object' && 'code' in error && error.code === "P2025") {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Failed to delete" }, { status: 500 });
  }
}