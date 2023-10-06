import './App.css';
import CarCard from './components/CarCard';
import SearchBar from './components/SearchBar';
import './components/styles.css'

function App({ searchText, setSearchText, CarData }) {
  return (
    <div className="App">
      <div className='main-container'>
        <div className="searchContainer">
          <SearchBar
              searchText={searchText}
              setSearchText={setSearchText}
              CarData={CarData}
          />
          </div>
      <CarCard />
      </div>
    </div>
  );
}

export default App;
