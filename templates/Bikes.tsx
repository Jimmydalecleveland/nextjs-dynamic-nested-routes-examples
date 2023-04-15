import ProductList from "@/components/ProductList";
import { BikeProduct } from "@/types";

export interface BikesProps {
  data: BikeProduct[];
}

const Bikes = ({ data }: BikesProps) => {
  return (
    <div>
      <ProductList categoryName="Bikes" products={data} />
    </div>
  );
};

export default Bikes;
