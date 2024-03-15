import React from "react";
import Main_button from "./Main_button";

function Card() {
  return (
    <div className="w-[450px] h-[170px] md:w-[560px] md:h-[180px] md:p-2 lg:w-[650px] lg:h-[250px] lg:p-4 bg-neutral-700 bg-opacity-10 rounded-[50px] border border-black border-opacity-10 backdrop-blur-[30.80px] mx-auto mt-10 flex flex-col place-items-center">
      <p className="mt-4 font-medium text-xs p-2 md:text-sm lg:text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-neutral-300 max-w-lg text-center mx-auto ">
        “SmartHive: Your gateway to the smart home of tomorrow. Seamlessly
        integrate security and automation into your life. Explore our services
        and embrace the future, today.”
      </p>
      <div className="flex justify-center p-4">
        <Main_button name={"Unleash your power"} />
      </div>
    </div>
  );
}

export default Card;
