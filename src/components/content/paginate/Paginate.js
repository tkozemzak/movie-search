import React, { useState, useEffect } from 'react';
import './Paginate.scss';

const Paginate = ({ currentPage, totalPages, paginate }) => {
  const [page, setPage] = useState();
  const [totalPageNumber, setTotalPageNumber] = useState();

  useEffect(() => {
    setPage(currentPage);
    setTotalPageNumber(totalPages);
  }, [currentPage, totalPages]);

  return (
    <>
      <span className="pageCount">
        {page}/{totalPageNumber}
      </span>
      <button className="paginate-button disable" onClick={() => paginate('prev')}>
        Prev
      </button>
      <button className="paginate-button" onClick={() => paginate('next')}>
        Next
      </button>
    </>
  );
};

export default Paginate;
