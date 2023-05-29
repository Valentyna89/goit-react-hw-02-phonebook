import React from 'react';
// import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ name, number, id }) => (
        <li className={css.contactsItem} key={id}>
          <p className={css.contactName}>{name + ': ' + number}</p>
          <button
            className={css.deleteBtn}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
