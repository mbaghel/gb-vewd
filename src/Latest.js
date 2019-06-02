import React from "react";
import withFetch from "./withFetch";
import ListVideos from "./ListVideos";

const Latest = props => {
  const { loading, error, data } = props;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return <ListVideos data={data} />;
  // *** TODO: handle next or prev clicks by fetching next group of vids
};

export default withFetch((api, user) => api.videos(user))(Latest);
