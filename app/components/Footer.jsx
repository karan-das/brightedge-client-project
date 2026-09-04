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
          <div className="relative w-3/4 flex items-center justify-center ">
            <img className="relative w-70 h-50  " src="https://framerusercontent.com/images/hXWlJEMOeRDLf9I5C39Bwej4nt8.png?width=771&height=539" alt="" />
          </div>

          <div className="flex flex-col gap-1">
            <a
              href="tel:6378835128"
              className="text-[#2D2D2D] text-lg font-medium "
            >
              6378835128
            </a>
            <a
              href="mailto:mixtudio02@gmail.com"
              className="text-[#2D2D2D] text-2xl font-medium hover:text-[#E84C1E] transition-colors"
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
              src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sMixtudio!6i15"
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

      <div className="border-t-1 border-zinc-700 pt-8 mb-20">
        <p className="text-zinc-700 text-lg ">
          © Copyright 2026. All rights reserved by Mixtudio
        </p>
      </div>
    </footer>
  );
}
