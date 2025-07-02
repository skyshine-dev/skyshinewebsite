// File: src/app/api/product/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db"; // adjust path if needed

/**
 * GET /api/product/:id
 *   - Fetch a single product by its ID.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
  } catch (err) {
    console.error(`GET /api/product/${id} error:`, err);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/product/:id
 *   - Update an existing product.
 *   - Expects JSON payload matching the Prisma model fields, including ctaImageUrl.
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const body = await req.json();

    // Check existence
    const existing = await prisma.product.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    // Update, including ctaImageUrl
    const updated = await prisma.product.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
        icon: body.icon,
        heroImageUrl: body.heroImageUrl,
        keyFeatures: body.keyFeatures,
        platformExamples: body.platformExamples,
        testimonials: body.testimonials,
        previewDescription: body.previewDescription,
        ctaHeading: body.ctaHeading,
        ctaDescription: body.ctaDescription,
        ctaImageUrl: body.ctaImageUrl || null,
        tagline: body.tagline,
        highlights: body.highlights,
        homepageImageUrl: body.homepageImageUrl,
        isFeaturedOnHomePage: body.isFeaturedOnHomePage,
        href: body.href
      },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error(`PUT /api/product/${id} error:`, err);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/product/:id
 *   - Delete a product by ID.
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    // Ensure it exists
    const existing = await prisma.product.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error(`DELETE /api/product/${id} error:`, err);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}