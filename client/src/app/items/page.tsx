import Link from "next/link";

import Card from "@meli/components/card/card";
import CardMedia from "@meli/components/card-media/card-media";
import CardTitle from "@meli/components/card-title/card-title";
import FreeShipping from "@meli/components/free-shipping/free-shipping";
import Price from "@meli/components/price/price";

import { getItems } from "@meli/services/client";

import { Item } from "@meli/shared/interfaces/items";
import { Sizes } from "@meli/shared/interfaces/card";
import { CardVariation } from "@meli/shared/interfaces/card";

import classes from "./page.module.css";

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
      <ul>
        {items.map((item: Item) => (
          <li className={classes.row}>
            <Link href={`/items/${item.id}`}>
              <Card key={item.id} variation={CardVariation.row}>
                <CardMedia
                  image={{
                    url: item.picture,
                    size: Sizes.small,
                  }}
                ></CardMedia>
                <CardTitle>
                  <div className={classes.cardSubtitle}>
                    <Price
                      price={item.price.amount}
                      currency={item.price.currency}
                    ></Price>
                    {item.free_shipping && <FreeShipping />}
                  </div>
                  <h2 className={classes.cardHeading}>{item.title}</h2>
                </CardTitle>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
