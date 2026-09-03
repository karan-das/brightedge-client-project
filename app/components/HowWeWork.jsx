"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowWeWork({ steps }) {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const lineRef = useRef(null);
  const rightColRef = useRef(null);
  const boxesRef = useRef([]);
  const pointsRef = useRef([]);
  const activeIndex = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalSteps = steps.length;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftRef.current,
        pinSpacing: false,
      });

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      function setActiveBox(index) {
        if (activeIndex.current === index) return;
        activeIndex.current = index;
        boxesRef.current.forEach((box) => {
          gsap.to(box, {
            yPercent: -index * 100,
            duration: 0.5,
            ease: "power2.inOut",
          });
        });
      }

      pointsRef.current.forEach((point, index) => {
        ScrollTrigger.create({
          trigger: point,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveBox(index),
          onEnterBack: () => setActiveBox(index),
        });
      });

      let contentHeight = 0;

      function alignPoint5() {
        const lastPoint = pointsRef.current[pointsRef.current.length - 1];
        const boxEl = boxesRef.current[0];
        if (!lastPoint || !boxEl || !rightColRef.current) return;

        const point5Top = lastPoint.offsetTop;
        const boxTopRel = boxEl.offsetTop;

        if (contentHeight === 0) {
          rightColRef.current.style.paddingBottom = "0px";
          contentHeight = rightColRef.current.scrollHeight;
        }

        const neededRightHeight = point5Top + window.innerHeight - boxTopRel;
        const paddingNeeded = Math.max(0, neededRightHeight - contentHeight);

        rightColRef.current.style.paddingBottom = paddingNeeded + "px";
      }

      alignPoint5();

      const onResize = () => alignPoint5();
      window.addEventListener("resize", onResize);

      const resizeCleanup = () => window.removeEventListener("resize", onResize);
    }, sectionRef);

    return () => ctx.revert();
  }, [steps]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-10 mb-20 px-10 md:px-14 lg:px-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div
          ref={leftRef}
          className="relative h-screen"
        >
          <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
            {"{ How We Work }"}
          </p>
          <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight mb-10 leading-tight">
            Strategic Steps To<br />Impactful Results
          </h2>

          <div className="relative w-full max-w-md h-[320px] rounded-3xl overflow-hidden shadow-lg">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => (boxesRef.current[index] = el)}
                className="absolute inset-0 w-full h-full"
                style={{
                  transform: index === 0 ? "translateY(0%)" : "translateY(100%)",
                }}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-20">
          <div
            ref={lineRef}
            className="absolute left-5 top-0 bottom-0 w-[3px] bg-[#E84C1E]"
          />

          <div ref={rightColRef} className="flex flex-col gap-24 py-10">
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
