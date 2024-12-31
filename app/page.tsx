'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import fireworks from './fireworks.json';
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || 'Ricky Adriell'
  const gitRepo = 'https://github.com/rickyadriell/greetings'
  const greeting = 'Happy New Year!'
  return (
    <main id="hero" className="container flex justify-center items-center h-screen">
      <Suspense fallback={<Loader2 className={cn('mr-2 h-4 w-4 animate-spin')} />}>
        <div className="flex flex-col items-center gap-80">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center">{greeting}</h1>
          <div id="links" className="flex gap-5 z-50">
            <Link href={gitRepo} className="font-bold">
              {from}
            </Link>
          </div>
        </div>
        <div className="flex gap-10 absolute bottom-0 h-full">
          {[...Array(2)].map((_, i) => (
            <DotLottieReact
              key={i}
              data={fireworks}
              loop
              autoplay
            />
          ))}
        </div>
      </Suspense>
    </main >
  );
}
