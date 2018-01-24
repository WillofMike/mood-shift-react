import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Form from '../components/loginForm'
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
      </div>
    )
  }

}

export default Login;
