import React from "react";
import withFetch from "./withFetch";
import ListVideos from "./ListVideos";

const ListWithShow = withFetch((api, user, props) =>
  api.videos(user, {
    filter: `video_show:${props.id}`,
    sort: "publish_date:asc"
  })
)(ListVideos);

const Show = props => <ListWithShow id={props.match.params.id} />;

export default Show;
