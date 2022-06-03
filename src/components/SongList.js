import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

const SongList = () => {
    const songs = useSelector(state => state.songs)
    console.log(songs)
    return (
        <div className="ui divided list">
            {songs.map((song, id)=>{
                return (
                    <div className="item" key={id}>
                        <div className="right floated content">
                            <button className="ui button primary">Select</button>
                        </div>
                        <div className="content">
                            {song.title}
                        </div>
                    </div>

                );
            })}
        </div>
    )
}


export default SongList;
