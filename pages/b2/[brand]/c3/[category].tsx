import {
  fetchBrandsCategoriesSlugs,
  fetchProductsPlusBikesByCategoryByBrand,
} from "@/queries";
import { BikeProduct, Product } from "@/types";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import Jackets from "@/templates/Jackets";
import PacksAndBags from "@/templates/PacksAndBags";
import Bikes from "@/templates/Bikes";

const PRODUCT_TEMPLATE_MAP = {
  jacket: Jackets,
  "pack-or-bag": PacksAndBags,
};

export interface CategoryByBrandProps {
  data: Product[] | BikeProduct[];
}

function isBikeProductArray(
  data: BikeProduct[] | Product[]
): data is BikeProduct[] {
  return (data as BikeProduct[]).every(({ _type }) => _type === "product-bike");
}

const CategoryByBrand = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (isBikeProductArray(data)) {
    return <Bikes data={data} />;
  }

  const Template = PRODUCT_TEMPLATE_MAP[data[0].productType];

  return <Template data={data} />;
};

interface Params extends ParsedUrlQuery {
  brand: string;
  category: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  console.log("getStaticPaths pre fetch");
  const brandsWithCategories = await fetchBrandsCategoriesSlugs();

  const paths = brandsWithCategories.flatMap((brand) =>
    brand.categorySlugs.map((categorySlug) => ({
      params: {
        brand: brand.slug,
        category: categorySlug,
      },
    }))
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  CategoryByBrandProps,
  Params
> = async (context) => {
  console.log("props pre fetch");
  if (!context.params?.category || !context.params?.brand) {
    return {
      notFound: true,
    };
  }

  const result: Product[] | BikeProduct[] =
    await fetchProductsPlusBikesByCategoryByBrand({
      brandSlug: context.params.brand,
      categorySlug: context.params.category,
    });

  if (result.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: result,
    },
  };
};

export default CategoryByBrand;
