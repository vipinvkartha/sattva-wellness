"use client";
import { useRouter } from 'next/navigation';
import { BlogPost } from '../data/blogPosts';
import { RichContent } from './RichContent';

export function BlogPostContent({ post }: { post: BlogPost }) {
  const router = useRouter();

  if (!post) {
    router.push('/blog');
    return null;
  }

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-xl mb-8"
      />
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
        <div className="mb-6">
          <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>

        <RichContent content={post.content} />
      </div>
    </article>
  );
} 