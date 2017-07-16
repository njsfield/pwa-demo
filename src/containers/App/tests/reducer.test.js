import reducer from "containers/App/reducer";

describe("App reducer", () => {
  it("Should set credentials when action entered", () => {
    const state = reducer(
      { credentials: false, offline: true },
      { type: "SET_CREDENTIALS", credentials: true }
    );
    expect(state).toEqual({ credentials: true, offline: true });
  });
  it("Should set offline when action entered", () => {
    const state = reducer(
      { credentials: false, offline: true },
      { type: "SET_OFFLINE", offline: false }
    );
    expect(state).toEqual({ credentials: false, offline: false });
  });
});
