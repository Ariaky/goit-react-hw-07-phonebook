import { createSlice } from "@reduxjs/toolkit";
/*import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initialContacts from '../components/data/contacts.json'*/
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsInitialState = {
    items: [],
    isLoading: {
      fetchContacts: false,
      addContact: false,
      deletedContactId: null,
    },
    error: null,
  };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { 
    list: contactsInitialState,
    filter: ''
  },
/*  reducers: {
    addContact(state, action) {
      state.list.push(action.payload);
    },
    deleteContact(state, action) {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    }
  }*/
});

/*const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact, updateFilter } = contactSlice.actions;

export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);*/