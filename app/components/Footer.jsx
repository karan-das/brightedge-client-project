"use client";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  return (
    <footer className="bg-[#F5F5F5] pt-20 pb-8 px-10 md:px-14 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg
                viewBox="0 0 60 60"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 15 L20 5 L30 15 L40 5 L50 15 L50 45 L40 35 L30 45 L20 35 L10 45 Z"
                  fill="#1a5c4a"
                  stroke="#1a5c4a"
                  strokeWidth="2"
                />
                <circle cx="25" cy="25" r="4" fill="#E84C1E" />
                <path
                  d="M35 20 L45 30 L35 40"
                  stroke="#E84C1E"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
            <span className="text-[#1a5c4a] text-3xl font-black italic">
              mixtudio
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <a
              href="tel:6378835128"
              className="text-[#2D2D2D] text-lg font-medium hover:text-[#E84C1E] transition-colors"
            >
              6378835128
            </a>
            <a
              href="mailto:mixtudio02@gmail.com"
              className="text-[#2D2D2D] text-lg font-medium hover:text-[#E84C1E] transition-colors"
            >
              mixtudio02@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[#2D2D2D] text-lg font-bold">Navigation</h4>
            <div className="flex flex-wrap gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-[#E84C1E] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[#2D2D2D] text-lg font-bold">Address</h4>
          <p className="text-gray-500 text-[15px]">
            22B/29, Pratap Nagar, Sanganer, Jaipur, 302033
          </p>

          <div className="rounded-2xl overflow-hidden mt-4 h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1!2d75.8!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPratap+Nagar%2C+Sanganer%2C+Jaipur!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <p className="text-gray-400 text-sm text-center">
          © Copyright 2026. All rights reserved by Mixtudio
        </p>
      </div>
    </footer>
  );
}
