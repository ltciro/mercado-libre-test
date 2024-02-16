import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemPage, { ItemProps } from "./page";
import { getItem } from "@meli/services/client";
import { currencies } from "@meli/shared/utils/currency-format";

import { resolvedComponent } from "@meli/shared/utils/tests";

jest.mock("@meli/services/client");

describe("ItemPage Component", () => {
  it("should render the item detail correctly when item data is provided", async () => {
    (getItem as jest.Mock).mockResolvedValue({
      data: {
        item: {
          id: "1",
          title: "Mock Item",
          price: { amount: 100, currency: currencies.ARS },
        },
        categories: ["Category A", "Category B"],
      },
      resultMessage: "Success",
    });

    const params = { itemSlug: "mock-item-slug" };
    const PageResolved = await resolvedComponent(ItemPage, {
      params: params,
    });

    const { getByText } = render(<PageResolved />);

    expect(getByText("Mock Item")).toBeInTheDocument();
    expect(getByText("$ 100")).toBeInTheDocument();
    expect(getByText("Category A")).toBeInTheDocument();
    expect(getByText("Category B")).toBeInTheDocument();
  });

  it("should render the item detail even whitout categories", async () => {
    (getItem as jest.Mock).mockResolvedValue({
      data: {
        item: {
          id: "1",
          title: "Mock Item",
          price: { amount: 100, currency: currencies.ARS },
        },
      },
      resultMessage: "Success",
    });

    const params = { itemSlug: "mock-item-slug" };
    const PageResolved = await resolvedComponent<ItemProps>(ItemPage, {
      params: params,
    });

    const { getByText } = render(<PageResolved />);

    expect(getByText("Mock Item")).toBeInTheDocument();
  });

  it("should render the error message when item data is not available", async () => {
    const params = { itemSlug: "non-existing-item-slug" };

    (getItem as jest.Mock).mockResolvedValue({
      data: null,
      resultMessage: { es: "Item not found" },
    });

    const PageResolved = await resolvedComponent(ItemPage, {
      params: params,
    });

    const { getByText } = render(<PageResolved />);

    expect(getByText("Item not found")).toBeInTheDocument();
  });

  it("should render the error message when response is not available", async () => {
    const params = { itemSlug: "non-existing-item-slug" };

    (getItem as jest.Mock).mockResolvedValue(null);

    const PageResolved = await resolvedComponent(ItemPage, {
      params: params,
    });

    const { getByText } = render(<PageResolved />);

    expect(getByText("Por favor intenta de nuevo.")).toBeInTheDocument();
  });
});
