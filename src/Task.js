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
      </div>
    );
  }
}

export default Task;
