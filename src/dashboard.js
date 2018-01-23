import React from 'react';
import styled from 'styled-components';
import angry from './images/angry.png'
import happy from './images/happy.png'
import sad from './images/sad.png'
import anxious from './images/anxious.png'

const Form = (props) =>
<div>
  <header><h1>Mood Shift</h1></header>
    <h3>How are you feeling?</h3>
    <img src={happy}></img>
    <h5>Happy</h5>
    <img src={angry}></img>
    <h5>Angry</h5>
    <img src={sad}></img>
    <h5>Sad</h5>
    <img src={anxious}></img>
    <h5>Anxious</h5>
  <footer>Copyright Mood-Shift</footer>
</div>


class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      journal: '',
      graphs: '',
    };
  }

  setJournal = (evt) => this.setState({ journal:evt.target.value })




  render() {
    return (
      <div>
        <button onClick={this.props.logout}>Logout</button>
        <button onClick={this.props.logout}>Behavior Journal</button>
        <button onClick={this.props.logout}>Graphs</button>
        <Form />
      <br/>

      </div>
    );
  }
}

export default Dashboard;
