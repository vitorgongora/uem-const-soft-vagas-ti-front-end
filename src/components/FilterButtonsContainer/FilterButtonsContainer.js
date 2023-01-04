import React from "react";
import "../../sass/filter-buttons.scss";

const FilterButtonsContainer = (props) => {
  return <div className="filter-buttons-container">{props.children}</div>;
};

export default FilterButtonsContainer;
