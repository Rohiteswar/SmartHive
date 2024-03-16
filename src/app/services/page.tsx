import React from "react";
import { LampDemo } from "../Components/ui/lamp";
import { TracingBeamDemo } from "../Components/Time_Line";

function page() {
  return (
    <>
      <div className="">
        <LampDemo />
      </div>

      <div>
        <TracingBeamDemo />
      </div>

      <div className="w-[740px] h-[0px] border border-white border-opacity-50"></div>
    </>
  );
}

export default page;
