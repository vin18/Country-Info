import React from 'react';
import './Loader.css';
import loader from './loader.svg';

const Loader = () => {
  return (
    <div className='loader'>
      <img src={loader} alt='Loading...' />
    </div>
  );
};

export default Loader;
