import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import ListVideos from "./ListVideos";

const ListWithPagination = props => {
  const renderPageCount = () => {
    const { limit, offset, number_of_total_results: totalResults } = props.data;
    const currPage = offset / limit + 1;
    const totalPages = Math.ceil(totalResults / limit);
    return `${currPage}/${totalPages}`;
  };

  const prevPage = () => {
    if (props.data) {
      const { limit, offset } = props.data;
      if (offset !== 0) props.setOffset(offset - limit);
    }
  };

  const nextPage = () => {
    if (props.data) {
      const {
        offset,
        limit,
        number_of_total_results: totalResults
      } = props.data;
      if (offset + limit < totalResults) props.setOffset(offset + limit);
    }
  };

  return (
    <>
      <ListVideos
        loading={props.loading}
        error={props.error}
        data={props.data}
      />
      <button onClick={prevPage}>
        <IoMdArrowBack />
      </button>
      <p>Page: {props.data ? renderPageCount() : "--/--"}</p>
      <button onClick={nextPage}>
        <IoMdArrowForward />
      </button>
    </>
  );
};

export default ListWithPagination;
