import Table from './components/Table';
import './App.css';
import SearchField from './components/SearchField';

function App() {
  return (
    <>
      <header>
        <p>Welcome to All Users Table!</p>
        <SearchField/>
      </header>
      <main>
        <Table/>
      </main>
    </>
      
  );
}

export default App;
