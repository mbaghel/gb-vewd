import React from "react";
import withFetch from "./withFetch";
import ListVideos from "./ListVideos";

const ListWithVideos = withFetch((api, user) => api.videos(user))(ListVideos);

const Latest = () => <ListWithVideos />;
// *** TODO: handle next or prev clicks by fetching next group of vids;

export default Latest;
