import React, { useState, useEffect } from 'react';
import Home from '../../pages/Home';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getCountries() {
      const res = await fetch(`https://restcountries.eu/rest/v2/all`);
      const countries = await res.json();
      setCountries(countries);
    }
    getCountries();
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(search) ||
      country.region.toLowerCase().includes(search) ||
      country.subregion.toLowerCase().includes(search)
  );

  const onInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value.toLowerCase());
  };

  return (
    <div>
      <Home
        countries={filteredCountries}
        onInputChange={onInputChange}
      />
    </div>
  );
};

export default App;
