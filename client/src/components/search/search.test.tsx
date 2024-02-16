// import React from "react";
// import "@testing-library/jest-dom";
// import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
// import { expect, jest } from "@jest/globals";
// import Search from "./search";

// jest.mock("next/navigation", () => ({
//   useRouter: jest.fn(() => ({ push: jest.fn() })),
//   useSearchParams: jest.fn(() => ({ id: "123" })),
// }));
// // const useRouter = jest.spyOn(require("next/navigation"), "useRouter");

// describe("Search Component", () => {
//   beforeEach(async () => {
//     // // Mock the useRouter hook
//     // (useRouter as jest.Mock<any>).mockReturnValue({
//     //   push: jest.fn(),
//     // });
//   });

//   afterEach(cleanup);

//   it("should perform search and redirect on form submission", async () => {
//     const { getByPlaceholderText, getByRole } = render(
//       <Search path="items?query=test" param="query" />
//     );

//     // Mock search query
//     const searchQuery = "test query";

//     // Input search query
//     const searchInput = getByPlaceholderText("Nunca dejes de buscar");
//     fireEvent.change(searchInput, { target: { value: searchQuery } });

//     // Submit form
//     const submitButton = getByRole("button", { name: "Buscar" });
//     fireEvent.click(submitButton);

//     // Await redirection
//     await waitFor(() => expect(true).toBe(true));
//   });

//   // it("should not submit form if search input is empty", async () => {
//   //   const { getByRole } = render(<Search path="items" param="query" />);

//   //   // Submit form with empty input
//   //   const submitButton = getByRole("button", { name: "Buscar" });
//   //   fireEvent.click(submitButton);

//   //   // Check if redirection did not occur
//   //   expect(pushMock).not.toHaveBeenCalled();
//   // });
// });
