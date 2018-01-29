import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import moods from '../images/moods.png'

const Image = styled.img`
  width: 25%;
  height: 25%;
`

const Title = styled.h1`
  text-align:center;
  font-size: 60px;
  color: #FF6300;
  margin-top: -65px;
  font-family: 'Montserrat', sans-serif;
  border-bottom: solid black 2px;
  padding-left: 120px;
`

const LoginHeader = (props) =>
<div>
  <div>
      <Image src={moods}/>
      <Title>Shift Your Attitude</Title>
  </div>
</div>


  export default LoginHeader;
