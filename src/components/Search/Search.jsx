import React from 'react'
import "./Search.scss"

const Search = (props) => {

  const { searchTerm, handleInput } = props;

  return (
    <form className='search'>
        <label className='label'>Search by Name:</label> 
        <input 
        className='input' 
        type="text"
        value={searchTerm}
        onInput={handleInput}></input>
    </form>
  )
}

export default Search