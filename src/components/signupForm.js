import React from 'react';
import styled from 'styled-components';
import Header from './header'
import Footer from './footer'

const Wrapper = styled.div`
  background: lightgrey;
  height: 100%;
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
`


const SignupForm = (props) =>
  <div>
      <Title className="header">{props.title}</Title>
    <input
        id={props.email}
        placeholder="Email"
        type="text"
        value={props.email}
        onChange={props.setEmail}
      />
    <input
        id="password"
        placeholder="Password"
        type="password"
        value={props.password}
        onChange={props.setPassword}
      />
    <br/>
  <button onClick={props.submit}>Submit</button>
</div>


export default SignupForm
