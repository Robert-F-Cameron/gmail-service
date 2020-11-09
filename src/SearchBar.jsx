import React from 'react'

function SearchBar(props){

 
    return(
        <form onSubmit={props.handleSearch}>
            <input type= "text" onChange ={props.handleSearchInput} placeholder="Search Email" />
            <button type='submit'>Submit</button>
        </form>

    )
}
export default SearchBar
