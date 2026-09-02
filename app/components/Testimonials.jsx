"use client";

export default function Testimonials({ testimonials }) {
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section className="bg-[#F5F5F5] py-20 overflow-hidden">
      <div className="px-10 md:px-14 lg:px-20 mb-12">
        <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
          {"{ What Our Clients Are Saying }"}
        </p>
        <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight">
          Testimonials That Inspire Confidence
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        <div className="relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#F5F5F5] to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#F5F5F5] to-transparent z-10" />
          <div className="testimonial-marquee-right flex gap-6">
            {[...firstRow, ...firstRow, ...firstRow].map((testimonial, i) => (
              <div
                key={`top-${i}`}
                className="flex-shrink-0 w-[350px] bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[#2D2D2D] font-bold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                  {testimonial.companyLogo && (
                    <img
                      src={testimonial.companyLogo}
                      alt="Company"
                      className="w-10 h-10 ml-auto rounded-lg object-contain"
                    />
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#2D2D2D"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#F5F5F5] to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#F5F5F5] to-transparent z-10" />
          <div className="testimonial-marquee-left flex gap-6">
            {[...secondRow, ...secondRow, ...secondRow].map((testimonial, i) => (
              <div
                key={`bottom-${i}`}
                className="flex-shrink-0 w-[350px] bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[#2D2D2D] font-bold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                  {testimonial.companyLogo && (
                    <img
                      src={testimonial.companyLogo}
                      alt="Company"
                      className="w-10 h-10 ml-auto rounded-lg object-contain"
                    />
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#2D2D2D"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
