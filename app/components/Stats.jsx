"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const animateIn = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      const obj = { val: 0 };
      animationRef.current = gsap.to(obj, {
        val: Number(target),
        duration: 2,
        ease: "power1.out",
        onUpdate: () => {
          setCount(Math.round(obj.val));
        },
      });
    };

    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: animateIn,
      onEnterBack: animateIn,
    });
  }, [target]);

  return (
    <div ref={ref} className="flex items-start">
      <span className="text-[#2D2D2D] text-6xl md:text-7xl lg:text-8xl font-light leading-none">
        {count}
      </span>
      <span className="text-[#E84C1E] text-2xl md:text-3xl font-light mt-2">
        {suffix}
      </span>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { value: "4", suffix: "+", label: "Years Experience" },
    { value: "100", suffix: "+", label: "Projects Done" },
    { value: "30", suffix: "+", label: "Happy Clients" },
    { value: "98", suffix: "%", label: "Satisfied Clients" },
  ];

  return (
    <section className=" py-20 px-10 md:px-14 lg:px-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="text-gray-500 text-sm mt-3">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
