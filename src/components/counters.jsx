import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 5 },
      { id: 3, value: 5 },
      { id: 4, value: 5 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("Event handler Called", counterId);
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          >
            {" "}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
