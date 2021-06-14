import React from "react";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import Main from "./main";
import { MockContacts } from "../../../test-mocks/test-mocks";

const mockStore = configureStore([]);

describe("Test Main component", () => {
  it("Main component should render correctly", () => {
    const store = mockStore({
      contacts: MockContacts.start,
      filter: "",
    });
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </redux.Provider>
    );
    expect(screen.getAllByText(/Contacts/i)).toHaveLength(2);
    expect(screen.getByText(/Add contact/i)).toBeInTheDocument();
    expect(screen.getByText(/All contacts/i)).toBeInTheDocument();
    expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
    expect(screen.getByText(/Vasya/i)).toBeInTheDocument();
  });
});
