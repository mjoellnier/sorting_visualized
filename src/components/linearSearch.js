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
      <div>
        <h2>Linear Search</h2>
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
          <p>
            <b>Pros:</b>
            <ul>
              <li>Very easy to implement</li>
              <li>No sorting is necessary prior searching </li>
            </ul>
          </p>
          <p>
            <b>Cons:</b>
            <ul>
              <li>Bad time complexity O(n)</li>
            </ul>
          </p>
        </div>
      </div>
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
