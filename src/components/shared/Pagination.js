import React from "react";

const Pagination = () => {
   return (
      <div className="pagination">
         <div className="prev"> Prev </div>
         <div className="numberContainer">
            <div className="paginationNumbers currentPage"> 1 </div>
            <div className="paginationNumbers"> 2 </div>
            <div className="paginationNumbers"> 3 </div>
            <div className="paginationNumbers"> 4 </div>
            <div className="paginationNumbers"> 5 </div>
            <div className="paginationNumbers"> 6 </div>
            <div className="paginationNumbers"> 7 </div>
         </div>
         <div className="next"> Next </div>
      </div>
   );
};

export default Pagination;
