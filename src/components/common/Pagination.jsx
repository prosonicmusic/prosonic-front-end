import React from 'react';

const Pagination = (probs) => {
  return (
    <div className='pagination'>
      <div className="prev"> Prev </div>
      <ul className="numberContainer">
        <li className="paginationNumbers currentPage"> 1 </li>
        <li className="paginationNumbers"> 2 </li>
        <li className="paginationNumbers"> 3 </li>
        <li className="paginationNumbers"> 4 </li>
        <li className="paginationNumbers"> 5 </li>
        <li className="paginationNumbers"> 6 </li>
        <li className="paginationNumbers"> 7 </li>
      </ul>
      <div className="next"> Next </div>
    </div>
  );
}

export default Pagination;
