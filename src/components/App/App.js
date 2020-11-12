import React, { useState, useEffect } from 'react';
import Home from '../../pages/Home';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const res = await fetch(`https://restcountries.eu/rest/v2/all`);
      const countries = await res.json();
      setCountries(countries);
    }
    getCountries();
  }, []);

  return (
    <div>
      <Home countries={countries !== null && countries} />
    </div>
  );
};

export default App;
