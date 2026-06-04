export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  content: string;
}

// Mock 数据
const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-13-app-router-guide",
    title: "Next.js 13 App Router 完全指南",
    excerpt: "深入了解 Next.js 13 引入的 App Router，学习如何使用服务器组件、布局、加载状态等新特性来构建现代化的 React 应用。",
    date: "2024-06-01",
    category: "技术教程",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    readTime: "8 分钟",
    content: `
## 什么是 App Router？

App Router 是 Next.js 13 引入的全新路由系统，它基于文件系统路由，但提供了更强大的功能和更灵活的架构。
    `
  },
  {
    slug: "react-server-vs-client-components",
    title: "React 服务器组件 vs 客户端组件",
    excerpt: "详细对比服务器组件和客户端组件的使用场景、性能差异以及最佳实践，帮助你做出正确的技术选型。",
    date: "2024-05-28",
    category: "前端开发",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    readTime: "6 分钟",
    content: `
## 理解两种组件

在 Next.js 13+ 中，有两种主要的组件类型：服务器组件和客户端组件。
    `
  }
];

// 服务端数据获取函数
export async function getBlogPosts(): Promise<BlogPost[]> {
  // 模拟 API 延迟
  await new Promise(resolve => setTimeout(resolve, 100));
  return blogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
}
