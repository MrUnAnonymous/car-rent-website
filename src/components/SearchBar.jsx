import React, { useEffect, useState } from 'react'

const SearchBar = ({ searchText, setSearchText}) => {
  
  return (
    <div>
        <input 
          type='text'
          id='searchBar'
          placeholder='Search'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
    </div>
  )
}

export default SearchBar