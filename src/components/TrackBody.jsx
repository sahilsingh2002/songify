import React from 'react'
import MainHead from './MainHead'
function TrackBody({artist,tracks}) {
  console.log(artist,tracks);
  return (
    <div className="rounded-lg  ">
    <MainHead/>
  <div className=" bg-transparent relative top-0 w-[75%] z-10 overflow-x-hidden  pt-5 h-full rounded-lg left-[21rem]" id="scroller">
  <div className=" fixed h-[80%] mt-14 rounded-lg overflow-y-scroll">
    <div className='flex gap-6'>
    <img src={artist.image} alt="artist img" className='w-52' />
    <h1 className='text-5xl font-bold'>{artist.name}</h1>
    </div>
    </div>
    </div>
    </div>
  )
}

export default TrackBody