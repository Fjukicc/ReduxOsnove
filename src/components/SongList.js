import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
//REDUX ACTION CREATORS
import {selectSong} from '../actions';

const SongList = () => {
    const songs = useSelector(state => state.songs)
    const dispatch = useDispatch();
    return (
        <div className="ui divided list">
            {songs.map((song, id)=>{
                return (
                    <div className="item" key={id}>
                        <div className="right floated content">
                            <button className="ui button primary" onClick={()=>dispatch(selectSong(song))}>Select</button>
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
