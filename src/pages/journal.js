import React from 'react';
import { render } from "react-dom";
import styled from 'styled-components';
import Card from '../components/card'
import Header from '../components/header'
import {Link} from 'react-router-dom'
import fakeData from '../utility/fakeData'
import axios from 'axios'

const Wrapper = styled.div`
  display: grid;
   grid: repeat(4, 2fr) / auto-flow 10fr;
   grid-gap: 5px;
   text-align: center;
   font-family: 'Montserrat', sans-serif;
   margin: 20px
`
const Title = styled.h1`
  font-size: 60px;
  color: #FF6300;
  font-family: 'Montserrat', sans-serif;
  margin: 20px;  
`

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
      <Title>Journal</Title>
      <Wrapper>

        {
          this.state.days && this.state.days.map((day, index) => <Card key={index} day={day} />)
        }
      </Wrapper>
      </div>
    )
  }
}

export default Journal;
