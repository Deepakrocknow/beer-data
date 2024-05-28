import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerList from './components/BeerList';
import './App.css'

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.sampleapis.com/beers/ale')
      .then(response => setBeers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Beer Search-List</h1>
      <input
        type="text"
        placeholder="Search for a beer"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <BeerList beers={filteredBeers} />
    </div>
  );
};

export default App;
