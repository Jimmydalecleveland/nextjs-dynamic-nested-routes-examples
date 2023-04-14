import { Product } from "@/types";

export interface PacksAndBags {
  data: Product[];
}

const PacksAndBags = ({ data }: PacksAndBags) => {
  return (
    <div>
      {data.map((category) => (
        <h1 key={category._id}>{category.name}</h1>
      ))}
    </div>
  );
};

export default PacksAndBags;
