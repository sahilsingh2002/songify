

import Musicplayer from '../components/Musicplayer';
import MainBody from '../components/MainBody';
import { useState, useEffect } from'react';

import { useSelector } from 'react-redux';
import MainHead from '../components/MainHead';



function HomePage() {
  const alb = useSelector(state=>state.album);
  

  const url='https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024';
  const [Album, setAlbum] = useState([]);
  async function fetchData (){
    return fetch(url).then((res)=>res.json()).then((d)=>setAlbum(d));
  }
  useEffect(()=>{
    fetchData();
    
  },[]);
  


  return (
    <div className="HomePag">
    
      
      
       <MainBody Album={Album}/>
        
      
      
      
      
    </div>
  );
}

export default HomePage;
