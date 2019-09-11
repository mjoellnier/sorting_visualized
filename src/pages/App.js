import React from "reactn";
import BarCreator from "../components/chartCreator";
import "../style/App.css";
import { LinearSearch } from "../components/linearSearch";

let amount = 100;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.generateRandomNumbers(amount);
    // setInterval(() => {
    //   this.setState({ selected: this.state.selected + 1 });
    // }, 500);
  }

  doLinearSearch = (startIndex, target, backup) => {
    setTimeout(() => {
      if (this.global.numbers[startIndex].value == target) {
        this.setGlobal({
          numbers: {
            ...backup,
            [startIndex]: {
              value: this.global.numbers[startIndex].value,
              selected: true,
              found: true
            }
          }
        });
        return;
      } else {
        this.setGlobal({
          numbers: {
            ...backup,
            [startIndex]: {
              value: this.global.numbers[startIndex].value,
              selected: true,
              found: false
            }
          }
        });
        this.doLinearSearch(startIndex + 1, target, backup);
      }
    }, 100);
  };

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
        [key]: { value: value, selected: false, found: false }
      };
    });

    this.setGlobal({ numbers: { ...tempNumbers } });
  };

  render() {
    return (
      <div className="App">
        <BarCreator
          amount={amount}
          numbers={this.global.numbers}
          highlight={this.global.selected}
        />
        <input
          value="Find the number 4"
          type="button"
          onClick={() => this.doLinearSearch(0, 4, this.global.numbers)}
        />
        <input
          value="Shuffle Numbers!"
          type="button"
          onClick={() => this.generateRandomNumbers(amount)}
        />
      </div>
    );
  }
}

export default App;
