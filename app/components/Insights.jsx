"use client";

import { useRef } from "react";

export default function Insights({ posts }) {
  return (
    <section className="bg-white py-20 px-10 md:px-14 lg:px-20">
      <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
        {"{ Our Insights }"}
      </p>
      <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-medium uppercase tracking-tight mb-14">
        Stay Ahead With The Latest In Digital Marketing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <InsightCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
}

function InsightCard({ post }) {
  return (
    <div
      className="group cursor-pointer"
    >
      <div
        className="relative overflow-hidden rounded-3xl mb-5"
        style={{ clipPath: "inset(0 round 30px)" }}
      >
        <div
          className="transition-transform duration-300 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[300px] object-cover hover:scale-110 hover:rotate-6 transition-transform duration-500 ease-in-out "
          />
        </div>
      </div>

      <div className="flex items-center gap-3 text-gray-400 text-sm mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
        <span>{post.date}</span>
        <span>/</span>
        <span>{post.category}</span>
      </div>

      <h3 className="text-[#2D2D2D] text-xl font-bold leading-snug ">
        {post.title}
      </h3>
    </div>
  );
}
