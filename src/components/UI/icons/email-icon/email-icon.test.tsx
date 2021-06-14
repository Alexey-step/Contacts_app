import React from "react";
import { render, screen } from "@testing-library/react";
import EmailIcon from "./email-icon";

describe("Test EditIcon component", () => {
  it("EditIcon component should render correctly", () => {
    render(<EmailIcon />);
    expect(screen.getByTestId(/email-icon/i)).toBeInTheDocument();
  });
});
