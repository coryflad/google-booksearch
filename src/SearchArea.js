import React from 'react'

function SearchArea(props) {
    return (
        <div className='search-area'>
            <form 
            onSubmit={props.searchBook}
            action=''>
                <input 
                onChange={props.handleSearch}
                type='text'>    
                </input>
                <button type='submit'>Search</button>
                <select 
                onChange={props.handleSort}
                defaultValue='Sort'>
                    <option disabled value='sort'>Sort</option>
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                </select>
            </form>
        </div>
    )
}

export default SearchArea