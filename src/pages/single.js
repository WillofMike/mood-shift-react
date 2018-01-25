import React from 'react';
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import styled from 'styled-components';
import SingleEntry from '../components/single'

const Single = (props) =>
<div>
  <header>
    <h1>Mood Shift</h1>
    {/* <button onClick={this.props.logout}>Graphs</button> */}
    {/* <button onClick={this.props.logout}>Logout</button> */}
  </header>

    <h3>This is how you felt that day...</h3>
  <SingleEntry />
</div>

export default Single;
