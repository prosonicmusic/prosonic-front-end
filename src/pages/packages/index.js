import { useRouter } from "next/router";
import queryString from "query-string";

import Product from "@/src/components/Product/Product";
import PaginationComponent from "@/src/components/common/Pagination";
import Filter from "@/src/components/common/Filter";

import useAxios from "@/src/utils/useAxios";
import axios from "axios";

export default function TracksPage({ packagesData, filtersData }) {
  const { results } = packagesData;
  const router = useRouter();

  return (
    <div className="relative p-5 overflow-visible bg-[#1a1c20] h-full m-auto w-full max-w-5xl text-[#bcc7d4] top-[75px] rounded-[20px] mb-[134px]">
      <Filter
        router={router}
        productType="package"
        pageName={"Latest Packages"}
        filtersData={filtersData}
      />

      <div className="flex flex-row flex-wrap">
        {results?.map((packages) => {
          return <Product product={packages} key={packages.id} />;
        })}
      </div>

      <PaginationComponent
        totalPages={packagesData.total_pages}
        currentPage={packagesData.current_page}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const baseUrl = process.env.BASE_API_URL;
  const pageSize = process.env.PAGE_SIZE;

  try {
    const [dataRes, typesRes] = await Promise.all([
      useAxios(context).get(
        `/product/get?product_type=Package&${queryString.stringify(
          context.query
        )}&page_size=${pageSize}`
      ),
      axios.get(`${baseUrl}/product/package/types/all`),
    ]);

    const packagesData = dataRes?.data || [];
    const typesData = typesRes?.data?.data || [];

    return {
      props: {
        packagesData,
        filtersData: {
          types: typesData,
        },
      },
    };
  } catch (error) {
    const typesRes = axios.get(`${baseUrl}/product/package/types/all`);
    const typesData = typesRes?.data?.data || [];

    return {
      props: {
        packagesData: [],
        filtersData: {
          types: typesData,
        },
      },
    };
  }
}
