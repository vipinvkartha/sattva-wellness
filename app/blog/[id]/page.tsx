import { notFound } from 'next/navigation';
import NavMenu from '../../components/NavMenu';
import { BlogPostContent } from '../../components/BlogPostContent';
import { getBlogPost, getBlogPosts } from '../../lib/contentful';
import type { BlogPost } from '../../data/blogPosts';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50/50 to-teal-50 dark:from-teal-950 dark:via-emerald-950/50 dark:to-teal-950">
      <NavMenu />
      
      <main className="pt-28 pb-16">
        <BlogPostContent post={post as BlogPost} />
      </main>
    </div>
  );
} 