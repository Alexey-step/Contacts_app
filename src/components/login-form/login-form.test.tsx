import React from "react";
import * as redux from "react-redux";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import LoginForm from "./login-form";

const mockStore = configureStore([]);

describe("Test LoginForm component", () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  it("LoginForm component should render correctly if isRegistration false", () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <LoginForm isRegistration={false} />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Name/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
  it("LoginForm component should render correctly if isRegistration true", () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <LoginForm isRegistration={true} />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Register/i)).toBeInTheDocument();
  });
  it(`LoginForm component should render correctly`, () => {
    const store = mockStore({
      auth: null,
    });
    const history = createMemoryHistory();

    render(
      <redux.Provider store={store}>
        <Router history={history}>
          <LoginForm isRegistration={false} />
        </Router>
      </redux.Provider>
    );

    userEvent.type(screen.getByPlaceholderText("Email"), "mail@mail.ru");
    userEvent.type(screen.getByPlaceholderText("Password"), "ASDzxc234!");

    expect(screen.getByDisplayValue(/mail@mail.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/ASDzxc234!/i)).toBeInTheDocument();
  });
});
