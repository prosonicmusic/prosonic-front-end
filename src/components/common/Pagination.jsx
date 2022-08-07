import React from 'react';

const Pagination = ({ postsPerPage, TotalPosts, paginate}) => {
  const pages = 7;

  const pageNumbers = [];
  for(let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      <div className="prev disabled"> Prev </div>
      <ul className="numberContainer">

        {pageNumbers.map(page => {
          return (
          <li className='paginationNumbers'> 
            <a href="">{page}</a>
          </li> 
          )
        })}

      </ul>


      {/* <ul className="numberContainer">

        {pageNumbers.map(number => (
          <li key={number} className="paginationNumbers">
            <a onClick={() => paginate(number)} className='pageLink'>{number}</a>
          </li>
        ))}

      </ul> */}
      <div className="next"> Next </div>
    </div>
  );
}

export default Pagination;
