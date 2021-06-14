import React from "react";
import { render, screen } from "@testing-library/react";
import PhoneIcon from "./phone-icon";

describe("Test PhoneIcon component", () => {
  it("PhoneIcon component should render correctly", () => {
    render(<PhoneIcon />);
    expect(screen.getByTestId(/phone-icon/i)).toBeInTheDocument();
  });
});
