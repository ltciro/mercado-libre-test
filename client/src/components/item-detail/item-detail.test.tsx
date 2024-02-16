import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemDetail from "./item-detail";
import { currencies } from "@meli/shared/utils/currency-format";

describe("ItemDetail Component", () => {
  it("should render the item detail correctly", () => {
    const item = {
      id: "1",
      title: "Item",
      condition: "New",
      sold_quantity: 10,
      price: { amount: 100, decimals: 99, currency: currencies.ARS },
      picture: "/mock-item-picture.jpg",
      description: "Mock item description",
      free_shipping: false,
    };

    const { getByText } = render(<ItemDetail item={item} />);

    expect(getByText("New")).toBeInTheDocument();
    expect(getByText("- 10")).toBeInTheDocument();
    expect(getByText("Item")).toBeInTheDocument();
    expect(getByText("$ 100", { exact: false })).toBeInTheDocument();
    expect(getByText("99")).toBeInTheDocument();
    expect(getByText("Descripción del producto")).toBeInTheDocument();
    expect(getByText("Mock item description")).toBeInTheDocument();
    expect(getByText("Comprar")).toBeInTheDocument();
  });
});
