import { useEffect, useState } from 'react';
import './styles.css'
import { CarData } from './data';

const SearchBar = ({ searchText, setSearchText }) => {
  
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