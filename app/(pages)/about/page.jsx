"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Stats from "../../components/Stats";
import Brands from "../../components/Brands";
import Footer from "../../components/Footer";
import AnimatedCircle from "@/app/components/AnimatedCircle";
import WhoWeAre from "@/app/components/WhoWeAre";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const timeline = [
    {
      date: "June 2024",
      title: "Inception of Mixtudio",
      description:
        "Mixtudio was born out of a shared passion for visual storytelling with a clear mission — to build a creative partner for brands seeking high-impact communication.",
    },
    {
      date: "July 2024",
      title: "Launch of Video Production",
      description:
        "We expanded our core offering into video production, moving beyond the editing room to deliver complete, high-quality films for growing brands.",
    },
    {
      date: "September 2024",
      title: "Introduction of Branding Services",
      description:
        "We broadened our expertise to include comprehensive brand identity design, helping our clients build a consistent and memorable visual identity.",
    },
    {
      date: "November 2024",
      title: "Expansion into Social Media Management",
      description:
        "Mixtudio took a full-service turn by diving into end-to-end social media management, including content strategy, scheduling, and organic growth.",
    },
    {
      date: "January 2025",
      title: "100+ Successful Projects Delivered",
      description:
        "We hit the milestone of delivering over 100 successful projects, proving our ability to deliver consistently and build trust with clients.",
    },
  ];

  const industries = [
    {
      name: "Cafes & Lounges",
      description: "Aesthetic Video Production & Social Growth",
      count: "20+",
    },
    {
      name: "Personal Brands & Experts",
      description: "High-Retention Talking Head & Educational Content",
      count: "35+",
    },
    {
      name: "Salons & Lifestyle",
      description: "Visual Storytelling & High-Energy Edits",
      count: "15+",
    },
    {
      name: "Local E-commerce",
      description: "Product Photography & Ad Creatives",
      count: "30+",
    },
  ];

  return (
    <div className="h-full">
      
      <WhoWeAre  showBottomRow />

      <Stats />

      <Brands />

      <section className="bg-white py-20 px-10 md:px-14 lg:px-20">
        <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
          {"{ Our Journey }"}
        </p>
        <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight mb-16">
          The Evolution of Mixtudio
        </h2>

        <div className="relative max-w-4xl">
          <div className="absolute left-[140px] top-0 bottom-0 w-[2px] bg-gray-200" />

          <div className="flex flex-col gap-16">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-16">
                <div className="w-[120px] flex-shrink-0 text-right">
                  <span className="text-[#2D2D2D] text-lg font-medium">
                    {item.date}
                  </span>
                </div>

                <div className="relative">
                  <div className="absolute left-[-33px] top-2 w-4 h-4 rounded-full bg-white border-2 border-[#E84C1E]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-[#2D2D2D] text-xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-10 md:px-14 lg:px-20">
        <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
          {"{ Who We Help }"}
        </p>
        <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight mb-12">
          Industries We Elevate
        </h2>

        <div className="flex flex-col">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border-b-1 border-zinc-400 py-8 flex items-center justify-between"
            >
              <div >
                <h3 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-500 text-sm md:text-2xl -mt-3">{industry.description}</p>
              </div>
              <div className="text-right flex-shrink-0 ml-8">
                <span className="text-[#2D2D2D] text-2xl md:text-3xl font-light">
                  {industry.count}
                </span>
                <p className="text-gray-500 text-sm">Projects</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
