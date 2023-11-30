
import './App.css';
import LiveWeather from './components/search/liveWeather/LiveWeather';
import Search from './components/search/Search';

function App() {

  const handleSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <main className="app">
      <Search onSearchChange={handleSearchChange} />
      <LiveWeather />
    </main>
  );
}

export default App;
