import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-start py-20 px-6 bg-white dark:bg-black">
        <Link
          href="/"
          className="self-start mb-8 text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ← 返回首页
        </Link>

        <div className="flex flex-col items-center gap-4 mb-12">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-4xl font-bold text-black dark:text-white">关于 Next.js</h1>
        </div>

        <div className="w-full space-y-8">
          <section className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900">
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">什么是 Next.js？</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Next.js 是一个基于 React 的全栈 Web 开发框架，由 Vercel 公司开发和维护。
              它为 React 应用提供了生产级别的功能，如路由、数据获取、静态生成、服务端渲染等。
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900">
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">核心特性</h2>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong>App Router</strong> - 基于文件系统的路由，支持布局、加载状态、错误处理等</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong>服务器组件</strong> - 默认在服务器端渲染，减少客户端 JavaScript 体积</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong>数据获取</strong> - 支持 async/await 直接在组件中获取数据</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong>静态与动态渲染</strong> - 灵活选择页面渲染策略</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong>内置优化</strong> - 图片、字体、脚本自动优化</span>
              </li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900">
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">为什么选择 Next.js？</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl">
                <h3 className="font-semibold text-black dark:text-white mb-2">开发体验</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">热重载、TypeScript 支持、零配置</p>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl">
                <h3 className="font-semibold text-black dark:text-white mb-2">性能</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">自动代码分割、图片优化、预加载</p>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl">
                <h3 className="font-semibold text-black dark:text-white mb-2">SEO 友好</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">服务端渲染、静态生成</p>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl">
                <h3 className="font-semibold text-black dark:text-white mb-2">部署简单</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">一键部署到 Vercel</p>
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Button asChild size="lg">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                查看文档
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                学习教程
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
