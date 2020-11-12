import React from 'react';
import SearchRounded from '@material-ui/icons/SearchRounded';
import './SearchInput.css';

const SearchInput = ({ onInputChange }) => {
  return (
    <div className='searchInput'>
      <SearchRounded color='inherit' className='searchInput__icon' />
      <input
        type='text'
        placeholder='Search by country, region or subregion'
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchInput;
