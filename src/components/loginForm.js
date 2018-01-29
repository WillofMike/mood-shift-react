import React from 'react';
import styled from 'styled-components';
import Header from './header'
import Footer from './footer'
import LoginHeader from './loginHeader'


const Wrapper = styled.div`
  display: grid;
  height: 100%;
  text-align: center;
  padding-left: 25%;
  padding-right: 25%;
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`


const Form = (props) =>
  <div className="container">
    <LoginHeader />
      <Title className="header">{props.title}</Title>
    <Wrapper>
    <input
        className="form-control"
        id="login-email"
        placeholder="Email"
        type="text"
        value={props.email}
        onChange={props.setEmail}
      />
    <input
        className="form-control"
        id="login-password"
        placeholder="Password"
        type="password"
        value={props.password}
        onChange={props.setPassword}
      />
    <br/>
  <button onClick={props.submit} className="btn btn default">Signup</button>
  </Wrapper>
  </div>;

export default Form
