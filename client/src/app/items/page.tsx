import { getItems } from "@meli/services/client";

import Breadcrumb from "@meli/components/breadcrumb/breadcrumb";
import ErrorMessage from "@meli/components/error-message/error-message";
import Items from "@meli/components/items/items";

interface ItemsProps {
  searchParams: {
    search: string;
  };
}

export default async function ItemsPage({
  searchParams,
}: Readonly<ItemsProps>) {
  if (!searchParams.search) {
    return (
      <ErrorMessage message={{ es: "No encontramos el termino buscado." }} />
    );
  }

  const response = await getItems(searchParams.search);

  if (!response) {
    return <ErrorMessage />;
  }
  const { data, resultMessage } = response;
  if (!data) {
    return <ErrorMessage message={resultMessage} />;
  }

  const items = data.items ?? [];
  const categories = data.categories;

  return (
    <>
      {!!categories?.length && (
        <Breadcrumb breadcrumbs={data.categories}></Breadcrumb>
      )}
      <main>
        <Items items={items} />
      </main>
    </>
  );
}
