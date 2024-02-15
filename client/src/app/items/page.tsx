import { getItems } from "@meli/services/client";

import Breadcrumb from "@meli/components/breadcrumb/breadcrumb";
import ErrorMessage from "@meli/components/error-message/error-message";
import Items from "@meli/components/items/items";

import classes from "./page.module.css";

interface ItemsProps {
  searchParams: {
    search: string;
  };
}

export default async function ItemsPage({
  searchParams,
}: Readonly<ItemsProps>) {
  const response = await getItems(searchParams.search);

  if (!response) {
    return <ErrorMessage />;
  }
  const { data, resultMessage } = response;
  if (!data) {
    return <ErrorMessage message={resultMessage} />;
  }

  const items = data.items ?? [];

  return (
    <>
      {data && <Breadcrumb breadcrumbs={data?.categories}></Breadcrumb>}
      <main>
        <Items items={items} />
      </main>
    </>
  );
}
