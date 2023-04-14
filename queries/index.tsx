import { parse, evaluate } from "groq-js";
import groq from "groq";
// import dataset from "@/sample-data/brand-category-products.json";
import brands from "@/sample-data/brand.json";
import categories from "@/sample-data/category.json";
import products from "@/sample-data/product.json";
import { CategoriesWithBrandsQueryResult } from "@/types/queries";
import { Product } from "@/types";

export async function groqQuery(query: string, params?: any) {
  // Returns an ESTree-inspired syntax tree
  const tree = parse(query);

  const dataset = [...brands, ...categories, ...products];
  // Evaluate a tree against a dataset
  const value = await evaluate(tree, { dataset, params });

  // Gather everything into one JavaScript object
  let result = await value.get();

  console.log("\n\n ===== Result ===== \n\n");
  console.dir(result, { depth: null });
  console.log("\n\n ===== End Result ===== \n\n");
  return result;
}

export async function fetchBrands() {
  const query = groq`*[_type == "brand"]`;
  const result = await groqQuery(query);
  return result;
}

export async function fetchCategories() {
  const query = groq`*[_type == "category"]`;
  const result = await groqQuery(query);
  return result;
}

export async function fetchCategoriesWithBrands(): Promise<CategoriesWithBrandsQueryResult> {
  const query = groq`*[_type == "category"] {
    slug,
    "brandSlugs": *[_type == "brand" && ^._id in categories[]._ref].slug,
  }`;
  const result: CategoriesWithBrandsQueryResult = await groqQuery(query);
  return result;
}

export async function fetchProductsWithBrandAndCategoryNames() {
  const query = groq`*[_type == "product"] {
    name,
    "brandName": brand->.name,
    "categoryName": category->.name,
  }`;
  const result = await groqQuery(query);
  return result;
}

export async function fetchProductsByCategoryByBrand({
  brandSlug,
  categorySlug,
}: {
  brandSlug: string;
  categorySlug: string;
}): Promise<Product[]> {
  const query = groq`*[
    _type == "product" 
    && brand->.slug == $brandSlug 
    && category->.slug == $categorySlug
  ]`;
  const result: Product[] = await groqQuery(query, { brandSlug, categorySlug });
  return result;
}

/**
 * Example query of flattening data.
 * @example
 * [
 *  {
 *    name: 'Patagonia',
 *    'womens-jackets': [
 *      "Women's Better Sweater Fleece Jacket",
 *      "Women's Nano Puff Jacket",
 *      'Greenland Winter Jacket Women',
 *      'Keb Eco-Shell Jacket Women'
 *    ]
 *  },
 *  {
 *    name: 'Fjallraven',
 *    'womens-jackets': [
 *      "Women's Better Sweater Fleece Jacket",
 *      "Women's Nano Puff Jacket",
 *      'Greenland Winter Jacket Women',
 *      'Keb Eco-Shell Jacket Women'
 *    ]
 *  }
 * ]
 */
export async function fetchWomensJacketsByBrand() {
  const query = groq`*[_type == "brand"] {
    name,
    "womens-jackets": *[_type == "category" && slug == "womens-jackets"].products[].name,
  }`;
  const result = await groqQuery(query);
  return result;
}
