import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("Home Component", () => {
  it("should render the home page correctly", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Hola!")).toBeInTheDocument();

    expect(
      getByText("Descubre los mejores productos en mercado libre")
    ).toBeInTheDocument();
  });
});
