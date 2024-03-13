import './App.css';

import React,{ useEffect} from'react';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './redux/slices/AuthSlice';
import TracksPage from './pages/TracksPage';
import Musicplayer from './components/Musicplayer';
import Sidebar from './components/Sidebar';







function App() {
  
 
  const dispatch=useDispatch();
  
 
  
  useEffect(() =>{
    
    
    var authparams = {
      method:'POST',
      headers : {
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`,
    }
    fetch('https://accounts.spotify.com/api/token',authparams)
    .then(res=>res.json())
    .then(data=>dispatch(setAuth(data.access_token)));
    
  },[dispatch]);
 
  
  
 return(
  <div className="App bg-gradient-to-b from-[#151515]  via-[#121212] to-black h-screen text-white overflow-hidden">
    
    <Sidebar/>
    <div>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path = "/search/:id" element={<TracksPage/>}/>
      
    </Routes>
    </div>
    <Musicplayer/>
    
  </div>
  

 )
}

export default App;
