import { useEffect, useState } from 'react';
import './styles.css'
import { CarData } from './data';

const SearchBar = () => {
  const [filteredCars, setFilteredCars] = useState([])
    const [searchText, setSearchText] = useState("")

  useEffect(() => {
    console.log("SEARCH TEXT", searchText);
    filterCars(searchText);
  }, [searchText]);

  console.log("Car Data ====> " , CarData)
  const filterCars = (searchText) => {
      const filteredCars = CarData.filter((car) =>
        car.carName?.toLowerCase().includes(searchText.toLowerCase())
    );
    return setFilteredCars(filteredCars);
  };
  console.log(filterCars)
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