import * as React from 'react'
import * as ReactDom from 'react-dom'
import * as moment from 'moment'
import Calendar from './Calendar'

class MyCalendar extends React.Component <{}, { [index: string]: any }> {

  constructor(props) {
    super(props)
    this.state = {
      value: moment(),
      open: false
    }
  }

  onChange = (value: moment.Moment, inputValue: string) => {
    console.log(value.format('YYYY-MM-DD'))
    this.setState({value})
  }

  onOpenChange = (status?: boolean) => {
    console.log('open status: ' + status)
  }

  disabledDate = (currentDate: moment.Moment, inputValue: string) => {
    return false
  }

  render() {
    const {onChange, onOpenChange, disabledDate} = this
    const {value} = this.state
    return <div style={{
      width: 400,
      margin: '200px auto'
    }}>
      <Calendar
        onChange={onChange}
        allowClear={true}
        value={value}
        disabled={false}
        placeholder={'please input date'}
        format={'YYYY-MM-DD'}
        onOpenChange={onOpenChange}
        disabledDate={disabledDate}
      />
    </div>
  }
}


ReactDom.render(
  <MyCalendar/>,
  document.getElementById('el')
)
