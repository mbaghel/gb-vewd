import React, { useState } from "react";
import withFetch from "./withFetch";
import ListWithPagination from "./ListWithPagination";

const ListWithShow = withFetch((api, user, props) =>
  api.videos(user, {
    filter: `video_show:${props.id}`,
    sort: "publish_date:asc",
    offset: props.offset
  })
)(ListWithPagination);

const Show = props => {
  const [offset, setOffset] = useState(0);

  return (
    <ListWithShow
      id={props.match.params.id}
      offset={offset}
      setOffset={setOffset}
    />
  );
};

export default Show;
