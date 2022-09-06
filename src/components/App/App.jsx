import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import AddContactForm from '../AddContactForm/AddContactForm';
import FindContact from 'components/FindContact/FindContact';
import ContactList from 'components/ContactList/ContactList';
import styles from './App.module.css';

export const App = () => {
  let [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  let [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    let contactsJson = localStorage.getItem('contactsList');
    let contactsList = JSON.parse(contactsJson);
    if (contactsList !== null) {
      setContacts((contacts = contactsList));
    }
  }, []);

  useEffect(() => {
    let contactsJson = JSON.stringify(contacts);
    localStorage.setItem('contactsList', contactsJson);
  }, [contacts]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contact = {
      name: form.elements.contact.value,
      number: form.elements.number.value,
      id: nanoid(),
    };

    if (
      contacts.filter(
        el => el.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
      ).length >= 1
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts((contacts = [...contacts, contact]));
    form.reset();
  };

  const removeContact = id => {
    setContacts((contacts = contacts.filter(contact => contact.id !== id)));
  };
  const find = event => {
    setFilter((filter = event.target.value));
  };

  return (
    <div className={styles.whatever}>
      <AddContactForm SubmitForm={handleSubmit} />
      <FindContact findContact={find} />
      <ContactList
        filterValue={filter}
        contactsArray={contacts}
        remove={removeContact}
      />
    </div>
  );
};
