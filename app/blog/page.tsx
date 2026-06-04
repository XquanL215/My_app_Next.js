import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getBlogPosts } from "@/lib/blog";

export default async function Blog() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-start py-20 px-6 bg-white dark:bg-black">
        <Link
          href="/"
          className="self-start mb-8 text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ← 返回首页
        </Link>

        <div className="w-full mb-12 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Blog</h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            分享关于 Next.js、React 和前端开发的技术文章
          </p>
        </div>

        <div className="w-full grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            更多文章即将推出...
          </p>
        </div>
      </main>
    </div>
  );
}
