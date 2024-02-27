import React,{useState} from 'react'
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";
import { IoPlaySkipBack,IoPlaySkipForward} from "react-icons/io5";
import { MdReplay } from "react-icons/md";
import { PiShuffleLight } from "react-icons/pi";

function Musicplayer() {
  const [playing, setPlaying] = useState(false);
  const togglePlay=()=>{
    if(playing){
      setPlaying(false);
    }
    else{
      setPlaying(true);
    }
  };
  const [loop, setLoop] = useState("");
  const toggleLoop=()=>{
    if(loop===""){
      setLoop("all");

    }
    else if(loop==="all"){
      setLoop("one");
    }
    else{
      setLoop("");
    }
  };
  return (
    <div className='flex flex-col fixed bottom-0 w-full h-[4.5rem]'>
      <div className='h-full bg-black text-white relative '>
        <div className='flex justify-center relative items-center py-5'>
          <PiShuffleLight className="text-white w-5 h-5 mx-2 cursor-pointer"/>
          <IoPlaySkipBack className="text-white w-5 h-5 mx-2 cursor-pointer"/>
          <FaRegCirclePlay className={`text-white w-5 h-5 mx-2 cursor-pointer ${playing?"hidden":""}`} onClick={togglePlay}/>
          <FaRegCirclePause className={`text-white w-5 h-5 mx-2 cursor-pointer ${!playing?"hidden":""}`} onClick={togglePlay}/>

          <IoPlaySkipForward className="text-white w-5 h-5 mx-2 cursor-pointer"/>
          
          <MdReplay className="text-white w-5 h-5 ml-2 cursor-pointer" onClick={toggleLoop} /> 
          <sup className="text-white text-xs tracking-tight">{loop}</sup>
        </div>
          <progress value={0.7} className='absolute  bottom-1 justify-center items-center right-[25%] w-[50vw] h-1 border-black rounded-lg' />
      </div>

    </div>
  )
}

export default Musicplayer