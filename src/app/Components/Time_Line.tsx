"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../Components/ui/tracing beam";
import Plan from "./ui/Plan";
import Schedule from "./ui/Schedule";
import Visit from "./ui/visit";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 ">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 flex flex-row-reverse">
            <h2 className="bg-transparent text-white rounded-full text-sm w-fit px-4 py-1 mb-4"></h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.svg && item.svg}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const string_val = "Let's";
const dummyContent = [
  {
    title: "Personalized Plan",
    description: (
      <>
        <p>Smart Home Planning with Floor Plans.</p>
        <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 mr-16">
          {string_val} Connect 🤝
        </button>
        <p>
          Get a tailor-made quote for your smart home transformation. Provide
          your electrical floor plan for personalized recommendations.
        </p>
      </>
    ),
    svg: <Plan />,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>Smart Home Planning with Floor Plans.</p>
        <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 mr-16">
          {string_val} Connect 🤝
        </button>
        <p>
          Get a tailor-made quote for your smart home transformation. Provide
          your electrical floor plan for personalized recommendations.
        </p>
      </>
    ),
    svg: <Schedule />,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>Smart Home Planning with Floor Plans.</p>
        <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 mr-16">
          {string_val} Connect 🤝
        </button>
        <p>
          Get a tailor-made quote for your smart home transformation. Provide
          your electrical floor plan for personalized recommendations.
        </p>
      </>
    ),
    svg: <Visit />,
  },
];
