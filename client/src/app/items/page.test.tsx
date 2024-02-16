import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemsPage from "./page";
import { getItems } from "@meli/services/client";
import { currencies } from "@meli/shared/utils/currency-format";

import { resolvedComponent } from "@meli/shared/utils/tests";

jest.mock("@meli/services/client");

describe("ItemsPage Component", () => {
  it("should render the items page correctly", async () => {
    (getItems as jest.Mock).mockResolvedValue({
      data: {
        items: [
          {
            id: "1",
            title: "Item 1",
            price: { amount: 100, currency: currencies.ARS },
          },
          { id: "2", title: "Item 2" },
        ],
        categories: ["Category A", "Category B"],
      },
      resultMessage: "Success",
    });
    const searchParams = { search: "mock-search-query" };
    const PageResolved = await resolvedComponent(ItemsPage, {
      searchParams,
    });

    const { getByText } = render(<PageResolved />);

    expect(getByText("Category A")).toBeInTheDocument();
    expect(getByText("Category B")).toBeInTheDocument();

    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
  });

  it("should render the items even witout categories", async () => {
    (getItems as jest.Mock).mockResolvedValue({
      data: {
        items: [
          {
            id: "1",
            title: "Item 1",
            price: { amount: 100, currency: currencies.ARS },
          },
          { id: "2", title: "Item 2" },
        ],
      },
      resultMessage: "Success",
    });
    const searchParams = { search: "mock-search-query" };
    const PageResolved = await resolvedComponent(ItemsPage, {
      searchParams,
    });

    const { getByText } = render(<PageResolved />);

    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
  });

  it("should render the error message when item data is not available", async () => {
    const params = { itemSlug: "non-existing-item-slug" };

    (getItems as jest.Mock).mockResolvedValue({
      data: null,
      resultMessage: { es: "Items not found" },
    });

    const searchParams = { search: "mock-search-query" };
    const PageResolved = await resolvedComponent(ItemsPage, {
      searchParams,
    });

    const { getByText } = render(<PageResolved />);

    expect(getByText("Items not found")).toBeInTheDocument();
  });

  it("should render the error message when response is not available", async () => {
    const params = { itemSlug: "non-existing-item-slug" };

    (getItems as jest.Mock).mockResolvedValue(null);

    const searchParams = { search: "mock-search-query" };
    const PageResolved = await resolvedComponent(ItemsPage, {
      searchParams,
    });

    const { getByText } = render(<PageResolved />);

    expect(getByText("Por favor intenta de nuevo.")).toBeInTheDocument();
  });
});
