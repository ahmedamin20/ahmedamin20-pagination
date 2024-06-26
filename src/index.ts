"use client"
import { useEffect, useState } from "react";

const usePaginationHook = ({ count, dataLength, limit = 5 }: { count: number; dataLength: number; limit?: number }) => {
    const [pagesCount, setPagesCount] = useState<number[]>();
  const [page, setPage] = useState(1);
  let hasMore = count > dataLength;
  useEffect(() => {
    if (hasMore) {
      const pageDifference = (count - dataLength) % (limit + 5 * 2);
      const pages: number[] = [];

      for (let i = 1; i <= pageDifference; i++) {
        pages.push(i);
      }

      setPagesCount(pages);
    } else {
      setPagesCount([1]);
      setPage(1);
    }
  }, [count, dataLength, hasMore]);

  return {
    pagesCount,
    hasMore,
    page,
    setPage,
  };
};
export default usePaginationHook;