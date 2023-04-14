import { Product } from "@/types";
import Image from "next/image";

interface ProductFeaturesProps {
  products: Product[];
}

function ProductFeatures({ products }: ProductFeaturesProps) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Packs and Bags
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Packs and bags are essential accessories for people on the go,
              whether you&apos;re hiking in the wilderness or commuting to work.
              They come in a variety of sizes and shapes, from backpacks to
              duffel bags to messenger bags, and are designed to carry
              everything from laptops to camping gear.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl text-center">
              Featured Products
            </h3>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            {products.map((product) => (
              <div key={product._id}>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                  <Image
                    src={`https://picsum.photos/seed/${product.name}/1720/960`}
                    width="1720"
                    height="960"
                    alt="placeholder image"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                {product.description && (
                  <p className="mt-8 text-base text-gray-500">
                    {product.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductFeatures;
