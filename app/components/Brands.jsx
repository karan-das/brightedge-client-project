"use client";

export default function Brands() {
  const brandLogos = [
    "https://framerusercontent.com/images/1J4RFMHFU8lT6sTcZxXAP3qQ.png?width=308&height=308",
    "https://framerusercontent.com/images/Dr6V0SRFcp8uUcQvLZveuDuApvM.png?scale-down-to=2048&width=4160&height=4160",
    "https://framerusercontent.com/images/CuO5UJ0kB3uaPpHCskXIuYC6U8o.png?width=308&height=399",
    "https://framerusercontent.com/images/DmpHypW68K5DSFzKeve9F56OSKk.png?width=2048&height=2048",
    "https://framerusercontent.com/images/IV6hK1pPySBHhS7E53kHJDA5E.png?width=225&height=193",
    "https://framerusercontent.com/images/sH8AwtiYUHs3nkqjS4E7mzIcQI.png?scale-down-to=2048&width=1920&height=2295",
    "https://framerusercontent.com/images/uxCNQ1ZTKsgflG8lvXhcgFcfQnE.png?scale-down-to=2048&width=4096&height=4096",
    "https://framerusercontent.com/images/HceQueeLnOdgKu9j68iIlpvpSw0.png?width=800&height=800"
  ];

  const brandLogos2 = [
    "https://framerusercontent.com/images/jevu3TosYPutogFIZTHKBGKwmzE.png?width=500&height=265",
    "https://framerusercontent.com/images/u7ukJgqdttwS1oYvsw2Vh6NfUQs.png?width=1563&height=1563",
    "https://framerusercontent.com/images/f2qYf1VJXG3w4oDaH6uumqw0bM.png?width=1080&height=373",
    "https://framerusercontent.com/images/X1SORw7okX33WXeUO0PwyPZgm80.png?scale-down-to=2048&width=2736&height=2735",
    "https://framerusercontent.com/images/Qs9CbcJ1XmlLu6RN2s3wx5NfZMU.png?width=1080&height=1080",
    "https://framerusercontent.com/images/PMl11q0HkSv0HVWF4UiFasGTIxk.png?scale-down-to=2048&width=2360&height=1640",
    "https://framerusercontent.com/images/qrV9KvG8G68HhiWYes0ABk3F3o.png?scale-down-to=2048&width=2212&height=871",
    "https://framerusercontent.com/images/T1bqPsG1G4Kx9K0bdODIdlHFIo.png?width=500&height=184"

  ]

  return (
    <section className="bg-white py-20 overflow-hidden px-10 md:px-14 lg:px-20">
      <h2 className="text-[#2D2D2D] text-xl md:text-2xl font-medium mb-12">
        Brands we've worked with
      </h2>

      <div className="flex flex-col gap-0">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
          <div className="brand-marquee-right flex items-center">
            {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, i) => (
              <div
                key={`top-${i}`}
                className="flex-shrink-0 grayscale opacity-60   transition-all duration-300 pr-24"
              >
                <img src={brand} alt="Brand" className="h-16 md:h-20 w-auto" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
          <div className="brand-marquee-left flex items-center">
            {[...brandLogos2, ...brandLogos2, ...brandLogos2].map((brand, i) => (
              <div
                key={`bottom-${i}`}
                className="flex-shrink-0 grayscale opacity-60   transition-all duration-300 pr-24"
              >
                <img src={brand} alt="Brand" className="h-16 md:h-20 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
