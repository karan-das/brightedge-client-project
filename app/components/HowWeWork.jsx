"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowWeWork({ steps }) {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const imageRef = useRef(null);
  const lineRef = useRef(null);
  const dotsRef = useRef([]);
  const contentRef = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepElements = contentRef.current;
      const totalSteps = steps.length;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: imageRef.current,
        pinSpacing: false,
      });

      stepElements.forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });

      gsap.to(lineRef.current, {
        background: `linear-gradient(to bottom, #E84C1E ${((activeStep + 1) / totalSteps) * 100}%, #E5E7EB ${((activeStep + 1) / totalSteps) * 100}%)`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [steps, activeStep]);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-10 md:px-14 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="relative">
          <div ref={imageRef} className="lg:sticky lg:top-20">
            <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
              {"{ How We Work }"}
            </p>
            <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight mb-10 leading-tight">
              Strategic Steps To<br />Impactful Results
            </h2>

            <div
              className="relative overflow-hidden"
              style={{ clipPath: "inset(0 round 20px 60px 20px 60px)" }}
            >
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeStep === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>

        <div ref={timelineRef} className="relative">
          <div
            ref={lineRef}
            className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-200"
            style={{
              background: `linear-gradient(to bottom, #E84C1E ${((activeStep + 1) / steps.length) * 100}%, #E5E7EB ${((activeStep + 1) / steps.length) * 100}%)`,
            }}
          />

          <div className="flex flex-col gap-24 py-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => (contentRef.current[index] = el)}
                className="relative pl-16"
              >
                <div
                  className={`absolute left-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                    activeStep >= index
                      ? "border-[#E84C1E] bg-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      activeStep >= index ? "bg-[#E84C1E]" : "bg-gray-300"
                    }`}
                  />
                </div>

                <div className="flex items-start gap-4">
                  <span
                    className={`text-5xl md:text-6xl font-black transition-colors duration-300 ${
                      activeStep >= index ? "text-[#E84C1E]" : "text-gray-300"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[#2D2D2D] text-xl md:text-2xl font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
