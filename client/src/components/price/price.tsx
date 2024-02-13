import { Sizes } from "@meli/shared/interfaces/card";
import React from "react";

import classes from "./price.module.css";
import { currencies, currencyFormat } from "@meli/shared/utils/currency-format";

interface PriceProps {
  price: number;
  currency: currencies;
  size?: Sizes;
  decimal?: number;
}

export default function Price({
  price,
  decimal,
  currency,
  size = Sizes.medium,
}: Readonly<PriceProps>) {
  const priceFormatted = currencyFormat(currency, price);
  return (
    <>
      <p className={`${classes.price} ${classes[`price--${size}`]}`}>
        {priceFormatted}
        {decimal && (
          <span className={`${classes.decimal} ${classes[`decimal--${size}`]}`}>
            {decimal}
          </span>
        )}
      </p>
    </>
  );
}
