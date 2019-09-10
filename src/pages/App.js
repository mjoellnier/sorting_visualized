import React from "react";
import BarCreator from "../components/chartCreator";
import "../style/App.css";

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
let amount = 800;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <BarChart numbers={generateRandomNumbers(100)} /> */}
        <BarCreator numbers={generateRandomNumbers(amount)} amount={amount} />
      </div>
    );
  }
}

export default App;
