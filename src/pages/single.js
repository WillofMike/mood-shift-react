import React from 'react';
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import styled from 'styled-components';
import SingleEntry from '../components/single'
import Header from '../components/header'
import Footer from '../components/footer'



const Single = (props) =>
<div>
  <Header />
  <button onClick={props.logout}>Logout</button>
    <h1>Mood Shift</h1>
    <h3>This is how you felt that day...</h3>
  <SingleEntry />
  <Footer />
</div>

export default Single;
