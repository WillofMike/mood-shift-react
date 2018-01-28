import React from 'react';
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import styled from 'styled-components';
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios'
import PieChart from '../components/pieChart'

const _Single = (props) =>
<div>
  <Header logout={props.logout} />
    <h1>Mood Shift</h1>
    <h3>This is how you felt that day...</h3>
    <PieChart day={props.day}/>
  <Footer />
</div>

class Single extends React.Component{
  constructor(){
    super()
    this.state = {
      day: null
    }
  }

  componentDidMount(){
    axios.get(`https://mood-shift-api.herokuapp.com/day/${this.props.match.params.id}`)
      .then((res) => {
        const day = res.data[0]
        this.setState({ day });
      })
  }

  render(){
    if (!this.state.day) return null
    return <_Single userId={this.props.token.userId} day={this.state.day} />
  }
}

export default Single;
