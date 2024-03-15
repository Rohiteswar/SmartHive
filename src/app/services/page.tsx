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
      <TracingBeamDemo/>
    </div>
    
    </>
  );
}

export default page;
