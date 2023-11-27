
import './App.css';
import Search from './components/search/Search';

function App() {

  const handleSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <main className="app">
      <Search onSearchChange={handleSearchChange} />
    </main>
  );
}

export default App;
