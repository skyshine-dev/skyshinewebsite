import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: {
        date: 'desc'
      }
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const post = await prisma.blogPost.create({
      data: {
        title: data.title,
        category: data.category,
        excerpt: data.excerpt,
        content: data.content,
        author: data.author,
        slug: data.slug,
        imagePath: data.imagePath,
        isFeatured: data.isFeatured
      }
    });
    return NextResponse.json(post);
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const post = await prisma.blogPost.update({
      where: { id: data.id },
      data: {
        title: data.title,
        category: data.category,
        excerpt: data.excerpt,
        content: data.content,
        author: data.author,
        slug: data.slug,
        imagePath: data.imagePath,
        isFeatured: data.isFeatured
      }
    });
    return NextResponse.json(post);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }
    await prisma.blogPost.delete({
      where: { id }
    });
    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}