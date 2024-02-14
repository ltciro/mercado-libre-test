import Link from "next/link";

import Card from "@meli/components/card/card";
import CardMedia from "@meli/components/card-media/card-media";
import CardTitle from "@meli/components/card-title/card-title";
import FreeShipping from "@meli/components/free-shipping/free-shipping";
import Price from "@meli/components/price/price";

import { getItems } from "@meli/services/client";

import { Item } from "@meli/shared/interfaces/items";
import { CardVariation } from "@meli/shared/interfaces/card";
import CardWrapper from "@meli/components/card-wrapper/card-wrapper";
import Breadcrumb from "@meli/components/breadcrumb/breadcrumb";
import ErrorMessage from "@meli/components/error-message/error-message";

import classes from "./page.module.css";

interface ItemsProps {
  searchParams: {
    search: string;
  };
}

export default async function Items({ searchParams }: Readonly<ItemsProps>) {
  const response = await getItems(searchParams.search);

  if (!response) {
    return <ErrorMessage />;
  }
  const { data, resultMessage } = response;
  if (!data) {
    return <ErrorMessage message={resultMessage} />;
  }

  const items = data.items ?? [];
  const cardImgSizes = "110px";
  return (
    <>
      {data && <Breadcrumb breadcrumbs={data?.categories}></Breadcrumb>}
      <main className={classes.main}>
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
      </main>
    </>
  );
}
