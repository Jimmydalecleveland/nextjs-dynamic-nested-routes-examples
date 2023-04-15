import ProductFeatures from "@/components/ProductFeatures";
import ProductList from "@/components/ProductList";
import { Product } from "@/types";

export interface PacksAndBagsProps {
  data: Product[];
}

const PacksAndBags = ({ data }: PacksAndBagsProps) => {
  return (
    <div>
      <ProductFeatures products={data.slice(0, 2)} />
      <ProductList products={data} />
    </div>
  );
};

export default PacksAndBags;
