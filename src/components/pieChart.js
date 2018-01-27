import React from 'react'
import c3 from 'c3'

class PieChart extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.renderChart(this.props.data)
  }

  renderChart = () => {
    c3.generate({
        data: {
            columns: [
                ['happy', 1],
                ['mad', 0],
                ['sad', 0],
                ['anxious', 2],
                ['neutral', 0],
            ],
            type : 'donut'
        },
        donut: {
            title: "Ur Mom"
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
