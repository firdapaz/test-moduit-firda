import React from 'react';
import { styPagination } from './style';
const Pagination = ({ pageSize, totalData, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styPagination}>
        <a
          href="!#"
          onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)}
          className="page-link"
        >
          &#9664;
        </a>
        {pageNumbers.map(num => (
          <li key={num} className="page-item">
            <a href="!#" onClick={() => paginate(num)} className="page-link">
              {num}
            </a>
          </li>
        ))}
        <a
          href="!#"
          onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)}
          className="page-link"
        >
          &#9658;
        </a>
      </ul>
    </nav>
  );
};

export default Pagination;
