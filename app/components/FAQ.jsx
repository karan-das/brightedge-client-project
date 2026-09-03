"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ({ faqs }) {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftRef.current,
        pinSpacing: false,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div ref={leftRef} className="lg:sticky lg:top-0 h-screen flex flex-col justify-center px-10 md:px-14 lg:px-20">
          <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
            {"{ FAQ }"}
          </p>
          <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight mb-10 leading-tight">
            Clear Solutions To<br />Your Concerns
          </h2>

          <div
            className="relative overflow-hidden"
            style={{ clipPath: "inset(0 round 60px 20px 60px 20px)" }}
          >
            <img
              src="https://picsum.photos/seed/faq/600/800"
              alt="FAQ"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>

        <div className="px-10 md:px-14 lg:px-20 py-20">
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-6 text-left hover:text-[#E84C1E] transition-colors"
                >
                  <span className="text-[#2D2D2D] text-lg md:text-xl font-medium pr-8">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
