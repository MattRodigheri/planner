import React from "react";

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
          Delete
        </button>
        <button onClick={this.props.edit}>Edit</button>
        {editInput}
      </div>
    );
  }
}

export default Task;
