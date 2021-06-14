import React from "react";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import SearchList from "./search-list";
import { MockContacts } from "../../../test-mocks/test-mocks";

const mockStore = configureStore([]);

describe("Test SearchList component", () => {
  it("SearchList component should render correctly", () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <SearchList
            contacts={MockContacts.start}
            onContactClick={jest.fn()}
          />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByText(/Vasya/i)).toBeInTheDocument();
    expect(screen.getByText(/Luda/i)).toBeInTheDocument();
    expect(screen.getByText(/Petya/i)).toBeInTheDocument();
  });
});
