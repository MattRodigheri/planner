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
      sunday: ["a", "b", "c"],
      monday: ["a", "b", "c"],
      tuesday: ["a", "b", "c"],
      wednesday: ["a", "b", "c"],
      thursday: ["a", "b", "c"],
      friday: ["a", "b", "c"],
      saturday: ["a", "b", "c"]
    };

    this.selectDay = this.selectDay.bind(this);
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.confirmEdit = this.confirmEdit.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line
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
    // eslint-disable-next-line
    for (const day in this.state) {
      if (dayClicked === day) {
        this.setState({
          selectedDay: this.state[day]
        });
      }
    }
  }

  add(newTask, event) {
    this.setState({
      selectedDay: [...this.state.selectedDay, newTask]
    });

    event.target.previousSibling.value = "";
  }

  delete(event) {
    const array = this.state.selectedDay;
    const index = array.indexOf(event.target.previousSibling.textContent);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ selectedDay: array });
    }
  }

  edit(event) {
    const array = this.state.selectedDay;
    const index = array.indexOf(
      event.target.previousSibling.previousSibling.textContent
    );
    this.setState({
      editIndex: index,
      editValue: event.target.previousSibling.previousSibling.textContent
    });
  }

  confirmEdit(event) {
    const array = this.state.selectedDay;
    const index = array.indexOf(this.state.editValue);
    array.splice(index, 1, event.target.previousSibling.value);
    this.setState({
      selectedDay: array,
      editIndex: -1
    });
  }

  render() {
    return (
      <div>
        <Header selectDay={this.selectDay} />
        <h1>
          {moment()
            .format("dddd")
            .toUpperCase()}
        </h1>
        <Day
          day={this.state.selectedDay}
          add={this.add}
          delete={this.delete}
          edit={this.edit}
          editIndex={this.state.editIndex}
          editValue={this.state.editValue}
          confirmEdit={this.confirmEdit}
        />
      </div>
    );
  }
}

export default App;
