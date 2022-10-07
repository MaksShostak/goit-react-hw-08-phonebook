import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const slice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, { payload }) {
      // state.contscts = [...state.contacts, payload];
      return { ...state, contacts: [...state.contacts, payload] };
    },
    deleteContact(state, { payload }) {
      // return { ...state,
      //   contacts: state.contacts.filter(contact => contact.id !== payload),
      //   };
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});
