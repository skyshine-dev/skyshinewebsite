/* -------------------------------------------------------------------------- */
/*  src/app/api/projects/[slug]/route.ts                                      */
/*  GET  /api/projects/:slug   → returns one full "Projects" row              */
/* -------------------------------------------------------------------------- */

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();           // ← adjust if your prisma helper
                                               //   lives elsewhere

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    /* ─────────────── fetch ONE row from the "Projects" table ────────────── */
    const project = await prisma.projects.findUnique({
      where: { slug },
    });

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    /* ───────────── optional: convert JSON columns to JS objects ─────────── */
    const hydrated = {
      ...project,
      problemSolution:     project.problemSolution     as unknown as Record<string, unknown>,
      proofOfConcept:      project.proofOfConcept      as unknown as Record<string, unknown>,
      experienceSection:   project.experienceSection   as unknown as Record<string, unknown>,
      modulesSection:      project.modulesSection      as unknown as Record<string, unknown>,
      processSection:      project.processSection      as unknown as Record<string, unknown>,
      ctaSection:          project.ctaSection          as unknown as Record<string, unknown>,
      impactSection:       project.impactSection       as unknown as Record<string, unknown>,
      statisticsSection:   project.statisticsSection   as unknown as Record<string, unknown>,
      testimonialsSection: project.testimonialsSection as unknown as Record<string, unknown>,
      techStackSection:    project.techStackSection    as unknown as Record<string, unknown>,
    };

    return NextResponse.json(hydrated); // 200 OK
  } catch (err) {
    console.error("[api/projects/[slug]]", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug: id } = params;

  try {
    // Check if project exists
    const project = await prisma.projects.findUnique({
      where: { id },
    });

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    // Delete the project
    await prisma.projects.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("[api/projects/[slug]]", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}