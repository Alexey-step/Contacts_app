import React from "react";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import InputField from "./input-field";

const mockStore = configureStore([]);

describe("Test InputField component", () => {
  it("InputField component should render correctly", () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    const register = jest.fn();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <InputField
            type="text"
            register={register}
            className="form__field"
            value="name"
            label="Name"
          />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
  });
});
