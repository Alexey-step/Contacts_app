import React from "react";
import { render, screen } from "@testing-library/react";
import FavoriteIcon from "./favorite-icon";

describe("Test FavoriteIcon component", () => {
  it("FavoriteIcon component should render correctly", () => {
    render(<FavoriteIcon isFavorite={false} />);
    expect(screen.getByTestId(/favorite-icon/i)).toBeInTheDocument();
  });
});
