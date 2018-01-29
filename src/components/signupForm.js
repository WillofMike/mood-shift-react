import React from 'react';
import styled from 'styled-components';
import Header from './header'
import Footer from './footer'

const Wrapper = styled.div`
  height: 100%;
  text-align: center;
  padding-left: 30.25%;
  padding-right: 30.25%;
`


const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
`

const SignupForm = (props) =>
  <Wrapper>
      <Title className="header">{props.title}</Title>
    <input
        className="form-control"
        id="signup-email"
        placeholder="Email"
        type="text"
        value={props.email}
        onChange={props.setEmail}
      />
    <input
        className="form-control"
        id="signup-password"
        placeholder="Password"
        type="password"
        value={props.password}
        onChange={props.setPassword}
      />
    <br/>
  <button onClick={props.submit} className="btn btn default">Login</button>
</Wrapper>


export default SignupForm
