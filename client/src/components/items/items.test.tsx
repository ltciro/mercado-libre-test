import React from "react";
import "@testing-library/jest-dom";
import { getAllByText, render } from "@testing-library/react";
import Items from "./items";
import { Item } from "@meli/shared/interfaces/items";
import { currencies } from "@meli/shared/utils/currency-format";

describe("Items Component", () => {
  it("should render items correctly", () => {
    const items: Item[] = [
      {
        id: "1",
        title: "Item 1",
        picture:
          "https://http2.mlstatic.com/D_608338-MLU72700965333_112023-I.jpg",
        price: { amount: 10, currency: currencies.ARS, decimals: 0 },
        free_shipping: false,
        condition: "Nuevo",
      },
      {
        id: "2",
        title: "Item 2",
        picture:
          "https://http2.mlstatic.com/D_608338-MLU72700965333_112023-I.jpg",
        price: { amount: 20, currency: currencies.ARS, decimals: 0 },
        free_shipping: true,
        condition: "Usado",
      },
    ];

    const { getByText, getByAltText, container } = render(
      <Items items={items} />
    );

    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();

    expect(getByAltText("Image for Item 1")).toHaveAttribute(
      "src",
      expect.stringContaining("D_608338-MLU72700965333_112023-I")
    );

    expect(getByAltText("Image for Item 2")).toHaveAttribute(
      "src",
      expect.stringContaining("D_608338-MLU72700965333_112023-I")
    );

    expect(getByText("$ 10")).toBeInTheDocument();
    expect(getByText("$ 20")).toBeInTheDocument();

    expect(getAllByText(container, "local_shipping").length).toBe(1);
  });
});
