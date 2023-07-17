
import axios from 'axios';
import './App.css';
import { fetchData } from './AxiosHelper/axioshelper';
import SearchForm from './components/SearchForm';

function  App() {
  return (
    <div className="App">
      <SearchForm />
      
    </div>
  );
}

export default App;
