import { Contact } from "../types";

export enum ActionType {
  SET_CONTACT = "setContact",
  SET_CONTACTS = "setContacts",
  DELETE_CONTACT = "deleteContact",
  UPDATE_CONTACT = "updateContact",
  SET_AUTHORIZATION = "setAuthorization",
  SET_STATUS = "setStatus",
  SET_OPTION = "setOption",
  SET_FILTER = "setFilter",
}

interface SetContactAction {
  type: ActionType.SET_CONTACT;
  payload: Contact;
}

interface SetContactsAction {
  type: ActionType.SET_CONTACTS;
  payload: Contact[];
}

interface DeleteContactAction {
  type: ActionType.DELETE_CONTACT;
  payload: string;
}

interface UpdateContactAction {
  type: ActionType.UPDATE_CONTACT;
  payload: Contact;
}

interface SetAuthorizationAction {
  type: ActionType.SET_AUTHORIZATION;
  payload: string;
}

interface SetStatusAction {
  type: ActionType.SET_STATUS;
  payload: string;
}

interface SetOptionAction {
  type: ActionType.SET_OPTION;
  payload: string;
}

interface SetFilterAction {
  type: ActionType.SET_FILTER;
  payload: string;
}

export type ActionTypes =
  | SetContactAction
  | SetContactsAction
  | DeleteContactAction
  | UpdateContactAction
  | SetAuthorizationAction
  | SetStatusAction
  | SetOptionAction
  | SetFilterAction;
