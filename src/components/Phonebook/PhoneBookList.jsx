import React from 'react';

import { ButtonAdd } from './FormForPhonebook/FormForPhoneBook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { slice } from 'redux/toolkit/slice';
const { deleteContact, filterContacts } = slice.actions;

export const PhonebookList = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const getFilteredContact = filtered => {
    const normalaizedFilter = state.filter.toLowerCase();

    const active = filtered ? filtered : state.contacts;

    return active.filter(contact => {
      return (
        contact.name.toLowerCase().includes(normalaizedFilter) ||
        contact.number.includes(state.filter)
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
                filtered = state.contacts.filter(contact => contact.id !== id);
                getFilteredContact(filtered).length
                  ? dispatch(filterContacts(state.filter))
                  : dispatch(filterContacts(''));
                dispatch(deleteContact(id));
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
