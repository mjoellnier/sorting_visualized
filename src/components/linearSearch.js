import React, { useState, useEffect } from "react";
import BarCreator from "../components/chartCreator";
import { generateRandomNumbers } from "../helper/randomNumber";

let amount = 100;

const LinearSearch = props => {
  const doLinearSearch = (startIndex, target, backup) => {
    setTimeout(() => {
      if (numbers[startIndex].value === target) {
        setNumbers({
          ...backup,
          [startIndex]: {
            value: numbers[startIndex].value,
            selected: true,
            found: true
          }
        });
        return;
      } else {
        setNumbers({
          ...backup,
          [startIndex]: {
            value: numbers[startIndex].value,
            selected: true,
            found: false
          }
        });
        doLinearSearch(startIndex + 1, target, backup);
      }
    }, 100);
  };
  const [numbers, setNumbers] = useState({});

  useEffect(() => {
    generateRandomNumbers(amount).then(numbers => setNumbers(numbers));
  }, []);

  return (
    <div className="App">
      <BarCreator amount={amount} numbers={numbers} />
      <input
        value="Find the number 4"
        type="button"
        onClick={() => doLinearSearch(0, 4, numbers)}
      />
      <input
        value="Shuffle Numbers!"
        type="button"
        onClick={() =>
          generateRandomNumbers(amount).then(numbers => setNumbers(numbers))
        }
      />
    </div>
  );
};

export default LinearSearch;
