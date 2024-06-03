import { createSlice } from "@reduxjs/toolkit";
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

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: builder => {
      builder
        .addCase(fetchContacts.pending, state => {
          state.isLoading.fetchContacts = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.isLoading.fetchContacts = false;
          state.error = null;
          state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
          state.isLoading.fetchContacts = false;
          state.error = action.payload;
        })
        .addCase(addContact.pending, state => {
          state.isLoading.addContact = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.isLoading.addContact = false;
          state.error = null;
          state.items = [...state.items, action.payload];
        })
        .addCase(addContact.rejected, (state, action) => {
          state.isLoading.addContact = false;
          state.error = action.payload;
        })
        .addCase(deleteContact.pending, (state, action) => {
          state.isLoading.deletedContactId = action.meta.arg;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.isLoading.deletedContactId = null;
          state.error = null;
          state.items = state.items.filter(
            contact => contact.id !== action.payload.id
          );
        })
        .addCase(deleteContact.rejected, (state, action) => {
          state.isLoading.deletedContactId = null;
          state.error = action.payload;
        });
    },
  });
  
  export const contactsReducer = contactsSlice.reducer;