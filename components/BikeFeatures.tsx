import { BikeProduct } from "@/types";
import Image from "next/image";

interface BikeFeaturesProps {
  bikes: BikeProduct[];
}

function BikeFeatures({ bikes }: BikeFeaturesProps) {
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <Image
          src={`https://picsum.photos/seed/${bikes[0].name}/1358/800`}
          width="1358"
          height="800"
          alt="placeholder image"
          className="h-96 w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {bikes[0].name}
          </h2>
          <p className="mt-4 text-gray-500">{bikes[0].description}</p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {Object.entries(bikes[0].specs).map(([key, value]) => (
            <div key={key} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{key}</dt>
              <dd className="mt-2 text-sm text-gray-500">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default BikeFeatures;
