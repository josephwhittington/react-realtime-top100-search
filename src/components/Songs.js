import React from 'react'
import Song from './Song'

const Songs = props => {
    return (
        <div>
            {props.songs.map((song, index) => <Song song={song} key={index} index={index} />)}
        </div>
    )
}

export default Songs