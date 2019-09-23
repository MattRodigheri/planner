import React from "react";
import AddToDays from "./AddToDays.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faCheckSquare
} from "@fortawesome/free-solid-svg-icons";

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(event) {
    this.setState({
      newEntry: event.target.value
    });
  }

  handleCheck(event) {
    this.setState({
      checked: event.target.checked
    });
  }

  render() {
    let editInput;
    if (this.props.editIndex === this.props.taskIndex) {
      editInput = (
        <div>
          <input
            className="editInput"
            type="text"
            defaultValue={this.props.editValue}
            onChange={event => this.handleChange(event)}
          />

          <button
            className="buttons"
            onClick={() => this.props.confirmEdit(this.state.newEntry)}
          >
            <FontAwesomeIcon icon={faCheckSquare} />
          </button>
        </div>
      );
    }
    return (
      <div>
        <input
          type="checkbox"
          name="task"
          onChange={this.handleCheck}
          checked={this.state.checked}
        />
        <label
          htmlFor="task"
          style={{
            //TODO: fix line-through on all day's tasks at that index
            textDecoration: this.state.checked ? "line-through" : "none"
          }}
        >
          {this.props.task}
        </label>
        <button
          className="buttons"
          onClick={() => {
            this.props.delete(this.props.task);
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button
          className="buttons"
          onClick={() => this.props.edit(this.props.task)}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>

        <AddToDays addToDays={this.props.addToDays} task={this.props.task} />

        {editInput}
      </div>
    );
  }
}

export default Task;
