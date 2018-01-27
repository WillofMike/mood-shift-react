import React from 'react';
import styled from 'styled-components';
import data from './components/data'


class DataDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      enteredMood: false,
    };
  }

  setMoodState = () => this.setState({ enteredMood: true });

  render() {
    if (!enteredMood) {
      return <ChooseMood setMoodState={this.setMoodState} />
    }
    return (
      <Data

      />
    );
  }
}

export default DataDashboard;
