import React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { PaginateConfig } from "../../../const";

import "./paginate.scss";

interface Props {
  pageCount: number;
  onPageChange: (item: number) => void;
  currentPage: number;
}

const Paginate: React.FC<Props> = ({
  pageCount,
  onPageChange,
  currentPage,
}) => {
  type OnPageChangeCallback = ReactPaginateProps["onPageChange"];

  const handlePageClick: OnPageChangeCallback = (selectedItem) => {
    onPageChange(selectedItem.selected);
  };

  return (
    <div className="paginate__wrapper">
      <ReactPaginate
        previousLabel={PaginateConfig.PREVIOUS_LABEL}
        nextLabel={PaginateConfig.NEXT_LABEL}
        breakLabel={PaginateConfig.BREAK_LABEL}
        breakClassName="break-me"
        pageCount={pageCount}
        forcePage={currentPage}
        marginPagesDisplayed={PaginateConfig.MARGIN_PAGES}
        pageRangeDisplayed={PaginateConfig.PAGE_RANGE}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default React.memo(Paginate);
