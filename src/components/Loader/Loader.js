import React from 'react';
import './Loader.css';
import loader from './loader.svg';

const Loader = () => {
  return (
    <div className='loader'>
      <img style={{ height: '8rem' }} src={loader} alt='Loading...' />
    </div>
  );
};

export default Loader;
