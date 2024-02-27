import React from "react";

function SideButton({content}) {
  return (
    <button
      type="button"
      className="text-white bg-[#212121] hover:scale-110  focus:outline-none focus:ring-4 focus:ring-gray-300 font-sans rounded-full text-xs px-[0.65rem] duration-75 py-0.5 me-2 mb-2"
    >
      {content}
    </button>
  );
}

export default SideButton;
