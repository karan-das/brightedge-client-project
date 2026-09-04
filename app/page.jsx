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
import AnimatedCircle from "./components/AnimatedCircle";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const wrapperRef = useRef(null);
  const motionTextRef = useRef(null);
  const arrowBtnRef = useRef(null);
  const arrowBtnBgRef = useRef(null);
  const arrowBtnArrowRef = useRef(null);
  const arrowBtnBgArrowRef = useRef(null);

  const [openService, setOpenService] = useState(null);

  const services = [
    {
      id: "01", title: "Video Production", subtitle: "Cinematic",
      image: "https://picsum.photos/seed/svc1/1600/900",
      description: "In the age of short-form content, we create videos that capture attention instantly. From high-energy reels to professional brand films, we handle everything from the first frame to the final export.",
      points: ["Social Media Reels & Shorts", "Ad Film Production", "Scripting & Storyboarding", "Professional Color Grading", "Sound Design & Mixing", "Event Coverage"],
    },
    {
      id: "02", title: "Branding", subtitle: "Identity",
      image: "https://picsum.photos/seed/svc2/1600/900",
      description: "We build the foundation of your business. Through strategic thinking and visual storytelling, we ensure your brand gains the clarity, consistency, and character needed to stand out in a crowded market.",
      points: ["Brand Strategy & Positioning", "Logo Design & Visual Identity", "Brand Voice & Messaging", "Typography & Color Systems", "Brand Guidelines", "Rebranding & Evolution"],
    },
    {
      id: "03", title: "Video Editing", subtitle: "Post Production",
      image: "https://picsum.photos/seed/svc3/1600/900",
      description: "We transform raw footage into high-impact narratives. Our editing process focuses on rhythm, retention, and results—ensuring every cut serves a purpose and every second keeps your audience hooked to the screen.",
      points: ["Precision Cutting & Pacing", "Color Correction & Grading", "Audio Cleaning & Sound Design", "Subtitles & Kinetic Captions", "Multi-Camera Syncing", "Platform-Specific Optimization (9:16 / 16:9)"],
    },
    {
      id: "04", title: "Motion Design", subtitle: "Animation",
      image: "https://picsum.photos/seed/svc4/1600/900",
      description: "We bring static ideas to life through fluid movement. Our motion graphics add a layer of premium polish to your content, making complex information easy to digest and impossible to ignore.",
      points: ["2D & 3D Animation", "Kinetic Typography", "Explainer Videos", "Logo Animation", "UI/UX Motion Assets", "VFX & Compositing"],
    },
    {
      id: "05", title: "SMM", subtitle: "Social Media Management",
      image: "https://picsum.photos/seed/svc5/1600/900",
      description: "We don't just post; we perform. By combining data-driven strategy with high-quality content, we manage your digital presence to build community and drive consistent engagement.",
      points: ["Content Calendar Planning", "Audience Engagement Strategy", "Hashtag & SEO Research", "Platform-Specific Optimization", "Performance Analytics", "Community Management"],
    },
    {
      id: "06", title: "Graphic Design", subtitle: "Visuals",
      image: "https://picsum.photos/seed/svc6/1600/900",
      description: "Every touchpoint is an opportunity to impress. We create striking visuals that communicate your message clearly and maintain a high standard of aesthetic excellence across all platforms.",
      points: ["Social Media Creative Assets", "Marketing Collateral (Decks/Flyers)", "Digital Illustrations", "Print & Editorial Design", "Presentation Design", "Vector Artwork"],
    },
    {
      id: "07", title: "Packaging Design", subtitle: "Physical",
      image: "https://picsum.photos/seed/svc7/1600/900",
      description: "We bridge the gap between digital strategy and physical products. Our packaging designs are engineered to grab attention on the shelf and provide a premium unboxing experience for your customers.",
      points: ["Product Packaging Design", "Labeling & Compliance Layouts", "3D Mockups & Visualization", "Sustainable Packaging Solutions", "Dieline Creation", "Print Production Management"],
    },
    {
      id: "08", title: "Brand Promotion", subtitle: "Reach",
      image: "https://picsum.photos/seed/svc8/1600/900",
      description: "Getting seen is only half the battle; being remembered is the goal. We design and execute promotional campaigns that put your brand in front of the right audience at the right time.",
      points: ["Campaign Strategy & Concept", "Influencer Collaboration Assets", "Digital Ad Creative (Meta/Google)", "Launch Strategy", "Promotional Video Kits", "Cross-Platform Integration"],
    },
    {
      id: "09", title: "Photography", subtitle: "Stills",
      image: "https://picsum.photos/seed/svc9/1600/900",
      description: "High-quality imagery is the silent salesman of your brand. We capture professional stills that highlight the best features of your products, people, and processes with a cinematic eye.",
      points: ["Product & E-commerce Shoots", "Lifestyle & Editorial Photography", "Corporate Headshots", "Interior & Architectural Stills", "Retouching & Post-Processing", "Creative Direction"],
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Navam",
      category: "Brand Promotion",
      image: "https://framerusercontent.com/images/DAG1fl3qUc1VKJRteAEjKHC5m8.png?scale-down-to=2048&width=2754&height=1536",
    },
    {
      id: 2,
      title: "Hell Energy",
      category: "Video Editing",
      image: "https://framerusercontent.com/images/eyN2wOolJmKfeLrZbzWgOrZQC44.png?scale-down-to=2048&width=2754&height=1536",
    },
    {
      id: 3,
      title: "Abhinav Fashion",
      category: "Photography",
      image: "https://framerusercontent.com/images/arY93vAtCRbshSHOiuqVp8YYYrg.png?width=2752&height=1536",
    },
    {
      id: 4,
      title: "Pinki Ki Rasoi",
      category: "Branding",
      image: "https://framerusercontent.com/images/iX5UGaLEuuWujOHIoOrFBOaZ2E8.png?width=2486&height=1728",
    },
  ];

  const howWeWorkSteps = [
    {
      id: 1,
      title: "Listening to Your Vision",
      description:
        "We start by understanding your brand, your audience, and your specific goals. We listen first so we can build a creative foundation that actually matches your vision.",
      image: "https://framerusercontent.com/images/oKwQP0bWz0KocPmpX7BFjBvmpY.png?scale-down-to=512&width=1672&height=941",
    },
    {
      id: 2,
      title: "Strategy & Pre-Production",
      description:
        "We don't just guess. We analyze trends, plan content calendars, write scripts, and build mood boards to create a tailored roadmap for your project.",
      image: "https://framerusercontent.com/images/psIFQ1yHWW4NbPrA1dhSzvYPnI.png?scale-down-to=512&width=1672&height=941",
    },
    {
      id: 3,
      title: "Creative Production",
      description:
        "This is where ideas become real. Whether we are shooting cinematic video, capturing professional photography, or designing your brand identity, we execute with precision.",
      image: "https://framerusercontent.com/images/ejTudYj9W7Dx52LwMHryii1qTdU.png?width=1672&height=941",
    },
    {
      id: 4,
      title: "Post-Production & Polish",
      description:
        "The magic happens in the edit. We handle color grading, motion design, kinetic typography, and final design touches to make sure the work is impossible to ignore.",
      image: "https://framerusercontent.com/images/bbDIcURc8nKDWVe8gL2Fo7K5ZA.png?scale-down-to=512&width=1448&height=1086",
    },
    {
      id: 5,
      title: "Delivery & Growth",
      description:
        "We deliver the final, high-quality assets ready for launch. For our SMM clients, we take over the scheduling, management, and optimization to ensure long-term growth.",
      image: "https://framerusercontent.com/images/n70eQ4FyRdORnIJt4BIuj49K3U.png?scale-down-to=512&width=1672&height=941",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Anchal Jain",
      role: "Founder, Anchal Jnn Invites",
      avatar: "https://picsum.photos/seed/avatar1/200/200",
      companyLogo: null,
      text: "I have been working with Kshitij since a long time now. He has been very professional, understanding to my ideas and requirements. Whatever I have in my mind he gives it a face in the form of animation.",
    },
    {
      id: 2,
      name: "Raj",
      role: "Social Media Manager",
      avatar: "https://picsum.photos/seed/avatar2/200/200",
      companyLogo: null,
      text: "Mixtudio is the best agency for photo manipulation and cinematography in Jaipur. They never disappoints.",
    },
    {
      id: 3,
      name: "Lajjo Ki Rasoi",
      role: "Influencer",
      avatar: "https://picsum.photos/seed/avatar3/200/200",
      companyLogo: "https://picsum.photos/seed/company1/200/80",
      text: "I had a great experience working with them. I am really happy with the quality of their work.",
    },
    {
      id: 4,
      name: "Mansi Chopra",
      role: "Founder, Ad & Butter",
      avatar: "https://picsum.photos/seed/avatar4/200/200",
      companyLogo: null,
      text: "Kshitij quickly grasps creative briefs and brings them to life with sharp video editing skills. He has a strong eye for detail, works with precision, and maintains a high level of professionalism throughout. Highly recommended for video editing, animation and all things creative!",
    },
    {
      id: 5,
      name: "Akshat Singh Kain",
      role: "Founder, Dainik Jaadugar",
      avatar: "https://picsum.photos/seed/avatar5/200/200",
      companyLogo: null,
      text: "Kshitij and the team at Mixtudio did an amazing job with the branding for Dainik Jaadugar. They actually took the time to understand what we wanted and delivered exactly that. Really happy with how everything turned out!",
    },
    {
      id: 6,
      name: "Neeraj yadav",
      role: "Tech Startup Co-Founder",
      avatar: "https://picsum.photos/seed/avatar6/200/200",
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
      image: "https://framerusercontent.com/images/GkB5Qht2Wchx20iTfYjpLvyOw.png?width=2816&height=1536",
    },
    {
      title: "Top Digital Marketing Trends for 2025",
      date: "May 3, 2025",
      category: "Marketing",
      image: "https://framerusercontent.com/images/5yyiq2tkZSescxjDzYMQnk1n8E.jpg?width=1920&height=1440",
    },
    {
      title: 'The "Eye" vs. The Prompt: Why Creatives Shouldn\'t Fear AI',
      date: "May 2, 2025",
      category: "Insights",
      image: "https://framerusercontent.com/images/hxdqL1LAkuooFm0jL8IWQbkEeSA.png?width=1537&height=1023",
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
        motionTextRef.current,
        {
          xPercent: -60,
          ease: "none",
        },
        "<"
      );

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

  useEffect(() => {
    const btn = arrowBtnRef.current;
    const bg = arrowBtnBgRef.current;
    const arrow = arrowBtnArrowRef.current;
    const bgArrow = arrowBtnBgArrowRef.current;

    gsap.set(bg, { scale: 0 });
    gsap.set(arrow, { xPercent: -15 });
    gsap.set(bgArrow, { scale: 0 });

    const onEnter = () => {
      gsap.to(bg, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(arrow, { xPercent: 50, duration: 0.3, ease: "power2.out" });
      gsap.to(bgArrow, { scale: 1, duration: 0.3, delay: 0.1, ease: "back.out(1.7)" });
    };

    const onLeave = () => {
      gsap.to(bg, { scale: 0, duration: 0.3, ease: "power2.in" });
      gsap.to(arrow, { xPercent: -15, duration: 0.3, ease: "power2.in" });
      gsap.to(bgArrow, { scale: 0, duration: 0.2, ease: "power2.in" });
    };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);

    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    };
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

            <h1 ref={motionTextRef} className="text-[#2D2D2D] text-[70px] md:text-[110px] lg:text-[240px] font-bold leading-[0.9] tracking-tight mb-8 uppercase">
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
              <button
                ref={arrowBtnRef}
                className="relative w-16 h-16 rounded-full border-2 border-[#545454] flex items-center justify-center overflow-hidden cursor-pointer"
              >
                <div
                  ref={arrowBtnBgRef}
                  className="absolute inset-0 bg-[#545454] rounded-full flex items-center justify-center"
                >
                  <svg
                    ref={arrowBtnBgArrowRef}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="white"
                    className="w-10 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
                <svg
                  ref={arrowBtnArrowRef}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-10 h-5 text-gray-600 relative z-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
            <svg style={{
              rotate:"90deg"
            }} width="40" height="40" className="absolute -right-10 bottom-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#fcfcfc"></path>
</svg>
          </div>

          <div
            ref={rightRef}
            className="w-1/2 h-full bg-transparent relative overflow-hidden"
          >

            <AnimatedCircle width="150px" height="150px" right="10px" bottom="18%" />
            
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

        <div className="absolute bottom-0 left-0 w-full h-[20px] bg-white" />
      </div>

      <section className="bg-white py-20 px-10 md:px-14 lg:px-20">
        <div className="max-w-5xl">
          <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
            {"{ Our Services }"}
          </p>
          <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-medium uppercase tracking-tight mb-12">
            Explore What We Can Do For You
          </h2>

          <div className="flex flex-col">
            {services.map((service, index) => {
              const isOpen = openService === index;
              return (
                <div
                  key={service.id}
                  className={`service-item group border-t border-gray-200 ${
                    index === services.length - 1 ? "border-b" : ""
                  } ${isOpen ? "is-open" : ""}`}
                >
                  <div
                    className="service-reveal"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />

                  <div
                    className="relative z-2 flex items-center justify-between py-6 px-4 md:px-6 cursor-pointer transition-colors duration-300 hover:bg-transparent"
                    onClick={() => setOpenService(isOpen ? null : index)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-light text-[#F55733] transition-colors duration-300">
                        {service.id}
                      </span>
                      <div className="flex items-baseline gap-3">
                        <h3 className={`text-3xl md:text-4xl lg:text-6xl font-bold uppercase tracking-tight transition-colors duration-300 ${isOpen ? "text-[#F55733]" : "text-[#2D2D2D] group-hover:text-[#F55733]"}`}>
                          {service.title}
                        </h3>
                        <span className="service-subtitle text-sm text-gray-400">
                          {service.subtitle}
                        </span>
                      </div>
                    </div>

                    <button className={`service-plus w-10 h-10 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center transition-all duration-300 hover:border-gray-500 ${isOpen ? "rotate-45 !bg-white !text-[#111] !border-white" : ""}`}>
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
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className={`service-expanded relative z-2 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-4 md:px-6 pb-8 flex flex-col md:flex-row gap-8">
                      <p className="md:w-1/3 text-sm text-gray-500 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                        {service.points.map((point, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E84C1E] shrink-0" />
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-10 md:px-14 lg:px-20">
        <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
          {"{ Who We Are }"}
        </p>
        <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-medium uppercase tracking-tight mb-14">
          We Are A Creative Agency Built For Impact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="relative col-span-2">
            <div className="relative rounded-4xl overflow-hidden">
              <img
                src="/home-assets/office.avif"
                alt="Office"
                className="w-full h-[600px] object-cover"
              />
            </div>

           <div className="w-45 h-45 bg-white absolute left-0 top-110 " style={{ borderTopRightRadius: "50%" }}>
            <svg className="absolute left-0 -top-10 rotate-90" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#FCFCFC"></path>
</svg>
<svg className="absolute bottom-5 -right-10  rotate-90" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#FCFCFC"></path>
</svg>
            <div className="absolute top-5  right-8 w-28 h-28 bg-white rounded-full border-1 border-black shadow-lg flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatedCircle width="100px" height="100px"  logo="/home-assets/logo.png" />
              </div>
            </div>
           </div>

          </div>

          <div className="flex flex-col gap-6 lg:pt-0 pt-12">
            <div
              className=" w-full h-74 p-4"
            >
              <div className="w-full h-22 bg-[#F2F2F2] " style={{borderTopRightRadius:30}} >
                <h3 className="text-[#2D2D2D] flex items-center justify-center text-2xl relative font-bold mb-5 bg-white w-50 h-full" style={{borderBottomRightRadius:50}}>
                  Our story
                <svg className=" absolute top-0 -right-10 rotate-180" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#FCFCFC"></path>
</svg>
                </h3>
              </div>
              <p className="text-gray-500 bg-[#F2F2F2] p-4 text-lg leading-relaxed rounded-3xl" style={{borderTopRightRadius:0}}>
                At Mixtudio, we are a full-service creative agency
                specializing in high-impact video production, branding, and
                social media management, tailored to drive your brand&apos;s
                growth.
              </p>
            </div>

            <div
              className="overflow-hidden rounded-4xl"
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
