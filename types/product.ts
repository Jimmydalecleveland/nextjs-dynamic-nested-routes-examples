import { Reference } from "./reference";

export interface Product {
  _type: 'product',
  _id: string,
  slug: string,
  name: string,
  brand: Reference,
  category: Reference,
}
  