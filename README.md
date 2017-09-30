#### React-Calendar

[![npm package](https://img.shields.io/npm/v/ciqu-react-calendar.svg?style=flat)](https://www.npmjs.org/package/ciqu-react-calendar)
[![Dependency Status](https://gemnasium.com/badges/github.com/ciqulover/react-calendar.svg)](https://gemnasium.com/github.com/ciqulover/react-calendar)


### Install

```bash
npm install ciqu-react-calendar --save
```

### Example

```js

import React from 'react'
import ReactDom from 'react-dom'
import moment from 'moment'
import Calendar from 'ciqu-react-calendar'

class MyCalendar extends React.Component {

  constructor(props) {
    super(props)
  }

  onChange = (value, inputValue) => {
    console.log(value.format('YYYY-MM-DD'))
    this.setState({value})
  }

  onOpenChange = (status) => {
    console.log('open status: ' + status)
  }

  disabledDate = (currentDate, inputValue) => {
    return false
  }

  render() {
    const {onChange, onOpenChange, disabledDate} = this
    return <div style={{
      width: 400,
      margin: '200px auto'
    }}>
      <Calendar
        onChange={onChange}
        allowClear={true}
        disabled={false}
        placeholder={'please input date'}
        format={'YYYY-MM-DD'}
        defaultValue={moment()}
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

```

### API
```js
interface CalendarProps {
  // when input value changes, this callback will be called, default null
  onChange?(value?: Moment, inputValue?: string): void
  
  // fired when datepicker shows or hides, default null
  onOpenChange?(status?: boolean): void
  
  // when returned true, the target date cannot be picked, default null
  disabledDate?(currentDate: Moment, inputValue: string): boolean
  
  // allow to clear the picked date, default true
  allowClear?: boolean
  
  // if true, datepicker is disabled, default false
  disabled?: boolean
  
  // control whether datepicker shows or hides, default false
  open?: boolean,
  
  placeholder?: string
  
  // moment format string, default 'YYYY-MM-DD'
  format?: string

  className?: string
  
  // the value under control, default moment()
  value?: Moment
  
  // the default value 
  defaultValue?: Moment
}
```
### License
MIT
