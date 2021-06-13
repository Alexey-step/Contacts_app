import * as React from "react";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import ContactsList from "./contacts-list";
import { MockContacts } from "../../../test-mocks/test-mocks";

const mockStore = configureStore([]);
describe(`Test ContactsList component`, () => {
  it(`ContactsList should render correctly`, () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <ContactsList contacts={MockContacts.start} />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByText(/Vasya/!)).toBeInTheDocument();
    expect(screen.getByText(/mail@mail.ru/!)).toBeInTheDocument();
    expect(screen.getAllByText(/Kompros/!)).toHaveLength(2);
  });
  it(`ContactsList should render correctly if contacts empty`, () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <ContactsList contacts={[]} />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByText(/You dont have contacts yet/!)).toBeInTheDocument();
  });
});
