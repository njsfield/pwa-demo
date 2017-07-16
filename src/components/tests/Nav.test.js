import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Nav from "components/Nav";

describe("Nav", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Nav />, div);
  });
  it("renders children correctly", () => {
    const testNav = shallow(
      <Nav>
        <span>Hello</span>
      </Nav>
    );
    expect(testNav.contains(<span>Hello</span>)).toEqual(true);
  });
});
