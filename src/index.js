import React, { Component } from "react";
import './App.js';
import './index.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: "0",
      currentInput: "",
      operator: null,
      prevInput: "",
    };
  }

  handleDigitClick = (digit) => {
    const { display, currentInput } = this.state;
    if (display === "0") {
      this.setState({ display: digit, currentInput: digit.toString() });
    } else {
      this.setState({
        display: currentInput + digit,
        currentInput: currentInput + digit,
      });
    }
  };

  handleOperatorClick = (newOperator) => {
    const { currentInput, operator } = this.state;
    if (operator === null) {
      this.setState({ operator: newOperator,
                      prevInput: currentInput,
                      currentInput: "",
                    });
    }
  };

  handleEqualsClick = () => {
    const { display, prevInput, currentInput, operator } = this.state;
    if (operator) {
      let result;
      switch (operator) {
        case "+":
          result = parseFloat(prevInput) + parseFloat(currentInput);
          break;
        case "-":
          result = parseFloat(prevInput) - parseFloat(currentInput);
          break;
        case "*":
          result = parseFloat(prevInput) * parseFloat(currentInput);
          break;
        case "/":
          result = parseFloat(prevInput) / parseFloat(currentInput);
          break;
        default:
          return;
      }
      this.setState({ display: result, prevInput: result, currentInput: "" });
    }
    console.log(display, currentInput, prevInput);
  };

  handleClearClick = () => {
    this.setState({
      display: "0",
      currentInput: "",
      operator: null,
      prevInput: "",
    });
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <button onClick={() => this.handleDigitClick(7)}>7</button>
          <button onClick={() => this.handleDigitClick(8)}>8</button>
          <button onClick={() => this.handleDigitClick(9)}>9</button>
          <button onClick={() => this.handleOperatorClick("+")}>+</button>
          <button onClick={() => this.handleDigitClick(4)}>4</button>
          <button onClick={() => this.handleDigitClick(5)}>5</button>
          <button onClick={() => this.handleDigitClick(6)}>6</button>
          <button onClick={() => this.handleOperatorClick("-")}>-</button>
          <button onClick={() => this.handleDigitClick(1)}>1</button>
          <button onClick={() => this.handleDigitClick(2)}>2</button>
          <button onClick={() => this.handleDigitClick(3)}>3</button>
          <button onClick={() => this.handleOperatorClick("*")}>*</button>
          <button onClick={() => this.handleDigitClick(0)}>0</button>
          <button onClick={this.handleClearClick}>C</button>
          <button onClick={this.handleEqualsClick}>=</button>
          <button onClick={() => this.handleOperatorClick("/")}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
