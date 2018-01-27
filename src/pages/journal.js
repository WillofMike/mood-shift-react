import React from 'react';
import { render } from "react-dom";
import styled from 'styled-components';
import Card from '../components/card'
import Header from '../components/header'
import Single from '../components/single'
import {Link} from 'react-router-dom'
import fakeData from '../utility/fakeData'


const Journal = (props) =>
  <div>
    <Header logout={props.logout}/>
    <h3>Journal</h3>
    {
      props.days.map((day, index) => <Card key={index} day={day} />)
    }
  </div>


export default Journal;
