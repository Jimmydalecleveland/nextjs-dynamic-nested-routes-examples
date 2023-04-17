import BikeFeatures from "@/components/BikeFeatures";
import ProductList from "@/components/ProductList";
import { BikeProduct } from "@/types";

export interface BikesProps {
  data: BikeProduct[];
}

const Bikes = ({ data }: BikesProps) => {
  return (
    <div>
      <BikeFeatures bikes={data} />
      <ProductList categoryName="All Bikes" products={data} />
    </div>
  );
};

export default Bikes;
