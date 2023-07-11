import { destroyCookie } from "nookies";
import { toast } from "react-hot-toast";

export default function logout(router) {
  destroyCookie(null, "accessToken", {
    path: "/",
  });
  destroyCookie(null, "refreshToken", {
    path: "/",
  });

  router.refresh();

  toast("You logged out!");
}
