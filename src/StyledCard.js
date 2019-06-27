import React from "react";
import { Link } from "react-router-dom";
import "./StyledCard.css";

const StyledCard = props => {
  return (
    <Link className="styled-card" to={props.link}>
      <div className="img-container">
        <img className="card-img" src={props.image} alt={props.name} />
        {props.tags}
      </div>
      <div className="card-bottom">{props.bottom}</div>
    </Link>
  );
};

export default StyledCard;
