import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MainHead from '../components/MainHead';
import TrackBody from '../components/TrackBody';

function TracksPage() {
    const auth = useSelector(state =>state.auth);
    const {id} = useParams();
    const [tracks, setTracks] = useState([]);
    const artist = useSelector(state => state.track);
    console.log(artist);

    
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
    
  return (
    <div className="HomePage ">

      <TrackBody artist={artist} tracks = {tracks}/>
    </div>
  )
}

export default TracksPage
