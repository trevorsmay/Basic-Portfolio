import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.randomPhoto ? `url(${props.randomPhoto})` : "none"
      }}
    >
      {!props.randomPhoto && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        style={{ opacity: props.randomPhoto ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="dislike"
      />
      <CardBtn
        style={{ opacity: props.randomPhoto ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="like"
      />
    </div>
  );
}

export default Card;
