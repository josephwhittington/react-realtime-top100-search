import React from 'react'

const SearchBox = props => {
    return (
        <input type="search" name="search-box" id="search-box" placeholder='Search Billboard Hot 100 Hits' onKeyUp={props.onKeyUp} />
    )
}

export default SearchBox