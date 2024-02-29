
import Sidebar from '../components/Sidebar';
import Musicplayer from '../components/Musicplayer';
import MainBody from '../components/MainBody';
import { useState, useEffect } from'react';
import MainHead from '../components/MainHead';


function HomePage() {
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
      <MainBody Album={Album}/>
      <Musicplayer/>
    </div>
  );
}

export default HomePage;
