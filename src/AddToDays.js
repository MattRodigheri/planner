import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";

class AddToDays extends React.Component {
  constructor() {
    super();

    this.state = {
      daysAdded: []
    };

    this.showDayOptions = this.showDayOptions.bind(this);
    this.confirmDaysAdded = this.confirmDaysAdded.bind(this);
  }

  showDayOptions() {
    this.setState({
      selectDaysToAdd: true
    });
  }

  handleChange(event) {
    const daysAdded = this.state.daysAdded;

    if (event.target.checked) {
      daysAdded.push(event.target.name);
    } else {
      daysAdded.splice(daysAdded.indexOf(event.target.name), 1);
    }

    this.setState({
      [this.props.task]: daysAdded
    });
  }

  confirmDaysAdded() {
    this.props.addToDays(this.props.task, this.state.daysAdded);
    this.setState({
      selectDaysToAdd: false
    });
  }

  render() {
    let dayOptions;
    if (this.state.selectDaysToAdd) {
      dayOptions = (
        <div>
          <div className="dayOption">
            <input
              type="checkbox"
              name="sunday"
              onChange={event => this.handleChange(event)}
            />
            <span className="dayLabel">Sunday</span>
          </div>
          <div className="dayOption">
            <input
              type="checkbox"
              name="monday"
              onChange={event => this.handleChange(event)}
            />
            <span className="dayLabel">Monday</span>
          </div>
          <div className="dayOption">
            <input
              type="checkbox"
              name="tuesday"
              onChange={event => this.handleChange(event)}
            />
            <span className="dayLabel">Tuesday</span>
          </div>
          <div className="dayOption">
            <input
              type="checkbox"
              name="wednesday"
              onChange={event => this.handleChange(event)}
            />
            <span className="dayLabel">Wednesday</span>
          </div>
          <div className="dayOption">
            <input
              type="checkbox"
              name="thursday"
              onChange={event => this.handleChange(event)}
            />
            <span className="dayLabel">Thursday</span>
          </div>
          <div className="dayOption">
            <input
              type="checkbox"
              name="friday"
              onChange={event => this.handleChange(event)}
            />
            <span className="dayLabel">Friday</span>
          </div>
          <div className="dayOption">
            <input
              type="checkbox"
              name="saturday"
              onChange={event => this.handleChange(event)}
            />
            <span className="dayLabel">Saturday</span>
          </div>
          <button className="buttons" onClick={this.confirmDaysAdded}>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </button>
        </div>
      );
    }
    return (
      <span>
        <button className="buttons" onClick={this.showDayOptions}>
          <FontAwesomeIcon icon={faCalendarPlus} />
        </button>
        {dayOptions}
      </span>
    );
  }
}

export default AddToDays;
