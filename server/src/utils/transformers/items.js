const getItem = (item) => {
  return {
    ...commonProperties(item),
  };
};

const getItemDetail = (item, description) => {
  console.log(item.pictures?.[0]?.url);
  return {
    ...commonProperties(item),
    picture: item.pictures?.[0]?.url || item.thumbnail,
    sold_quantity: item.sold_quantity,
    description:
      description?.plain_text || "No se ha especificado la descripción.",
  };
};

const commonProperties = (item) => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Math.trunc(item.price),
      decimals: getDecimals(item.price),
    },
    picture: item.thumbnail,
    condition: getCondition(item.attributes),
    free_shipping: item.shipping.free_shipping,
  };
};

const getCategories = (filters) => {
  if (!filters.length) {
    return [];
  }

  const {
    values: [{ path_from_root }],
  } = filters.find((filter) => filter.id === "category");

  return path_from_root.map((category) => category.name);
};

const getCondition = (attributes) => {
  if (!attributes.length) {
    return [];
  }

  const { value_name } = attributes.find(
    (attribute) => attribute.id === "ITEM_CONDITION"
  );

  return value_name ?? "";
};

const getDecimals = (price) => {
  return price.toString().split(".")[1] ?? 0;
};

export { getCategories, getItem, getItemDetail };
