import AnimatedCircle from "./AnimatedCircle"
import CustomizedCard from "./helper/CustomizedCard"

const WhoWeAre = ({ showBottomRow = false }) => {
  return (
    <section className="bg-white py-20 px-10 md:px-14 lg:px-20">
      <p className="text-[#E84C1E] text-sm mb-3 tracking-wide">
        {"{ Who We Are }"}
      </p>
      <h2 className="text-[#2D2D2D] text-3xl md:text-4xl lg:text-[42px] font-medium uppercase tracking-tight mb-14">
        We Are A Creative Agency Built For Impact
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Office Image */}
        <div className="relative col-span-2">
          <div className="relative rounded-4xl overflow-hidden">
            <img
              src="/home-assets/office.avif"
              alt="Office"
              className="w-full h-[600px] object-cover"
            />
          </div>

          <div
            className="w-45 h-45 bg-white absolute left-0 top-110"
            style={{ borderTopRightRadius: "50%" }}
          >
            <svg
              className="absolute left-0 -top-10 rotate-90"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#FCFCFC" />
            </svg>
            <svg
              className="absolute bottom-5 -right-10 rotate-90"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#FCFCFC" />
            </svg>
            <div className="absolute top-5 right-8 w-28 h-28 bg-white rounded-full border-1 border-black shadow-lg flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatedCircle
                  width="100px"
                  height="100px"
                  logo="/home-assets/logo.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Card + Founder (home page only) */}
        <div className="flex flex-col gap-6">
          <CustomizedCard
            title="Our Story"
            description="At Mixtudio, we are a full-service creative agency specializing in high-impact video production, branding, and social media management, tailored to drive your brand's growth."
            className={showBottomRow ? "h-[600px]" : ""}
          />
          {!showBottomRow && (
            <div className="overflow-hidden rounded-4xl flex-1">
              <img
                src="/home-assets/founder.avif"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Row - Only on About Page */}
      {showBottomRow && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <CustomizedCard
            title="Our Mission"
            description="Our mission is to help businesses grow through high-retention video editing, strategic social media management, and bold branding. We focus on creating authentic content that grabs attention, holds it, and drives real results."
          />

          <CustomizedCard
            title="Our Values"
            description="We value relentless execution, clear communication, and visual excellence. Our approach is built on understanding your goals and delivering high-quality creative assets that actually perform."
          />

          <div className="overflow-hidden rounded-4xl">
            <img
              src="/home-assets/founder.avif"
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default WhoWeAre;