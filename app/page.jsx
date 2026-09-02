"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      tl.to(leftRef.current, {
        xPercent: -100,
        ease: "none",
      });

      tl.to(
        rightRef.current,
        {
          xPercent: 100,
          ease: "none",
        },
        "<"
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-full">
      <div
        ref={wrapperRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <video
          src="/home-assets/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative flex w-full" style={{ height: "calc(100% - 20px)" }}>
          <div
            ref={leftRef}
            className="w-1/2 h-full bg-white/80 flex items-center justify-center"
          >
            <span className="text-black text-4xl font-bold">Left Panel</span>
          </div>
          <div
            ref={rightRef}
            className="w-1/2 h-full bg-white/80 flex items-center justify-center"
          >
            <span className="text-black text-4xl font-bold">Right Panel</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[20px] bg-black" />
      </div>

      <div className="h-screen flex items-center justify-center bg-gray-900">
        <h1 className="text-white text-5xl font-bold">Content Behind</h1>
      </div>
    </div>
  );
}
