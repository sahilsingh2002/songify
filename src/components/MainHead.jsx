import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function MainHead() {
  
  return (
    <div>

      <div className={`flex h-[4.73rem]  justify-between px-5 w-[73.8vw] pt-5 -mt-5 fixed z-10 bg-black`}>
      <div className="flex">
        <FaAngleLeft className="text-white bg-black border-gray-900 rounded-full border w-6 h-6 mx-3" />
        <FaAngleRight className="text-white bg-black border-gray-900 rounded-full border w-6 h-6 mx-3" />
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-black hover:scale-110 duration-75 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
        >
         Sign Up
        </button>
        <button type="button" className="text-gray-900 bg-white border duration-75 border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium hover:scale-110 text-sm px-5 py-2.5 me-2 mb-2 rounded-full">Login</button>
      </div>
      </div>
    </div>
  )
}

export default MainHead