import axios from "axios";
import ProductDetails from "@/src/components/Product/ProductDetails";

export default function productDetails({ tracksData }) {
  return <ProductDetails productData={tracksData} />;
}

export async function getServerSideProps({ query, req }) {
  const {
    data: { data },
  } = await axios.get(
    `http://localhost:4545/product/specific?id=${query.tracksId}`
  );

  return {
    props: {
      tracksData: data,
    },
  };
}
