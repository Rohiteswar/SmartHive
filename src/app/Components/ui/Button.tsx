import React from "react";

function Button() {
  return (
    <>
      <div className="flex place-items-center">
        <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 m-2">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Log In
          </span>
        </button>

        <button className="px-5 py-1 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-green-500 text-white focus:ring-2 focus:ring-green-400 hover:shadow-xl transition duration-200 font-medium">
          SignUp
        </button>
      </div>
    </>
  );
}

export default Button;
