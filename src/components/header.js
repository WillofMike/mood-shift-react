import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Head = styled.header`
  background-color: lightblue;
  border: 1px solid brown;
`

const Header = (props) =>
  <div>
    <Head>
        <Link to='/dashboard' style={{ textDecoration: 'none' }}><h1>Mood Shift</h1></Link>
        <Link to='/journal'><button onClick={props.journal}>Journal</button></Link>
        <Link to='/data'><button onClick={props.data}>Graphs</button></Link>
        <button onClick={props.logout}>Logout</button>
    </Head>
  </div>

  export default Header;
