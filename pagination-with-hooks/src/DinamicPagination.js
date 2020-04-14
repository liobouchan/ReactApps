import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const DinamicPagination = props => {

  const {
    totalPages,
    pageNeighbours,
    onPageChanged,
    currentPage
  } = props;


  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }
        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    
    return range(1, totalPages);
  };

  const pages = fetchPageNumbers() || [];

  return (
    <Pagination aria-label="Page navigation">
      {pages.map((page, index) => {
        if (page === LEFT_PAGE)
          return (
            <PaginationItem disabled={currentPage <= 0}>
              <PaginationLink
                onClick={e => onPageChanged(e, currentPage - 1)}
                aria-label="Anterior"
                previous
              />
            </PaginationItem>
          );

        if (page === RIGHT_PAGE)
          return (
            <PaginationItem disabled={currentPage >= totalPages - 1}>
              <PaginationLink
                onClick={e => onPageChanged(e, currentPage + 1)}
                aria-label="Siguiente"
                next
              />
            </PaginationItem>
          );

        return (
          <PaginationItem active={currentPage === page} key={page}>
            <PaginationLink onClick={e => onPageChanged(e, page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        );
      })}
    </Pagination>
  );
};

export default DinamicPagination;