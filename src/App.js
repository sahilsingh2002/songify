import './App.css';

import React,{useState, useEffect} from'react';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { useDispatch } from 'react-redux';
import { setAuth } from './redux/slices/AuthSlice';
import {useSelector } from 'react-redux';
import { allAlbum } from './redux/slices/AlbumSlice';



const CLIENT_ID = '62cc600330634f9582280c835fc18081';
const CLIENT_SECRET = '16e0d3c8058a48f0b416b3a00c240435';

export function useSearch(searchItem,auth) {
  const dispatch = useDispatch();
 
  async function search(searchItem, auth) {
     console.log('Searching...');
     const searchparams = {
       method: 'GET',
       headers: {
         "Content-type": "application/json",
         "Authorization": 'Bearer ' + auth,
       },
     };
 
     const artistId = await fetch('https://api.spotify.com/v1/search?q=' + searchItem + '&type=artist', searchparams)
       .then(response => response.json())
       .then(data => data?.artists?.items[0]?.id);
 
     console.log(artistId);
 
     const albums = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&limit=50`, searchparams)
       .then(response => response.json())
       .then(data => data.items);
 
     dispatch(allAlbum(albums));
  }
 
  return search;
 }
function App() {
 
  const dispatch=useDispatch();
  const items =useSelector(state=>state);
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
