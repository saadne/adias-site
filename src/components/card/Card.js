import React from "react";
import "./card.scss";

function Card(props) {
  return (
    <div className="card">
      <span>{<props.icon />}</span>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <button>{props.buttonText}</button>
    </div>
  );
}

export default Card;
