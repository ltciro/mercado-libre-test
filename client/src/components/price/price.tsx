import React from "react";

interface PriceProps {
  price: number;
  decimal?: number;
  currency?: string;
}
const currencySymbol: { [key: string]: string } = {
  ARS: "$",
};

export default function Price({
  price,
  decimal,
  currency,
}: Readonly<PriceProps>) {
  const symbol = currency ? currencySymbol[currency] : "";
  return (
    <div>
      <p>
        <span>{symbol}</span>
        {price}
        {decimal && <span>{decimal}</span>}
      </p>
    </div>
  );
}
