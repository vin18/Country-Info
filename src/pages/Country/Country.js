import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import './Country.css';

const Country = ({ countries }) => {
  let { countryName } = useParams();

  const countryItem = countries.find((c) => c.name === countryName);

  if (!countryItem) return null;
  const {
    flag,
    name,
    region,
    population,
    area,
    capital,
    nativeName,
    languages,
    subregion,
    currencies,
    timezones,
  } = countryItem;

  return (
    <Layout>
      <div className='country'>
        <div className='country__left'>
          <div className='country__flagContainer'>
            <img src={flag} alt={name} />
          </div>
          <h1 className='country__name'>{name}</h1>
          <h3 className='country__region'>{region}</h3>

          <div className='countryItem__info'>
            <div className='country__population'>
              <p>Population</p>
              {population}
            </div>

            <div className='country__area'>
              <p>
                Area (km<sup>2</sup>)
              </p>
              {area}
            </div>
          </div>
        </div>

        <div className='country__right'>
          <h3>Details</h3>
          <div className='country__capital'>
            <p>Capital</p>
            <p>{capital}</p>
          </div>

          <div className='country__subregion'>
            <p>Sub Region</p>
            <p>{subregion}</p>
          </div>

          <div className='country__nativeName'>
            <p>Native Name</p>
            <p>{nativeName}</p>
          </div>

          <div className='country__languages'>
            <p className='country__languagesLabel'>Languages</p>
            <div className='country__language'>
              {languages.map((language) => (
                <p key={language.name}>
                  {language.name}
                  {language !== languages[languages.length - 1] &&
                    ','}
                </p>
              ))}
            </div>
          </div>
          <div className='country__currencies'>
            <p className='country__currenciesLabel'>Currencies</p>
            {currencies.map((currency) => (
              <p key={currency.name}>
                {currency.name}
                {currency !== currencies[currencies.length - 1] &&
                  ','}
              </p>
            ))}
          </div>

          <div className='country__timeZones'>
            <p className='country__timeZonesLabel'>Time Zones</p>
            {timezones.map((timezone) => (
              <p key={timezone}>
                {timezone}
                {timezone !== timezones[timezones.length - 1] && ','}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Country;
