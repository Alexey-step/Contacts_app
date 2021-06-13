import * as ActionCreators from "./action-creators";
import { ActionType } from "./actions";
import {
  MockContacts,
  TEST_TOKEN,
  FILTER,
  Contact,
} from "../test-mocks/test-mocks";
import { Status, Option } from "../const";

describe("Action creators work correctly", () => {
  it("Action creator for set contact returns correct action", () => {
    const expectedAction = {
      type: ActionType.SET_CONTACT,
      payload: Contact,
    };

    expect(ActionCreators.setContact(Contact)).toEqual(expectedAction);
  });
  it("Action creator for set contacts returns correct action", () => {
    const expectedAction = {
      type: ActionType.SET_CONTACTS,
      payload: MockContacts.start,
    };

    expect(ActionCreators.setContacts(MockContacts.start)).toEqual(
      expectedAction
    );
  });
  it("Action creator for delete contact returns correct action", () => {
    const expectedAction = {
      type: ActionType.DELETE_CONTACT,
      payload: Contact.id,
    };

    expect(ActionCreators.deleteContact(Contact.id)).toEqual(expectedAction);
  });
  it("Action creator for set authorization returns correct action", () => {
    const expectedAction = {
      type: ActionType.SET_AUTHORIZATION,
      payload: TEST_TOKEN,
    };

    expect(ActionCreators.setAuthorization(TEST_TOKEN)).toEqual(expectedAction);
  });
  it("Action creator for set status returns correct action", () => {
    const expectedAction = {
      type: ActionType.SET_STATUS,
      payload: Status.LOAD,
    };

    expect(ActionCreators.setStatus(Status.LOAD)).toEqual(expectedAction);
  });
  it("Action creator for set option returns correct action", () => {
    const expectedAction = {
      type: ActionType.SET_OPTION,
      payload: Option.ALL_CONTACTS,
    };

    expect(ActionCreators.setOption(Option.ALL_CONTACTS)).toEqual(
      expectedAction
    );
  });
  it("Action creator for set filter returns correct action", () => {
    const expectedAction = {
      type: ActionType.SET_FILTER,
      payload: FILTER,
    };

    expect(ActionCreators.setFilter(FILTER)).toEqual(expectedAction);
  });
  it("Action creator for update contact returns correct action", () => {
    const expectedAction = {
      type: ActionType.UPDATE_CONTACT,
      payload: Contact,
    };

    expect(ActionCreators.updateContact(Contact)).toEqual(expectedAction);
  });
});
