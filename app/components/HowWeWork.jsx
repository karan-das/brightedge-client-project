"use client";

import { useRef, useEffect, useState } from "react";

export default function HowWeWork({ steps }) {
  const pointsRef = useRef([]);
  const lineFillRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const points = pointsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    points.forEach((point, i) => {
      point.dataset.index = String(i);
      observer.observe(point);
    });

    return () => observer.disconnect();
  }, [steps]);

  useEffect(() => {
    if (lineFillRef.current) {
      lineFillRef.current.style.transform = `scaleY(${
        activeIndex / (steps.length - 1)
      })`;
    }
  }, [activeIndex, steps.length]);

  return (
    <section className="relative bg-white py-24 mb-20 px-10 md:px-14 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="relative lg:sticky lg:top-24 self-start">
          <p className="text-[#E84C1E] text-xl mb-3 tracking-wide">
            {"{ How We Work }"}
          </p>
          <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-medium uppercase tracking-tight mb-10 leading-tight">
            Strategic Steps To<br />Impactful Results
          </h2>

          <div className="relative w-full max-w-md h-[360px] ">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 rounded-4xl overflow-hidden ease-in-out ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-40 h-30 bg-white absolute right-0 bottom-0" style={{borderTopLeftRadius:"50px"}}>

<svg className="absolute -top-10 right-0" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#FCFCFC"></path>
</svg>

<svg className="absolute -left-10 bottom-0" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#FCFCFC"></path>
</svg>

                </div>
                
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-10 self-start">
          <div className="absolute left-5 top-0 bottom-0 w-[3px] bg-gray-200 overflow-hidden">
            <div
              ref={lineFillRef}
              className="absolute top-0 left-0 w-full h-full bg-[#E84C1E] origin-top transition-transform duration-500 ease-in-out"
            />
          </div>

          <div className="flex flex-col gap-24 py-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => (pointsRef.current[index] = el)}
                className="relative pl-16"
              >
                <div className="absolute left-0 w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-5xl md:text-6xl font-black text-[#2D2D2D]">
                    {String(index + 1)}
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
