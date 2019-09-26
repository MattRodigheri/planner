import React from "react";
import ReactDOM from "react-dom";
import Task from "./Task.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.confirmAddition = this.confirmAddition.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTask: event.target.value
    });
  }

  confirmAddition(event) {
    this.props.add(this.state.newTask);

    const node = ReactDOM.findDOMNode(this);
    node.querySelector(".input").value = "";

    this.setState({
      newTask: ""
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
      <div className="day">
        <h1>{this.props.dayName}</h1>
        {tasks}
        <input
          type="text"
          className="input"
          onChange={event => this.handleChange(event)}
          onKeyDown={event => {
            if (event.key === "Enter") {
              this.confirmAddition();
            }
          }}
        />
        <button className="buttons" onClick={this.confirmAddition}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    );
  }
}

export default Day;
