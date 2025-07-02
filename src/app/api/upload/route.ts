import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create upload directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'public', 'upload');
    await createUploadDirectoryIfNotExists(uploadDir);

    // Generate unique filename
    const uniqueFilename = `${Date.now()}-${file.name}`;
    const uploadPath = path.join(uploadDir, uniqueFilename);
    
    // Write file to upload directory
    await writeFile(uploadPath, buffer);

    // Return the relative path for storage in the database
    return NextResponse.json({
      path: `/upload/${uniqueFilename}`,
      message: 'File uploaded successfully'
    });

  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}

async function createUploadDirectoryIfNotExists(uploadDir: string) {
  try {
    await import('fs').then(fs => {
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
    });
  } catch (error) {
    console.error('Error creating upload directory:', error);
    throw error;
  }
}