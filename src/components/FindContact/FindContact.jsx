import React from 'react';
import styles from './FindContact.module.css';

const FindContact = ({ findContact }) => {
  return (
    <div>
      <h2 className={styles.contactsTitle}>Contacts</h2>
      <div className={styles.findDiv}>
        <label>Find contacts by name</label>
        <input onChange={findContact} type="text" />
      </div>
    </div>
  );
};
export default FindContact;
