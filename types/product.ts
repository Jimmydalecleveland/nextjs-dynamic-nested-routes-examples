import { Reference } from "./reference";

export type ProductType = 'jacket' | 'pack-or-bag';

export interface Product {
  _type: 'product',
  _id: string,
  productType: ProductType,
  slug: string,
  name: string,
  price: string,
  description?: string,
  brand: Reference,
  category: Reference,
}
  
export interface BikeProduct {
  _type: 'product-bike',
  _id: string,
  slug: string,
  name: string,
  price: {
    small: string,
    medium: string,
    large: string,
  },
  description?: string,
  specs: {
    "Bike Style": string,
    "Frame": string,
    "Bike Suspension": string,
    "Brake Type": string
  },
  brand: Reference,
  category: Reference,
}
  