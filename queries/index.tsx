import { parse, evaluate } from "groq-js";
import groq from "groq";
import dataset from "@/sample-data/brand-category-products.json";
import brands from "@/sample-data/brand.json";
import categories from "@/sample-data/category.json";

export async function groqQuery(query: string) {
  // Returns an ESTree-inspired syntax tree
  const tree = parse(query);

  const ex = [...brands, ...categories];
  // Evaluate a tree against a dataset
  const value = await evaluate(tree, { dataset: ex });

  // Gather everything into one JavaScript object
  let result = await value.get();

  console.dir(result, { depth: null });
  return result;
}

export async function getBrands() {
  const query = await groq`*[_type == "brand"] {
    name,
    categories[]->,
  }`;
  const result = await groqQuery(query);
}
