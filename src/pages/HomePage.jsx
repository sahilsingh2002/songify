
import Sidebar from '../components/Sidebar';
import Musicplayer from '../components/Musicplayer';
import MainBody from '../components/MainBody';
import { useState, useEffect } from'react';

import { useSelector } from 'react-redux';
import SearchBody from '../components/SearchBody';


function HomePage() {
  const alb = useSelector(state=>state.album);
  console.log('album',alb);

  const url='https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024';
  const [Album, setAlbum] = useState([]);
  async function fetchData (){
    return fetch(url).then((res)=>res.json()).then((d)=>setAlbum(d));
  }
  useEffect(()=>{
    fetchData();
    
  },[]);
  


  return (
    <div className="HomePage bg-black h-screen w-screen">
      
      <Sidebar/>
      {
        alb[0]?<SearchBody Album={alb}/>:<MainBody Album={Album}/>
        
      }
      {}
      
      <Musicplayer/>
    </div>
  );
}

export default HomePage;
