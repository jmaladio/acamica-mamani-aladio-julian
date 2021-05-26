import { useState } from "react";

export const usePagination = (items, itemsPerPage, sort) => {
  const [activePage, setActivePage] = useState(1);
  const pagesTotal = Math.ceil(items.length / itemsPerPage);

  const getCurrentItems = () => {
    const start = (activePage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    if (sort === "ASC") {
      return items.slice(start, end).sort((a,b) => b.cost-a.cost);
    } else if (sort === "DESC") {
      return items.slice(start, end).sort((a,b) => a.cost-b.cost);
    } else {
      return items.slice(start, end);
    }
  };

  const nextPage = () => {
    // the callback fn with min calc fix an infinite empty pages overflow
    setActivePage((activePage) => Math.min(activePage + 1, pagesTotal));
  };

  const prevPage = () => {
    // same with the opposite extreme
    setActivePage((activePage) => Math.max(activePage - 1, 1));
  };

  const getPage = (page) => {
    // min page is 1
    const pageNumber = Math.max(1, page);
    // max page is pagesTotal
    setActivePage((activePage) => Math.min(pageNumber, pagesTotal));
  };

  return {
    getCurrentItems,
    getPage,
    nextPage,
    prevPage,
    activePage,
    pagesTotal,
  };
};