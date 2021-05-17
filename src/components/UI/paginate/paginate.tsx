import React from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import { PaginateConfig } from '../../../const';
import { RootState } from '../../../store/reducer';

import './paginate.scss';

interface Props {
  pageCount: number,
  onPageChange: (item: number) => void
}

const Paginate: React.FC<Props> = ({ pageCount, onPageChange }) => {
  const { activeContact } = useSelector((state: RootState) => state);
  type OnPageChangeCallback = ReactPaginateProps['onPageChange'];

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
        pageCount={activeContact ? 1 : pageCount}
        marginPagesDisplayed={PaginateConfig.MARGIN_PAGES}
        pageRangeDisplayed={PaginateConfig.PAGE_RANGE}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default Paginate;
