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
          <input
            type="checkbox"
            name="sunday"
            onChange={event => this.handleChange(event)}
          />
          Sunday
          <input
            type="checkbox"
            name="monday"
            onChange={event => this.handleChange(event)}
          />
          Monday
          <input
            type="checkbox"
            name="tuesday"
            onChange={event => this.handleChange(event)}
          />
          Tuesday
          <input
            type="checkbox"
            name="wednesday"
            onChange={event => this.handleChange(event)}
          />
          Wednesday
          <input
            type="checkbox"
            name="thursday"
            onChange={event => this.handleChange(event)}
          />
          Thursday
          <input
            type="checkbox"
            name="friday"
            onChange={event => this.handleChange(event)}
          />
          Friday
          <input
            type="checkbox"
            name="saturday"
            onChange={event => this.handleChange(event)}
          />
          Saturday
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
