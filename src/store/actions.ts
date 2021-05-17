import { Contact } from '../types';

export enum ActionType {
  SET_CONTACT = 'setContact',
  SET_CONTACTS = 'setContacts',
  DELETE_CONTACT = 'deleteContact',
  UPDATE_CONTACT = 'updateContact',
  SET_ACTIVE_CONTACT = 'setActiveContact',
}

interface SetContactAction {
  type: ActionType.SET_CONTACT,
  payload: Contact,
}

interface SetContactsAction {
  type: ActionType.SET_CONTACTS,
  payload: Contact[],
}

interface DeleteContactAction {
  type: ActionType.DELETE_CONTACT,
  payload: string,
}

interface UpdateContactAction {
  type: ActionType.UPDATE_CONTACT,
  payload: Contact,
}

interface SetActiveContactAction {
  type: ActionType.SET_ACTIVE_CONTACT,
  payload: Contact,
}

export type ActionTypes =
| SetContactAction
| SetContactsAction
| DeleteContactAction
| UpdateContactAction
| SetActiveContactAction;
