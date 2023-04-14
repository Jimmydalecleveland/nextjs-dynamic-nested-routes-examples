import { Brand } from "./brand";
import { Category } from "./category";

export type CategoriesWithBrandsQueryResult = {
  slug: Category["slug"]
  brandSlugs: Brand["slug"]
}[]
