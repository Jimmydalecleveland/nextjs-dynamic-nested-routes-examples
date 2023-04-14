import ProductList from "@/components/ProductList";
import { Product } from "@/types";

export interface PacksAndBags {
  data: Product[];
}

const PacksAndBags = ({ data }: PacksAndBags) => {
  return (
    <div>
      <ProductList categoryName="Packs and Bags" products={data} />
    </div>
  );
};

export default PacksAndBags;
