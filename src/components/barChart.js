import React from 'react'
import c3 from 'c3'
import axios from 'axios'
import {
  moods,
  getWeekDays,
  createMoodColumns
} from '../utility/transforms'


class BarChart extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  componentDidMount() {
    axios.get(`https://mood-shift-api.herokuapp.com/day/user/${this.props.userId}`)
      .then((res) => {
        // real data
        const data = res.data.slice(0,7).reverse()
        this.renderBarChart(data)
      })
  }

  renderBarChart = (data) => {
    c3.generate({
      bindto: '#chart',
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
      <div id="chart"></div>
    )
  }
}



export default BarChart;
