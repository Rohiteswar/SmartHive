import React from "react";

function Footer() {
  return (
    <div>
      <div className="text-center text-white text-3xl md:text-[40px] font-normal leading-[56px]">
        Smart. Connected. Seamless.
      </div>
      <div className="flex justify-center">
        <div className="w-[659px] opacity-80 text-center text-white text-sm font-normal leading-snug mt-4">
          Our passionate team of experts empowers you to envision, design, and
          realize your dream smart home. We work efficiently and collaboratively
          to deliver seamless solutions that exceed your expectations.
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 mr-16">
          👀Insights
        </button>
        <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          👋Contact
        </button>
      </div>
    </div>
  );
}

export default Footer;
