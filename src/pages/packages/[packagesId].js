import axios from "axios";
import ProductDetails from "@/src/components/Product/ProductDetails";

export default function productDetails({ packagesData }) {
  return <ProductDetails productData={packagesData} />;
}

export async function getServerSideProps({ query, req }) {
  const {
    data: { data },
  } = await axios.get(
    `http://localhost:4545/product/specific?id=${query.packagesId}`
  );

  return {
    props: {
      packagesData: data,
    },
  };
}
