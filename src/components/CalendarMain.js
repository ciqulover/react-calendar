import React from 'react'

export default class CalendarMain extends React.Component {

  handleDatePick(index, styleName) {
    switch (styleName) {
      case 'thisMonth':
        let month = this.props.viewData[this.props.month]
        this.props.datePick(month[index])
        break
      case 'prevMonth':
        this.props.prevMonth()
        break
      case 'nextMonth':
        this.props.nextMonth()
        break
    }
  }

  changeColor() {
    let previousEl = null
    return function (event) {
      let name = event.target.nodeName.toLocaleLowerCase()
      if (previousEl && (name === 'i' || name === 'td')) {
        previousEl.style = ''
      }
      if (event.target.className === 'thisMonth') {
        event.target.style = 'background:#F8F8F8;color:#000'
        previousEl = event.target
      }
    }
  }

  componentDidMount() {
    let changeColor = this.changeColor()
    document.getElementById('calendarContainer')
      .addEventListener('click', changeColor, false);

  }

  render() {
    let month = this.props.viewData[this.props.month],
      rowsInMonth = [],
      i = 0,
      styleOfDays = (()=> {
        let i = month.indexOf(1),
          j = month.indexOf(1, i + 1),
          arr = new Array(42)
        arr.fill('prevMonth', 0, i)
        arr.fill('thisMonth', i, j)
        arr.fill('nextMonth', j)
        return arr
      })()
    month.forEach((day, index)=> {
      if (index % 7 === 0) {
        rowsInMonth.push(month.slice(index, index + 7))
      }
    })

    return (
      <table className="calendarMain">
        <thead>
        <tr>
          <th>日</th>
          <th>一</th>
          <th>二</th>
          <th>三</th>
          <th>四</th>
          <th>五</th>
          <th>六</th>
        </tr>
        </thead>
        <tbody>
        {
          rowsInMonth.map((row, rowIndex)=> {
            return (
              <tr key={rowIndex}>
                {
                  row.map((day)=> {
                    return (
                      <td className={styleOfDays[i]}
                          onClick={
                            this.handleDatePick.bind
                            (this, i, styleOfDays[i])}
                          key={i++}>
                        {day}
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )
  }
}

