import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ filterValue, contactsArray, remove }) => {
  if (contactsArray.length === 0) return null;
  if (!filterValue)
    return contactsArray.map(contact => {
      return (
        <li className={styles.contactLi} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={styles.deleteBtn}
            onClick={() => {
              remove(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  return contactsArray
    .filter((el, id) =>
      el.name.toLowerCase().includes(filterValue.toLowerCase())
    )
    .map(contact => {
      return (
        <li className={styles.contactLi} key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button
            className={styles.deleteBtn}
            onClick={() => {
              remove(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
};

export default ContactList;
