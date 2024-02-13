import Card from "@meli/components/card/card";
import CardBody from "@meli/components/card-body/card-body";
import CardMedia from "@meli/components/card-media/card-media";
import CardTitle from "@meli/components/card-title/card-title";
import Price from "@meli/components/price/price";

import { getItem } from "@meli/services/client";

import { Item } from "@meli/shared/interfaces/items";
import { Sizes } from "@meli/shared/interfaces/card";
import { CardVariation } from "@meli/shared/interfaces/card";

import classes from "./page.module.css";

interface ItemProps {
  params: {
    itemSlug: string;
  };
}

export default async function Item({ params }: Readonly<ItemProps>) {
  const item = await getItem(params.itemSlug);

  return (
    <>
      {item && (
        <Card key={item.id} variation={CardVariation.detail}>
          <CardMedia
            image={{ url: item?.picture, size: Sizes.large }}
          ></CardMedia>
          <CardTitle>
            <p className={classes.cardSubtitle}>
              <span>{item.condition}</span>
              {item.sold_quantity && <span> - {item.sold_quantity}</span>}
            </p>
            <h2 className={classes.cardHeading}>{item.title}</h2>
            <Price
              price={item.price.amount}
              decimal={item.price.decimals}
              currency={item.price.currency}
              size={Sizes.large}
            ></Price>
          </CardTitle>
          <CardBody>
            <h3 className={classes.cardBodyTitle}>Descripción del producto</h3>
            <p className={classes.cardBodyP}>{item.description}</p>
          </CardBody>
        </Card>
      )}
    </>
  );
}
