import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const LoginHead = styled.header`
  background-color: lightblue;
  padding: 25px;
  border: 1px solid brown;
  width: 100%
`

const LoginHeader = (props) =>
  <div>
    <LoginHead>
      <h1>Mood-Shift MS</h1>
    </LoginHead>
  </div>

  export default LoginHeader;
