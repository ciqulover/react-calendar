import React from 'react'

export default class CalendarFooter extends React.Component {

  handlePick() {
    this.props.datePickerToggle()
    this.props.picked()
  }

  render() {
    return (
      <div className="calendarFooter">
        <button onClick={::this.handlePick}>
          确定
        </button>
      </div>
    )
  }
}