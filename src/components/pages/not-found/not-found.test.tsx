import * as React from "react";
import { render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import NotFound from "./not-found";

const mockStore = configureStore([]);
describe(`Test NotFound component`, () => {
  it(`NotFound component should render correctly`, () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <NotFound />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByText(/404 Not Found/!)).toBeInTheDocument();
    expect(screen.getByText(/Back to main/!)).toBeInTheDocument();
  });
});
