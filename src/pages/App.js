import React from "react";
import BarCreator from "../components/chartCreator";
import "../style/App.css";

let amount = 100;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: null,
      selected: 0
    };
  }

  componentDidMount() {
    this.generateRandomNumbers(amount);
    setInterval(() => {
      this.setState({ selected: this.state.selected + 1 });
    }, 500);
  }

  generateRandomNumbers = amount => {
    let numberArray = [...Array(amount).keys()];

    numberArray.forEach((key, value) => {
      const j = Math.floor(Math.random() * key);
      numberArray[key] = numberArray[j];
      numberArray[j] = value;
    });

    let tempNumbers = {};

    numberArray.map((key, value) => {
      tempNumbers = {
        ...tempNumbers,
        [key]: { value: value, selected: false }
      };
    });

    this.setState({ numbers: { ...tempNumbers } });
  };

  render() {
    return (
      <div className="App">
        <BarCreator
          amount={amount}
          numbers={this.state.numbers}
          highlight={this.state.selected}
        />
      </div>
    );
  }
}

export default App;
