import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Wrapper from "components/Wrapper";

describe("Wrapper", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Wrapper />, div);
  });
  it("renders children correctly", () => {
    const testWrapper = shallow(
      <Wrapper>
        <span>Hello</span>
      </Wrapper>
    );
    expect(testWrapper.contains(<span>Hello</span>)).toEqual(true);
  });
});
