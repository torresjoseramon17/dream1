import React from 'react';
import DayPicker from 'react-day-picker';


export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }
  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }
  render() {
    return (
      <div>
      <center><h1 className="calendar">Pick Your Special Day!</h1>
        <DayPicker className="cal"
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
        />
        <p className="cal">
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : 'Please select a day '}
        </p>
        </center>
      </div>
    );
  }
}
