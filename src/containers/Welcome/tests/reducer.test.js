import reducer from "containers/Welcome/reducer";

describe("Welcome reducer", () => {
  it("Should set results when action entered", () => {
    const state = reducer(
      {
        results: [],
        historicResults: []
      },
      { type: "SET_RESULTS", results: ["123", "234"] }
    );
    expect(state).toEqual({
      results: ["123", "234"],
      historicResults: []
    });
  });
  it("Should set historic results when action entered", () => {
    const state = reducer(
      {
        results: [],
        historicResults: []
      },
      { type: "SET_HISTORICAL_RESULTS", results: ["123", "234"] }
    );
    expect(state).toEqual({
      results: [],
      historicResults: ["123", "234"]
    });
  });
});
