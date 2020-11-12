import React from 'react';
import { useParams } from 'react-router-dom';
import './Country.css';

const Country = () => {
  let { countryName } = useParams();

  return (
    <div>
      <h1>Country - {countryName}</h1>
    </div>
  );
};

export default Country;
