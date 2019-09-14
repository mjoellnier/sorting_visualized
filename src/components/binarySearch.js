import RNI from "@deberoppa/react-numeric-input";
import React, { useEffect, useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import BarCreator from "../components/chartCreator";
import { generateSortedNumbers } from "../helper/numberGenerator";

const BinarySearch = () => {
  const [numbers, setNumbers] = useState({});
  const [targetNumber, setTargetNumber] = useState(1);
  const [numberRange, setNumberRange] = useState(100);
  const [sliderValue, setSliderValue] = useState(100);

  const doBinarySearch = (startIndex, endIndex, target, backup) => {
    setTimeout(() => {
      let middleNumber = Math.floor((startIndex + endIndex) / 2);
      if (numbers[middleNumber].value === target) {
        setNumbers({
          ...backup,
          [middleNumber]: {
            value: numbers[middleNumber].value,
            selected: true,
            found: true
          }
        });
      } else {
        setNumbers({
          ...backup,
          [middleNumber]: {
            value: numbers[middleNumber].value,
            selected: true,
            found: false
          }
        });
        if (numbers[middleNumber].value < target) {
          doBinarySearch(middleNumber + 1, endIndex, target, backup);
        } else {
          doBinarySearch(startIndex, middleNumber - 1, target, backup);
        }
      }
      return;
    }, 200);
  };

  useEffect(() => {
    generateSortedNumbers(numberRange).then(numbers => setNumbers(numbers));
  }, [numberRange]);

  return (
    <div className="App" id="binarySearch">
      <BarCreator
        amount={numberRange}
        numbers={numbers}
        fillNonSelected="#265920"
        fillSelected="#625b1a"
        fillFound="#4d8621"
        fillGrayedOut="#6a6a6a2b"
      />
      <div>
        <h2>Binary Search</h2>
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
              onClick={() =>
                doBinarySearch(1, numberRange, targetNumber, numbers)
              }
            />
          </div>
          <div>
            <input
              value="Reset!"
              type="button"
              onClick={() =>
                generateSortedNumbers(numberRange).then(numbers =>
                  setNumbers(numbers)
                )
              }
            />
          </div>
        </div>
        <div className="text">
          <p>
            Binary search adds a bit more complexity compared to the linear
            search but it pays off with a performance boost. The binary seach is
            done by searching a sorted array by repeatedly dividing the search
            interval in half. Begin with an interval covering the whole array.
            If the value of the search key is less than the item in the middle
            of the interval, the interval is lowered to the lower half.
            Otherwise it is narrowed to the upper half. Repeatedly check until
            the value is found or the interval is empty.
          </p>
          <b>Pros:</b>
          <ul>
            <li>Good complexity with O(log(n))</li>
            <li>High performance</li>
          </ul>
          <b>Cons:</b>
          <ul>
            <li>Bit more complicated to implement</li>
            <li>Searching data has to be sorted</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BinarySearch;
