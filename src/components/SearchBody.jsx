import React from "react";
import MainCard from "./MainCard";
import MainHead from "./MainHead";
import { Link } from "react-router-dom";

function SearchBody({Album}) {
  
  return (
    <div className="rounded-lg bg-transparent h-[80%] ">
    <MainHead/>
  <div className=" bg-transparent relative top-0 w-[75%] z-10 overflow-x-hidden  pt-5 h-full rounded-lg left-[21rem]" id="scroller">
  <div className=" fixed h-[80%] mt-14 rounded-lg overflow-y-scroll bg-transparent">
        <div id="12983" className="text-2xl font-bold px-3 text-white flex ">
          Spotify Playlists
        </div>

        <div className="relative grid grid-cols-5 bg-transparent overflow-hidden">
          {Album[0]?.map((alb)=>{
            return( 
              <Link to = {`/search/${alb.id}`}>
                <MainCard album = {alb} id={alb.id} name={alb.name} image={alb.images[0].url} desc={alb.strDescriptionEN?String(alb.strDescriptionEN).slice(0,30)+'...':''}/>
              </Link>
  )})  
        }

        </div>
        <div className="h-[10%]">
        
        </div>
      </div>
    </div>
    </div>
  
  );
}

export default SearchBody;
