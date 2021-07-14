import React from "react";
import { render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory, History } from "history";
import PrivateRoute from "./private-route";
import { TEST_TOKEN } from "../../test-mocks/test-mocks";
import { AppRoutes } from "../../const";

const mockStore = configureStore([]);
let history: History;
describe(`Test PrivateRoute component`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/private`);
  });
  it(`Should be render component for private route, when user authorized`, () => {
    const store = mockStore({
      auth: TEST_TOKEN,
    });
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Route exact path={`${AppRoutes.LOGIN}`}>
            <h1>Public Route</h1>
          </Route>
          <PrivateRoute
            exact
            path="/private"
            render={() => <h1>Private Route</h1>}
          />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
