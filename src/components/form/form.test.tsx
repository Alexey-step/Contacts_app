import React from "react";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import Form from "./form";

const mockStore = configureStore([]);

describe("Test Form component", () => {
  it("Form component should render correctly", () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Form />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Phone/i)).toBeInTheDocument();
  });
});
