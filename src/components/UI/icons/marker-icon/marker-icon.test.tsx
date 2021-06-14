import React from "react";
import { render, screen } from "@testing-library/react";
import MarkerIcon from "./marker-icon";

describe("Test MarkerIcon component", () => {
  it("MarkerIcon component should render correctly", () => {
    render(<MarkerIcon />);
    expect(screen.getByTestId(/marker-icon/i)).toBeInTheDocument();
  });
});
