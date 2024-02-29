import React from 'react'
import Sidebar from '../components/Sidebar'
import SearchBody from '../components/SearchBody';
import { useSelector } from 'react-redux';

function SearchPage() {
  const albums =useSelector(state=>state.album);
  
  return (
    <div>
      <Sidebar/>
      <SearchBody Album={albums}/>
    </div>
  )
}

export default SearchPage