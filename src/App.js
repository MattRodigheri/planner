import React from "react";
import moment from "moment";
import "./App.css";
import Header from "./Header.js";
import Day from "./Day.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dayName: moment().format("dddd"),
      selectedDay: "",
      sunday: ["a", "b", "c"],
      monday: ["d", "e", "f"],
      tuesday: ["h", "i", "j"],
      wednesday: ["k", "l", "m"],
      thursday: ["n", "o", "p"],
      friday: ["q", "r", "s"],
      saturday: ["t", "u", "v"]
    };

    this.selectDay = this.selectDay.bind(this);
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.confirmEdit = this.confirmEdit.bind(this);
    this.addToDays = this.addToDays.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line
    for (const day in this.state) {
      if (
        moment()
          .format("dddd")
          .toLowerCase() === day
      ) {
        this.setState({
          selectedDay: this.state[day]
        });
      }
    }
  }

  selectDay(dayClicked) {
    const dayTitle = dayClicked.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    // eslint-disable-next-line
    for (const day in this.state) {
      if (dayClicked === day) {
        this.setState({
          selectedDay: this.state[day],
          dayName: dayTitle
        });
      }
    }
  }

  add(newTask, event) {
    this.setState({
      selectedDay: [...this.state.selectedDay, newTask]
    });
  }

  delete(task) {
    const array = this.state.selectedDay;
    const index = array.indexOf(task);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ selectedDay: array });
    }
  }

  edit(task) {
    const array = this.state.selectedDay;
    const index = array.indexOf(task);
    this.setState({
      editIndex: index,
      editValue: task
    });
  }

  confirmEdit(event) {
    const array = this.state.selectedDay;
    const index = array.indexOf(this.state.editValue);
    array.splice(index, 1, event);
    this.setState({
      selectedDay: array,
      editIndex: -1
    });
  }

  addToDays(task, days) {
    // eslint-disable-next-line
    for (const dayToAddTo in this.state) {
      if (days.includes(dayToAddTo)) {
        const arr = this.state[dayToAddTo];
        arr.push(task);
        this.setState({
          [dayToAddTo]: arr
        });
      }
    }
  }

  render() {
    return (
      <div>
        <Header selectDay={this.selectDay} />

        <Day
          dayName={this.state.dayName}
          day={this.state.selectedDay}
          add={this.add}
          delete={this.delete}
          edit={this.edit}
          editIndex={this.state.editIndex}
          editValue={this.state.editValue}
          confirmEdit={this.confirmEdit}
          addToDays={this.addToDays}
        />
      </div>
    );
  }
}

export default App;
