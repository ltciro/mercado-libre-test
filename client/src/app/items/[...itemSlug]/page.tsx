import { getItem } from "@meli/services/client";

import Breadcrumb from "@meli/components/breadcrumb/breadcrumb";
import ErrorMessage from "@meli/components/error-message/error-message";
import ItemDetail from "@meli/components/item-detail/item-detail";

export interface ItemProps {
  params: {
    itemSlug: string;
  };
}

export default async function ItemPage({ params }: Readonly<ItemProps>) {
  const response = await getItem(params.itemSlug);

  if (!response) {
    return <ErrorMessage />;
  }

  const { data, resultMessage } = response;
  if (!data) {
    return <ErrorMessage message={resultMessage} />;
  }

  const { item, categories } = data;

  return (
    <>
      {!!categories?.length && (
        <Breadcrumb breadcrumbs={data.categories}></Breadcrumb>
      )}
      <main>{item && <ItemDetail item={item} />}</main>
    </>
  );
}
