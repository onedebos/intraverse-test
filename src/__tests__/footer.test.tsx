import React from "react";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  test("renders Footer component", () => {
    const tree = render(<Footer />);
    expect(tree).toMatchSnapshot();
    // screen.debug(); call this to see HTML tree
  });
});
