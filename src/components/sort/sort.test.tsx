import React from "react";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import Sort from "./sort";
import { MockContacts } from "../../test-mocks/test-mocks";

const mockStore = configureStore([]);

describe("Test Sort component", () => {
  it("Sort component should render correctly", () => {
    const store = mockStore({
      contacts: MockContacts.start,
      filter: "",
    });
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Sort />
        </Router>
      </redux.Provider>
    );

    expect(screen.getByText(/All contacts/i)).toBeInTheDocument();
    expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
  });
  it("Sort component should call callback when user click on sort buttons", () => {
    const store = mockStore({
      contacts: MockContacts.start,
      filter: "",
    });
    const onSort = jest.fn();
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Sort onSort={onSort} />
        </Router>
      </redux.Provider>
    );

    userEvent.click(screen.getByTestId("sort-all"));
    expect(onSort).toBeCalled();
    userEvent.click(screen.getByTestId("sort-favorites"));
    expect(onSort).toBeCalled();
  });
});
