import { parse, evaluate } from "groq-js";
import groq from "groq";
// import dataset from "@/sample-data/brand-category-products.json";
import brands from "@/sample-data/brand.json";
import categories from "@/sample-data/category.json";

export async function groqQuery(query: string) {
  // Returns an ESTree-inspired syntax tree
  const tree = parse(query);

  const dataset = [...brands, ...categories];
  // Evaluate a tree against a dataset
  const value = await evaluate(tree, { dataset });

  // Gather everything into one JavaScript object
  let result = await value.get();

  console.log("\n\n ===== Result ===== \n\n");
  console.dir(result, { depth: null });
  console.log("\n\n ===== End Result ===== \n\n");
  return result;
}

export async function getBrands() {
  const query = groq`*[_type == "brand"]`;
  const result = await groqQuery(query);
  return result;
}

export async function getCategories() {
  const query = groq`*[_type == "category"]`;
  const result = await groqQuery(query);
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
