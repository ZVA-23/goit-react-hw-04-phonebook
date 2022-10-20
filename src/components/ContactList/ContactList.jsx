import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
    return (
        <ul>
            {contacts
                .filter(contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase())
                )
                .map( contact  => {
                return (
                    <li key={contact.id} className={css.contactList}>
                        <p><span className={css.spanList}>{contact.name}:</span> {contact.number}</p>                        
                        <button className={css.btnList} type="button" onClick={() => onDeleteContact(contact.id)}>
                            Delete
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}