import React from 'react';
import { render } from "react-dom";
import styled from 'styled-components';
import Card from '../components/card'
import Header from '../components/header'
import Single from '../components/single'
import {Link} from 'react-router-dom'

const titles = [
  "One",
  "Two",
  "Three",
]

const Journal = (props) =>
  <div>
    <Header />
    <button onClick={props.logout}>Logout</button>
    <h3>Journal</h3>
    {
      titles.map((title, index) => <Card key={index} title={title} />)
    }
  </div>

class CardLink extends React.Component{
  constructor(){
    super();
    this.state = {
      selectedCard: ''
    }
  }
  setSelectedCard = (value) => {
    this.setState({ selectedCard: value })
  }
  submitCard = () => {
    const valid = this.state.selectedCard.length >1
    console.log('is this card valid?', valid);

    const data = {
      card: this.state.selectedCard
    }
  }
  render() {
    if (!this.state.selectedCard) {
    return(
      <Journal />
    )}
    return(
      <Single />
    )
  }
}

export default Journal;
