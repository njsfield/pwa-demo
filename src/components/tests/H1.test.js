import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import H1 from "components/H1";

describe("H1", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<H1 />, div);
  });
  it("renders children correctly", () => {
    const testH1 = shallow(
      <H1>
        <span>Hello</span>
      </H1>
    );
    expect(testH1.contains(<span>Hello</span>)).toEqual(true);
  });
});
