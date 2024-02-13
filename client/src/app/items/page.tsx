import Link from "next/link";

import Card from "@meli/components/card/card";
import CardMedia from "@meli/components/card-media/card-media";
import CardTitle from "@meli/components/card-title/card-title";
import Price from "@meli/components/price/price";

import { getItems } from "@meli/services/client";

import { Item } from "@meli/shared/interfaces/items";
import { Sizes } from "@meli/shared/interfaces/card-image";

interface ItemsProps {
  searchParams: {
    search: string;
  };
}

export default async function Items({ searchParams }: Readonly<ItemsProps>) {
  const data = await getItems(searchParams.search);
  const items = data?.items ?? [];
  return (
    <>
      {items.map((item: Item) => (
        <Link href={`/items/${item.id}`}>
          <Card key={item.id}>
            <CardMedia
              image={{
                url: item.picture,
                size: Sizes.small,
              }}
            ></CardMedia>
            <CardTitle>
              <Price
                price={item.price.amount}
                decimal={item.price.decimals}
                currency={item.price.currency}
              ></Price>
              <span className="material-symbols-outlined"> local_shipping</span>
              <h2>{item.title}</h2>
            </CardTitle>
          </Card>
        </Link>
      ))}
    </>
  );
}
