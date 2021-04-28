import React, { useState, useEffect } from 'react';
import './Paginate.scss';

const Paginate = ({ currentPage, totalPages, paginate }) => {
  const [page, setPage] = useState();
  const [totalPageNumber, setTotalPageNumber] = useState();

  const checkCurrentPagePrev = (page) => {
    if (page <= 1) {
      return 'paginate-button disable';
    } else {
      return 'paginate-button';
    }
  };
  const checkCurrentPageNext = (page, totalPageNumber) => {
    if (page >= totalPageNumber) {
      return 'paginate-button disable';
    } else {
      return 'paginate-button';
    }
  };

  useEffect(() => {
    setPage(currentPage);
    setTotalPageNumber(totalPages);
  }, [currentPage, totalPages]);

  return (
    <>
      <span className="pageCount">
        {page}/{totalPageNumber}
      </span>
      <button className={checkCurrentPagePrev(page)} onClick={() => paginate('prev')}>
        Prev
      </button>
      <button className={checkCurrentPageNext(page, totalPageNumber)} onClick={() => paginate('next')}>
        Next
      </button>
    </>
  );
};

export default Paginate;
