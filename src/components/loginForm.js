import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: lightgrey;
  height: 100%;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 100px;
  grid-template-areas:
      "h . . . ."
      ". o . . ."
      ". e p . ."
      ". b . . ."
      ". . f . .";
`

const Header = styled.header`
  font-size: 26px;
  grid-area: h;
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  grid-area: o;
`

const Button = styled.button`
  font-size: 1em;
  border-radius: 3px;
  width: auto;
  grid-area: b;
`

const Footer = styled.div`
  grid-area: f;
  padding-top: 200px;
`


const Form = (props) =>
  <Wrapper className="container">
    <Header>Mood Shift</Header>
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
  <footer>Copyright Mood-Shift</footer>
</Wrapper>;

export default Form
