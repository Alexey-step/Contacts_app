import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "./actions";

export const setContact = createAction(ActionType.SET_CONTACT, (contact) => {
  return {
    payload: contact,
  };
});

export const setContacts = createAction(ActionType.SET_CONTACTS, (contacts) => {
  return {
    payload: contacts,
  };
});

export const deleteContact = createAction(ActionType.DELETE_CONTACT, (id) => {
  return {
    payload: id,
  };
});

export const setAuthorization = createAction(
  ActionType.SET_AUTHORIZATION,
  (token) => {
    return {
      payload: token,
    };
  }
);

export const setStatus = createAction(ActionType.SET_STATUS, (status) => {
  return {
    payload: status,
  };
});

export const setOption = createAction(ActionType.SET_OPTION, (option) => {
  return {
    payload: option,
  };
});

export const setFilter = createAction(ActionType.SET_FILTER, (filter) => {
  return {
    payload: filter,
  };
});

export const updateContact = createAction(
  ActionType.UPDATE_CONTACT,
  (contact) => {
    return {
      payload: contact,
    };
  }
);
