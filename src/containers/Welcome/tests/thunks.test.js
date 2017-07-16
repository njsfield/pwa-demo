import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { getResults } from "containers/Welcome/thunks";

const mockStore = configureMockStore([thunk]);

// Reset global fetch to jest mock
window.fetch = require("jest-fetch-mock");

describe("Welcome thunk tests", () => {
  it("should set results via response from server", () => {
    // Configure empty mock store
    const store = mockStore({});
    const mockResults = ["123", "234", "345", "456"];
    const expectedActions = [
      { offline: false, type: "SET_OFFLINE" },
      {
        type: "SET_RESULTS",
        results: mockResults
      }
    ];
    // Triggered on all requests
    fetch.mockResponse(JSON.stringify({ results: mockResults }));

    return store.dispatch(getResults()).then(() => {
      const actualActions = store.getActions();
      expect(actualActions).toEqual(expectedActions);
    });
  });

  it("should set offline to true if 500 status from server", () => {
    const store = mockStore({});
    const expectedActions = [
      {
        offline: true,
        type: "SET_OFFLINE"
      }
    ];
    // (Reject) triggered on all requests
    fetch.mockReject();

    return store.dispatch(getResults()).then(() => {
      const actualActions = store.getActions();
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
