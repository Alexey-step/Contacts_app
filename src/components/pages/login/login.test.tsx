import React from "react";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import Login from "./login";

const mockStore = configureStore([]);

describe("Test Login component", () => {
  it("Login component should render correctly", () => {
    const store = mockStore({
      auth: "",
    });
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Login />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Sign in/i)).toHaveLength(2);
    expect(screen.getByText(/Registration/i)).toBeInTheDocument();
  });
});
