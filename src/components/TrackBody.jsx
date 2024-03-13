import React from "react";
import MainHead from "./MainHead";
import { Link } from "react-router-dom";
// async function getArtist (){
// future prospect
// }
function TrackBody({ artist, tracks }) {

  const timeMens = (duration)=>{
    const millis =duration;
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds>=10?seconds:'0'+seconds}`
  }

  return (
    <div className="rounded-lg  ">
      <MainHead />
      <div
        className=" bg-transparent relative top-0 w-[75%] z-10 overflow-x-hidden  pt-5 h-full rounded-lg left-[21rem]"
        id="scroller"
      >
        <div className=" fixed h-[70%] mt-14 rounded-lg overflow-y-scroll">
          <div className="flex gap-6">
            <img src={artist?.images[1]?.url} alt="artist img" className="w-52" />
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-5xl font-bold">{artist?.name}</h1>
              {artist?.artists?.map((names) => (
                <p>{names.name}</p>
              ))}
              <p>{tracks?.length} songs</p>
            </div>
          </div>

          <div className=" overflow-x-auto w-[70vw]">
            <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-transparent w-full  dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Duration
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                {tracks?.map((track)=>(
                
                  <tr>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div >
                      <p>

                      {track.name}
                      </p>
                      {track?.artists?.map((artist)=>(
                        
                          <Link to={(artist.external_urls.spotify)} target="_blank">
                        <span className="text-sm font-thin" onClick={()=>{
                          
                        }}>{artist.name}, </span>
                          </Link>
                      ))}
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      {timeMens(track.duration_ms)}
                      
                    </td>
                  </tr>
                ))}                
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackBody;
