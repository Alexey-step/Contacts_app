import * as React from "react";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import Contacts from "./contacts";
import { MockContacts } from "../../test-mocks/test-mocks";

const mockStore = configureStore([]);
describe(`Test Contacts component`, () => {
  jest.spyOn(redux, `useDispatch`);
  jest.spyOn(redux, `useSelector`);
  it(`Contacts should render correctly`, () => {
    const store = mockStore({
      contacts: MockContacts.start,
    });
    const history = createMemoryHistory();
    const onSort = jest.fn();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Contacts contacts={MockContacts.start} onSort={onSort} />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByText(/Contacts/!)).toBeInTheDocument();
    expect(screen.getByText(/Vasya/!)).toBeInTheDocument();
    expect(screen.getByText(/mail@mail.ru/!)).toBeInTheDocument();
    expect(screen.getAllByText(/Kompros/!)).toHaveLength(2);
  });
});
