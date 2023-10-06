import './App.css';
import CarCard from './components/CarCard';
import './components/styles.css'

function App({ searchText, setSearchText, CarData }) {
  return (
    <div className="App">
      <div className='main-container'>
        
      <CarCard />
      </div>
    </div>
  );
}

export default App;
