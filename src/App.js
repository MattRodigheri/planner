import React from "react";
import moment from "moment";
import axios from "axios";
import "./App.css";
import Header from "./Header.js";
import Day from "./Day.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dayName: moment().format("dddd"),
      selectedDay: [],
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: []
    };

    this.selectDay = this.selectDay.bind(this);
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.confirmEdit = this.confirmEdit.bind(this);
    this.addToDays = this.addToDays.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/data")
      .then(data => data.json())
      .then(res => {
        const day = moment()
          .format("dddd")
          .toLowerCase();
        this.setState({
          // selectedDay: res.data[res.data.length - 1][day]
          selectedDay: res.data[day]
        });

        this.setState({
          // [day]: res.data[res.data.length - 1][day]
          [day]: res.data[day]
        });
      });
  }

  selectDay(dayClicked) {
    this.setState(
      {
        dayName: dayClicked,
        selectedDay: this.state[dayClicked]
      },
      () => console.log(this.state.dayName)
    );
  }

  add(newTask) {
    this.setState(
      {
        selectedDay: [...this.state.selectedDay, newTask],
        [this.state.dayName.toLowerCase()]: [...this.state.selectedDay, newTask]
      },
      () => {
        axios.post("http://localhost:3001/api/data", {
          params: {
            sunday: this.state.sunday,
            monday: this.state.monday,
            tuesday: this.state.tuesday,
            wednesday: this.state.wednesday,
            thursday: this.state.thursday,
            friday: this.state.friday,
            saturday: this.state.saturday,
            id: "5d894728738b5c797cf5ac8f"
          }
        });
      }
    );
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
      <div className="app">
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
