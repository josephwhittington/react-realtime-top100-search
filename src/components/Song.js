import React from 'react'

const Song = ({ song, index }) => {
    return (
        <div className='song' key={index}>
            {song.rank}. <strong>{song.title}</strong> - {song.artist}
        </div>
    )
}

export default Song