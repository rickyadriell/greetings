'use client'
import Image from "next/image";
import profile from "./icon.png"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import fireworks from './fireworks.json';

export default function Home() {
  return (
    <main id="hero" className="container flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-10">
        <Image src={profile} alt='R' className="w-[300px] h-[300px]" />
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center">Happy New Year!</h1>
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
