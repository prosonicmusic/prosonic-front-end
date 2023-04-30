import ProductDetails from "@/src/components/Product/ProductDetails";
import useAxios from "@/src/utils/useAxios";

export default function productDetails({ tracksData }) {
  return <ProductDetails productData={tracksData} />;
}

export async function getServerSideProps(context) {
  const {
    data: { data },
  } = await useAxios(context).get(
    `http://localhost:4545/product/specific?id=${context.query.tracksId}`
  );

  return {
    props: {
      tracksData: data,
    },
  };
}
