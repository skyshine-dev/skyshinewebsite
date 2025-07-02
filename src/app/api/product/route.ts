// File: src/app/api/product/route.ts

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db"; // adjust path if necessary

/**
 * GET /api/product
 *   - Returns all products (ordered by creation date desc).
 */
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(products);
  } catch (err) {
    console.error("GET /api/product error:", err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

/**
 * Types for product data structures
 */
interface KeyFeature {
  number: number;
  title: string;
  desc: string;
}

interface PlatformExample {
  label: string;
  url: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface ProductData {
  id: string;
  title: string;
  description: string;
  icon: string;
  heroImageUrl: string;
  keyFeatures: KeyFeature[];
  platformExamples: PlatformExample[];
  testimonials: Testimonial[];
  previewDescription: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaImageUrl?: string;
  tagline: string;
  highlights: string[];
  homepageImageUrl: string;
  isFeaturedOnHomePage: boolean;
}

/**
 * POST /api/product
 *   - Create a brand‐new product record.
 *   - Expects JSON body matching the Prisma model, including the new ctaImageUrl field
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as ProductData;

    // Basic validation: require an ID
    if (!body.id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    // Create new product, including the ctaImageUrl field
    const newProduct = await prisma.product.create({
      data: {
        id: body.id,
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
        ctaImageUrl: body.ctaImageUrl ?? null, // handle optional field
        tagline: body.tagline,
        highlights: body.highlights,
        homepageImageUrl: body.homepageImageUrl,
        isFeaturedOnHomePage: body.isFeaturedOnHomePage ?? false,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (err: unknown) {
    console.error("POST /api/product error:", err);

    // Handle Prisma unique constraint violation on ID
    if (
      err && 
      typeof err === 'object' && 
      'code' in err && 
      err.code === "P2002" &&
      'meta' in err && 
      err.meta && 
      typeof err.meta === 'object' && 
      'target' in err.meta && 
      Array.isArray(err.meta.target) &&
      err.meta.target.includes("id")
    ) {
      return NextResponse.json(
        { error: `Product ID '${err.meta.target[0]}' already exists` },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: err.message || "Failed to create product" },
      { status: 500 }
    );
  }
}