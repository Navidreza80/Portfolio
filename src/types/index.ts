export interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    blurDataURL?: string;
    publishedDate: string;
    isFeatured?: boolean;
    client?: string;
    category?: string;
    duration?: string;
  };
  index: number;
  className?: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}
