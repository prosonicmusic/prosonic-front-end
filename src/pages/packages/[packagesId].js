import ProductDetails from "@/src/components/Product/ProductDetails";
import useAxios from "@/src/utils/useAxios";

export default function productDetails({ packagesData }) {
  return <ProductDetails productData={packagesData} />;
}

export async function getServerSideProps(context) {
  const {
    data: { data },
  } = await useAxios(context).get(
    `http://localhost:4545/product/specific?id=${context.query.packagesId}`
  );

  return {
    props: {
      packagesData: data,
    },
  };
}
