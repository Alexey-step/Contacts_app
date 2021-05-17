import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './store/reducer';
import App from './components/app/app';
import createAPI from './store/api/api';
import { fetchContactsList } from './store/api/api-actions';

import './index.scss';

const api = createAPI();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: {
      extraArgument: api,
    },
  }),
});

store.dispatch(fetchContactsList());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
