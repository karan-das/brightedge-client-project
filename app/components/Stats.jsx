"use client";

export default function Stats() {
  const stats = [
    { value: "4", suffix: "+", label: "Years Experience" },
    { value: "100", suffix: "+", label: "Projects Done" },
    { value: "30", suffix: "+", label: "Happy Clients" },
    { value: "98", suffix: "%", label: "Satisfied Clients" },
  ];

  return (
    <section className="bg-[#F5F5F5] py-20 px-10 md:px-14 lg:px-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-start">
              <span className="text-[#2D2D2D] text-6xl md:text-7xl lg:text-8xl font-light leading-none">
                {stat.value}
              </span>
              <span className="text-[#E84C1E] text-2xl md:text-3xl font-light mt-2">
                {stat.suffix}
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-3">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
