"use client";

export default function AnimatedCircle({
  text = "ANIMATE • ELEVATE • EDIT • ",
  width = "320px",
  height = "320px",
  rotate = true,
  logo = "",
  className = "",
  style = {},
  ...position
}) {
  const hasPosition =
    position.left || position.right || position.top || position.bottom;
  const posStyle = hasPosition ? { position: "absolute", ...position } : position;

  return (
    <button
      aria-label="Explore"
      className={`circle-button-anim relative cursor-pointer overflow-hidden isolate grid place-items-center bg-[#f4f4f2] rounded-full ${className}`}
      style={{ width, height, aspectRatio: "1", ...posStyle, ...style }}
    >
      <span className="circle-button-anim-red absolute rounded-full bg-[#ff3b1f]" />

      <svg
        viewBox="0 0 320 320"
        className="rotating-text-anim absolute inset-0 w-full h-full pointer-events-none"
        style={
          rotate
            ? { animation: "rotateTextAnc 12s linear infinite" }
            : undefined
        }
      >
        <defs>
          <path
            id="circlePath"
            d="M 160,160 m -125,0 a 125,125 0 1,1 250,0 a 125,125 0 1,1 -250,0"
          />
        </defs>
        <text style={{ fontSize: "25px", letterSpacing: "7px", fontWeight: 500 }}>
          <textPath href="#circlePath" startOffset="0%">
            • {text}  ANIMATE
          </textPath>
        </text>
      </svg>

      {logo ? (
        <div className="absolute inset-0 z-[5] grid place-items-center p-[18%]">
          <div className="w-full h-full bg-[#ff3b1f] rounded-full grid place-items-center p-2">
            <img
              src={logo}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      ) : (
        <div className="arrow-anim absolute inset-0 m-auto z-[5]">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            <path
              d="M50 15V78"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M20 55L50 85L80 55"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </button>
  );
}
