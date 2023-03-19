import React, { Component } from "react";
import ReactDOM from "react-dom";
import css from "../src/Counter.module.css";
import Controls from "./Controls";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = (event) => {
    console.log("Click +");
    //   const target = event.target
    // setTimeout(() => {
    //   console.log(event.target);
    // }, 1000);

    this.setState((currentValue) => {
      return {
        value: currentValue.value + 1,
      };
    });
    console.log(this.state.value);
  };

  handleDicrement = (event) => {
    console.log("Click -");
    //   console.log(event.target);
    //   console.log(this.state.value);
    this.setState((currentValue) => {
      return {
        value: currentValue.value - 1,
      };
    });
  };

  render() {
    const { step } = this.props;

    return (
      <div className={css.counterContainer}>
        <span className={css.counter}>{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDicrement={this.handleDicrement}
        />
        {/* <div>
          <button
            className={css.increment}
            type="button"
            onClick={this.handleIncrement}
          >
            Increment by {step}
          </button>
          <button
            className={css.dicrement}
            type="button"
            onClick={this.handleDicrement}
          >
            Decrement by {step}
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
