import {combineReducers} from 'redux';

const songsReducer = () =>{
    return [
        {
            title: 'No Scrub', duration: '4:05',
        },
        {
            title: 'Macarena', duration: '2:02',
        },
        {
            title: 'All star', duration: '3:25',
        },
        {
            title: 'I want in that day', duration: '5:35',
        },
    ]
}

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

const reducers = combineReducers({
    songs: songsReducer,
    selected: selectedSongReducer,
})

export default reducers;