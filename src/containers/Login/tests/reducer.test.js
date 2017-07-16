import reducer from "containers/Login/reducer";

describe("Login reducer", () => {
  it("Should set username when action entered", () => {
    const state = reducer(
      { username: "", password: "field" },
      { type: "ENTER_USERNAME", username: "nick" }
    );
    expect(state).toEqual({ username: "nick", password: "field" });
  });
  it("Should set password when action entered", () => {
    const state = reducer(
      { username: "nick", password: "" },
      { type: "ENTER_PASSWORD", password: "field" }
    );
    expect(state).toEqual({ username: "nick", password: "field" });
  });
});
