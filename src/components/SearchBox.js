import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <fragment className='pa2'>
    <input
    className='pa3 ma3 ba b--green bg-lightest-blue'
    type='search'
    placeholder='Search for robots'
    onChange= {searchChange}
    />
    </fragment>
  );
}

export default SearchBox;
