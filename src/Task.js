import React from "react";
import AddToDays from "./AddToDays.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faCheckSquare,
  faHotdog
} from "@fortawesome/free-solid-svg-icons";

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange(event) {
    this.setState({
      newEntry: event.target.value
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
            onKeyDown={event => {
              if (event.key === "Enter") {
                this.props.confirmEdit(this.state.newEntry);
              }
            }}
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
        <FontAwesomeIcon icon={faHotdog} />
        <label htmlFor="task">{this.props.task}</label>
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
