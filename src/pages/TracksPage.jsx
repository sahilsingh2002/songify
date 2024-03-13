import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import TrackBody from '../components/TrackBody';

function TracksPage() {
    const auth = useSelector(state => state.auth);
    const { id } = useParams();
    const [tracks, setTracks] = useState([]);
    const artist = useSelector(state => state.track);

    useEffect(() => {
        async function GetAllTracks() {
            const searchparams = {
                method: 'GET',
                headers: {
                    "Content-type": "application/json",
                    "Authorization": 'Bearer ' + auth,
                },
            };
            const response = await fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, searchparams);
            const data = await response.json();
            setTracks(data.items);
        }

        GetAllTracks();
    }, [auth, id]); // Include auth and id in the dependency array

    return (
        <div className="HomePage ">
            <TrackBody artist={artist} tracks={tracks} />
        </div>
    );
}

export default TracksPage;
