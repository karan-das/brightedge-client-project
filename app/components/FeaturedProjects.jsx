"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects({ projects }) {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      cards.forEach((card, index) => {
        if (index === 0) return;

        gsap.set(card, { y: "100%" });

        ScrollTrigger.create({
          trigger: card,
          start: "top bottom",
          end: "top top",
          scrub: true,
          animation: gsap.to(card, {
            y: "0%",
            ease: "none",
          }),
        });
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: cards[0],
        pinSpacing: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <section className="bg-white py-20 px-10 md:px-14 lg:px-20">
      <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
        {"{ Featured Projects }"}
      </p>
      <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight mb-12">
        Showcasing Our Most Impactful Work
      </h2>

      <div ref={containerRef} className="relative">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative w-full rounded-3xl overflow-hidden"
            style={{ height: "70vh" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-6 left-6">
              <span className="bg-[#E84C1E] text-white text-xs font-medium px-4 py-2 rounded-full">
                {project.category}
              </span>
            </div>
            <div className="absolute top-16 left-6">
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
