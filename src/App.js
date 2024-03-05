import './App.css';

import React,{ useEffect} from'react';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './redux/slices/AuthSlice';







function App() {
  const auth = useSelector(state=>state.auth);
  const searchItem = useSelector(state=>state.search);
 
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
  <div className="App bg-black h-screen text-white">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
    
  </div>
  

 )
}

export default App;
