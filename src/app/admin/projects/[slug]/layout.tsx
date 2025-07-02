import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Details',
  description: 'View project details in the admin dashboard',
};

// Define the generateStaticParams function to satisfy Next.js type checking
export async function generateStaticParams() {
  // This function is required for Next.js type checking
  // In a real app, you would fetch all possible slugs here
  return [
    { slug: 'placeholder' }
  ];
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}