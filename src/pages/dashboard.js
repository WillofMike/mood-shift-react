import React from 'react';
import styled from 'styled-components';
import ChooseMood from '../components/chooseMood'
// import { whatTimeOfDay } from '../utility/util';
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      enteredMood: false,
      selectedEmotion: '',
      comment: ''
    };
  }

  setSelectedEmotion = (value) => {
    console.log('whats the value', value);
    this.setState({ selectedEmotion: value })
  }

  setComment = (evt) => this.setState({ comment: evt.target.value})

  submitMood = () => {
    const valid = this.state.selectedEmotion.length > 1
    console.log("is state valid", valid);
    if (valid){
      // hit db, flip neutral to 'happy' or whatever they chose

      // hit db from frontend with axios to make PUT request to update Day
      // also make POST request to create Comment

      this.setState({ enteredMood: true });
    }
  }

  render() {
    if (!this.state.enteredMood) {
      return (
        <ChooseMood
          submitMood={this.submitMood}
          setComment={this.setComment}
          setSelectedEmotion={this.setSelectedEmotion}
        />
      )
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
