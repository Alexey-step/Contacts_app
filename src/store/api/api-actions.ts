import { ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import * as ActionCreators from '../action-creators';
import { ActionTypes } from '../actions';

type AppThunk<ReturnType = void> = ThunkAction<
Promise<ReturnType>,
any,
AxiosInstance,
ActionTypes
>;

// export const fetchContactsList = (): AppThunk => {
//   console.log(1);
//   return async (dispatch, _getState, api) => {
//     try {
//       console.log(1);
//       const { data } = await api.get('/contacts/');
//       console.log(data);
//       dispatch(ActionCreators.setContacts(data));
//     } catch (e) {
//       console.log(2);
//       console.log(e);
//     }
//   };
// };

export const fetchContactsList = (): AppThunk => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.get('/contacts/');
    dispatch(ActionCreators.setContacts(data));
  } catch (e) { console.log(e.message); }
};

export const setContact = (contact): AppThunk => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.post('/contacts/', contact);
    dispatch(ActionCreators.setContact(data));
  } catch (e) { console.log(e.message); }
};

export const deleteContact = (id: string): AppThunk => async (dispatch, _getState, api) => {
  try {
    await api.delete(`/contacts/${id}`);
    dispatch(ActionCreators.deleteContact(id));
  } catch (e) { console.log(e.message); }
};

export const updateContact = (contact): AppThunk => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.put(`/contacts/${contact.id}`, contact);
    dispatch(ActionCreators.updateContact(data));
  } catch (e) { console.log(e.message); }
};
