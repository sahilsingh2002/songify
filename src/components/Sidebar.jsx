import React from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import SideButton from "./SideButton";
import SideCard from "./SideCard";
import { AiFillHome } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

function Sidebar() {
  return (
    <div className="flex font-semibold bg-black ">
      <div className="h-screen  w-[20.7rem] bg-black text-white p-2  -left-[1px] fixed">
        <div className="h-fit bg-[#121113] px-3  py-4  text-white rounded-md cursor-pointer">
          <div className="py-[9px]  flex hover:bg-[#232223] items-center">
            <FaSpotify className="text-white mx-3 w-[25px] h-[25px]" />
            <span className="text-sm px-1 -mx-3">Spotify</span>
          </div>
          <div className="py-[9px] flex  hover:bg-[#232223] items-center">
            <AiFillHome className="text-white mx-3 mr-5 w-[25px] h-[25px]" />
            Home
          </div>
          <div className="py-[9px] flex hover:bg-[#232223] items-center ">
            <BsSearch className="mr-5 mx-3 w-[25px] h-[25px]" /> Search
          </div>
        </div>
        
        <div className="h-[60vh] bg-[#121113]   text-white mt-2 rounded-lg">
          <div className="pt-4 flex items-center justify-between ">
            <div className="flex justify-center items-center">

            <BiLibrary className="bg-[#121113] text-white w-6 h-6  border-black cursor-pointer ml-5 " />
            <span className="ml-2 text-sm">Your library</span>
            </div>
            <div className="flex justify-center items-center">
            <GoPlus className="bg-[#121113] mr-5 cursor-pointer text-xl" />

            <BsArrowLeftShort className="bg-[#121113] text-white text-2xl rounded-full  -right-1  cursor-pointer" />
            </div>
          </div>

          <div className="my-3 flex flex-row justify-center overflow-hidden">
            <SideButton content="Playlists" />
            <SideButton content="Artists" />
            <SideButton content="Albums" />
            <SideButton content="Podcasts" />
          </div>
          <div className="overflow-y-scroll h-40 bg-scroll-black">
            <SideCard
              Title="Create your first playlist"
              description="It's easy, we'll help you!"
              button="Create Playlist"
            />
            <SideCard
              Title="Let's find some Podcasts to follow"
              description="We'll keep you updated on new episodes!"
              button="Browse podcasts"
            />
          </div>
          <div>
            <p className="text-sm flex p-4 text-gray-400">Cookies</p>
            <button
          type="button"
          className="text-white border-white border flex m-7 duration-75 bg-black hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full tracking-wider text-sm px-5 py-1 me-2 mb-2 "
        >
          <TbWorld className="w-5 h-5 mr-1 -ml-2"/>
         English
        </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
