import React from "react";
import VideoCard from "./VideoCard";
import CardContainer from "./CardContainer";

const ListVideos = props => {
  const { loading, error, data } = props;
  const listVideos = data =>
    data.results.map(vid => <VideoCard key={vid.id} video={vid} />);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) return <CardContainer>{listVideos(data)}</CardContainer>;
};

export default ListVideos;
