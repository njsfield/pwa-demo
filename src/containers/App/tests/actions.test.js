import { setCredentials, setOffline } from "containers/App/actions";

describe("App actions", () => {
  it("creates credentials action", () => {
    expect(setCredentials(true)).toEqual({
      type: "SET_CREDENTIALS",
      credentials: true
    });
  });
  it("creates offline action", () => {
    expect(setOffline(true)).toEqual({
      type: "SET_OFFLINE",
      offline: true
    });
  });
});
