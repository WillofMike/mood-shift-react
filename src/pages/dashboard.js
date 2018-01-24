import React from 'react';
import styled from 'styled-components';
import ChooseMood from '../components/chooseMood'
import { whatTimeOfDay } from '../util';

class Dashboard extends React.Component {
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
      <div>
        <button onClick={this.props.logout}>Logout</button>
        <button onClick={this.props.logout}>Behavior Journal</button>
        <button onClick={this.props.logout}>Graphs</button>
      <br/>

      </div>
    );
  }
}

export default Dashboard;
