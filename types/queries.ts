import { Brand } from "./brand";
import { Category } from "./category";

export type CategoriesWithBrandsQueryResult = {
  slug: Brand["slug"]
  categorySlugs: Category["slug"][]
}[]
