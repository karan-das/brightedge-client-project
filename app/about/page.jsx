"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Stats from "../components/Stats";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

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
      description: "Ambient Video Production for Social Growth",
      count: "20+",
    },
    {
      name: "Personal Brands & Experts",
      description: "High-Retention Talking Head & Educational Content",
      count: "30+",
    },
    {
      name: "Salons & Lifestyle",
      description: "Visual Storytelling & High-Energy Reels",
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
      <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            ref={imageRef}
            src="https://picsum.photos/seed/about-hero/1600/900"
            alt="About Hero"
            className="w-full h-[130%] object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative h-full flex items-center justify-center text-center px-10">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl leading-relaxed">
            Ideas are easy. Execution takes a team. We are the creators behind
            the screen.
          </h1>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <section className="bg-white py-20 px-10 md:px-14 lg:px-20">
        <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
          {"{ Who We Are }"}
        </p>
        <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight mb-14">
          We Are A Creative Agency Built For Impact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative">
            <div
              className="overflow-hidden"
              style={{ clipPath: "inset(0 round 60px 20px 60px 20px)" }}
            >
              <img
                src="https://picsum.photos/seed/office/1200/800"
                alt="Office"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[9px] font-bold tracking-[4px] fill-gray-700 uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      EDIT • ANIMATE • ELEVATE •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#E84C1E] rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-lg">M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:pt-0 pt-12">
            <div
              className="bg-[#F5F5F5] p-10"
              style={{ clipPath: "inset(0 round 20px 60px 20px 60px)" }}
            >
              <h3 className="text-[#2D2D2D] text-2xl font-bold mb-5">
                Our story
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                At Mixtudio, we are a full-service creative agency
                specializing in high-impact video production, branding, and
                social media management, tailored to drive your brand&apos;s
                growth.
              </p>
            </div>

            <div
              className="overflow-hidden"
              style={{ clipPath: "inset(0 round 60px 20px 60px 20px)" }}
            >
              <img
                src="https://picsum.photos/seed/founder/600/800"
                alt="Founder"
                className="w-full h-[280px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-[#F5F5F5] rounded-2xl p-8">
            <h3 className="text-[#2D2D2D] text-xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our mission is to help businesses grow through high-impact
              content creation, strategic branding, and social media
              marketing. We focus on creating content that not only looks
              great but also drives real business results.
            </p>
          </div>

          <div className="bg-[#F5F5F5] rounded-2xl p-8">
            <h3 className="text-[#2D2D2D] text-xl font-bold mb-4">
              Our Values
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We value creative innovation, real communication, and excellence.
              Our goal is to become a long-term creative partner for every
              client we work with.
            </p>
          </div>
        </div>
      </section>

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

      <section className="bg-[#F5F5F5] py-20 px-10 md:px-14 lg:px-20">
        <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
          {"{ Who We Serve }"}
        </p>
        <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight mb-12">
          Industries We Elevate
        </h2>

        <div className="flex flex-col">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-8 flex items-center justify-between group hover:bg-white transition-colors px-6 -mx-6 rounded-lg"
            >
              <div>
                <h3 className="text-[#2D2D2D] text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-500 text-sm">{industry.description}</p>
              </div>
              <span className="text-[#E84C1E] text-3xl font-bold">
                {industry.count}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
