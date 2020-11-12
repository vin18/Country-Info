import React from 'react';
import SearchRounded from '@material-ui/icons/SearchRounded';
import './SearchInput.css';

const SearchInput = () => {
  return (
    <div className='searchInput'>
      <SearchRounded color='inherit' className='searchInput__icon' />
      <input
        type='text'
        placeholder='Search by country, region or subregion'
      />
    </div>
  );
};

export default SearchInput;
