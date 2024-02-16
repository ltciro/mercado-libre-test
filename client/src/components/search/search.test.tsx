import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { jest } from "@jest/globals";
import Search from "./search";
import { AppRouterContextProviderMock } from "@meli/shared/utils/app-router-context-mock";

describe("Search Component", () => {
  afterEach(cleanup);

  it("should perform search and redirect on form submission", async () => {
    const push = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(
      <AppRouterContextProviderMock router={{ push }}>
        <Search path="items" param="query" />
      </AppRouterContextProviderMock>
    );

    const searchQuery = "test";

    const searchInput = getByPlaceholderText("Nunca dejes de buscar");
    fireEvent.change(searchInput, { target: { value: searchQuery } });

    const submitButton = getByTestId("search");
    if (submitButton) {
      fireEvent.submit(submitButton);
    }
    expect(searchInput).toBeInTheDocument();

    await waitFor(() => expect(push).toHaveBeenCalledWith("/items?query=test"));
  });

  it("should not submit form if search input is empty", async () => {
    const push = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(
      <AppRouterContextProviderMock router={{ push }}>
        <Search path="items" param="query" />
      </AppRouterContextProviderMock>
    );

    const submitButton = getByTestId("search");
    if (submitButton) {
      fireEvent.submit(submitButton);
    }

    expect(push).not.toHaveBeenCalled();
  });
});
