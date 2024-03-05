import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import SearchBody from '../components/SearchBody';
import { useSelector,useDispatch } from 'react-redux';
import Musicplayer from '../components/Musicplayer';
import { allAlbum } from '../redux/slices/AlbumSlice';
import { AbortController } from "@azure/abort-controller";


export function useSearch(searchItem,auth) {
  const dispatch = useDispatch();
  const searchResult =useSelector(state=>state.search);
  const abortController = new window.AbortController();
 
  async function search(searchItem, auth) {
     const searchparams = {
       method: 'GET',
       headers: {
         "Content-type": "application/json",
         "Authorization": 'Bearer ' + auth,
       },
       signal: abortController.signal,
     };
     try{
      const featured = await fetch('https://api.spotify.com/v1/browse/featured-playlists', searchparams)
     .then(response => response.json())
     .then(d=>{return(d)});
 
     const artistId = await fetch('https://api.spotify.com/v1/search?q=' + searchItem + '&type=artist', searchparams)
       .then(response => response.json())
       .then(data => data?.artists?.items[0]?.id);

     if(searchResult.length>0){

       const albums = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&limit=50`, searchparams)
         .then(response => response.json())
         .then(data => data.items);
   
       dispatch(allAlbum(albums));
     }
     else{
      dispatch(allAlbum(featured.playlists?.items));
     }
    }
    catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        console.error('Fetch error:', error);
      }
    }
    return () => {
      abortController.abort();
    };
 }
 
  return search;
 }
 
 function SearchPage() {
   const auth = useSelector(state=>state.auth);
   const searchItem =useSelector(state=>state.search);
   const albums =useSelector(state=>state.album);
  
  
  const search = useSearch(searchItem,auth);
  useEffect(()=>{
    
    search(searchItem, auth);
  },[searchItem,auth]);
  
  return (
    <div>
      <Sidebar/>
      <SearchBody Album={albums}/>
      <Musicplayer/>
    </div>
  )
}

export default SearchPage