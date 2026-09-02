"use client";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Blogs", href: "/#blogs", highlight: true },
    { name: "Contact", href: "/#contact", dot: true },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      name: "Behance",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.62.16-1.26.25-1.92.25H0v-14.4h6.938zm-.36 5.91c.56 0 1.03-.13 1.4-.4.37-.27.55-.7.55-1.3 0-.35-.06-.64-.19-.87-.13-.23-.3-.42-.52-.56-.22-.14-.46-.24-.74-.3-.27-.06-.55-.09-.84-.09H3.6v3.52h2.978zm.116 6.34c.32 0 .63-.03.93-.1.3-.07.56-.18.8-.33.23-.15.42-.35.57-.6.15-.26.22-.58.22-.97 0-.76-.22-1.32-.67-1.68-.44-.36-1.01-.54-1.71-.54H3.6v4.22h3.094zM15.95 4.69h5.86v1.46h-5.86V4.69zM21.397 8.39c-.19-.63-.48-1.14-.87-1.53-.39-.39-.87-.68-1.43-.87-.56-.19-1.17-.29-1.82-.29-.66 0-1.27.1-1.83.29-.56.19-1.04.48-1.43.87-.39.39-.69.9-.88 1.53-.19.63-.29 1.31-.29 2.05 0 .74.1 1.42.29 2.05.19.63.49 1.14.88 1.53.39.39.87.68 1.43.87.56.19 1.17.29 1.83.29.65 0 1.26-.1 1.82-.29.56-.19 1.04-.48 1.43-.87.39-.39.69-.9.87-1.53.19-.63.29-1.31.29-2.05 0-.74-.1-1.42-.29-2.05zm-3.5 5.95c-.48.43-1.13.65-1.95.65-.82 0-1.47-.22-1.95-.65-.48-.43-.72-1.12-.72-2.06 0-.94.24-1.63.72-2.06.48-.43 1.13-.65 1.95-.65.82 0 1.47.22 1.95.65.48.43.72 1.12.72 2.06 0 .94-.24 1.63-.72 2.06zM14.27 8.39h5.09v1.15h-5.09V8.39z"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed left-0 top-0 h-full bg-[#2D2D2D] z-50 transition-all duration-500 ease-in-out px-10  ${
          isOpen ? "w-[350px]" : "w-[80px]"
        }`}
      >
        <div className="h-full flex flex-col items-center  ">
          <div className="flex items-center h-[70px] px-0 mt-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-[40px] h-[40px] flex items-center rounded-full justify-center bg-gray-50  flex-shrink-0 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <HiOutlineMenuAlt4 className="w-6 h-6" />
              )}
            </button>
          </div>

          <div
            className={`flex-1 flex flex-col justify-between transition-all duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-8 py-5 text-lg transition-colors ${
                    link.highlight
                      ? "bg-[#E84C1E] text-white"
                      : "text-[#2D2D2D] hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {link.dot && (
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                    )}
                    {link.name}
                  </span>
                  {link.highlight && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </nav>
          </div>

          <div
            className={`absolute bottom-0 left-0 w-[80px] h-3/5 flex flex-col items-center justify-between gap-4 py-8 transition-all duration-500 ${
              isOpen ? "opacity-100" : "opacity-100"
            }`}
          >
            <div className="">
              <img className=" max-w-12 max-h-24 relative object-cover  " src="https://framerusercontent.com/images/xVhc9bI1XTHmNoiRMpRe1F44ZPo.png?width=270&height=386" alt="" />
            </div>

            <div className="flex gap-3 flex-col">
              {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-white hover:bg-[#E84C1E] transition-colors"
              >
                {link.icon}
              </a>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
