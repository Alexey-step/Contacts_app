import * as React from "react";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import ContactsItem from "./contacts-item";
import { Contact } from "../../../test-mocks/test-mocks";

const mockStore = configureStore([]);
describe(`Test ContactsItem component`, () => {
  jest.spyOn(redux, `useDispatch`);
  it(`ContactsItem component should render correctly`, () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <ContactsItem contact={Contact} />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByText(/Vasya/!)).toBeInTheDocument();
    expect(screen.getByText(/mail@mail.ru/!)).toBeInTheDocument();
    expect(screen.getByText(/Kompros/!)).toBeInTheDocument();
  });
});
