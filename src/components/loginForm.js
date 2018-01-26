import React from 'react';
import styled from 'styled-components';
import Header from './header'
import Footer from './footer'
import LoginHeader from './loginHeader'

const Wrapper = styled.div`
  z-index: 0;
  margin-top: 200%;
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  grid-column: 1/6
`

const Button = styled.button`
  font-size: 1em;
  border-radius: 3px;
  width: auto;
`


const Form = (props) =>
  <div className="container">
    <LoginHeader />
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
  </div>;

export default Form
