'use client'
import Image from "next/image";
import profile from "./icon.png"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import fireworks from './fireworks.json';
import Link from "next/link";

export default function Home() {
  return (
    <main id="hero" className="container flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-10">
        <Image src={profile} alt='R' className="w-[300px] h-[300px]" />
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center">Happy New Year!</h1>
        <div id="links" className="flex gap-5 z-50">
          <Link href="https://rickyadriell.com" className="font-bold">
            Home
          </Link>
          <span>|</span>
          <Link href="https://github.com/rickyadriell" className="font-bold">
            GitHub
          </Link>
          <span>|</span>
          <Link href="https://linkedin.com/in/rickyadriell/" className="font-bold">
            Linkedin
          </Link>
          <span>|</span>
          <Link href="https://instagram.com/codecplyre" className="font-bold">
            Instagram
          </Link>
        </div>
      </div>
      <div className="flex gap-10 absolute bottom-0 h-3/4">
        {[...Array(3)].map((_, i) => (
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
