"use client";

import { useRef, useEffect } from "react";

export default function FeaturedProjects({ projects }) {
  const elementRef = useRef(null);


  useEffect(() => {
    const items = elementRef.current.querySelectorAll(".js-stack-cards__item");
    let scrollingFn = false;
    let scrolling = false;
    let marginY = 0;
    let elementHeight = 0;
    let cardTop = 0;
    let cardHeight = 0;
    let windowHeight = window.innerHeight;

    function getIntegerFromProperty() {
      const node = document.createElement("div");
      node.setAttribute(
        "style",
        `opacity:0; visibility: hidden; position: absolute; height:${marginY}`
      );
      elementRef.current.appendChild(node);
      marginY = parseInt(getComputedStyle(node).getPropertyValue("height"));
      elementRef.current.removeChild(node);
    }

    function setStackCards() {
      marginY = getComputedStyle(elementRef.current).getPropertyValue(
        "--stack-cards-gap"
      );
      getIntegerFromProperty();
      elementHeight = elementRef.current.offsetHeight;

      const cardStyle = getComputedStyle(items[0]);
      cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue("top")));
      cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue("height")));

      windowHeight = window.innerHeight;

      if (isNaN(marginY)) {
        elementRef.current.style.paddingBottom = "0px";
      } else {
        elementRef.current.style.paddingBottom =
          marginY * (items.length - 1) + "px";
      }

      for (let i = 0; i < items.length; i++) {
        items[i].style.opacity = "1";
        if (isNaN(marginY)) {
          items[i].style.transform = "none";
        } else {
          items[i].style.transform = "translateY(" + marginY * i + "px)";
        }
      }
    }

    function animateStackCards() {
      if (isNaN(marginY)) {
        scrolling = false;
        return;
      }

      const top = elementRef.current.getBoundingClientRect().top;

      if (
        cardTop -
          top +
          windowHeight -
          elementHeight -
          cardHeight +
          marginY +
          marginY * items.length >
        0
      ) {
        scrolling = false;
        return;
      }

      for (let i = 0; i < items.length; i++) {
        const scroll = cardTop - top - i * (cardHeight + marginY);
        if (scroll > 0) {
          const scaling =
            i == items.length - 1
              ? 1
              : (cardHeight - scroll * 0.05) / cardHeight;
          items[i].style.transform =
            "translateY(" + marginY * i + "px) scale(" + scaling + ")";
          items[i].style.opacity = "1";
        } else {
          items[i].style.transform = "translateY(" + marginY * i + "px)";
          items[i].style.opacity = "1";
        }
      }

      scrolling = false;
    }

    function stackCardsScrolling() {
      if (scrolling) return;
      scrolling = true;
      window.requestAnimationFrame(animateStackCards);
    }

    function stackCardsCallback(entries) {
      if (entries[0].isIntersecting) {
        if (scrollingFn) return;
        scrollingFn = stackCardsScrolling;
        window.addEventListener("scroll", scrollingFn);
      } else {
        if (!scrollingFn) return;
        window.removeEventListener("scroll", scrollingFn);
        scrollingFn = false;
      }
    }

    setStackCards();

    const observer = new IntersectionObserver(stackCardsCallback, {
      threshold: [0, 1],
    });
    observer.observe(elementRef.current);

    let resizingId = false;
    const onResize = () => {
      clearTimeout(resizingId);
      resizingId = setTimeout(() => {
        setStackCards();
        animateStackCards();
      }, 500);
    };
    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      if (scrollingFn) window.removeEventListener("scroll", scrollingFn);
      window.removeEventListener("resize", onResize);
    };
  }, [projects]);

  return (
    <section className="bg-white px-10 md:px-14 lg:px-20 py-20">
      <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
        {"{ Featured Projects }"}
      </p>
      <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-medium uppercase tracking-tight mb-12">
        Showcasing Our Most Impactful Work
      </h2>

      <ul
        ref={elementRef}
        className="js-stack-cards stack-cards flex flex-col gap-8 md:gap-6 items-center"
        style={{ "--stack-cards-gap": "2rem", "--stack-cards-item-ratio": "16/9" }}
      >
        {projects.map((project) => (
          <li
            key={project.id}
            className="stack-cards__item js-stack-cards__item rounded-3xl shadow-lg relative overflow-hidden w-full"
            style={{ paddingBottom: "80vh" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="relative">
              <span className="bg-[#F55733] text-white text-md font-medium px-6 py-2 tracking-wide rounded-full absolute  top-6 left-10">
                {project.category}
              </span>
            </div>
            <div className="relative">
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium uppercase tracking-tight absolute  top-20 left-10">
                {project.title}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
