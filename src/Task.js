import React from "react";
import AddToDays from "./AddToDays.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      checked: event.target.checked
    });
  }

  render() {
    let editInput;
    if (this.props.editIndex === this.props.taskIndex) {
      editInput = (
        <div>
          <input type="text" defaultValue={this.props.editValue} />

          <button onClick={event => this.props.confirmEdit(event)}>
            Confirm
          </button>
        </div>
      );
    }
    return (
      <div>
        <input
          type="checkbox"
          name="task"
          onChange={this.handleChange}
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
          onClick={event => {
            this.props.delete(event);
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button onClick={() => this.props.edit(this.props.task)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        {editInput}

        <AddToDays addToDays={this.props.addToDays} task={this.props.task} />
      </div>
    );
  }
}

export default Task;
