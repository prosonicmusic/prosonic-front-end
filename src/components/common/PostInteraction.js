import { useRouter } from "next/router";

import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import axios from "axios";
import { parseCookies } from "nookies";
import { toast } from "react-hot-toast";
import routerPush from "@/src/utils/routerPush";

export default function PostInteraction({ isLiked, id, styles, likeCount }) {
  const baseUrl = "http://127.0.0.1:4545";
  const router = useRouter();

  const likeHandler = async (productId) => {
    const { accessToken } = parseCookies();
    const body = {
      product_id: productId,
      value: "like",
    };

    try {
      const response = await axios.post(`${baseUrl}/user/like`, body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      routerPush(router);

      if (!isLiked) {
        toast.success("Liked successfully");
      } else {
        toast.success("Unliked");
      }
    } catch (error) {
      toast.error("Please sign in to like the product.");
      router.push("/signin");
    }
  };

  return (
    <button onClick={() => likeHandler(id)} className={styles}>
      {isLiked ? (
        <HiHeart className="h-6 w-6 cursor-pointer fill-[#dd1f5f]" />
      ) : (
        <HiOutlineHeart className="h-6 w-6 stroke-rose-500 hover:stroke-rose-700 cursor-pointer" />
      )}
      {likeCount && <span className="text-xs ml-1 text-rose-200">{likeCount}</span>}
    </button>
  );
}
