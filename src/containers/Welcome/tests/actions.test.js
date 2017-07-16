import { setResults, setHistoricalResults } from "containers/Welcome/actions";

describe("Welcome actions", () => {
  it("creates set results action", () => {
    expect(setResults(["123"])).toEqual({
      type: "SET_RESULTS",
      results: ["123"]
    });
  });
  it("creates set historical results action", () => {
    expect(setHistoricalResults(["123"])).toEqual({
      type: "SET_HISTORICAL_RESULTS",
      results: ["123"]
    });
  });
});
