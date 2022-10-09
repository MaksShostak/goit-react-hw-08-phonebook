import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const slice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]({ contacts }) {
      contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]({ contacts }, { payload }) {
      contacts.isLoading = false;
      // contacts.error = null;
      contacts.items = payload;
      contacts.error = false;
    },
    [fetchContacts.rejected]({ contacts }, { payload }) {
      contacts.isLoading = false;
      contacts.error = true;
      // contacts.error = payload;
    },

    [addContact.pending]({ contacts }) {
      contacts.isLoading = true;
    },
    [addContact.fulfilled]({ contacts }, { payload }) {
      contacts.isLoading = false;
      contacts.items = [...contacts.items, payload];
      contacts.error = null;
    },
    [addContact.rejected]({ contacts }, { payload }) {
      contacts.isLoading = false;
      contacts.error = payload;
    },
    [deleteContact.pending]({ contacts }) {
      contacts.isLoading = true;
    },
    [deleteContact.fulfilled]({ contacts }, { payload }) {
      console.log('afdsa', contacts);
      console.log(payload);
      contacts.isLoading = false;
      contacts.items = contacts.items.filter(
        contact => contact.id !== payload.id
      );
      contacts.error = null;
    },
    [deleteContact.rejected]({ contacts }, { payload }) {
      contacts.isLoading = false;
      contacts.error = payload;
    },
  },
});
