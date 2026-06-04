import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/blog";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-start py-20 px-6 bg-white dark:bg-black">
        <Link
          href="/blog"
          className="self-start mb-8 text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ← 返回 Blog
        </Link>

        <article className="w-full">
          <div className="mb-8">
            <span className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400 mb-8">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}阅读</span>
          </div>

          <div className="relative w-full h-64 md:h-96 mb-12 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 100%"
            />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
              文章内容
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="whitespace-pre-line text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
              {post.content}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回 Blog 列表
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
