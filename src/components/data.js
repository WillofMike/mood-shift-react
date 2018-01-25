import React from 'react';
import styled from 'styled-components';
import data from '../pages/data'

class DataDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      enteredMood: false,
    };
  }

  setMoodState = () => this.setState({ enteredMood: true });

  render() {
    // if (!enteredMood) {
    //   return <ChooseMood setMoodState={this.setMoodState} />
    // }
    return (
      <div>
        <button onClick={this.props.logout}>Logout</button>
        {/* <button onClick={this.props.logout}>Behavior Journal</button> */}
      <br/>

      </div>
    );
  }
}

export default DataDashboard;
