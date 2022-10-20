import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onFilterContacts }) => {
    return(
    <label>
            <span className={css.spanFilter}>Find contacts by name</span>
            <br />
        <input
            className={css.inputFilter}
            type="text"
            name={filter}
            onChange={onFilterContacts}
            placeholder='Enter name for search'
        />
    </label>
    )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterContacts: PropTypes.func.isRequired,
};