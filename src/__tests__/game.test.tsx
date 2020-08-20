import React from "react";
import ReactDOM from "react-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Game from "../container/Game";
import "@testing-library/jest-dom";

describe("Game component", () => {
  it("player can start game", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Game />, div);
    // fireEvent.click(screen.getByText("Start Typing"));
  });
});
