import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import moods from '../images/moods.png'

const Title = styled.h1`
  text-align:center;
  font-size: 60px;
  color: #FF6300;
  margin-top: -65px;
  font-family: 'Montserrat', sans-serif;
  border-bottom: solid black 2px;
`

const Image = styled.img`
  width: 25%;
  height: 25%;
`

const Header = (props) =>
  <div>
    <div>
        <Link to='/dashboard' style={{ textDecoration: 'none' }}><Image src={moods}/></Link>
        <Link to='/dashboard' style={{ textDecoration: 'none' }}><Title>Shift Your Attitude</Title></Link>
        <Link to='/journal'><button onClick={props.journal} className="btn btn-default">Journal</button></Link>
        <button onClick={props.logout} className="btn btn-default">Logout</button>
    </div>
  </div>

  export default Header;
