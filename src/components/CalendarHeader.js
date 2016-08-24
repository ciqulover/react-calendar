import React from 'react'

export default class CalendarHeader extends React.Component {
  render() {
    return (
      <div className="calendarHeader">
        <span className="prev">
          <i className="fa fa-angle-double-left"
             onClick={this.props.prevMonth}>
          </i>
        </span>
        <span className="next">
          <i className="fa fa-angle-double-right"
             onClick={this.props.nextMonth}>
          </i>
        </span>
        <span className="dateInfo">
          {this.props.year}年{this.props.month + 1}月
        </span>

      </div>
    )
  }
}