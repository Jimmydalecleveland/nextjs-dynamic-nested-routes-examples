import { Reference } from "./reference";

export type ProductType = 'jacket' | 'pack-or-bag';

export interface Product {
  _type: 'product',
  _id: string,
  productType: ProductType,
  slug: string,
  name: string,
  price: string,
  brand: Reference,
  category: Reference,
}
  