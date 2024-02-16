import { responseItem, responseItems } from "@meli/shared/interfaces/items";
import { API } from "@meli/shared/config";

async function getItems(search: Readonly<string>): Promise<responseItems | undefined> {
  try {
    const response = await fetch(`${API}/items?q=${search}`);
    const { data, resultMessage } = await response.json();
    return { data, resultMessage };
  } catch (error) {
    console.log('TODO Logger',error);
  }
}

async function getItem(id: Readonly<string>): Promise<responseItem | undefined> {
  try {
    const response = await fetch(`${API}/items/${id}`);
    const { data, resultMessage } = await response.json();
    return  { data, resultMessage };
  } catch (error) {
    console.log('TODO Logger',error);
  }
}

export { getItems, getItem }
