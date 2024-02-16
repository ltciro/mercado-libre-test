import { getItems, getItem } from "./client";
import { API } from "@meli/shared/config";

describe("API functions", () => {
  const fetchMock = jest.fn();

  beforeEach(() => {
    global.fetch = fetchMock;
  });

  afterEach(() => {
    fetchMock.mockClear();
  });

  it("should fetch items successfully", async () => {
    const responseData = {
      data: [
        { id: "1", title: "Item 1" },
        { id: "2", title: "Item 2" },
      ],
      resultMessage: "Success",
    };

    fetchMock.mockResolvedValueOnce({
      json: async () => responseData,
    });

    const itemsResponse = await getItems("searchQuery");

    expect(fetchMock).toHaveBeenCalledWith(`${API}/items?q=searchQuery`);

    expect(itemsResponse).toEqual(responseData);
  });

  it("should fetch an item successfully", async () => {
    const responseData = {
      data: { id: "1", title: "Item 1" },
      resultMessage: "Success",
    };

    fetchMock.mockResolvedValueOnce({
      json: async () => responseData,
    });

    const itemResponse = await getItem("itemId");

    expect(fetchMock).toHaveBeenCalledWith(`${API}/items/itemId`);

    expect(itemResponse).toEqual(responseData);
  });

  it("should handle fetch errors for getItems", async () => {
    fetchMock.mockRejectedValueOnce(new Error("Failed to fetch"));

    const itemsResponse = await getItems("searchQuery");

    expect(fetchMock).toHaveBeenCalledWith(`${API}/items?q=searchQuery`);

    expect(itemsResponse).toBeUndefined();
  });

  it("should handle fetch errors for getItem", async () => {
    fetchMock.mockRejectedValueOnce(new Error("Failed to fetch"));

    const itemResponse = await getItem("itemId");

    expect(fetchMock).toHaveBeenCalledWith(`${API}/items/itemId`);

    expect(itemResponse).toBeUndefined();
  });
});
