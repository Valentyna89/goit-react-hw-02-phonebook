import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={onChange}
        value={value}
      ></input>
    </label>
  );
};
export default Filter;
