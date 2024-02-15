import Link from "next/link";

import Card from "@meli/components/card/card";
import CardMedia from "@meli/components/card-media/card-media";
import CardTitle from "@meli/components/card-title/card-title";
import FreeShipping from "@meli/components/free-shipping/free-shipping";
import Price from "@meli/components/price/price";
import { Item } from "@meli/shared/interfaces/items";
import { CardVariation } from "@meli/shared/interfaces/card";
import CardWrapper from "@meli/components/card-wrapper/card-wrapper";

import classes from "./items.module.css";

interface ItemsProps {
  items: Item[];
}

export default async function Items({ items }: Readonly<ItemsProps>) {
  const cardImgSizes = "110px";
  return (
    <CardWrapper>
      <ul>
        {items.map((item: Item, i: number) => (
          <li key={i} className={classes.row}>
            <Link href={`/items/${item.id}`}>
              <Card key={item.id} variation={CardVariation.row}>
                <CardMedia
                  image={{
                    url: item.picture,
                    sizes: cardImgSizes,
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
    </CardWrapper>
  );
}
