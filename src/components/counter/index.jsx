import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {

    
  state = {
    count: 0,
    step: parseInt(this.props.step),
  };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + this.state.step,
    }));
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({
        count: prevState.count - this.state.step,
      }));
    }
  };

  render() {
    return (
      <div className="counter">
        <div className={`value ${this.state.step}`}>{this.state.count}</div>
        <button onClick={this.decrement} className="decrement">
          -
        </button>
        <button onClick={this.increment} className="increment">
          +
        </button>
      </div>
    );
  }
}
