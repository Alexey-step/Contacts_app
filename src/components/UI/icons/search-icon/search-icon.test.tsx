import React from "react";
import { render, screen } from "@testing-library/react";
import SearchIcon from "./search-icon";

describe("Test SearchIcon component", () => {
  it("SearchIcon component should render correctly", () => {
    render(<SearchIcon />);
    expect(screen.getByTestId(/search-icon/i)).toBeInTheDocument();
  });
});
