import type { Asset, Entry, EntryFields } from 'contentful';

// Define the BlogPostFields interface for the fields of a blog post
interface BlogPostFields {
  title: string;
  shortDescription?: string;
  content: any;
  featuredImage: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  publishedDate?: string;
  slug?: string;
}

// Define a type that satisfies the EntrySkeletonType constraint
export interface BlogPostEntrySkeleton {
  fields: BlogPostFields;
  contentTypeId: 'pageBlogPost'; // Specify the content type ID
}

// Define the BlogPost type for the transformed response
export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: any; // Adjust this if content is a specific type, e.g., rich-text JSON
  category: string;
  image: string;
  date: string;
  slug: string;
};

// Type for Contentful entries
export type ContentfulBlogPost = Entry<BlogPostEntrySkeleton>;