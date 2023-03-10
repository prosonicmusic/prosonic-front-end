import Product from "@/src/components/Product";
import axios from "axios";

export default function TracksPage({ tracksData }) {
  console.log(tracksData);
  return (
    <div className="flex flex-row flex-wrap relative p-5 overflow-visible bg-[#1a1c20] h-full m-auto w-full max-w-5xl text-[#bcc7d4] top-[75px] rounded-[20px] mb-[134px]">
      {tracksData.map((track) => {
        return <Product product={track} key={track.id} />;
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    "http://localhost:4545/product/get?product_type=Track&page_size=5"
  );
  const { results } = data;

  return {
    props: {
      tracksData: results,
    },
  };
}
