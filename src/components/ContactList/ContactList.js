import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <li className={css.contactsItem} key={contact.id}>
          <p className={css.contactName}>
            {contact.name + ': ' + contact.number}
          </p>
          <button
            className={css.deleteBtn}
            type="button"
            id={contact.id}
            onClick={deleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
