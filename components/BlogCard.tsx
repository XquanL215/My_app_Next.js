import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group bg-zinc-50 dark:bg-zinc-90 rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}阅读</span>
        </div>
        
        <h2 className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>
        
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
          {post.excerpt}
        </p>
        
        <Button asChild variant="link" size="default" className="p-0 h-auto">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center"
          >
            阅读更多
            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </Button>
      </div>
    </article>
  );
}
