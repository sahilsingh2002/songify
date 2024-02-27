import React from 'react'

function MainCard(props) {
  return (
    <div className='bg-[#171717] m-3 rounded-lg py-4 px-3 flex flex-col items-center'>
      <div className=' flex  '>
      <img src={props.image} alt="img" className='flex justify-center rounded-lg'  />
      </div>
      <div className='text-white mt-4 flex flex-col items-start justify-start'>
        <h2 className='text-lg font-bold'>{props.name}</h2>
        <p className='text-xs font-sans text-gray-600'>{props.desc}</p>
      </div>
    </div>
  )
}

export default MainCard