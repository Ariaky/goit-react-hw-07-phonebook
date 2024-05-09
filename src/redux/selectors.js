import { createSelector } from "@reduxjs/toolkit";

export const selectItems = state => state.contacts.items;
export const selectFetchContacts = state => state.contacts.isLoading.fetchContacts;
export const selectAddContacts = state => state.contacts.isLoading.addContacts;
export const selectDeletedContacts = state => state.contacts.isLoading.deletedContacts;
export const selectError = state => state.contacts.error;

export const selectFilterValue = state => state.filter;

