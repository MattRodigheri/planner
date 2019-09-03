import React from "react";
import Task from "./Task.js";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let tasks;
    if (this.props.day) {
      tasks = this.props.day.map((task, i) => {
        return <Task key={i} task={task} />;
      });
    }
    return <div>{tasks}</div>;
  }
}

export default Day;
