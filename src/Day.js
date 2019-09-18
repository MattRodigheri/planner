import React from "react";
import Task from "./Task.js";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTask: event.target.value
    });
  }

  render() {
    let tasks;
    if (this.props.day) {
      tasks = this.props.day.map((task, i) => {
        return (
          <Task
            key={i}
            taskIndex={i}
            task={task}
            delete={this.props.delete}
            edit={this.props.edit}
            editIndex={this.props.editIndex}
            editValue={this.props.editValue}
            confirmEdit={this.props.confirmEdit}
            addToDays={this.props.addToDays}
          />
        );
      });
    }
    return (
      <div>
        <h1>{this.props.dayName}</h1>
        {tasks}
        <input type="text" onChange={event => this.handleChange(event)} />
        <button onClick={event => this.props.add(this.state.newTask, event)}>
          Add
        </button>
      </div>
    );
  }
}

export default Day;
