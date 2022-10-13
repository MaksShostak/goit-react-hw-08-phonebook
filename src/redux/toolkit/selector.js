import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectItems = state => state.contacts.items;

export const selectContactCount = createSelector([selectContacts], contacts => {
  return contacts.items.length;
});

export const selectFilteredContacts = filteredContacts =>
  createSelector([selectFilter, selectItems], (filter, items) => {
    const normalaizedFilter = filter.toLowerCase();
    console.log('hhhhhhhhh');
    const active = filteredContacts ? filteredContacts : items;

    return active.filter(contact => {
      return (
        contact.name.toLowerCase().includes(normalaizedFilter) ||
        contact.phone.includes(filter)
      );
    });
  });
