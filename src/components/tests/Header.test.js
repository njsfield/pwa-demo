import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Header from "components/Header";

describe("Header", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
  });
  it("renders children correctly", () => {
    const testHeader = shallow(
      <Header>
        <span>Hello</span>
      </Header>
    );
    expect(testHeader.contains(<span>Hello</span>)).toEqual(true);
  });
});
