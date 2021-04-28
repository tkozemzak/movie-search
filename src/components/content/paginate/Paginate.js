import React from 'react';
import './Paginate.scss';

const Paginate = () => {
  return (
    <>
      <span className="pageCount">1 - 20</span>
      <button className="paginate-button disable">Prev</button>
      <button className="paginate-button">Next</button>
    </>
  );
};

export default Paginate;
