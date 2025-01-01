import { createClient } from 'contentful';
import type { BlogPost } from '../data/blogPosts';

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID is not defined');
}

if (!process.env.CONTENTFUL_DELIVERY_TOKEN) {
  throw new Error('CONTENTFUL_DELIVERY_TOKEN is not defined');
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  host: 'cdn.contentful.com',
});

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      order: ['-fields.publishedDate'],
    });

    return response.items
      .filter(item => {
        const hasRequiredFields = 
          item?.fields?.title &&
          item?.fields?.content &&
          item?.fields?.featuredImage;

        return hasRequiredFields;
      })
      .map((item: any): BlogPost => {
        const excerpt = item.fields.shortDescription || 
          (typeof item.fields.content === 'string' 
            ? item.fields.content.slice(0, 150) + '...'
            : 'Read more about ' + item.fields.title);

        return {
          id: item.sys.id,
          title: item.fields.title,
          excerpt,
          content: item.fields.content,
          category: 'wellness',
          image: item.fields.featuredImage?.fields?.file?.url 
            ? `https:${item.fields.featuredImage.fields.file.url}`
            : '/gallery/camp1.jpg',
          date: item.fields.publishedDate || item.sys.createdAt,
          slug: item.fields.slug || '',
        };
      });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const entry = await client.getEntry(id);

    if (!entry?.fields?.title || !entry?.fields?.content) {
      return null;
    }

    return {
      id: entry.sys.id,
      title: entry.fields.title,
      excerpt: entry.fields.shortDescription || '',
      content: entry.fields.content,
      category: 'wellness',
      image: entry.fields.featuredImage?.fields?.file?.url 
        ? `https:${entry.fields.featuredImage.fields.file.url}`
        : '/gallery/camp1.jpg',
      date: entry.fields.publishedDate || entry.sys.createdAt,
      slug: entry.fields.slug || '',
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
} 