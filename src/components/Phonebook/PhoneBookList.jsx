import React from 'react';
// import Spiner from 'components/Spiner/Spiner';
import { ButtonAdd } from './FormForPhonebook/FormForPhoneBook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/toolkit/operations';
import { slice } from 'redux/toolkit/slice';
const { filterContacts } = slice.actions;

export const PhonebookList = () => {
  const {
    contacts: { items },
    filter,
  } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleDelete = id => {
    filtered = items.filter(contact => contact.id !== id);
    getFilteredContact(filtered).length
      ? dispatch(filterContacts(filter))
      : dispatch(filterContacts(''));
    dispatch(deleteContact(id));
  };

  const getFilteredContact = filtered => {
    const normalaizedFilter = filter.toLowerCase();

    const active = filtered ? filtered : items;

    return active.filter(contact => {
      return (
        contact.name.toLowerCase().includes(normalaizedFilter) ||
        contact.phone.includes(filter)
      );
    });
  };

  const filteredContact = getFilteredContact();

  let filtered = null;
  return (
    <ul>
      {filteredContact.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            <p>
              {name}: {phone}
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
