import React from 'react';
import axios from 'axios';

const Form = (props) =>
  <div>
    <div>{props.title}</div>
      <input
        placeholder="Email"
        type="text"
        value={props.email}
        onChange={props.setEmail}
      />
      <input
        placeholder="Password"
        type="password"
        value={props.password}
        onChange={props.setPassword}
      />
    <button onClick={props.submit}>Submit</button>
  </div>;

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
