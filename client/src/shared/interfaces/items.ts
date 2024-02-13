import { currencies } from "../utils/currency-format";

export interface Items {
  categories: string[];
  items: Item[];
}
export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  permalink: string;
  sold_quantity?: number;
  description?: string
}

interface Price {
  currency: currencies;
  amount: number;
  decimals: number;
}