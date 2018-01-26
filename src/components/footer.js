import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Foot = styled.div`
    background-color: lightblue;
    padding-top: 25px;
    text-align: center;
    border: 1px solid brown;
`


const Footer = (props) =>
  <div>
    <Foot>
      2018 Mood Shift
    </Foot>
  </div>


export default Footer;
