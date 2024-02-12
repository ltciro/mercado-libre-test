import { itemsUrls } from "./urls.js";
import {
  errorHelper,
  getText,
  itemsTransformers,
} from "../../../utils/index.js";

export default async (req, res) => {
  try {
    const itemSearched = req.query.q;
    if (!itemSearched) return res.status(400).json(errorHelper("00005", req));

    const searchResponse = await fetch(itemsUrls.search(itemSearched)).catch(
      (err) => {
        return res.status(500).json(errorHelper("00000", req, err));
      }
    );

    const data = await searchResponse.json();

    const { filters, results } = data;
    if (!results.length) {
      return res.status(404).json(errorHelper("00006", req));
    }

    const categories = itemsTransformers.getCategories(filters);
    const items = results.map((item) => itemsTransformers.getItem(item));
    const formattedItems = { categories, items };

    return res.status(200).json({
      resultMessage: { es: getText("00009") },
      resultCode: "00009",
      data: formattedItems,
    });
  } catch (err) {
    return res.status(500).json(errorHelper("00000", req, err));
  }
};
