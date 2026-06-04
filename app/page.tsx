import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import InteractiveTitle from "@/components/InteractiveTitle";

async function getHelloMessage() {
  // 在服务端组件中需要完整的 URL
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/hello`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const data = await getHelloMessage();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <InteractiveTitle message={data.message} />
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button asChild size="lg">
            <Link href="/about">
              关于 Next.js
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/blog">
              Blog
            </Link>
          </Button>
          <Button asChild size="lg">
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
