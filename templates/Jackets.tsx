import ProductList from "@/components/ProductList";
import { Product } from "@/types";

export interface JacketsProps {
  data: Product[];
}

const Jackets = ({ data }: JacketsProps) => {
  return (
    <div>
      {data.map((category) => (
        <h1 key={category._id}>{category.name}</h1>
      ))}
      <ProductList products={data} />
    </div>
  );
};

export default Jackets;
