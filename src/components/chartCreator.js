import React, { useState, useEffect } from "react";

const generateRandomNumbers = amount => {
  let numberArray = [...Array(amount).keys()];

  for (let i = numberArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = numberArray[i];
    numberArray[i] = numberArray[j];
    numberArray[j] = temp;
  }

  return numberArray;
};

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
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(props.numbers);
    if (props.numbers) console.log(props.numbers[10]);
  }, [props.numbers]);

  return (
    <svg
      className="chart"
      width="100%"
      height="100%"
      aria-labelledby="title desc"
      role="img"
    >
      {numbers
        ? Object.values(numbers).map((item, key) => {
            return (
              <g className="bar">
                <rect
                  width={getWidth(props.amount)}
                  height={getHeight(item.value, props.amount)}
                  fill={
                    item.selected ? (item.found ? "green" : "yellow") : "black"
                  }
                  y="0%"
                  x={getHorizontalPosition(props.amount, key) + "%"}
                >
                  <animate
                    attributeName="height"
                    from="0"
                    to={getHeight(item.value, props.amount)}
                    dur="0.5s"
                    fill="freeze"
                  />
                </rect>
              </g>
            );
          })
        : null}
    </svg>
  );
};

export default BarCreator;
