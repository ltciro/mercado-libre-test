import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardTitle from "./card-title";

describe("CardTitle Component", () => {
  it('should have the "cardTitle" style applied', () => {
    const { getByText } = render(<CardTitle>Child</CardTitle>);

    const cardTitleElement = getByText("Child");

    expect(cardTitleElement).toHaveClass("cardTitle");
  });
});
