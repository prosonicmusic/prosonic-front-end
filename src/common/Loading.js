import Image from "next/image";

export default function Loading({ w, h }) {
  return <Image src="/loading.gif" width={w} height={h} />;
}
