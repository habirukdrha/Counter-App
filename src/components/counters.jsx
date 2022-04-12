import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onIncrement, onDelete, onReset, counters } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-dark">
          Reset
        </button>
        <br />
        {counters.map((counter) => (
          <Counter
            onIncrement={onIncrement}
            onDelete={onDelete}
            onReset={onReset}
            key={counter.id}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
