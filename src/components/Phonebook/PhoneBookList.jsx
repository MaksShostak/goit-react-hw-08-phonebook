import React from 'react';

import { ButtonAdd } from './FormForPhonebook/FormForPhoneBook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { slice } from 'redux/toolkit/slice';
const { deleteContact, filterContacts } = slice.actions;

export const PhonebookList = () => {
  const { filter, contacts } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleDelete = id => {
    filtered = contacts.filter(contact => contact.id !== id);
    getFilteredContact(filtered).length
      ? dispatch(filterContacts(filter))
      : dispatch(filterContacts(''));
    dispatch(deleteContact(id));
  };

  const getFilteredContact = filtered => {
    const normalaizedFilter = filter.toLowerCase();

    const active = filtered ? filtered : contacts;

    return active.filter(contact => {
      return (
        contact.name.toLowerCase().includes(normalaizedFilter) ||
        contact.number.includes(filter)
      );
    });
  };

  const filteredContact = getFilteredContact();

  let filtered = null;
  return (
    <ul>
      {filteredContact.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <ButtonAdd
              type="submit"
              onClick={() => {
                handleDelete(id);
              }}
            >
              Delete
            </ButtonAdd>
          </li>
        );
      })}
    </ul>
  );
};
