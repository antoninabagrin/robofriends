import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2 ">
      <input
        className="pa3 ba b--yellow bg-washed-red"
        type="search"
        placeholder="Search a robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
