import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Price from "./price";
import { currencies } from "@meli/shared/utils/currency-format";
import { Sizes } from "@meli/shared/interfaces/card";

// Define tus pruebas
describe("Price Component", () => {
  it("should render formatted price with decimals", () => {
    const price = 100;
    const decimal = 99;
    const currency = currencies.ARS;
    const size = Sizes.medium;

    const { getByText } = render(
      <Price price={price} decimal={decimal} currency={currency} size={size} />
    );

    expect(getByText("$ 100", { exact: false })).toBeInTheDocument();
    expect(getByText("99")).toBeInTheDocument();
  });

  it("should render formatted price without decimals", () => {
    const price = 100;
    const currency = currencies.ARS;
    const size = Sizes.medium;

    const { getByText } = render(
      <Price price={price} currency={currency} size={size} />
    );

    expect(getByText("$ 100")).toBeInTheDocument();
  });
});
