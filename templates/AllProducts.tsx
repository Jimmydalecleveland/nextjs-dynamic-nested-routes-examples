import ProductFeatures from "@/components/ProductFeatures";
import ProductList from "@/components/ProductList";
import { Product } from "@/types";

export interface AllProductsProps {
  data: Product[];
}

const AllProducts = ({ data }: AllProductsProps) => {
  return (
    <div>
      <h1>All {brand} Products</h1>
      <ProductFeatures products={data.slice(0, 2)} />
      <ProductList products={data} />
    </div>
  );
};

export default AllProducts;
