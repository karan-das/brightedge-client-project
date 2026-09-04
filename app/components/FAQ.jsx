"use client";

import { useState } from "react";

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:sticky lg:top-0 h-screen flex flex-col justify-center px-10 md:px-14 lg:px-16">
          <p className="text-[#E84C1E] text-lg  tracking-wide">
            {"{ FAQ }"}
          </p>
          <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-medium uppercase tracking-tight mb-10 leading-tight">
            Clear Solutions To<br />Your Concerns
          </h2>

          <div
            className="relative overflow-hidden"
            style={{ clipPath: "inset(0 round 50px 50px 50px 50px)" }}
          >
            <div className="w-40 h-30 absolute top-0 left-0 bg-white" style={{borderBottomRightRadius:"50px"}}>

            <svg className="absolute top-0 -right-10 rotate-180" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#FCFCFC"></path>
            </svg>

            <svg className="absolute left-0 -bottom-10 rotate-180" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#FCFCFC"></path>
            </svg>

            </div>
            <img
              src="https://framerusercontent.com/images/QY6drXCswOtdH5g7g8gHn9nbx8.jpeg?scale-down-to=1024&width=960&height=1200"
              alt="FAQ"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>

        <div className="px-10 md:px-14 lg:pr-10 py-20 mt-30">
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
                  <span className="text-[#2D2D2D] text-lg md:text-2xl font-medium pr-8">
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
