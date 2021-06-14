import React from "react";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import SearchItem from "./search-item";
import { Contact } from "../../../test-mocks/test-mocks";

const mockStore = configureStore([]);

describe("Test SearchItem component", () => {
  it("SearchItem component should render correctly", () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <SearchItem contact={Contact} onContactClick={jest.fn()} />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByText(/Vasya/i)).toBeInTheDocument();
  });
  it("SearchItem component should call callback when user click on contact", () => {
    const store = mockStore({});
    const onContactClick = jest.fn();
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <SearchItem contact={Contact} onContactClick={onContactClick} />
        </Router>
      </redux.Provider>
    );

    userEvent.click(screen.getByTestId("contact"));
    expect(onContactClick).toBeCalled();
  });
});
