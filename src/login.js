import React from 'react';
import axios from 'axios';
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
  header {
    font-size: 26px;
    grid-area: h;
  }
  h1 {
    font-size: 16px;
    font-weight: bold;
    grid-area: o;
  }
  button {
    font-size: 1em;
    border-radius: 3px;
    width: auto;
    grid-area: b;
  }
  #email {
    height: 20px;
    width: auto;
    grid-area: e;
  }
  #password {
    height: 20px;
    width: auto;
    grid-area: p;
  }
  footer {
    grid-area: f;
    padding-top: 200px;
  }
`;



const Form = (props) =>
  <Wrapper className="container">
    <header>Mood Shift</header>
    <h1 className="header">{props.title}</h1>
      <input
        id="email"
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

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      signupEmail: '',
      signupPassword: '',
      loginEmail: '',
      loginPassword: '',
    };
  }

  setSignupEmail = (evt) => this.setState({ signupEmail: evt.target.value })

  setSignupPassword = (evt) => this.setState({ signupPassword: evt.target.value })

  setLoginEmail = (evt) => this.setState({ loginEmail: evt.target.value })

  setLoginPassword = (evt) => this.setState({ loginPassword: evt.target.value })

  submitSignup = () => {
    const valid = this.state.signupEmail.length > 0
      && this.state.signupPassword.length > 0;

    const data = {
      email: this.state.signupEmail,
      password: this.state.signupPassword,
    };

    if (valid) {
      axios.post('https://mood-shift-api.herokuapp.com/auth/signup', data)
        .then((res) => {
          const token = res.data.token.token;
          localStorage.setItem('mood_app_token', token);
          this.props.setToken(token);
        })
        .catch((error) => console.log('Error', error));
    }
  }

  submitLogin = () => {
    const valid = this.state.loginEmail.length > 0
      && this.state.loginPassword.length > 0;

    const data = {
      email: this.state.loginEmail,
      password: this.state.loginPassword,
    };
    if (valid) {
      axios.post('https://mood-shift-api.herokuapp.com/auth/login', data)
      .then((res) => {
        const token = res.data.token.token;
        localStorage.setItem('mood_app_token', token);
        this.props.setToken(token);
      })
      .catch((error) => console.log('Error', error));
    }
  }

  render() {
    return (
      <div>
        <Form
          {...this.state}
          title="Signup"
          setEmail={this.setSignupEmail}
          setPassword={this.setSignupPassword}
          submit={this.submitSignup}
        />
        <Form
          {...this.state}
          title="Login"
          setEmail={this.setLoginEmail}
          setPassword={this.setLoginPassword}
          submit={this.submitLogin}
        />

        {/* <input
            placeholder="Email"
            value={this.state.email}
            onChange={this.setUserName}
          />
          <input
            placeholder="Password"
            value={this.state.password}
            onChange={this.setPassword}
          />
        <button onClick={this.submitSignup}>Submit</button> */}
      </div>
    )
  }

}

export default Login;
