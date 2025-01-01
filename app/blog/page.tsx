import NavMenu from '../components/NavMenu';
import { getBlogPosts } from '../lib/contentful';
import Link from 'next/link';
import type { BlogPost } from '../data/blogPosts';

export default async function Blog() {
  const posts: BlogPost[] = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50/50 to-teal-50 dark:from-teal-950 dark:via-emerald-950/50 dark:to-teal-950">
      <NavMenu />
      
      <main className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-teal-900 dark:text-teal-100 mb-8 text-center">
            Wellness Blog
          </h1>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                    <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 