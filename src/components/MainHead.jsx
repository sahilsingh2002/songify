import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { makeData } from '../redux/slices/SearchSlice';
import { useSearch } from '../App';
import { useSelector } from 'react-redux';
function MainHead() {
  const dispatch = useDispatch();
  const auth = useSelector(state=>state.auth);
  const item=useSelector(state=>state.search);
  const search = useSearch();
  const handleSearch = (searchItem, auth) => {
    search(searchItem, auth);
 };
  return (
    <div>

      <div className={`flex h-[4.73rem]  justify-between px-5 w-[73.8vw] pt-5 -mt-5 fixed z-10 bg-black`}>
      <div className="flex">
        <FaAngleLeft className="text-white bg-black border-gray-900 rounded-full border w-6 h-6 mx-3" />
        <FaAngleRight className="text-white bg-black border-gray-900 rounded-full border w-6 h-6 mx-3" />
      </div>
      
<form className="max-w-md mx-auto">   
    <label for="default-search" className="mb-2 text-sm font-medium text-black sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-white border border-gray-800 rounded-lg bg-black focus:ring-grey-500 focus:border-grey-500" placeholder="Search a song" onKeyDown={e=>{
          if(e.key==="Enter"){
            console.log("Enter");
          }
        } }  onChange={e=>{
          dispatch(makeData(e.target.value));
          handleSearch(e.target.value,auth);
        }}/>
        
    </div>
</form>

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