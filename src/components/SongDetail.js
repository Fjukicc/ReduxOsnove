import React from 'react'
import {useSelector} from 'react-redux';

const SongDetail = () => {
    const selectedSong = useSelector(state => state.selected);
    if(selectedSong === null){
        return (<div>
            No song is selected
        </div>)
    }
    return (
        <>
        <h2>Selected Song</h2>
        <p>
            {selectedSong.title}
        </p>
        <p>
            duration: {selectedSong.duration}
        </p>
        </>
    )
}

export default SongDetail;
