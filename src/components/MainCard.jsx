import React from 'react'
import { useDispatch } from 'react-redux';
import {setTrack} from '../redux/slices/TrackSlice';

function MainCard(props) {
  const dispatch = useDispatch();
  
  return (
    <div className='bg-[#171717] m-3 rounded-lg py-4 px-3 flex flex-col items-center cursor-pointer'  onClick={e=>{dispatch(setTrack(props.album))}}>
      <div className=' flex'>
      <img id={props.id} src={props.image} alt="img" className='flex justify-center rounded-lg'  />
      </div>
      <div id={props.id} className='text-white mt-4 flex flex-col items-start justify-start'>
        <h2 id={props.id} className='text-lg font-bold'>{props.name}</h2>
        <p id={props.id} className='text-xs font-sans text-gray-600'>{props.desc}</p>
      </div>
    </div>
  )
}

export default MainCard