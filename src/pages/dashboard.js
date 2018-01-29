import React from 'react';
import styled from 'styled-components';
import ChooseMood from '../components/chooseMood'
import axios from 'axios';
import Header from '../components/header'
import Footer from '../components/footer'
import BarChart from '../components/barChart'
import BarChartMonth from '../components/barChartMonth'

import { whatTimeOfDay } from '../utility/util';
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

const Title = styled.h1`
  text-align:center;
  color: #FF6300;
  font-family: 'Montserrat', sans-serif;
`
const Wrapper = styled.div`
  margin: 20px;
`

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      enteredMood: false,
      selectedEmotion: '',
      comment: '',
    };
  }

  setSelectedEmotion = (value) => {
    console.log('whats the value', value);
    this.setState({ selectedEmotion: value })
  }

  setComment = (evt) => this.setState({ comment: evt.target.value})

  submitMood = () => {
    const valid = this.state.selectedEmotion.length > 1
    const mood = whatTimeOfDay() + 'Mood';
    const data = {
      [mood]: this.state.selectedEmotion,
      //comments: this.state.comment
    }
    if (valid) {
      axios.get(`https://mood-shift-api.herokuapp.com/day/user/${this.props.userId}`)
        .then(res => {
          const mostRecentDay = res.data[0];
          axios.put(`https://mood-shift-api.herokuapp.com/day/${mostRecentDay._id}`, data)
        })
        .then(res => console.log('day was updated', res.data))
        .catch((error) => console.log('Error', error)
      )
      this.setState({ enteredMood: true });
    }
  }

  setSkip = () => this.setState({ enteredMood: true });

  render() {
    if (!this.state.enteredMood) {
      return (
        <ChooseMood
          submitMood={this.submitMood}
          setComment={this.setComment}
          setSelectedEmotion={this.setSelectedEmotion}
          skip={this.setSkip}
          logout={this.props.logout}
        />
      )
    }
    console.log('what is logout', this.props.logout)
    return (
      <Wrapper>
          <Header logout={this.props.logout}/>
        <Title>How you felt recently...</Title>
          <Title>Week to date</Title>
          <BarChart userId={this.props.userId}/>
            <Title>Month to date</Title>
          <BarChartMonth userId={this.props.userId}/>
      </Wrapper>
    );
  }
}

export default Dashboard;
