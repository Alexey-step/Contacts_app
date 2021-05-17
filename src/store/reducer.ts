import { createReducer } from '@reduxjs/toolkit';
import * as ActionCreators from './action-creators';
import { Contact } from '../types';

interface InitialStateTypes {
  contacts: Array<Contact>,
  activeContact: Contact,
}

const initialState: InitialStateTypes = {
  contacts: [],
  activeContact: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionCreators.setContact, (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    })
    .addCase(ActionCreators.setContacts, (state, action) => {
      state.contacts = action.payload;
    })
    .addCase(ActionCreators.setActiveContact, (state, action) => {
      state.activeContact = action.payload;
    })
    .addCase(ActionCreators.updateContact, (state, action) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      state.contacts = [
        ...state.contacts.slice(0, index),
        action.payload,
        ...state.contacts.slice(index + 1),
      ];
    })
    .addCase(ActionCreators.deleteContact, (state, action) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload);
      state.contacts = [
        ...state.contacts.slice(0, index),
        ...state.contacts.slice(index + 1),
      ];
    });
});

export type RootState = ReturnType<typeof reducer>;
