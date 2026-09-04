
const CustomizedCard = ({ title, description, className = "" }) => {
  return (
    <div className={`p-4 flex  flex-col ${className}`}>
      <div className="w-full bg-[#F2F2F2]" style={{ borderTopRightRadius: 30 }}>
        <h3
          className="text-[#2D2D2D] flex items-center justify-center text-2xl relative font-bold bg-white w-50 h-22"
          style={{ borderBottomRightRadius: 50 }}
        >
          {title}
          <svg
            className="absolute top-0 -right-10 rotate-180"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
              fill="#FCFCFC"
            />
          </svg>
          <svg
            className="absolute left-0 -bottom-10 rotate-180"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
              fill="#FCFCFC"
            />
          </svg>
        </h3>
      </div>
      <p
        className="text-gray-500 bg-[#F2F2F2] p-4 text-lg leading-relaxed flex-1"
        style={{ borderRadius: "0 0 30px 30px" }}
      >
        {description}
      </p>
    </div>
  );
};

export default CustomizedCard;