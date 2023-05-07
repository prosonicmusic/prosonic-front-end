import { useRouter } from "next/router";
import queryString from "query-string";

import Product from "@/src/components/Product/Product";
import Filter from "@/src/components/common/Filter";
import PaginationComponent from "@/src/components/common/Pagination";

import useAxios from "@/src/utils/useAxios";
import axios from "axios";

export default function TracksPage({ tracksData, filtersData }) {
  const { results } = tracksData;
  const router = useRouter();

  return (
    <div className="relative p-5 overflow-visible bg-[#1a1c20] h-full m-auto w-full max-w-5xl text-[#bcc7d4] top-[75px] rounded-[20px] mb-[134px]">
      <Filter
        router={router}
        productType="track"
        pageName={"Latest tracks"}
        filtersData={filtersData}
      />

      <div className="flex flex-row flex-wrap">
        {results?.map((track) => {
          return <Product product={track} key={track.id} />;
        })}
      </div>

      <PaginationComponent
        totalPages={tracksData.total_pages}
        currentPage={tracksData.current_page}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
  const pageSize = process.env.NEXT_PUBLIC_PAGE_SIZE;

  try {
    const data = await useAxios(context).get(
      `/product/get?product_type=Track&${queryString.stringify(
        context.query
      )}&page_size=${pageSize}`
    );

    const [dawsRes, genresRes] = await Promise.all([
      axios.get(`${baseUrl}/producer/daws`),
      axios.get(`${baseUrl}/product/genre/all`),
    ]);

    return {
      props: {
        tracksData: data.data,
        filtersData: {
          daws: dawsRes.data.data,
          genres: genresRes.data.data,
        },
      },
    };
  } catch (error) {
    const [dawsRes, genresRes] = await Promise.all([
      axios.get(`${baseUrl}/producer/daws`),
      axios.get(`${baseUrl}/product/genre/all`),
    ]);

    return {
      props: {
        tracksData: [],
        filtersData: {
          daws: dawsRes.data.data,
          genres: genresRes.data.data,
        },
      },
    };
  }
}
