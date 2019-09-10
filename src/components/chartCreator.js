import React from "react";

const getHorizontalPosition = (amount, position) => {
  return position * (100 / amount);
};

const getWidth = amount => {
  return (1 / amount) * 100 + "%";
};

const getHeight = (value, amount) => {
  return (value / amount) * 100 + "%";
};

const BarCreator = props => {
  return (
    <svg
      class="chart"
      width="100%"
      height="100%"
      aria-labelledby="title desc"
      role="img"
    >
      {props.numbers.map((item, key) => {
        return (
          <g class="bar">
            <rect
              width={getWidth(props.amount)}
              height={getHeight(item, props.amount)}
              y="0%"
              x={getHorizontalPosition(props.amount, key) + "%"}
            ></rect>
          </g>
        );
      })}
      {/* <g class="bar">
        <rect width="20%" height="30" y="0" x="20%"></rect>
      </g>
      <g class="bar">
        <rect width="20%" height="60" y="0" x="40%"></rect>
      </g>
      <g class="bar">
        <rect width="20%" height="34" y="0" x="60%"></rect>
      </g>
      <g class="bar">
        <rect width="20%" height="90" y="0" x="80%"></rect>
      </g> */}
    </svg>
  );
};

export default BarCreator;
