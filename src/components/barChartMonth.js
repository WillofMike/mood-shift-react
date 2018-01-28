import React from 'react'
import c3 from 'c3'
import axios from 'axios'
import {
  moods,
  getWeekDays,
  createMoodColumns
} from '../utility/monthTransform'


class BarChartMonth extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  componentDidMount() {
    axios.get(`https://mood-shift-api.herokuapp.com/day/user/${this.props.userId}`)
      .then((res) => {
        // real data
        this.renderBarChartMonth(res.data)
      })
  }

  renderBarChartMonth = (data) => {
    c3.generate({
      bindto: '#chartMonth',
      data: {
        columns: createMoodColumns(data),
        type: 'bar',
        groups: [moods]
      },
      axis: {
        x: {
          type: 'category',
          categories: getWeekDays(data)
        }
      }
    });
  }

  render(){
    return(
      <div id="chartMonth"></div>
    )
  }
}



export default BarChartMonth;
