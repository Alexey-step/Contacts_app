import { createReducer } from "@reduxjs/toolkit";
import * as ActionCreators from "./action-creators";
import { Contact } from "../types";
import { Status, Option } from "../const";

interface InitialStateTypes {
  contacts: Contact[];
  auth: string;
  status: string;
  option: string;
  filter: string;
}

export const initialState: InitialStateTypes = {
  contacts: [],
  auth: "",
  status: Status.PENDING,
  option: Option.ALL_CONTACTS,
  filter: "",
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionCreators.setContact, (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    })
    .addCase(ActionCreators.setOption, (state, action) => {
      state.option = action.payload;
    })
    .addCase(ActionCreators.setFilter, (state, action) => {
      state.filter = action.payload;
    })
    .addCase(ActionCreators.setContacts, (state, action) => {
      state.contacts = action.payload;
    })
    .addCase(ActionCreators.setAuthorization, (state, action) => {
      state.auth = action.payload;
    })
    .addCase(ActionCreators.setStatus, (state, action) => {
      state.status = action.payload;
    })
    .addCase(ActionCreators.updateContact, (state, action) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.contacts = [
        ...state.contacts.slice(0, index),
        action.payload,
        ...state.contacts.slice(index + 1),
      ];
    })
    .addCase(ActionCreators.deleteContact, (state, action) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload
      );
      state.contacts = [
        ...state.contacts.slice(0, index),
        ...state.contacts.slice(index + 1),
      ];
    });
});

export type RootState = ReturnType<typeof reducer>;
