import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { logIn } from "containers/Login/thunks";

const mockStore = configureMockStore([thunk]);

// Reset global fetch to jest mock
window.fetch = require("jest-fetch-mock");
// Configure mock store

describe("Login thunk tests", () => {
  it("should set credentials to true if 200 status from server", () => {
    const store = mockStore({
      login: { username: "nick", password: "password" }
    });
    const expectedActions = [
      {
        type: "SET_CREDENTIALS",
        credentials: true
      }
    ];
    // Triggered on all requests
    fetch.mockResponse(JSON.stringify({ response: "ok" }));

    return store.dispatch(logIn()).then(() => {
      const actualActions = store.getActions();
      expect(actualActions).toEqual(expectedActions);
    });
  });

  it("should set credentials to false if 500 status from server", () => {
    const store = mockStore({
      login: { username: "nick", password: "password" }
    });
    const expectedActions = [
      {
        type: "SET_CREDENTIALS",
        credentials: false
      }
    ];
    // (Reject) triggered on all requests
    fetch.mockReject();

    return store.dispatch(logIn()).then(() => {
      const actualActions = store.getActions();
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
