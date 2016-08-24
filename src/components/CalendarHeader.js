import React from 'react'

export default class CalendarHeader extends React.Component {
  render() {
    return (
      <div className="calendarHeader">
        <span className="prev"
              onClick={this.props.prevMonth}>
          《
        </span>
        <span className="next"
              onClick={this.props.nextMonth}>
          》
        </span>
        <span className="dateInfo">
          {this.props.year}年{this.props.month + 1}月
        </span>
      </div>
    )
  }
}