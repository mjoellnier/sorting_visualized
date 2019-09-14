import RNI from "@deberoppa/react-numeric-input";
import React, { useEffect, useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import BarCreator from "../components/chartCreator";
import { generateRandomNumbers } from "../helper/randomNumber";

const LinearSearch = props => {
  const [numbers, setNumbers] = useState({});
  const [targetNumber, setTargetNumber] = useState(1);
  const [numberRange, setNumberRange] = useState(100);
  const [sliderValue, setSliderValue] = useState(100);

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

  useEffect(() => {
    generateRandomNumbers(numberRange).then(numbers => setNumbers(numbers));
  }, [numberRange]);

  return (
    <div className="App" id="linearSearch">
      <BarCreator
        amount={numberRange}
        numbers={numbers}
        fillNonSelected="#303d6c"
        fillSelected="#625b1a"
        fillFound="#4d8621"
      />
      <div>
        <h2>Linear Search</h2>
        <div className="controls">
          <div>
            <div>
              <p>Number Pool:</p>
              <InputRange
                maxValue={250}
                minValue={2}
                value={sliderValue}
                onChange={value => setSliderValue(value)}
                onChangeComplete={value => setNumberRange(value)}
              />
            </div>
          </div>
          <div>
            <div>
              <RNI
                className="rangeInput"
                min={1}
                max={numberRange}
                value={targetNumber}
                onChange={value => setTargetNumber(value)}
              />
            </div>
          </div>
          <div>
            <input
              value={"Find the number " + targetNumber}
              type="button"
              onClick={() => doLinearSearch(1, targetNumber, numbers)}
            />
          </div>
          <div>
            <input
              value="Shuffle Numbers!"
              type="button"
              onClick={() =>
                generateRandomNumbers(numberRange).then(numbers =>
                  setNumbers(numbers)
                )
              }
            />
          </div>
        </div>
        <div className="text">
          <p>
            Linear Search is one of the slowest if not the slowest search
            algorithm. Each item in an unsorted array is passed sequentally and
            checked against the target value. The time complexity of the
            algorithm is therefore O(n). Linear search is rarely used
            practically because other search algorithms such as the binary
            search algorithm and hash tables allow significantly faster
            searching comparison to Linear search.
          </p>
          <b>Pros:</b>
          <ul>
            <li>Very easy to implement</li>
            <li>No sorting is necessary prior searching </li>
          </ul>
          <b>Cons:</b>
          <ul>
            <li>Bad time complexity O(n)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinearSearch;
