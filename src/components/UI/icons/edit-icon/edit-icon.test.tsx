import React from "react";
import { render, screen } from "@testing-library/react";
import EditIcon from "./edit-icon";

describe("Test EditIcon component", () => {
  it("EditIcon component should render correctly", () => {
    render(<EditIcon />);
    expect(screen.getByTestId(/edit-icon/i)).toBeInTheDocument();
  });
});
