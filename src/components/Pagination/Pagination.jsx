import React, { useState } from "react";
import "./Pagination.css";

function Pagination({ pageNum, setPageNum, allNotes, notesPerPage }) {
  const pageCount = Math.ceil(allNotes.length / notesPerPage);
  const pageNumbers = [...Array(pageCount + 1).keys()].slice(1);

  // const handlePagination = (num) => {
  //   // setPage({
  //   //   pageNum: num,
  //   //   // start: pageNum * notesPerPage - notesPerPage,
  //   //   // end: pageNum * notesPerPage,
  //   // });
  // };
  const handlePrevAndForward = (val) => {
    if (val == -1 && pageNum > 1) {
      setPageNum(pageNum - 1);
    } else if (val == 1 && pageNum < pageNumbers.length)
      setPageNum(pageNum + 1);
  };
  return (
    <>
      <div className="pagination-container">
        <div
          className=" pagination-div prev"
          onClick={() => handlePrevAndForward(-1)}
        >{`<`}</div>
        {pageNumbers.map((num) => (
          <div
            className={`pagination-div page-num ${num == pageNum && "active"}`}
            onClick={() => setPageNum(num)}
          >
            {num}
          </div>
        ))}
        <div
          className=" pagination-div forward"
          onClick={() => handlePrevAndForward(1)}
        >{`>`}</div>
      </div>
    </>
  );
}

export default Pagination;
