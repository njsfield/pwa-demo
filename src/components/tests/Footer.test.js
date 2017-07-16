import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Footer from "components/Footer";

describe("Footer", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer />, div);
  });
  it("renders children correctly", () => {
    const testFooter = shallow(
      <Footer>
        <span>Hello</span>
      </Footer>
    );
    expect(testFooter.contains(<span>Hello</span>)).toEqual(true);
  });
});
