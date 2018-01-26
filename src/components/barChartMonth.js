import React from 'react'
import c3 from 'c3'
import axios from 'axios'
import {
  moods,
  getWeekDays,
  createMoodColumns
} from '../utility/transforms'

const FakeDataMonth = [{
  date: '01-02-2018',
  morningMood: 'mad',
  afternoonMood: 'mad',
  nightMood: 'sad',
},
{
  date: '01-03-2018',
  morningMood: 'neutral',
  afternoonMood: 'happy',
  nightMood: 'sad',
},
{
  date: '01-04-2018',
  morningMood: 'sad',
  afternoonMood: 'happy',
  nightMood: 'happy',
},
{
  date: '01-05-2018',
  morningMood: 'neutral',
  afternoonMood: 'neutral',
  nightMood: 'happy',
},
{
  date: '01-06-2018',
  morningMood: 'neutral',
  afternoonMood: 'sad',
  nightMood: 'sad',
},
{
  date: '01-07-2018',
  morningMood: 'anxious',
  afternoonMood: 'happy',
  nightMood: 'happy',
},
{
  date: '01-08-2018',
  morningMood: 'happy',
  afternoonMood: 'happy',
  nightMood: 'happy',
},
{
  date: '01-09-2018',
  morningMood: 'happy',
  afternoonMood: 'anxious',
  nightMood: 'anxious',
},
{
  date: '01-10-2018',
  morningMood: 'happy',
  afternoonMood: 'sad',
  nightMood: 'happy',
},
{
  date: '01-11-2018',
  morningMood: 'happy',
  afternoonMood: 'happy',
  nightMood: 'mad',
},
{
  date: '01-12-2018',
  morningMood: 'mad',
  afternoonMood: 'happy',
  nightMood: 'happy',
},
{
  date: '01-13-2018',
  morningMood: 'anxious',
  afternoonMood: 'anxious',
  nightMood: 'happy',
},
{
  date: '01-14-2018',
  morningMood: 'happy',
  afternoonMood: 'happy',
  nightMood: 'mad',
},
{
  date: '01-15-2018',
  morningMood: 'sad',
  afternoonMood: 'happy',
  nightMood: 'happy',
},
{
  date: '01-16-2018',
  morningMood: 'anxious',
  afternoonMood: 'happy',
  nightMood: 'anxious',
},
{
  date: '01-17-2018',
  morningMood: 'mad',
  afternoonMood: 'happy',
  nightMood: 'sad',
},
{
  date: '01-18-2018',
  morningMood: 'sad',
  afternoonMood: 'happy',
  nightMood: 'happy',
},
{
  date: '01-19-2018',
  morningMood: 'anxious',
  afternoonMood: 'happy',
  nightMood: 'happy',
},
{
  date: '01-20-2018',
  morningMood: 'happy',
  afternoonMood: 'happy',
  nightMood: 'happy',
},
{
  date: '01-21-2018',
  morningMood: 'happy',
  afternoonMood: 'anxious',
  nightMood: 'anxious',
},
{
  date: '01-22-2018',
  morningMood: 'anxious',
  afternoonMood: 'sad',
  nightMood: 'anxious',
},
{
  date: '01-23-2018',
  morningMood: 'angry',
  afternoonMood: 'anxious',
  nightMood: 'anxious',
},
{
  date: '01-24-2018',
  morningMood: 'sad',
  afternoonMood: 'sad',
  nightMood: 'happy',
},
{
  date: '01-25-2018',
  morningMood: 'anxious',
  afternoonMood: 'happy',
  nightMood: 'anxious',
},
{
  date: '01-26-2018',
  morningMood: 'anxious',
  afternoonMood: 'happy',
  nightMood: 'anxious',
},
{
  date: '01-26-2018',
  morningMood: 'anxious',
  afternoonMood: 'anxious',
  nightMood: 'anxious',
},
{
  date: '01-27-2018',
  morningMood: 'anxious',
  afternoonMood: 'sad',
  nightMood: 'sad',
},
{
  date: '01-28-2018',
  morningMood: 'anxious',
  afternoonMood: 'anxious',
  nightMood: 'anxious',
},
{
  date: '01-29-2018',
  morningMood: 'angry',
  afternoonMood: 'happy',
  nightMood: 'sad',
},
{
  date: '01-30-2018',
  morningMood: 'anxious',
  afternoonMood: 'happy',
  nightMood: 'anxious',
}]


class BarChartMonth extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  componentDidMount() {
    axios.get("https://mood-shift-api.herokuapp.com/day")
      .then((res) => {
        // real data
        // this.renderBarChartMonth(res.data)
        this.renderBarChartMonth(FakeDataMonth)
      })
  }

  renderBarChartMonth = (FakeDataMonth) => {
    c3.generate({
      bindto: '#chartMonth',
      data: {
        columns: createMoodColumns(FakeDataMonth),
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
          categories: getWeekDays(FakeDataMonth)
        }
      }
    });
  }

  render(){
    console.log(this.state.apiData);
    return(
      <div id="chartMonth"></div>
    )
  }
}



export default BarChartMonth;
