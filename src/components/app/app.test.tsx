import * as React from "react";
import { render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./app";
import { AppRoutes } from "../../const";
import { TEST_TOKEN, MockContacts } from "../../test-mocks/test-mocks";

const mockStore = configureStore([]);
describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  it(`Render main when user navigate to "/" url`, () => {
    const store = mockStore({
      contacts: MockContacts.start,
      auth: TEST_TOKEN,
      filter: "",
    });
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </redux.Provider>
    );
    expect(screen.getAllByText(/Contacts/i)).toHaveLength(2);
    expect(screen.getByText(/Add contact/i)).toBeInTheDocument();
    expect(screen.getByText(/All contacts/i)).toBeInTheDocument();
    expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
  });
  it(`Render Login when user navigate to "/login" url`, () => {
    const store = mockStore({
      auth: null,
    });
    const history = createMemoryHistory();
    history.push(`${AppRoutes.LOGIN}`);
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </redux.Provider>
    );
    expect(screen.getAllByText(/Sign in/i)).toHaveLength(2);
    expect(screen.getByText(/Registration/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });
  it(`Render NotFound when user navigate to "/not-found-page" url`, () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    history.push(`${AppRoutes.NOT_FOUND}`);
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to main/i)).toBeInTheDocument();
  });
});
