import React from "react";

interface tag {
  name: string;
}
function Main_button({ name }: tag) {
  return (
    <>
      <button className="px-5 py-1 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-green-500 text-white focus:ring-2 focus:ring-green-400 hover:shadow-xl transition duration-200 font-normal hover:font-medium hover:bg-gradient-to-tr hover:from-sky-400 hover:to-green-400">
        {name}
      </button>
    </>
  );
}

export default Main_button;
