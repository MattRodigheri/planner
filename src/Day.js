import React from "react";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let tasks;
    if (this.props.day) {
      tasks = this.props.day.map(task => {
        return (
          <div>
            <input type="checkbox" name="test" />
            <label for="test">{task}</label>
          </div>
        );
      });
    }
    return <div>{tasks}</div>;
  }
}

export default Day;
