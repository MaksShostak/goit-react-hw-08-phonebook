import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phonebook.contacts;
export const selectFilter = state => state.phonebook.filter;
export const selectItems = state => state.phonebook.contacts.items;

export const selectContactCount = createSelector([selectContacts], contacts => {
  return contacts.items.length;
});

export const selectFilteredContacts = createSelector(
  [selectFilter, selectItems],
  (filter, items) => {
    const normalaizedFilter = filter.toLowerCase();
    return items.filter(contact => {
      return (
        contact.name.toLowerCase().includes(normalaizedFilter) ||
        contact.number.includes(filter)
      );
    });
  }
);
