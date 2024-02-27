import React from 'react'


function SideCard({Title,description,button}) {
  return (
    <div className='bg-[#232223] mx-2 text-white rounded-md my-2 p-3 py-5 flex flex-col items-start  '>
      <div className='font-semibold text-sm my-2 block' >{Title}</div>

      <div className='text-xs my-2'>{description}</div>
      <button type="button" className= "my-2 hover:scale-105 text-black bg-white focus:outline-none focus:ring-4  font-medium rounded-full text-xs px-2 py-1 text-center mb-2 ">{button}</button>
    </div>
  )
}

export default SideCard