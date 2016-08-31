# React-Calendar：一个基于React.js的日历组件

[Demo Site](http://ycwalker.com/react-calendar/)

![demo](https://github.com/ycwalker/react-calendar/raw/master/demo.gif)

### 使用方法
* 将public目录下的build.js引入html文件(body元素末尾)
* 在html里引入如下div

```
<div class="calendarContainer" id="calendarContainer"></div>
```

此元素会成为日历组件的容器

### 获取已选取日期的方法:

```
var state = window.calendar.state
```

### 结果

```
console.log(state)
```

```
{
      year: 2016,
      month: 7,
      day: 24,
      picked: true
}
```

### 说明
* 返回结果中picked属性如果为false，表明日期未被选择
* month的值从0开始，0代表1月

