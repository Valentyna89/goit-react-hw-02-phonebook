import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label className={CSS.Filter}>
        Find contacts by name
        <input
          type="text"
          name="search"
          className={css.inputFilter}
          onChange={onChange}
          value={value}
        ></input>
      </label>
    </div>
  );
};
export default Filter;
