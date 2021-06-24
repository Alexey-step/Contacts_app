import MockAdapter from "axios-mock-adapter";
import * as ActionCreators from "./action-creators";
import { ActionType } from "./actions";
import { reducer, initialState } from "./reducer";
import {
  MockContacts,
  Contact,
  FILTER,
  TEST_TOKEN,
} from "../test-mocks/test-mocks";
import { APIRoutes, Option, Status } from "../const";
import createAPI from "../store/api/api";
import {
  fetchContactsList,
  setContact,
  deleteContact,
  updateContact,
  login,
  registration,
} from "../store/api/api-actions";

const api = createAPI();

describe("Reducer work correctly", () => {
  it("Reducer without additinoal parameters should return initial state", () => {
    expect(reducer(initialState, { type: "" })).toEqual(initialState);
  });
  it("Reducer should update contacts by set contacts given value", () => {
    expect(
      reducer(initialState, ActionCreators.setContacts(MockContacts))
    ).toEqual({
      ...initialState,
      contacts: MockContacts,
    });
  });
  it("Reducer should update contacts by set contact given value", () => {
    const state = {
      ...initialState,
      contacts: MockContacts.start,
    };

    const expectedState = {
      ...initialState,
      contacts: [...MockContacts.start, Contact],
    };

    expect(reducer(state, ActionCreators.setContact(Contact))).toEqual(
      expectedState
    );
  });
  it("Reducer should update option by set option given value", () => {
    const state = {
      ...initialState,
      option: Option.ALL_CONTACTS,
    };

    const expectedState = {
      ...initialState,
      option: Option.FAVORITES,
    };
    expect(reducer(state, ActionCreators.setOption(Option.FAVORITES))).toEqual(
      expectedState
    );
  });
  it("Reducer should update filter by set filter given value", () => {
    const expectedState = {
      ...initialState,
      filter: FILTER,
    };
    expect(reducer(initialState, ActionCreators.setFilter(FILTER))).toEqual(
      expectedState
    );
  });
  it("Reducer should update status by set status given value", () => {
    const state = {
      ...initialState,
      status: Status.PENDING,
    };

    const expectedState = {
      ...initialState,
      status: Status.LOAD,
    };
    expect(reducer(state, ActionCreators.setStatus(Status.LOAD))).toEqual(
      expectedState
    );
  });
  it("Reducer should update auth by set authorization given value", () => {
    const expectedState = {
      ...initialState,
      auth: TEST_TOKEN,
    };
    expect(
      reducer(initialState, ActionCreators.setAuthorization(TEST_TOKEN))
    ).toEqual(expectedState);
  });
  it("Reducer should update contacts by update contact given value", () => {
    const state = {
      ...initialState,
      contacts: MockContacts.start,
    };

    const expectedState = {
      ...initialState,
      contacts: MockContacts.end,
    };
    expect(
      reducer(state, ActionCreators.updateContact(MockContacts.change))
    ).toEqual(expectedState);
  });
  it("Reducer should update contacts by delete contact given value", () => {
    const state = {
      ...initialState,
      contacts: MockContacts.start,
    };

    const expectedState = {
      ...initialState,
      contacts: MockContacts.delete,
    };
    expect(
      reducer(state, ActionCreators.deleteContact(MockContacts.change.id))
    ).toEqual(expectedState);
  });
});

describe("Async operations work correctly", () => {
  it("Should make a correct API call to /contacts", async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchContacts = fetchContactsList();
    const getState = jest.fn();

    apiMock.onGet(`${APIRoutes.CONTACTS}`).reply(200, MockContacts.start);

    await fetchContacts(dispatch, getState, api);
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.SET_STATUS,
      payload: Status.LOAD,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ActionType.SET_CONTACTS,
      payload: MockContacts.start,
    });
    expect(dispatch).toHaveBeenNthCalledWith(3, {
      type: ActionType.SET_STATUS,
      payload: Status.LOADED,
    });
  });
  it("Should make a correct API call to /contacts", async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const setContactRequest = setContact(Contact);
    const getState = jest.fn();

    apiMock.onPost(`${APIRoutes.CONTACTS}`).reply(200, Contact);

    await setContactRequest(dispatch, getState, api);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.SET_CONTACT,
      payload: Contact,
    });
  });
  it("Should make a correct API call to /contacts/:id", async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const setDeleteContactRequest = deleteContact(MockContacts.change.id);
    const getState = jest.fn();

    apiMock
      .onDelete(`${APIRoutes.CONTACTS}/${MockContacts.change.id}`)
      .reply(200, MockContacts.change.id);

    await setDeleteContactRequest(dispatch, getState, api);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.DELETE_CONTACT,
      payload: MockContacts.change.id,
    });
  });
  it("Should make a correct API call to /contacts/:id", async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const setUpdateContactRequest = updateContact(MockContacts.change);
    const getState = jest.fn();

    apiMock
      .onPut(`${APIRoutes.CONTACTS}/${MockContacts.change.id}`)
      .reply(200, MockContacts.change);

    await setUpdateContactRequest(dispatch, getState, api);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.UPDATE_CONTACT,
      payload: MockContacts.change,
    });
  });
  it("Should make a correct API call to /login", async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const data = { accessToken: TEST_TOKEN };
    const setLoginRequest = login({
      email: "ma@mail.ru",
      password: "QWasd123!",
    });
    const getState = jest.fn();

    apiMock.onPost(`${APIRoutes.LOGIN}`).reply(200, data);

    await setLoginRequest(dispatch, getState, api);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.SET_AUTHORIZATION,
      payload: TEST_TOKEN,
    });
  });
  it("Should make a correct API call to /registration", async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const data = { accessToken: TEST_TOKEN };
    const setRegistrationRequest = registration({
      email: "ma@mail.ru",
      password: "QWasd123!",
      name: "Ivan",
    });
    const getState = jest.fn();

    apiMock.onPost(`${APIRoutes.REGISTER}`).reply(200, data);

    await setRegistrationRequest(dispatch, getState, api);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.SET_AUTHORIZATION,
      payload: TEST_TOKEN,
    });
  });
});
