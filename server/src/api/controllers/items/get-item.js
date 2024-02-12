import { itemsUrls } from "./urls.js";
import {
  errorHelper,
  getText,
  itemsTransformers,
} from "../../../utils/index.js";

export default async (req, res) => {
  const { id } = req.params;
  try {
    const itemFetch = fetch(itemsUrls.detail.item(id));
    const descFetch = fetch(itemsUrls.detail.description(id));
    const [itemResponse, descResponse] = await Promise.allSettled([
      itemFetch,
      descFetch,
    ]).catch((err) => {
      return res.status(500).json(errorHelper("00000", req, err));
    });

    const item =
      itemResponse.status === "fulfilled"
        ? await itemResponse.value.json()
        : null;
    if (!item) {
      return res.status(404).json(errorHelper("00006", req));
    }
    const desc =
      descResponse.status === "fulfilled"
        ? await descResponse.value.json()
        : null;

    const formattedItem = itemsTransformers.getItemDetail(item, desc);
    return res.status(200).json({
      resultMessage: { es: getText("00009") },
      resultCode: "00009",
      data: formattedItem,
    });
  } catch (err) {
    return res.status(500).json(errorHelper("00000", req, err));
  }
};
