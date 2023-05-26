import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
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

  setFilter = e => {
    this.state({ filter: e.target.value });
  };

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== e.target.id
      ),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className={css.Container}>
        <h1>Phonebook</h1>

        <ContactForm />

        <h2>Contacts</h2>
        <input className="inputSearchContact"></input>

        <ContactList contacts={contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
