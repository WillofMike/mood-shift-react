import React from 'react';
import styled from 'styled-components';
import ChooseMood from '../components/chooseMood'
import axios from 'axios';

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

    const data = {
      mood: this.state.enteredMood,
      emotion: this.state.selectedEmotion,
      comments: this.state.comment
    }
    if (valid){
      axios.put('https://mood-shift-api.herokuapp.com/days', data)
        .catch((error) => console.log('Error', error)
      )

        // axios.post('https://mood-shift-api.herokuapp.com/days', data)
        //   .catch(())

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
