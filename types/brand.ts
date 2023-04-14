import { Reference } from './reference'

export interface Brand {
  _type: 'brand',
  _id: string,
  slug: string,
  name: string,
  categories: Reference[]
}
