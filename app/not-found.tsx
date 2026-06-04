import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-2xl flex-col items-center justify-center py-20 px-6 bg-white dark:bg-black text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-zinc-200 dark:text-zinc-800 mb-4">404</h1>
        </div>
        
        <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
          页面未找到
        </h2>
        
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md leading-relaxed">
          抱歉，你访问的页面不存在或已被移除。请检查网址是否正确，或返回首页继续浏览。
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              返回首页
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">
              关于 Next.js
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
