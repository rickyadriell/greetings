'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import fireworks from './fireworks.json';
import Link from "next/link";

export default function Home() {
  return (
    <main id="hero" className="container flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-80">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center">Happy New Year!</h1>
        <div id="links" className="flex gap-5 z-50">
          <Link href="https://rickyadriell.com" className="font-bold">
            Ricky Adriell
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
    </main>
  );
}
