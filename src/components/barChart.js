import React from 'react'
import c3 from 'c3'
import axios from 'axios'
import {
  moods,
  getWeekDays,
  createMoodColumns
} from '../utility/transforms'

const FakeData = [{
  date: '02-02-2018',
  morningMood: 'mad',
  afternoonMood: 'mad',
  nightMood: 'mad',
},
{
  date: '02-03-2018',
  morningMood: 'mad',
  afternoonMood: 'mad',
  nightMood: 'mad',
},
{
  date: '02-04-2018',
  morningMood: 'sad',
  afternoonMood: 'sad',
  nightMood: 'sad',
},
{
  date: '02-05-2018',
  morningMood: 'neutral',
  afternoonMood: 'neutral',
  nightMood: 'neutral',
},
{
  date: '02-06-2018',
  morningMood: 'neutral',
  afternoonMood: 'neutral',
  nightMood: 'neutral',
},
{
  date: '02-07-2018',
  morningMood: 'happy',
  afternoonMood: 'happy',
  nightMood: 'happy',
},
{
  date: '02-08-2018',
  morningMood: 'happy',
  afternoonMood: 'happy',
  nightMood: 'happy',
}]


class BarChart extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  componentDidMount() {
    axios.get("https://mood-shift-api.herokuapp.com/day")
      .then((res) => {
        // real data
        // this.renderBarChart(res.data)
        this.renderBarChart(FakeData)
      })
  }

  renderBarChart = (FakeData) => {
    c3.generate({
      bindto: '#chart',
      data: {
        columns: createMoodColumns(FakeData),
        // columns: [
        //     ['happy',   3, 1, 0, 0, 0, 2],
        //     ['sad',     0, 0, 0, 2, 0, 0],
        //     ['mad',     0, 0, 0, 0, 2, 0],
        //     ['anxious', 0, 2, 0, 1, 1, 0],
        //     ['neutral', 0, 0, 3, 0, 0, 1],
        // ],
        type: 'bar',
        groups: [moods]
      },
      axis: {
        x: {
          type: 'category',
          categories: getWeekDays(FakeData)
        }
      }
    });
  }

  render(){
    console.log(this.state.apiData);
    return(
      <div id="chart"></div>
    )
  }
}



export default BarChart;
