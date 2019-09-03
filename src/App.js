import React from "react";
import moment from "moment";
import "./App.css";
import Header from "./Header.js";
import Day from "./Day.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedDay: "",
      sunday: [1, 2, 3],
      monday: [2, 3, 4],
      tuesday: [3, 4, 5],
      wednesday: [4],
      thursday: [5],
      friday: [6],
      saturday: [7]
    };

    this.selectDay = this.selectDay.bind(this);
    this.add = this.add.bind(this);
    // this.delete = this.delete.bind(this);
    // this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    for (const day in this.state) {
      if (
        moment()
          .format("dddd")
          .toLowerCase() === day.toString()
      ) {
        this.setState({
          selectedDay: this.state[day]
        });
      }
    }
  }

  selectDay(dayClicked) {
    for (const day in this.state) {
      if (dayClicked === day) {
        this.setState({
          selectedDay: this.state[day]
        });
      }
    }
  }

  add(newTask, event) {
    event.target.previousSibling.value = "";

    this.setState({
      selectedDay: [...this.state.selectedDay, newTask]
    });
  }

  // delete() {}

  // edit() {}

  render() {
    return (
      <div>
        <Header selectDay={this.selectDay} />
        <h1>
          {moment()
            .format("dddd")
            .toUpperCase()}
        </h1>
        <Day day={this.state.selectedDay} add={this.add} />
      </div>
    );
  }
}

export default App;
