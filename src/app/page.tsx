"use client";

import { RecoilRoot } from "recoil";

import Box from "./Components/ui/Box";
import Card from "./Components/ui/Card";
import { ThreeDCardDemo } from "./Components/ThreeDCardDemo";
import { ThreeDCardDemo1 } from "./Components/ThreeDCardDemo1";
import { Testinomial_cards } from "./Components/Testinomial";
import Footer from "./Components/Footer";
import Footer_Links from "./Components/Footer_Links";

export default function Home() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

function App() {
  return (
    <>
      <div className="h-[40rem] w-full rounded-md flex md:justify-center bg-gradient-radial from-black antialiased bg-grid-white/[0.02]">
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-20">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            SmartHive.
          </h1>

          <h1 className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
            A World Transformed By Us And Connected Through IOT.
          </h1>

          <h1 className="mt-8 text-lg md:text-xl lg:text-2xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
            Leading the Future homes with IoT Solutions
          </h1>

          <Card />

          <Box />

          <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols">
            <ThreeDCardDemo />

            <ThreeDCardDemo1 />
          </div>

          <div>
            <Testinomial_cards />

            <Footer />
          </div>

          <div>
            <Footer_Links />
          </div>
        </div>
      </div>
    </>
  );
}
