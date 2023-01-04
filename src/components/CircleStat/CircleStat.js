import React from "react";
import "../../sass/circle-stat.scss";

const CircleStat = (props) => {
  return (
    <div className="circle-stat-container">
      <div className={`circle-stat` + ` circle-stat-` + props.color}>
        {props.value}
      </div>
      <div className="circle-stat-description">{props.description}</div>
    </div>
  );
};

export default CircleStat;
