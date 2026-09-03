"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2035] to-[#1a3050]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative px-10 md:px-14 lg:px-20 py-24">
        <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
          {"{ Get in touch }"}
        </p>
        <h2 className="text-white text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight mb-16">
          Let&apos;s Start Your Project Today
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://picsum.photos/seed/contact-founder/600/800"
                alt="Kshitij Samariya"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white text-xl font-bold">
                  Kshitij Samariya
                </h3>
                <p className="text-gray-400 text-sm">Founder, Mixtudio</p>
              </div>
            </div>

            <p className="text-gray-400 text-[15px] leading-relaxed max-w-md">
              At Mixtudio, we believe in building content that converts. If you
              ever have questions or need guidance, I&apos;m always here to
              support you. Your success is our mission — let&apos;s create
              something incredible together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-gray-400 text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Rohan Sharma"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E84C1E] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-400 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="rohansharma@gmail.com"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E84C1E] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">Service Needed ?</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E84C1E] transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#0a1628]">Select a service</option>
                <option value="branding" className="bg-[#0a1628]">Branding</option>
                <option value="video" className="bg-[#0a1628]">Video Production</option>
                <option value="editing" className="bg-[#0a1628]">Video Editing</option>
                <option value="motion" className="bg-[#0a1628]">Motion Design</option>
                <option value="smm" className="bg-[#0a1628]">Social Media Management</option>
                <option value="graphic" className="bg-[#0a1628]">Graphic Design</option>
                <option value="photography" className="bg-[#0a1628]">Photography</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">
                What Can I Help You...
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello, I'd like to enquire about..."
                rows={5}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E84C1E] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#E84C1E] hover:bg-[#d4410f] text-white text-lg font-semibold py-4 rounded-lg transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
