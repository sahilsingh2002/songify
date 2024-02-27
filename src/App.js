import './App.css';
import Sidebar from './components/Sidebar';
import Musicplayer from './components/Musicplayer';
import MainBody from './components/MainBody';
import { useState, useEffect } from'react';

const CLIENT_ID = '62cc600330634f9582280c835fc18081';
const CLIENT_SECRET = '16e0d3c8058a48f0b416b3a00c240435';

function App() {
  const [details, setDetails] = useState("");
  useEffect(() =>{
    var authparams = {
      method:'POST',
      headers : {
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    }
    fetch('https://accounts.spotify.com/api/token',authparams)
    .then(res=>res.json())
    .then(data=>setDetails(data.access_token));
    
  },[]);


  return (
    <div className="App bg-black h-screen w-screen">
      
      <Sidebar/>
      <MainBody/>
      <Musicplayer/>
    </div>
  );
}

export default App;
