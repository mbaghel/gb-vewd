import React from "react";
import "./CardContainer.css";
const CardContainer = props => (
  <div className="card-container">{props.children}</div>
);

export default CardContainer;
