import ProductList from "@/components/ProductList";
import { Product } from "@/types";

export interface JacketsProps {
  data: Product[];
}

const Jackets = ({ data }: JacketsProps) => {
  return (
    <div>
      <ProductList categoryName="Jackets" products={data} />
    </div>
  );
};

export default Jackets;
