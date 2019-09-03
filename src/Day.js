import React from "react";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.day);
    return (
      <div>
        {/* <h1>{this.props.day.toUpperCase()}</h1> */}
        <p>{this.props.day[0]}</p>
      </div>
    );
  }
}

export default Day;
