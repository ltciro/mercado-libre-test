import { backendUrl } from "./../../../config/index.js";

export const itemsUrls = {
  search: (itemSearched) =>
    `${backendUrl}/sites/MLA/search?q=${itemSearched}&limit=4`,
  detail: {
    item: (id) => `${backendUrl}/items/${id}`,
    description: (id) => `${backendUrl}/items/${id}/description`,
  },
};
