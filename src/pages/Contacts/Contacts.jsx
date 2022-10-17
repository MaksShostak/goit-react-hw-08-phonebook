import { FilterForPhoneBook } from 'components/Phonebook/FilterForPhonbook/FilterForPhoneBook';
import { FormForPhoneBook } from 'components/Phonebook/FormForPhonebook/FormForPhoneBook';
import { PhonebookList } from 'components/Phonebook/PhoneBookList/PhoneBookList';
import { Spiner } from 'components/Spiner/Spiner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/toolkit/contacts/operations-contacts';
import { selectContacts } from 'redux/toolkit/contacts/selector-contacts';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {' '}
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Phonebook</h1>
      <FormForPhoneBook />
      {isLoading && !error && <Spiner />}
      <h2 style={{ textAlign: 'center', marginTop: '5px' }}>Contacts</h2>
      <FilterForPhoneBook />
      <PhonebookList />
    </div>
  );
};

export default Contacts;
