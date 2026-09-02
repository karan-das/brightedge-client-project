"use client";

export default function Brands() {
  const brandLogos = [
    "/home-assets/brands/logo1.png",
    "/home-assets/brands/logo2.png",
    "/home-assets/brands/logo3.png",
    "/home-assets/brands/logo4.png",
    "/home-assets/brands/logo5.png",
    "/home-assets/brands/logo6.png",
    "/home-assets/brands/logo7.png",
    "/home-assets/brands/logo8.png",
  ];

  return (
    <section className="bg-white py-20 overflow-hidden px-10 md:px-14 lg:px-20">
      <h2 className="text-[#2D2D2D] text-xl md:text-2xl font-medium mb-12">
        We work with the world&apos;s top companies
      </h2>

      <div className="relative">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        <div className="marquee-right flex gap-16 items-center">
          {[...brandLogos, ...brandLogos].map((brand, i) => (
            <div
              key={`top-${i}`}
              className="flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img src={brand} alt="Brand" className="h-16 md:h-20 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
