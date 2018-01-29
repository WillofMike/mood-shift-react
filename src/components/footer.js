import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import moods from '../images/moods.png'


const Title = styled.div`
    text-align: center;
    margin-top: 100px;
    margin-bottom: -65px;
    font-family: 'Montserrat', sans-serif;
    color: #FF6300;
    font-size: 20px;
    padding-left: 15%;
    padding-right: 15%;
`

const Image = styled.img`
  width: 5%;
  height: 5%;
`

const Footer = (props) =>
  <div>
    <footer>
      <Title>
      <Image src={moods}  />
    <h3>Mood-Shift 2018</h3>
</Title>
    </footer>
  </div>


export default Footer;
