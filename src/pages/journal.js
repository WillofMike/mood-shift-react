import React from 'react';
import { render } from "react-dom";
import styled from 'styled-components';
import Card from '../components/card'
import Header from '../components/header'
import {Link} from 'react-router-dom'
import fakeData from '../utility/fakeData'
import axios from 'axios'


class Journal extends React.Component{
  constructor(){
    super()
    this.state = {
      days: null
    }
  }

  componentDidMount() {
    axios.get(`https://mood-shift-api.herokuapp.com/day/user/${this.props.userId}`)
      .then((res) => {
        // real data
        this.setState({ days: res.data })
      })
  }


  render(){
    return (
      <div>
        <Header logout={this.props.logout}/>
        <h3>Journal</h3>
        {
          this.state.days && this.state.days.map((day, index) => <Card key={index} day={day} />)
        }
      </div>
    )
  }
}

export default Journal;
