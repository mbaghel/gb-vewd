import React from "react";
import StyledCard from "./StyledCard";

const ShowCard = ({ show }) => {
  const { active, premium, title, deck } = show;
  const cardProps = {
    link: `/show/${show.id}`,
    image: show.image.small_url,
    name: title
  };

  const renderTags = () => (
    <>
      {active && <p className="card-tag active-tag">Active</p>}
      {premium && <p className="card-tag premium-tag">Premium</p>}
    </>
  );

  const renderBottom = () => (
    <>
      <p>{title}</p>
      <p className="secondary wrapped">{deck}</p>
    </>
  );

  return (
    <StyledCard {...cardProps} tags={renderTags()} bottom={renderBottom()} />
  );
};

export default ShowCard;
