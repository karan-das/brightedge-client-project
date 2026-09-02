"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedProjects from "./components/FeaturedProjects";
import HowWeWork from "./components/HowWeWork";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Brands from "./components/Brands";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const wrapperRef = useRef(null);
  const [activeService, setActiveService] = useState("01");

  const services = [
    { id: "01", title: "Video Production", subtitle: "Cinematic" },
    { id: "02", title: "Branding", subtitle: "Identity" },
    { id: "03", title: "Video Editing", subtitle: "Post Production" },
    { id: "04", title: "Motion Design", subtitle: "Animation" },
    { id: "05", title: "SMM", subtitle: "Social Media Management" },
    { id: "06", title: "Graphic Design", subtitle: "Visuals" },
    { id: "07", title: "Packaging Design", subtitle: "Physical" },
    { id: "08", title: "Brand Promotion", subtitle: "Reach" },
    { id: "09", title: "Photography", subtitle: "Stills" },
  ];

  const projects = [
    {
      id: 1,
      title: "Navam",
      category: "Brand Promotion",
      image: "/home-assets/projects/project1.jpg",
    },
    {
      id: 2,
      title: "Hell Energy",
      category: "Video Editing",
      image: "/home-assets/projects/project2.jpg",
    },
    {
      id: 3,
      title: "Abhinav Fashion",
      category: "Photography",
      image: "/home-assets/projects/project3.jpg",
    },
    {
      id: 4,
      title: "Pinki Ki Rasoi",
      category: "Branding",
      image: "/home-assets/projects/project4.jpg",
    },
  ];

  const howWeWorkSteps = [
    {
      id: 1,
      title: "Listening to Your Vision",
      description:
        "We start by understanding your brand, your audience, and your specific goals. We listen first so we can build a creative foundation that actually matches your vision.",
      image: "/home-assets/steps/step1.jpg",
    },
    {
      id: 2,
      title: "Strategy & Pre-Production",
      description:
        "We don't just guess. We analyze trends, plan content calendars, write scripts, and build mood boards to create a tailored roadmap for your project.",
      image: "/home-assets/steps/step2.jpg",
    },
    {
      id: 3,
      title: "Creative Production",
      description:
        "This is where ideas become real. Whether we are shooting cinematic video, capturing professional photography, or designing your brand identity, we execute with precision.",
      image: "/home-assets/steps/step3.jpg",
    },
    {
      id: 4,
      title: "Post-Production & Polish",
      description:
        "The magic happens in the edit. We handle color grading, motion design, kinetic typography, and final design touches to make sure the work is impossible to ignore.",
      image: "/home-assets/steps/step4.jpg",
    },
    {
      id: 5,
      title: "Delivery & Growth",
      description:
        "We deliver the final, high-quality assets ready for launch. For our SMM clients, we take over the scheduling, management, and optimization to ensure long-term growth.",
      image: "/home-assets/steps/step5.jpg",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Anchal Jain",
      role: "Founder, Anchal Jnn Invites",
      avatar: "/home-assets/testimonials/avatar1.jpg",
      companyLogo: null,
      text: "I have been working with Kshitij since a long time now. He has been very professional, understanding to my ideas and requirements. Whatever I have in my mind he gives it a face in the form of animation.",
    },
    {
      id: 2,
      name: "Raj",
      role: "Social Media Manager",
      avatar: "/home-assets/testimonials/avatar2.jpg",
      companyLogo: null,
      text: "Mixtudio is the best agency for photo manipulation and cinematography in Jaipur. They never disappoints.",
    },
    {
      id: 3,
      name: "Lajjo Ki Rasoi",
      role: "Influencer",
      avatar: "/home-assets/testimonials/avatar3.jpg",
      companyLogo: "/home-assets/testimonials/company1.png",
      text: "I had a great experience working with them. I am really happy with the quality of their work.",
    },
    {
      id: 4,
      name: "Mansi Chopra",
      role: "Founder, Ad & Butter",
      avatar: "/home-assets/testimonials/avatar4.jpg",
      companyLogo: null,
      text: "Kshitij quickly grasps creative briefs and brings them to life with sharp video editing skills. He has a strong eye for detail, works with precision, and maintains a high level of professionalism throughout. Highly recommended for video editing, animation and all things creative!",
    },
    {
      id: 5,
      name: "Akshat Singh Kain",
      role: "Founder, Dainik Jaadugar",
      avatar: "/home-assets/testimonials/avatar5.jpg",
      companyLogo: null,
      text: "Kshitij and the team at Mixtudio did an amazing job with the branding for Dainik Jaadugar. They actually took the time to understand what we wanted and delivered exactly that. Really happy with how everything turned out!",
    },
    {
      id: 6,
      name: "Neeraj yadav",
      role: "Tech Startup Co-Founder",
      avatar: "/home-assets/testimonials/avatar6.jpg",
      companyLogo: null,
      text: "Had a great experience working with Kshitij, great graphic design services. His genuine suggestions really helped me to level up our graphics. Highly recommended.",
    },
  ];

  const faqs = [
    {
      question: "What exactly does Mixtudio specialize in?",
      answer: "Mixtudio is a full-service creative agency specializing in video production, branding, social media management, and graphic design. We help brands create impactful visual content that drives growth.",
    },
    {
      question: "How long does a standard video project take?",
      answer: "A standard video project typically takes 1-2 weeks from concept to delivery, depending on the complexity and scope of the project.",
    },
    {
      question: "Do you manage social media posting and scheduling?",
      answer: "Yes, we offer complete social media management including content creation, scheduling, posting, and analytics tracking to ensure your brand maintains a consistent presence.",
    },
    {
      question: "What is included in a branding package?",
      answer: "Our branding package includes logo design, brand guidelines, color palette, typography selection, business cards, and other essential brand assets.",
    },
    {
      question: "Do you offer custom service packages?",
      answer: "Yes, we understand every brand is unique. We offer customized packages tailored to your specific needs, goals, and budget.",
    },
    {
      question: "How many revisions do I get on a project?",
      answer: "We typically offer 2-3 rounds of revisions to ensure the final deliverable meets your expectations. Additional revisions can be accommodated if needed.",
    },
    {
      question: "Do you provide the raw source files?",
      answer: "Yes, we provide all final deliverables including source files upon request. This ensures you have full ownership and flexibility for future edits.",
    },
    {
      question: "Can you track the performance of marketing campaigns?",
      answer: "Absolutely. We provide detailed analytics and performance reports for all marketing campaigns, helping you understand ROI and make data-driven decisions.",
    },
    {
      question: "Are your services only for clients in Jaipur?",
      answer: "While we're based in Jaipur, we work with clients across India and internationally. Our remote collaboration tools allow us to deliver exceptional results regardless of location.",
    },
    {
      question: "How do you price your creative services?",
      answer: "Our pricing is based on the scope, complexity, and timeline of each project. We provide transparent quotes after understanding your specific requirements.",
    },
    {
      question: "How do we start working together?",
      answer: "Simply reach out to us through our contact form or email. We'll schedule a discovery call to understand your needs and propose the best approach for your project.",
    },
  ];

  const insights = [
    {
      title: "Is AI Going to Steal Your Job? The Professional Reality in 2026",
      date: "May 5, 2025",
      category: "Insights",
      image: "/home-assets/insights/insight1.jpg",
    },
    {
      title: "Top Digital Marketing Trends for 2025",
      date: "May 3, 2025",
      category: "Marketing",
      image: "/home-assets/insights/insight2.jpg",
    },
    {
      title: 'The "Eye" vs. The Prompt: Why Creatives Shouldn\'t Fear AI',
      date: "May 2, 2025",
      category: "Insights",
      image: "/home-assets/insights/insight3.jpg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      tl.to(leftRef.current, {
        xPercent: -100,
        ease: "none",
      });

      tl.to(
        rightRef.current,
        {
          xPercent: 100,
          ease: "none",
        },
        "<"
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-full">
      <div
        ref={wrapperRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <video
          src="/home-assets/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative flex w-full" style={{ height: "calc(100% - 20px)" }}>
          <div
            ref={leftRef}
            className="w-1/2 h-full bg-white flex flex-col justify-center px-10 md:px-14 lg:pl-30 lg:pt-36"
          >
            <div className="flex items-center gap-3 mb-2 mt-12">
              <img src="/home-assets/star.png" alt="" className="w-7 h-7" />
              <p className="text-[#2D2D2D] text-lg md:text-4xl font-bold">
                Keeping Your Brand In
              </p>
            </div>

            <h1 className="text-[#2D2D2D] text-[70px] md:text-[110px] lg:text-[240px] font-bold leading-[0.9] tracking-tight mb-8 uppercase">
              Motion
            </h1>

            <p className="text-gray-500  text-sm md:text-[18px] max-w-[440px] leading-tighter mb-14">
              We Shoot. We Design. We Edit. We Grow. A complete creative suite providing end-to-end solutions for brands that refuse to
              be average.
            </p>

            <div className="flex items-center gap-5">
              <div className="flex flex-col leading-tight">
                <span className="text-gray-400 text-lg">Our</span>
                <span className="text-[#E84C1E] text-2xl font-bold">Services</span>
              </div>
              <button className="w-16 h-16 rounded-full border-2 border-zinc-700 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-10 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={rightRef}
            className="w-1/2 h-full bg-transparent relative overflow-hidden"
          >
            <svg width="40" height="40" className="absolute right-0 bottom-30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#fcfcfc"></path>
</svg>
            <svg width="40" height="40" className="absolute right-86 bottom-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#fcfcfc"></path>
</svg>
            <span 
              style={{borderRadius: "60px 0 0 0"}}
            className="text-[#2D2D2D] bg-white  text-xl md:text-4xl font-bold tracking-3  h-30 text-right p-8 right-0 bottom-0 absolute">
              CREATIVE THAT <br /> CONVERTS
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[20px] bg-black" />
      </div>

      <section className="bg-white py-20 px-10 md:px-14 lg:px-20">
        <div className="max-w-5xl">
          <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
            {"{ Our Services }"}
          </p>
          <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight mb-12">
            Explore What We Can Do For You
          </h2>

          <div className="flex flex-col">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group border-t border-gray-200 ${
                  index === services.length - 1 ? "border-b" : ""
                }`}
              >
                <div
                  className={`flex items-center justify-between py-6 cursor-pointer transition-all duration-300 ${
                    activeService === service.id
                      ? "bg-[#1a1a1a] px-6 -mx-6 rounded-lg"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() =>
                    setActiveService(
                      activeService === service.id ? null : service.id
                    )
                  }
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-sm font-medium ${
                        activeService === service.id
                          ? "text-[#E84C1E]"
                          : "text-[#E84C1E]"
                      }`}
                    >
                      {service.id}
                    </span>
                    <div className="flex items-baseline gap-3">
                      <h3
                        className={`text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight ${
                          activeService === service.id
                            ? "text-white"
                            : "text-[#2D2D2D]"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <span
                        className={`text-sm ${
                          activeService === service.id
                            ? "text-gray-400"
                            : "text-gray-400"
                        }`}
                      >
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  <button
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                      activeService === service.id
                        ? "border-gray-600 text-white"
                        : "border-gray-300 text-gray-400 hover:border-gray-500"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeService === service.id ? "rotate-45" : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-10 md:px-14 lg:px-20">
        <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
          {"{ Who We Are }"}
        </p>
        <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight mb-14">
          We Are A Creative Agency Built For Impact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative">
            <div
              className="overflow-hidden"
              style={{ clipPath: "inset(0 round 60px 20px 60px 20px)" }}
            >
              <img
                src="/home-assets/office.avif"
                alt="Office"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[9px] font-bold tracking-[4px] fill-gray-700 uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      EDIT • ANIMATE • ELEVATE •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#E84C1E] rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-lg">M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:pt-0 pt-12">
            <div
              className="bg-[#F5F5F5] p-10"
              style={{ clipPath: "inset(0 round 20px 60px 20px 60px)" }}
            >
              <h3 className="text-[#2D2D2D] text-2xl font-bold mb-5">
                Our story
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                At Mixtudio, we are a full-service creative agency
                specializing in high-impact video production, branding, and
                social media management, tailored to drive your brand&apos;s
                growth.
              </p>
            </div>

            <div
              className="overflow-hidden"
              style={{ clipPath: "inset(0 round 60px 20px 60px 20px)" }}
            >
              <img
                src="/home-assets/founder.avif"
                alt="Founder"
                className="w-full h-[280px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <Brands />

      <FeaturedProjects projects={projects} />

      <HowWeWork steps={howWeWorkSteps} />

      <Testimonials testimonials={testimonials} />

      <FAQ faqs={faqs} />

      <Insights posts={insights} />

      <Contact />

      <Footer />
    </div>
  );
}
