import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFound from "./not-found";

describe("NotFound Component", () => {
  it("should render the not found page correctly", () => {
    const { getByText } = render(<NotFound />);

    expect(
      getByText("No enontramos la página que buscas.")
    ).toBeInTheDocument();

    expect(
      getByText(
        "Tenemos mucho más que mostrarte, descubre los mejores productos en mercado libre."
      )
    ).toBeInTheDocument();
  });
});
