import { Item, Items } from "@meli/shared/interfaces/items";
import { API } from "@meli/shared/config";

async function getItems(search: Readonly<string>): Promise<Items | undefined> {
  try {
    const response = await fetch(`${API}/items?q=${search}`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

async function getItem(id: Readonly<string>): Promise<Item | undefined> {
  try {
    const response = await fetch(`${API}/items/${id}`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export { getItems, getItem }
