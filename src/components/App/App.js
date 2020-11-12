import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Country from '../../pages/Country/Country';
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
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home
            countries={filteredCountries}
            onInputChange={onInputChange}
          />
        </Route>

        <Route path='/country/:countryName' exact>
          <Country />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
