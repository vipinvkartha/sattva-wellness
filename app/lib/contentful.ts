import { createClient } from 'contentful';
import type { BlogPost, BlogPostEntrySkeleton } from '../types/contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
  host: 'cdn.contentful.com',
});

// Fetch all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries<BlogPostEntrySkeleton>({
      content_type: 'pageBlogPost',
      order: ['-sys.createdAt'],
    });
    return response.items
      .filter(
        (item) =>
          typeof item.fields.title === 'string' && // Ensure title is a string
          item.fields.content &&
          item.fields.featuredImage?.fields?.file?.url
      )
      .map((item) => ({
        id: item.sys.id,
        title: item.fields.title,
        excerpt: item.fields.shortDescription ? item.fields.shortDescription : 'Read more...', // Safely call toString()
        content: item.fields.content,
        category: 'wellness',
        image: `https:${item.fields.featuredImage.fields.file.url}`,
        date: item.fields.publishedDate ? item.fields.publishedDate : item.sys.createdAt.toString(), // Safely handle date conversion
        slug: item.fields.slug ? item.fields.slug : '', // Safely handle slug conversion
      }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch a single blog post by ID
export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const entry = await client.getEntry<BlogPostEntrySkeleton>(id);

    if (!entry.fields.title || !entry.fields.content) {
      return null;
    }

    return {
      id: entry.sys.id,
      title: entry.fields.title,
      excerpt: entry.fields.shortDescription ? entry.fields.shortDescription : '', // Safely call toString()
      content: entry.fields.content,
      category: 'wellness',
      image: entry.fields.featuredImage?.fields?.file?.url
        ? `https:${entry.fields.featuredImage.fields.file.url}`
        : '/gallery/camp1.jpg',
      date: entry.fields.publishedDate ? entry.fields.publishedDate : entry.sys.createdAt.toString(), // Safely handle date conversion
      slug: entry.fields.slug ? entry.fields.slug : '', // Safely handle slug conversion
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}
