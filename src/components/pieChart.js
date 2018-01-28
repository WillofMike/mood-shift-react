import React from 'react'
import c3 from 'c3'
import { getMoodCounts } from '../utility/transforms'

class PieChart extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.renderChart()
  }

  renderChart = () => {
    c3.generate({
        data: {
            columns: getMoodCounts(this.props.day),
            type : 'donut'
        },
        donut: {
            title: "Your Mood"
        }
    });
  }

  render(){
    return(
      <div id="chart"></div>
    )
  }
}

export default PieChart;
