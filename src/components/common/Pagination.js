import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";

import routerPush from "@/src/utils/routerPush";

export default function PaginationComponent({totalPages, currentPage}) {
  const router = useRouter();

  const pageHandler = (event, page) => {
    router.query.page = page;
    routerPush(router);
  };

  return (
    <div className="m-auto flex justify-center">
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={pageHandler}
          color="standard"
        />
      )}
    </div>
  );
}
