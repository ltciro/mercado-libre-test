import { currencies } from "../utils/currency-format";
import { ResultMessage } from "./fetch";

export interface responseItems {
  data: Items,
  resultMessage: ResultMessage
}

export interface responseItem {
  data: ItemDetail,
  resultMessage: ResultMessage
}

export interface Items {
  categories: string[];
  items: Item[];
}
export interface ItemDetail {
  categories: string[];
  item: Item;
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