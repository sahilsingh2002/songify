import React,{useState,useEffect} from "react";
import MainCard from "./MainCard";
import MainHead from "./MainHead";

function MainBody({Album}) {
  return (
    <div className="rounded-lg  h-[80%] ">
      <MainHead/>
    <div className=" relative top-0 w-[75%] z-10 overflow-x-hidden  pt-5 h-full rounded-lg left-[21rem]" id="scroller">
    <div className=" fixed h-[80%] mt-14 rounded-lg overflow-y-scroll">
        <div id="12983" className="text-2xl font-bold px-3 text-white flex ">
          Spotify Playlists
        </div>

        <div className="relative grid grid-cols-5 overflow-hidden">
          {Album.album?.map((alb)=>{
            return <MainCard album = {alb} id={alb.idAlbum} name={alb.strAlbum} image={alb.strAlbumThumb} desc={alb.strDescriptionEN?String(alb.strDescriptionEN).slice(0,30)+'...':''}/>
          })  
          }
        </div>
      </div>
    </div>
    </div>
  );
}

export default MainBody;
