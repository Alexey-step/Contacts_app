import React from "react";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import Header from "./header";
import { MockContacts } from "../../test-mocks/test-mocks";

const mockStore = configureStore([]);

describe("Test Header component", () => {
  it("Header component should render correctly", () => {
    const store = mockStore({
      contacts: MockContacts.start,
      filter: "",
    });
    const history = createMemoryHistory();
    const onOpen = jest.fn();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Header onOpen={onOpen} />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByText(/Add contact/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search contact/i)).toBeInTheDocument();
  });
  it("Header component should call callback when user click on Add contact button", () => {
    const store = mockStore({
      contacts: MockContacts.start,
      filter: "",
    });
    const onOpen = jest.fn();
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Header onOpen={onOpen} />
        </Router>
      </redux.Provider>
    );

    userEvent.click(screen.getByTestId("add-contact"));
    expect(onOpen).toBeCalled();
  });
});
