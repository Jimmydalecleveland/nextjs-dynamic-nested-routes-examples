import {
  fetchBrandsCategoriesSlugs,
  fetchProductsByCategoryByBrand,
} from "@/queries";
import { Product } from "@/types";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";

export interface CategoryByBrandProps {
  data: Product[];
}

const CategoryByBrand = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      {data.map((category) => (
        <h1 key={category._id}>{category.name}</h1>
      ))}
    </div>
  );
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
  if (!context.params?.category || !context.params?.brand) {
    return {
      notFound: true,
    };
  }

  const result: Product[] = await fetchProductsByCategoryByBrand({
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
