import { parse, evaluate } from "groq-js";
import groq from "groq";
import dataset from "@/sample-data/brand-category-products.json";

export async function groqQuery(query: string) {
  // Returns an ESTree-inspired syntax tree
  const tree = parse(query);

  const ex = [
    { _type: "brand", name: "Michael" },
    { _type: "category", name: "Bluth Company" },
  ];
  // Evaluate a tree against a dataset
  const value = await evaluate(tree, { dataset });

  // Gather everything into one JavaScript object
  let result = await value.get();

  console.log(result);
  return result;
}

export async function getBrands() {
  const query = await groq`*[ _type == "brand" ] {
    name,
  }`;
  const result = await groqQuery(query);
}
