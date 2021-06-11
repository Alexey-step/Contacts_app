import { ThunkAction } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import Cookie from "js-cookie";
import * as ActionCreators from "../action-creators";
import { ActionTypes } from "../actions";
import { Status, APIRoutes } from "../../const";
import { Contact, IUseForm } from "../../types";

type AppThunk<ReturnType = void> = ThunkAction<
  Promise<ReturnType>,
  unknown,
  AxiosInstance,
  ActionTypes
>;

export const fetchContactsList =
  (): AppThunk => async (dispatch, _getState, api) => {
    dispatch(ActionCreators.setStatus(Status.LOAD));
    try {
      const { data } = await api.get(`${APIRoutes.CONTACTS}/`);
      dispatch(ActionCreators.setContacts(data));
      dispatch(ActionCreators.setStatus(Status.LOADED));
    } catch (e) {
      dispatch(ActionCreators.setStatus(Status.ERROR));
    }
  };

export const fetchFavorites =
  (): AppThunk => async (dispatch, _getState, api) => {
    dispatch(ActionCreators.setStatus(Status.LOAD));
    try {
      const { data } = await api.get(`${APIRoutes.CONTACTS}?isFavorite=true`);
      dispatch(ActionCreators.setContacts(data));
      dispatch(ActionCreators.setStatus(Status.LOADED));
    } catch (e) {
      dispatch(ActionCreators.setStatus(Status.ERROR));
    }
  };

export const fetchFilteredContacts =
  (name?: string): AppThunk =>
  async (dispatch, _getState, api) => {
    dispatch(ActionCreators.setStatus(Status.LOAD));
    try {
      const { data } = await api.get(`${APIRoutes.CONTACTS}?name_like=${name}`);
      dispatch(ActionCreators.setContacts(data));
      dispatch(ActionCreators.setStatus(Status.LOADED));
    } catch (e) {
      dispatch(ActionCreators.setStatus(Status.ERROR));
    }
  };

export const setContact =
  (contact: Contact): AppThunk =>
  async (dispatch, _getState, api) => {
    try {
      const { data } = await api.post(`${APIRoutes.CONTACTS}/`, contact);
      dispatch(ActionCreators.setContact(data));
    } catch (e) {
      dispatch(ActionCreators.setStatus(Status.ERROR));
    }
  };

export const deleteContact =
  (id: number): AppThunk =>
  async (dispatch, _getState, api) => {
    try {
      await api.delete(`${APIRoutes.CONTACTS}/${id}`);
      dispatch(ActionCreators.deleteContact(id));
    } catch (e) {
      dispatch(ActionCreators.setStatus(Status.ERROR));
    }
  };

export const updateContact =
  (contact: Contact): AppThunk =>
  async (dispatch, _getState, api) => {
    try {
      const { data } = await api.put(
        `${APIRoutes.CONTACTS}/${contact.id}`,
        contact
      );
      dispatch(ActionCreators.updateContact(data));
    } catch (e) {
      dispatch(ActionCreators.setStatus(Status.ERROR));
    }
  };

export const login =
  ({ email, password }: IUseForm): AppThunk =>
  async (dispatch, _getState, api) => {
    try {
      const {
        data: { accessToken },
      } = await api.post(`${APIRoutes.LOGIN}`, { email, password });
      dispatch(ActionCreators.setAuthorization(accessToken));
      Cookie.set("user", accessToken, { expires: 1 / 24 });
    } catch (e) {
      dispatch(ActionCreators.setStatus(Status.ERROR));
    }
  };

export const registration =
  ({ email, password, name }: IUseForm): AppThunk =>
  async (dispatch, _getState, api) => {
    try {
      const {
        data: { accessToken },
      } = await api.post(`${APIRoutes.REGISTER}`, { email, password, name });
      dispatch(ActionCreators.setAuthorization(accessToken));
    } catch (e) {
      dispatch(ActionCreators.setStatus(Status.ERROR));
    }
  };
