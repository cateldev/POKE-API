import React from "react";

const { page, totalPages, onLeftClick, onRightClick } = props;
const Pagination = (props) => {
  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}><div>◀️</div></button>
      <div>
        {page} of {totalPages}
      </div>
      <button onClick={onRightClick}><div>▶️</div></button>
    </div>
  );
};

export default Pagination;
