import { createAction } from '@reduxjs/toolkit';
import { ActionType } from './actions';

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

export const setActiveContact = createAction(ActionType.SET_ACTIVE_CONTACT, (contact) => {
  return {
    payload: contact,
  };
});

export const updateContact = createAction(ActionType.UPDATE_CONTACT, (contact) => {
  return {
    payload: contact,
  };
});
