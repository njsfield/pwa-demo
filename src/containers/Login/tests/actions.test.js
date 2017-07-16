import { setUsername, setPassword } from "containers/Login/actions";

describe("Login actions", () => {
  it("creates login action", () => {
    expect(setUsername("nick")).toEqual({
      type: "ENTER_USERNAME",
      username: "nick"
    });
  });
  it("creates offline action", () => {
    expect(setPassword("field")).toEqual({
      type: "ENTER_PASSWORD",
      password: "field"
    });
  });
});
