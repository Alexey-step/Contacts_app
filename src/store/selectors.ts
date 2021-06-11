import { createSelector } from "reselect";
import { Option } from "../const";
import { RootState } from "./reducer";
import { Contact } from "../types";

export const getContacts = (state: RootState): Contact[] => state.contacts;
export const getOption = (state: RootState): string => state.option;
export const getFilter = (state: RootState): string => state.filter;

export const getActiveContacts = createSelector(
  [getContacts, getOption, getFilter],
  (contacts, option, filter) => {
    const activeContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    switch (option) {
      case Option.ALL_CONTACTS:
        return activeContacts;
      case Option.FAVORITES:
        return activeContacts.filter((contact) => contact.isFavorite);
      default:
        return activeContacts;
    }
  }
);
