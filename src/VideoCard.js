import React from "react";
import formatDate from "./lib/formatDate";
import formatTime from "./lib/formatTime";
import StyledCard from "./StyledCard";

const VideoCard = ({ video }) => {
  const {
    name,
    premium,
    length_seconds: length,
    publish_date: pubDate
  } = video;
  const cardProps = {
    link: `/video/${video.id}`,
    name,
    image: video.image.small_url
  };

  const renderTags = () => (
    <>
      <p className="card-tag time-tag">{formatTime(length)}</p>
      {premium && <p className="card-tag premium-tag">Premium</p>}
    </>
  );

  const renderBottom = () => (
    <>
      <p className="wrapped">{name}</p>
      <p className="secondary">{formatDate(pubDate)}</p>
    </>
  );

  return (
    <StyledCard {...cardProps} tags={renderTags()} bottom={renderBottom()} />
  );
};

export default VideoCard;
