import type { Product } from './../Product/Product';

export interface CartProduct extends Product
{
  quantity: number;
}