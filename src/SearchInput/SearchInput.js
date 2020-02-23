import React from 'react'

function SearchInput(props) {
    return (
        <div>
            <form>
                <label>Search: </label>
                <input 
                onChange={props.handleSearch}
                type='text'
                placeholder='Enter search term'>
                </input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}


export default SearchInput