import React from "react";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import Search from "./search";
import { MockContacts } from "../../test-mocks/test-mocks";

const mockStore = configureStore([]);

describe("Test Search component", () => {
  it("Search component should render correctly", () => {
    const store = mockStore({
      contacts: MockContacts.start,
      filter: "",
    });
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Search />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByPlaceholderText(/Search contact/i)).toBeInTheDocument();
  });
});
