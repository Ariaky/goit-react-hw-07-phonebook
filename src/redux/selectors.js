import { createSelector } from "@reduxjs/toolkit";

export const selectItems = state => state.contacts.items;
export const selectFetchContacts = state => state.contacts.isLoading.fetchContacts;
export const selectAddContacts = state => state.contacts.isLoading.addContacts;
export const selectDeletedContacts => state.contacts.isLoading.deletedContacts;
