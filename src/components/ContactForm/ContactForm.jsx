import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

const handleChange = evt => {
    const { name, value } = evt.target;
  switch (name) {
    case 'name':
      setName(value);
      break;
    case 'number':
      setNumber(value);
      break;
    default:
      return;
    }
}

const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    reset();
}

  const reset = () => {
    setName('');
    setNumber('');
  };
  
  const nameInputId = nanoid();
  const numberInputId = nanoid();
    
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          <span className={css.spanForm}>Name</span>
          <br />
          <input
            className={css.inputForm}
            id={nameInputId}
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder='Enter name'
            required
          />
        </label>
        <br />
        <label  htmlFor={numberInputId}>
          <span className={css.spanForm}>Number</span>
          <br />
          <input
            className={css.inputForm}
            id={numberInputId}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            placeholder='Enter phone number'
          />
        </label>
        <br />
        <button type="submit" className={css.btnForm}>Add contact</button>
      </form>
);
}

ContactForm.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};



