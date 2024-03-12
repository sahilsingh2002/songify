import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function TracksPage() {
    const auth = useSelector(state =>state.auth);
    const {id} = useParams();
    console.log(auth);
    const [tracks, setTracks] = useState([]);

    
    async function GetAllTracks(){
        const searchparams = {
            method: 'GET',
            headers: {
              "Content-type": "application/json",
              "Authorization": 'Bearer ' + auth,
            },
        };
        const tracks = await fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, searchparams)
        .then(response => response.json())
        .then(d=>{setTracks(d.items)});
        
    }
    useEffect(()=>{
        GetAllTracks()
    },[]);
    console.log(tracks);
  return (
    <div>
      yoo
    </div>
  )
}

export default TracksPage
