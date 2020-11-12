import React from 'react';
import { Link } from 'react-router-dom';
import './CountryTable.css';

const CoutryTable = ({ countries }) => {
  return (
    <div className='countryTable'>
      <div className='countryTable__header'>
        <div className='flag'></div>
        <button>
          <div>Name</div>
        </button>

        <button>
          <div>Population</div>
        </button>

        <button>
          <div>
            Area (km<sup>2</sup>)
          </div>
        </button>

        <button>
          <div>Capital</div>
        </button>
      </div>

      {countries.map((country) => (
        <Link to={`/country/${country.name}`} key={country.name}>
          <div className='countryItem'>
            <div className='countryItem__flag'>
              <img src={country.flag} alt={`${country.name} flag`} />
            </div>
            <div className='countryItem__name'>
              {country.name ? country.name : 'NA'}
            </div>
            <div className='countryItem__population'>
              {country.population ? country.population : 'NA'}
            </div>
            <div className='countryItem__area'>
              {country.area ? country.area : 'NA'}
            </div>
            <div className='countryItem__capital'>
              {country.capital ? country.capital : 'NA'}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CoutryTable;
