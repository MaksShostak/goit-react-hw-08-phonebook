import { PhonebookList } from './Phonebook/PhoneBookList';
import { FormForPhoneBook } from './Phonebook/FormForPhonebook/FormForPhoneBook';

import { FilterForPhoneBook } from './Phonebook/FilterForPhonbook/FilterForPhoneBook';
import Spiner from './Spiner/Spiner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/toolkit/operations';
export const App = () => {
  const dispath = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts);
  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);

  return (
    <div
      style={{
        backgroundColor: 'rgb(225, 179, 152)',
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <h1>Phonebook</h1>
      {isLoading && !error && <Spiner />}
      <FormForPhoneBook />
      <h2>Contacts</h2>
      <FilterForPhoneBook />
      <PhonebookList />
    </div>
  );
};
