import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // isContactExist = contactName =>
  //   this.state.contacts.some(
  //     contact => contact.name.toLowerCase() === contactName.toLowerCase()
  //   );

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [{ id: nanoid(), ...newContact }, ...prevState.contacts],
      };
    });
  };

  setFilter = e => {
    this.setState({ filter: e.target.value });
  };

  // filteredContacts = () => {
  //   const { filter, contacts } = this.state;

  //   const notmalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(notmalizedFilter)
  //   );
  // };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={css.Container}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
          isContactExist={this.isContactExist}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.setFilter} />
        <ContactList contacts={contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
