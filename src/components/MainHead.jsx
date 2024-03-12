import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { makeData } from '../redux/slices/SearchSlice';
import { useSearch } from '../pages/SearchPage';
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function MainHead() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const searchItem = useSelector(state => state.search);
  const search = useSearch();

  const handleSearch = (searchItem, auth) => {
    search(searchItem, auth);
  };
  const navigate = useNavigate();

  return (
    <div className="flex z-100">
      <aside className="w-[300px]">

      </aside>
      <div className={`flex  items-center bg-transparent flex-1 justify-between px-5 pt-4 -mb-12 }`}>
        <div className="flex">
          <FaAngleLeft className="text-white bg-black border-gray-900 rounded-full border w-6 h-6 mx-3 cursor-pointer" onClick={(e)=>{navigate(-1)}} />
          <FaAngleRight className="text-white bg-black border-gray-900 rounded-full border w-6 h-6 mx-3 cursor-pointer" onClick={(e)=>{navigate(1)}} />
        </div>
        <form className="max-w-md mx-auto">   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="search" 
              id="default-search" 
              className="block w-full p-4 ps-10 text-sm text-white border border-gray-800 rounded-lg bg-black focus:ring-grey-500 focus:border-grey-500" 
              placeholder="Search a song" 
              onKeyDown={e => {
                if(e.key === "Enter") {
                  console.log("Enter");
                }
              }}  
              onChange={e => {
                dispatch(makeData(e.target.value));
                handleSearch(e.target.value, auth);
              }} 
              value={searchItem}
            />
          </div>
        </form>
        <div>
          <button
            type="button"
            className="text-white bg-black hover:scale-110 duration-75 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
          >
            Sign Up
          </button>
          <button 
            type="button" 
            className="text-gray-900 bg-white border duration-75 border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium hover:scale-110 text-sm px-5 py-2.5 me-2 mb-2 rounded-full"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainHead;
